import React from 'react';
import {useFormik} from "formik";
import Grid from '@mui/material/Grid'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField} from "@mui/material";

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
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
                    <TextField label="Email" margin="normal"/>
                    <TextField type="password" label="Password"
                               margin="normal"
                    />
                    <FormControlLabel label={'Remember me'} control={<Checkbox/>}/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
            </form>
        </Grid>
    </Grid>
}
