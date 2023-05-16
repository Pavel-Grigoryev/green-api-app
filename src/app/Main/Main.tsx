import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from 'features/auth/Login';
import { Messenger } from 'features/messenger/Messenger';
import { PATH } from 'common/constants/routes';
import s from './Main.module.scss';

export const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path={PATH.MESSENGER} element={<Messenger />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.NOT_FOUND} element={<h1>404: PAGE NOT FOUND</h1>} />
        <Route path="*" element={<Navigate to={PATH.NOT_FOUND} />} />
      </Routes>
    </main>
  );
};
