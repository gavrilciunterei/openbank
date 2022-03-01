import React from 'react';
import ImageCursom from '../ImageCursom';
import Text from '../Text';
import { ContainerFeedback, ContainerText } from './styles';
import { useTranslation } from 'react-i18next';
import ok from '../../assets/img/ok.png';
import alert from '../../assets/img/alert.png';

export function ContentApiOk() {
  const { t } = useTranslation();

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

export function ContentApiAlert() {
  const { t } = useTranslation();

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
}
