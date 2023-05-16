import React, { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { smallContainerSX } from '../../styles/sx/sx_styles';

export const SmallContainer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Container color="secondary" sx={smallContainerSX} maxWidth="sm">
      {children}
    </Container>
  );
};
