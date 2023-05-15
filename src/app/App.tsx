import React from 'react';
import s from './App.module.scss';
import { Header } from '../components/Header/Header';
import Main from '../components/Main/Main';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
