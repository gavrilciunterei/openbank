import React from 'react';
import Text from '../../components/Text';
import { useTranslation } from 'react-i18next';
import { TwoInputs } from './styles';
import InputSimple from '../InputSimple';
import { FormikPropss } from './types';
const MAX_TRACK = 60;
export function FirstInfo() {
  const { t } = useTranslation();

  return (
    <Text>
      {t('form.first_step')} <br /> {t('form.first_step_secound')}
    </Text>
  );
}

export function PasswordInputs() {
  const { t } = useTranslation();

  return (
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
  );
}

export function TrackInput({ track }: FormikPropss) {
  const { t } = useTranslation();

  return (
    <InputSimple
      label={t('form.create_track')}
      name="track"
      placeholder={t('form.insert_trak')}
      type="text"
      subText={<Text size="15px">{track.length + '/' + MAX_TRACK}</Text>}
    />
  );
}

export const initialValues = {
  password: '',
  repeatPassword: '',
  track: '',
};
