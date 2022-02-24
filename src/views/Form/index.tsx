import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { useSelector, useDispatch } from 'react-redux';
import BasicButton from '../../components/BasicButton';

function Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { setActivePage, setDonePage } = userSlice.actions;

  useEffect(() => {
    // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
    dispatch(setDonePage({ done: false, page: 1 }));
    dispatch(setActivePage(1));
  }, []);

  const handleNextPage = () => {
    dispatch(setDonePage({ done: true, page: 1 }));
    navigate('/feedback');
  };

  return (
    <div>
      <h1>Hola desde form</h1>

      <BasicButton
        text={'Siguiente'}
        onClick={() => handleNextPage()}
        backgroundColor="#002B45"
        color="white"
      />
    </div>
  );
}

export default Form;
