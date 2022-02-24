import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice from '../../data/user';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';
import ContentContainer from '../../components/ContentContainer';
import { submitForm } from '../../services/api';
function Feedback() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { password, repeatPassword, track, policyChecked, responseApi } =
    useSelector((state: RootStateOrAny) => state.user);

  const { setActivePage, setResponseApi, setDonePage } = userSlice.actions;

  useEffect(() => {
    // No olvidar de limpiar estados(por si le da a la flecha del navegador adelante y atras no le salga que ok y le lleve a home)
    dispatch(setActivePage(2));
  }, []);

  useEffect(() => {
    submitForm(password, repeatPassword, track)
      .then((res) => dispatch(setResponseApi(res.status)))
      .catch((e) => dispatch(setResponseApi(e.status)));
  }, []);

  const getContentApi = () => {
    if (responseApi === 200) {
      return <>Tu pass está bien</>;
    }
    return <>Tu pass está mal</>;
  };

  useEffect(() => {
    if (responseApi && responseApi === 200) {
      dispatch(setDonePage({ done: true, page: 2 }));
    }
  }, [dispatch, responseApi]);

  return (
    <div style={{ flex: 1 }}>
      <ContentContainer>
        {!responseApi ? <LinearProgress /> : getContentApi()}
      </ContentContainer>
      <h1>Hola desde feedback</h1>
      <h1> responseApi: {responseApi}</h1>

      <h2>
        Me llega por redux: [password:
        {password +
          ' ] // [repeatPassword:' +
          repeatPassword +
          '] // [track:' +
          track +
          '] // [policyChecked:' +
          policyChecked +
          ']'}
      </h2>
    </div>
  );
}

export default Feedback;
