import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import ContentContainer from '../../components/ContentContainer';
import { submitForm } from '../../services/api';
import { ContainerFeedback, ContainerText } from './styles';
import ok from '../../assets/img/ok.png';
import alert from '../../assets/img/alert.png';
import Text from '../../components/Text';
import ImageCursom from '../../components/ImageCursom';
import BottomButtons from '../../components/BottomButtons';
import BasicButton from '../../components/BasicButton';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import Spinner from '../../components/Spinner';
import colors from '../../styles/colors';

function Feedback() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { password, repeatPassword, track, policyChecked, responseApi } =
    useSelector((state: RootStateOrAny) => state.user);

  const {
    setActivePage,
    setResponseApi,
    setDonePage,
    cleanData,
    resetPassword,
  } = userSlice.actions;

  useEffect(() => {
    if (password && repeatPassword && policyChecked) {
      dispatch(setActivePage(2));
      submitForm(password, repeatPassword, track)
        .then((res) => dispatch(setResponseApi(res.status)))
        .catch((e) => dispatch(setResponseApi(e.status)));
    } else {
      navigate('/');
    }
  }, []);

  const getContentApi = () => {
    if (responseApi === 200) {
      return (
        <ContainerFeedback>
          <ImageCursom src={ok} alt="ok" maxHeight="49px" maxWidth="45px" />
          <ContainerText>
            <Text fontWeight={600} size="20px">
              {t('feedback.ok')}
            </Text>
            <Text fontWeight={200} size="15px">
              {t('feedback.ok_message')}
            </Text>
          </ContainerText>
        </ContainerFeedback>
      );
    }
    return (
      <ContainerFeedback>
        <ImageCursom src={alert} alt="alert" maxHeight="49px" maxWidth="45px" />
        <ContainerText>
          <Text fontWeight={600} size="20px">
            {t('feedback.error')}
          </Text>
          <Text fontWeight={200} size="15px">
            {t('feedback.error_message')}
          </Text>
        </ContainerText>
      </ContainerFeedback>
    );
  };

  useEffect(() => {
    if (responseApi && responseApi === 200) {
      dispatch(setDonePage({ done: true, page: 2 }));
    }
  }, [dispatch, responseApi]);

  const handleRestartForm = () => {
    dispatch(cleanData());
    navigate('/');
  };

  const handleGoBack = () => {
    dispatch(resetPassword());
    navigate(-1);
  };

  return (
    <div style={{ flex: 1 }}>
      <ContentContainer>
        {!responseApi ? <Spinner /> : getContentApi()}
      </ContentContainer>
      {responseApi && (
        <BottomButtons>
          <BasicButton
            text={
              responseApi === 200
                ? t('feedback.access')
                : t('feedback.error_goback')
            }
            onClick={() =>
              responseApi === 200 ? handleRestartForm() : handleGoBack()
            }
            backgroundColor="transparent"
            color={colors.primary_color}
            icon={<BiChevronRight size={20} color={colors.primary_color} />}
          />
        </BottomButtons>
      )}
    </div>
  );
}

export default Feedback;
