import React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SmallContainer } from '../../components/SmallContainer/SmallContainer';

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      id: '',
      apiToken: '',
    },
    validationSchema: Yup.object({
      id: Yup.number().typeError('Must be a number').required('Required'),
      apiToken: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  /* if (isLoggedIn) {
    return <Navigate to="/" />;
  } */
  return (
    <SmallContainer>
      <Grid container justifyContent="center">
        <Grid item justifyContent="center">
          <FormControl>
            <FormLabel>
              <p>
                To log in get registered
                <a href="https://green-api.com/auth/" target="_blank" rel="noreferrer">
                  {' '}
                  here
                </a>
              </p>
            </FormLabel>
            <form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <TextField label="Id" margin="normal" {...formik.getFieldProps('id')} />
                {formik.touched.id && formik.errors.id && (
                  <div style={{ color: 'red' }}>{formik.errors.id}</div>
                )}
                <TextField
                  type="password"
                  label="Api Token"
                  margin="normal"
                  {...formik.getFieldProps('apiToken')}
                />
                {formik.touched.apiToken && formik.errors.apiToken && (
                  <div style={{ color: 'red' }}>{formik.errors.apiToken}</div>
                )}
                <Button type="submit" variant="contained" color="primary">
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
