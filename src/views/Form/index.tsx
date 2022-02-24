import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { useSelector, useDispatch } from 'react-redux';
import BasicButton from '../../components/BasicButton';
import ContentContainer from '../../components/ContentContainer';
import Text from '../../components/Text';
import TextCreatePassword from '../../components/TextCreatePassword';
import BottomButtons from '../../components/BottomButtons';
import { Formik, Form as FormFormik } from 'formik';
import FormSchema from './validator';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import InputSimple from '../../components/InputSimple';

function Form() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { setActivePage, setDonePage, setPassword } = userSlice.actions;

  useEffect(() => {
    // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
    dispatch(setDonePage({ done: false, page: 1 }));
    dispatch(setActivePage(1));
  }, []);

  const handleNextPage = () => {
    dispatch(setDonePage({ done: true, page: 1 }));
    navigate('/feedback');
  };

  return (
    <div style={{ flex: 1 }}>
      <TextCreatePassword />

      <Formik
        initialValues={{
          password: '',
          repeatPassword: '',
          track: '',
        }}
        onSubmit={(values) => {
          const { password, repeatPassword, track } = values;
          dispatch(setPassword({ password, repeatPassword, track }));
          handleNextPage();
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
          repeatPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          track: Yup.string().optional(),
        })}
      >
        {(formik) => (
          <FormFormik>
            <>
              <ContentContainer>
                <InputSimple
                  label="Password"
                  name="password"
                  placeholder="Escribe tu pass"
                  type="password"
                />
                <InputSimple
                  label="Repeat your Password"
                  name="repeatPassword"
                  placeholder="Repite tu pass"
                  type="password"
                />

                <InputSimple
                  label="Crea tu pista para recordar tu contraseña (opcional)"
                  name="track"
                  placeholder="Introduce tu pista"
                  type="text"
                />
              </ContentContainer>
              <BottomButtons>
                <BasicButton
                  text={'Cancel'}
                  onClick={() => handleNextPage()}
                  backgroundColor="transparent"
                  color="black"
                />
                <BasicButton
                  text={'Siguiente'}
                  type={'submit'}
                  backgroundColor="#002B45"
                  color="white"
                />
              </BottomButtons>
            </>
          </FormFormik>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit} noValidate>
        <ContentContainer>
          <InputSimple
            label="Email Address"
            name="email"
            placeholder="jonh@google.com"
            type="email"
          />
        </ContentContainer>
        <BottomButtons>
          <BasicButton
            text={'Cancel'}
            onClick={() => handleNextPage()}
            backgroundColor="transparent"
            color="black"
          />
          <BasicButton
            text={'Siguiente'}
            type={'submit'}
            backgroundColor="#002B45"
            color="white"
            //  disabled={!policyChecked}
          />
        </BottomButtons>
      </form> */}
    </div>
  );
}

export default Form;
