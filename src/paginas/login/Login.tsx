/* eslint-disable prefer-const */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin'
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/Actions";
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState('')
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
        console.log(JSON.stringify(userLogin))
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} className='bem-vinde'>Bem-vinde</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button className='botao-logar' type='submit' variant='contained'>
                                ENTRAR
                            </Button>
                        </Box>
                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            {/*gutterBottom é a margem que fica abaixo*/}
                            <Typography variant='subtitle1' gutterBottom align='center'>Ainda não tem conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='link1'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} style={{
                backgroundImage: `url(https://img.freepik.com/fotos-gratis/equipamentos-maos-tomada_1150-99.jpg?w=740&t=st=1687440738~exp=1687441338~hmac=1e4b714f6b45123df810698bc759ff19632b8679ac01f42912183025c06c15fb)`,
                backgroundRepeat: 'no-repeat', width: '80vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
            </Grid>
        </Grid>
    );
}

export default Login;