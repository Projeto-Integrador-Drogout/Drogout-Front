/* eslint-disable prefer-const */
import React, { useEffect } from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import "./Home.css";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { Link } from "react-router-dom";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";


function Home() {

  let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa slide-right"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={10}>
            <Typography

              className="titulo"
            >
              Seja bem-vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="sub"
            >
              Poste seus desabafos aqui!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            <ModalPostagem/>
            </Box>
            <Link to="/posts"> 
            <Button variant="outlined" className="botao">
              Ver Postagens
            </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="/src/assets/images/logo.png"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>

  )


}

export default Home;