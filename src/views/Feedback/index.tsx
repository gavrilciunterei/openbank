import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { useSelector, useDispatch } from 'react-redux';
import BasicButton from '../../components/BasicButton';

function Feedback() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { setActivePage } = userSlice.actions;

  useEffect(() => {
    // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
    dispatch(setActivePage(2));
  }, []);

  return (
    <div>
      <h1>Hola desde feedback</h1>
    </div>
  );
}

export default Feedback;
