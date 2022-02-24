import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductInformation from './views/ProductInformation';
import Form from './views/Form';
import Feedback from './views/Feedback';
import { Provider } from 'react-redux';
import store from './data/rootStore';
import './locale/index';
import Background from './components/Background';

function App() {
  return (
    <Provider store={store}>
      <Background>
        <Routes>
          <Route path="/" element={<ProductInformation />} />
          <Route path="/form" element={<Form />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Background>
    </Provider>
  );
}

export default App;
