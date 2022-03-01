import React from 'react';
import { TextContainer, ImageContainer } from './styles';
import ImageCursom from '../../components/ImageCursom';
import img1 from '../../assets/img/group.svg';
import img2 from '../../assets/img/group-3.svg';
import Text from '../../components/Text';
import { useTranslation } from 'react-i18next';

export function FirstInfo() {
  const { t } = useTranslation();

  return (
    <TextContainer flexDirectionMin="column" flexDirectionMax="row">
      <ImageContainer>
        <ImageCursom src={img1} alt="img1" maxHeight="150px" maxWidth="150px" />
        <Text maxWidth="300px">
          {t('product_information.text_save_password')}
        </Text>
      </ImageContainer>
      <ImageContainer>
        <ImageCursom src={img2} alt="img2" maxHeight="150px" maxWidth="150px" />
        <Text maxWidth="300px">
          {t('product_information.text_master_password')}
        </Text>
      </ImageContainer>
    </TextContainer>
  );
}

export function SecoundInfo() {
  const { t } = useTranslation();

  return (
    <>
      <TextContainer flexDirectionMin="column" flexDirectionMax="column">
        <Text fontWeight={500} size="18px">
          {t('product_information.how_does_word')}
        </Text>
        <Text> {t('product_information.text_first_place')}</Text>
      </TextContainer>

      <TextContainer flexDirectionMin="column" flexDirectionMax="column">
        <Text fontWeight={500} size="18px">
          {t('product_information.what_data_save')}
        </Text>
        <Text> {t('product_information.text_what_data_save')}</Text>
      </TextContainer>
    </>
  );
}
