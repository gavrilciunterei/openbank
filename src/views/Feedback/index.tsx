import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  setActivePage,
  setResponseApi,
  setDonePage,
  cleanData,
  resetPassword,
} from '../../store/user';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import ContentContainer from '../../components/ContentContainer';
import { submitForm } from '../../services/api';
import { Container } from '../../components/FlexContainer/styles';
import BottomButtons from '../../components/BottomButtons';
import BasicButton from '../../components/BasicButton';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import Spinner from '../../components/Spinner';
import colors from '../../styles/colors';
import { ContentApiAlert, ContentApiOk } from '../../components/Feedback';

function Feedback() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { password, repeatPassword, track, policyChecked, responseApi } =
    useSelector((state: RootStateOrAny) => state.user);

  // Check if have password, repeatPassword and policyChecked in redux state, if have call the api and if not go to the begginigng
  useEffect(() => {
    if (password && repeatPassword && policyChecked) {
      dispatch(setActivePage(2));
      submitForm(password, repeatPassword, track)
        .then((res: any) => dispatch(setResponseApi(res.status)))
        .catch((e) => dispatch(setResponseApi(e.status)));
    } else {
      navigate('/');
    }
  }, [dispatch, password, repeatPassword, policyChecked, track]);

  // Check if have api response, is is 200 set the steps dots like done
  useEffect(() => {
    if (responseApi && responseApi === 200) {
      dispatch(setDonePage({ done: true, page: 2 }));
    }
  }, [dispatch, responseApi]);

  // Restart redux data and go to beggining
  const handleRestartForm = () => {
    dispatch(cleanData());
    navigate('/');
  };

  // Restart password state and go one page back
  const handleGoBack = () => {
    dispatch(resetPassword());
    navigate(-1);
  };

  // Check api response and get content
  const getContentApi = () => {
    if (responseApi === 200) {
      return <ContentApiOk />;
    }
    return <ContentApiAlert />;
  };

  return (
    <Container>
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
    </Container>
  );
}

export default Feedback;
