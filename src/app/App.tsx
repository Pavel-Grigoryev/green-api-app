import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { authAction, authSelectors } from 'features/auth';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { useActions } from 'common/hooks/useActions';
import { ErrorSnackbar } from 'common/components/ErrorSnackbar';
import s from './App.module.scss';
import { Header } from './Header';
import { Main } from './Main';
import { appSelectors } from './index';

function App() {
  const IsLoggedIn = useAppSelector(authSelectors.selectIsLoggedIn);
  const id = useAppSelector(authSelectors.selectId);
  const apiToken = useAppSelector(authSelectors.selectApiToken);
  const isInitialized = useAppSelector(appSelectors.selectIsInitialized);

  const { loginTC } = useActions(authAction);

  useEffect(() => {
    if (!IsLoggedIn) {
      loginTC();
    }
  }, [id, apiToken]);

  if (!isInitialized) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <CircularProgress style={{ width: '80px', height: '80px' }} />
      </div>
    );
  }

  return (
    <div className={s.app}>
      <ErrorSnackbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
