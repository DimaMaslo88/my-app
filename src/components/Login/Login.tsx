import React from 'react';
import {useFormik} from "formik";
import Grid from '@mui/material/Grid'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField} from "@mui/material";
import {FormikErrorType} from "../redux/store";
import {loginUser} from "../redux/auth_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const Login = () => {
    const dispatch=useDispatch()
    const isAuth=useSelector<AppRootStateType,boolean>(state=>state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false

        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Please,enter email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Hey enter password"
            } else if (values.password.length < 3) {
                errors.password = "Invalid password"
            }
            return errors;
        },
        onSubmit: values => {
           dispatch(loginUser(values));
            formik.resetForm()
        },
    });

    if(isAuth){
      return  <Navigate to={"/profile"}/>
    }



    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>Login
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>

                    </FormLabel>
                    <FormGroup>
                        <TextField label="Email" margin="normal"
                                   {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        <TextField type="password" label="Password"
                                   margin="normal"
                                   {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ?
                            <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                        <FormControlLabel label={'Remember me'} control={<Checkbox/>}
                                          {...formik.getFieldProps('remember me')}

                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Submit
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
