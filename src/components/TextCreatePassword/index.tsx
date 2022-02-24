import React from 'react';
import Text from '../Text';
import { useTranslation } from 'react-i18next';
import { BottomLine } from './styles';
import ContentContainer from '../ContentContainer';
function TextCreatePassword() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <Text fontWeight={500} size="30px">
        {t('product_information.create_password')}
      </Text>
      <BottomLine />
    </ContentContainer>
  );
}

export default TextCreatePassword;
