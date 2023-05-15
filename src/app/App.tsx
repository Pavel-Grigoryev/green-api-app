import React from 'react';
import s from './App.module.scss';
import { Header } from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
