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
import InputSimple from '../../components/InputSimple';
import { TwoInputs, Container } from './styles';
import { BiChevronRight } from 'react-icons/bi';
import colors from '../../styles/colors';
import FormCursom from '../../components/FormCursom';
import { FormikPropss } from './types';

const MAX_TRACK = 60;

function Form() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { policyChecked, responseApi } = useSelector(
    (state: RootStateOrAny) => state.user
  );

  useEffect(() => {
    if (policyChecked && responseApi !== 200) {
      // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
      dispatch(setDonePage({ done: false, page: 1 }));
      dispatch(setActivePage(1));
    } else {
      handleRestartForm();
    }
  }, []);

  const handleNextPage = () => {
    dispatch(setDonePage({ done: true, page: 1 }));
    navigate('/feedback');
  };

  const handleRestartForm = () => {
    dispatch(cleanData());
    navigate('/');
  };

  const handleOnSumbit = (values: FormikValues) => {
    const { password, repeatPassword, track } = values;
    dispatch(setPassword({ password, repeatPassword, track }));
    handleNextPage();
  };

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

  const initialValues = {
    password: '',
    repeatPassword: '',
    track: '',
  };

  return (
    <Container>
      <TextCreatePassword />

      <FormCursom
        initialValues={initialValues}
        onSubmit={handleOnSumbit}
        validationSchema={schema}
      >
        {(formik: FormikPropss) => (
          <FormFormik>
            <ContentContainer>
              <Text>
                {t('form.first_step')} <br /> {t('form.first_step_secound')}
              </Text>
              <TwoInputs>
                <InputSimple
                  label={t('form.create_master_pass')}
                  name="password"
                  placeholder={t('form.write_password')}
                  type="password"
                  password={true}
                />
                <InputSimple
                  label={t('form.repeat_master_password')}
                  name="repeatPassword"
                  placeholder={t('form.repeat_password')}
                  type="password"
                />
              </TwoInputs>

              <Text>{t('form.secound_step')}</Text>

              <InputSimple
                label={t('form.create_track')}
                name="track"
                placeholder={t('form.insert_trak')}
                type="text"
                subText={
                  <Text size="15px">
                    {formik.values.track.length + '/' + MAX_TRACK}
                  </Text>
                }
              />
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
