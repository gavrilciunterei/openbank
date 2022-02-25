import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BasicButton from '../../components/BasicButton';
import { TextContainer, ImageContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import img1 from '../../assets/img/group.svg';
import img2 from '../../assets/img/group-3.svg';
import Text from '../../components/Text';
import ContentContainer from '../../components/ContentContainer';
import BottomButtons from '../../components/BottomButtons';
import TextCreatePassword from '../../components/TextCreatePassword';
import ImageCursom from '../../components/ImageCursom';
import { BiChevronRight } from 'react-icons/bi';
import InputCheckbox from '../../components/InputCheckbox';
import colors from '../../styles/colors';
function ProductInformation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setActivePage, setDonePage, setCheckPolicy } = userSlice.actions;
  const { policyChecked } = useSelector((state: RootStateOrAny) => state.user);

  useEffect(() => {
    // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
    dispatch(setDonePage({ done: false, page: 0 }));
    dispatch(setActivePage(0));
  }, []);

  const handleNextPage = () => {
    dispatch(setDonePage({ done: true, page: 0 }));
    navigate('/form');
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckPolicy(event.target.checked));
  };

  return (
    <div style={{ flex: 1 }}>
      <TextCreatePassword />
      <ContentContainer>
        <TextContainer flexDirectionMin="column" flexDirectionMax="row">
          <ImageContainer>
            <ImageCursom
              src={img1}
              alt="img1"
              maxHeight="150px"
              maxWidth="150px"
            />
            <Text maxWidth="300px">
              {t('product_information.text_save_password')}
            </Text>
          </ImageContainer>
          <ImageContainer>
            <ImageCursom
              src={img2}
              alt="img2"
              maxHeight="150px"
              maxWidth="150px"
            />
            <Text maxWidth="300px">
              {t('product_information.text_master_password')}
            </Text>
          </ImageContainer>
        </TextContainer>

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

        <InputCheckbox
          name="isGoing"
          checked={policyChecked}
          handleOnChange={handleOnChange}
          text={t<string>('product_information.data_protection_policy')}
        />
      </ContentContainer>
      <BottomButtons>
        <BasicButton
          text={t('general.next')}
          onClick={() => handleNextPage()}
          backgroundColor={colors.secondary_color}
          color="white"
          disabled={!policyChecked}
          icon={<BiChevronRight size={20} />}
        />
        <BasicButton
          text={t('general.cancel')}
          onClick={() => console.log('Aun nada!')}
          backgroundColor="transparent"
          color="black"
        />
      </BottomButtons>
    </div>
  );
}

export default ProductInformation;
