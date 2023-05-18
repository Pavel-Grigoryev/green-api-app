import React, { useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { mainContainerSX, messengerGridRightSX, messengerGridSX } from 'common/styles/sx/sx_styles';
import { PATH } from 'common/constants/routes';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { authSelectors } from 'features/auth/index';
import { Chatlist } from './Chatlist';
import { ChatMessages } from './ChatMessages';

export const Messenger = () => {
  const isLoggedIn = useAppSelector(authSelectors.selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }

  const [currentChatNumber, setcurrentChatNumber] = useState('');

  return (
    <Container color="secondary" sx={mainContainerSX}>
      <Grid container spacing={2} sx={messengerGridSX}>
        <Grid item xs={4}>
          <Chatlist changeCurrentChatId={setcurrentChatNumber} />
        </Grid>
        <Grid item xs={8} sx={messengerGridRightSX}>
          <ChatMessages currentChatNumber={currentChatNumber} />
        </Grid>
      </Grid>
    </Container>
  );
};
