import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { mainContainerSX } from 'common/styles/sx/sx_styles';
import { PATH } from 'common/constants/routes';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { authSelectors } from '../../auth';

export const Messenger = () => {
  const isLoggedIn = useAppSelector(authSelectors.selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <Container color="secondary" sx={mainContainerSX}>
      Messeger
      <Grid
        container
        spacing={2}
        style={{ marginTop: 120, justifyContent: 'space-between', flexWrap: 'wrap' }}
      >
        <Grid item xs={4} />
        <Grid item xs={7} />
      </Grid>
    </Container>
  );
};
