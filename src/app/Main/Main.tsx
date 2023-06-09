import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from 'features/auth/Login';
import { PATH } from 'common/constants/routes';
import { Messenger } from 'features/messenger/Messenger/Messenger';
import s from './Main.module.scss';
import { NotFound } from '../pages/404';

export const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path={PATH.MESSENGER} element={<Messenger />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<Navigate to={PATH.NOT_FOUND} />} />
      </Routes>
    </main>
  );
};
