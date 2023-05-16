import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';
import { SmallContainer } from 'common/components/SmallContainer/SmallContainer';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { PATH } from 'common/constants/routes';
import { useActions } from 'common/hooks/useActions';
import { formButtonSX, formControllLoginSX, formGroupSX } from 'common/styles/sx/sx_styles';
import { authAction, authSelectors } from '../index';
import s from './Login.module.scss';

export const Login = () => {
  const isLoggedIn = useAppSelector(authSelectors.selectIsLoggedIn);

  const { setAuthInitializedAC } = useActions(authAction);

  const formik = useFormik({
    initialValues: {
      id: '',
      apiToken: '',
    },
    validationSchema: Yup.object({
      id: Yup.number().typeError('Must be a number').required('Required'),
      apiToken: Yup.string().required('Required'),
    }),
    onSubmit: (data) => {
      setAuthInitializedAC(data);
    },
  });

  if (isLoggedIn) {
    return <Navigate to={PATH.MESSENGER} />;
  }

  return (
    <SmallContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} justifyContent="center">
          <FormControl sx={formControllLoginSX}>
            <FormLabel>
              <p className={s.formDesc}>
                To log in get registered
                <a
                  className={s.formLink}
                  href="https://green-api.com/auth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  here
                </a>
              </p>
            </FormLabel>
            <form onSubmit={formik.handleSubmit}>
              <FormGroup sx={formGroupSX}>
                <div className={s.formField}>
                  <TextField label="Id" margin="normal" fullWidth {...formik.getFieldProps('id')} />
                  {formik.touched.id && formik.errors.id && (
                    <div className={s.error}>{formik.errors.id}</div>
                  )}
                </div>
                <div className={s.formField}>
                  <TextField
                    type="password"
                    label="Api Token"
                    margin="normal"
                    fullWidth
                    {...formik.getFieldProps('apiToken')}
                  />
                  {formik.touched.apiToken && formik.errors.apiToken && (
                    <div className={s.error}>{formik.errors.apiToken}</div>
                  )}
                </div>
                <Button
                  sx={formButtonSX}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Login
                </Button>
              </FormGroup>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </SmallContainer>
  );
};

// Types

export type FormDataType = {
  id: string;
  apiToken: string;
};
