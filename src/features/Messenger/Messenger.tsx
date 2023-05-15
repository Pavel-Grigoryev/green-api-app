import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { MainContainerSX } from '../../common/styles/sx/sx_styles';

export const Messenger = () => {
  return (
    <Container color="secondary" sx={MainContainerSX}>
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
