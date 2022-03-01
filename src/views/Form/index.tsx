import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  setActivePage,
  setDonePage,
  setPassword,
  cleanData,
} from '../../store/user';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import BasicButton from '../../components/BasicButton';
import ContentContainer from '../../components/ContentContainer';
import Text from '../../components/Text';
import TextCreatePassword from '../../components/TextCreatePassword';
import BottomButtons from '../../components/BottomButtons';
import { Form as FormFormik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Container } from '../../components/FlexContainer/styles';
import { BiChevronRight } from 'react-icons/bi';
import colors from '../../styles/colors';
import FormCursom from '../../components/FormCursom';
import { FormikPropss } from './types';
import {
  FirstInfo,
  initialValues,
  PasswordInputs,
  TrackInput,
} from '../../components/Form/';

const MAX_TRACK = 60;

function Form() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { policyChecked, responseApi } = useSelector(
    (state: RootStateOrAny) => state.user
  );

  // When enter to page, check if come from feedback, if true set this page active and if not reset form and navigate to start page
  useEffect(() => {
    if (policyChecked && responseApi !== 200) {
      // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
      dispatch(setDonePage({ done: false, page: 1 }));
      dispatch(setActivePage(1));
    } else {
      handleRestartForm();
    }
  }, []);

  // Reset redux data to inicial and navigate to start page
  const handleRestartForm = () => {
    dispatch(cleanData());
    navigate('/');
  };

  // Set the page state in done and change to 'feedback'
  const handleNextPage = () => {
    dispatch(setDonePage({ done: true, page: 1 }));
    navigate('/feedback');
  };

  // Get data from formik and set it in state, then change the page
  const handleOnSumbit = (values: FormikValues) => {
    const { password, repeatPassword, track } = values;
    dispatch(setPassword({ password, repeatPassword, track }));
    handleNextPage();
  };

  // Yup validate inputs data
  const schema = Yup.object({
    password: Yup.string()
      .required(t('form.no_password'))
      .min(8, t('form.password_short'))
      .max(24, t('form.password_max'))
      .matches(/(?=.*[A-Z])(?=.*[\d])/, t('form.password_num_upper')),
    repeatPassword: Yup.string()
      .required(t('form.repeat_required'))
      .oneOf([Yup.ref('password'), null], t('form.password_match')),
    track: Yup.string().optional().max(MAX_TRACK, t('form.track_max')),
  });

  return (
    <Container>
      <TextCreatePassword text={t('general.create_password')} />

      <FormCursom
        initialValues={initialValues}
        onSubmit={handleOnSumbit}
        validationSchema={schema}
      >
        {(formik: FormikPropss) => (
          <FormFormik>
            <ContentContainer>
              <FirstInfo />
              <PasswordInputs />
              <Text>{t('form.secound_step')}</Text>
              <TrackInput track={formik.values.track} />
            </ContentContainer>

            <BottomButtons>
              <BasicButton
                disabled={!(formik.isValid && formik.dirty)}
                text={t('general.next')}
                type={'submit'}
                backgroundColor={colors.secondary_color}
                color="white"
                icon={<BiChevronRight size={20} color={'white'} />}
              />
              <BasicButton
                text={t('general.cancel')}
                onClick={() => handleRestartForm()}
                backgroundColor="transparent"
                color="black"
              />
            </BottomButtons>
          </FormFormik>
        )}
      </FormCursom>
    </Container>
  );
}

export default Form;
