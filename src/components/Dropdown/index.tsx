import React, { useEffect, useRef, useState } from 'react';
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

  function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenModal(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <ButtonParent onClick={() => setOpenModal(!openModal)}>
        <ButtonDiv>
          <BiWorld size={20} color="black" />
          {i18next.language}
          <BiChevronDown size={20} color="black" />
        </ButtonDiv>
      </ButtonParent>
      {openModal && (
        <DropdownContainer>
          <LangButton onClick={() => handleChangeLanguage('es')}>
            πͺπΈ
            <p>{t('general.es')}</p>
          </LangButton>
          <LangButton onClick={() => handleChangeLanguage('en')}>
            πΊπΈ
            <p>{t('general.en')}</p>
          </LangButton>
        </DropdownContainer>
      )}
    </Container>
  );
}

export default Dropdown;
