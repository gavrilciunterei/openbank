import React, { useState } from 'react';
import {
  DropdownContainer,
  Container,
  ButtonParent,
  ButtonDiv,
  LangButton,
} from './styles';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { BiWorld, BiChevronDown } from 'react-icons/bi';
function Dropdown() {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };

  return (
    <Container>
      <ButtonParent onClick={() => setOpenModal(!openModal)}>
        <ButtonDiv>
          <BiWorld size={20} />
          {i18next.language}
          <BiChevronDown size={20} />
        </ButtonDiv>
      </ButtonParent>
      {openModal && (
        <DropdownContainer>
          <LangButton onClick={() => handleChangeLanguage('es')}>
            🇪🇸{t('general.es')}
          </LangButton>
          <LangButton onClick={() => handleChangeLanguage('en')}>
            🇺🇸{t('general.en')}
          </LangButton>
        </DropdownContainer>
      )}
    </Container>
  );
}

export default Dropdown;
