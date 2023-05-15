import React, { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { SmallContainerSX } from '../../common/styles/sx/sx_styles';

export const SmallContainer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Container color="secondary" sx={SmallContainerSX} maxWidth="sm">
      {children}
    </Container>
  );
};
