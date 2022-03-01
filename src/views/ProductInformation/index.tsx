import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BasicButton from '../../components/BasicButton';
import { useNavigate } from 'react-router-dom';
import { setActivePage, setDonePage, setCheckPolicy } from '../../store/user';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import ContentContainer from '../../components/ContentContainer';
import BottomButtons from '../../components/BottomButtons';
import TextCreatePassword from '../../components/TextCreatePassword';
import { BiChevronRight } from 'react-icons/bi';
import InputCheckbox from '../../components/InputCheckbox';
import colors from '../../styles/colors';
import { FirstInfo, SecoundInfo } from '../../components/ProductInformation';
import { Container } from '../../components/FlexContainer/styles';

function ProductInformation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { policyChecked } = useSelector((state: RootStateOrAny) => state.user);

  // Execute one time and update state to show active page 0 and done to false
  useEffect(() => {
    dispatch(setDonePage({ done: false, page: 0 }));
    dispatch(setActivePage(0));
  }, []);

  // Called when press next button, Update state and set the first page done then navigate to 'form'
  const handleNextPage = () => {
    dispatch(setDonePage({ done: true, page: 0 }));
    navigate('/form');
  };

  // Update state and set policy to true or false
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckPolicy(event.target.checked));
  };

  return (
    <Container>
      <TextCreatePassword text={t('general.create_password')} />
      <ContentContainer>
        <FirstInfo />
        <SecoundInfo />
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
    </Container>
  );
}

export default ProductInformation;
