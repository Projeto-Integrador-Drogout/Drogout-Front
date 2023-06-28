import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import "./Sobre.css";

function Sobre() {

  
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={10}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Sobre nós!
            </Typography>
            
        
              <Typography className="about">
                Somos um grupo de Saúde e Bem-Estar, com foco em reforçar a
                prevenção e o tratamento do abuso de drogas entorpecentes e uso
                nocivo do álcool. Temos como causa a falta de apoio social
                (emocional, estrutura familiar, depressão e ansiedade),
                econômico (frustrações financeiras) e déficit de instituições
                não governamentais que podem dar suporte a esse grupo. Este
                cenário pode trazer como consequência acidentes de estrada por
                pessoas alcoolizadas, um aumento da epidemia de doenças
                sexualmente transmitidas (hepatite; AIDS), a dependência química
                pelo usuário, dificuldade financeira tanto do usuário quanto de
                familiares próximos, mortes evitáveis de recém-nascidos vindo de
                mães alcoólatras ou usuárias de drogas (por conta da mãe a
                criança pode nascer com alguma sequela).!
              </Typography>

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
  );
}

export default Sobre;
