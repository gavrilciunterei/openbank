import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';
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

function Feedback() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { password, repeatPassword, track, policyChecked, responseApi } =
    useSelector((state: RootStateOrAny) => state.user);

  const { setActivePage, setResponseApi, setDonePage, cleanData } =
    userSlice.actions;

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
              ¡Tu Password Manager ya está creado!
            </Text>
            <Text fontWeight={200} size="15px">
              Felicidades, tu Password Manager fue creado con éxito y ya puedes
              acceder al panel de administración.
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
            Ha habido un error
          </Text>
          <Text fontWeight={200} size="15px">
            No hemos podido modificar tu Contraseña Maestra. Inténtalo más
            tarde.
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

  return (
    <div style={{ flex: 1 }}>
      <ContentContainer>
        {!responseApi ? <LinearProgress /> : getContentApi()}
      </ContentContainer>
      {responseApi && (
        <BottomButtons>
          <BasicButton
            text={
              responseApi === 200 ? 'Acceder ⟩' : 'Volver a Password Manager'
            }
            onClick={() =>
              responseApi === 200 ? handleRestartForm() : navigate(-1)
            }
            backgroundColor="transparent"
            color="black"
          />
        </BottomButtons>
      )}
    </div>
  );
}

export default Feedback;
