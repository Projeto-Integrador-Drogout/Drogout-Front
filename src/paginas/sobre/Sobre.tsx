import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <div className="caixa">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
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
                criança pode nascer com alguma sequela).
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              height="500px"
              className="logo-image"
            />
          </Grid>
        </Grid>
      </div>
      <Typography className="developers-title">
        Conheça nossa equipe:
      </Typography>
      <div className="developers-section">


        <Grid container spacing={2} className="developers-container">
          <Grid item xs={12} sm={6} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/lucas.jpg" alt="Developer 1" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Lucas Pinheiro</Typography>
            <Typography variant="body2">Cargo/Função</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/exemplo.png" alt="Developer 2" />         
            </div>
            <Typography className="dev-text" variant="subtitle1">Deborah Pantaleão</Typography>
            <Typography variant="body2">Cargo/Função</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/samuel.jpg" alt="Developer 3" />
              
            </div>
            <Typography className="dev-text" variant="subtitle1">Samuel Souza</Typography>
            <Typography variant="body2">Cargo/Função</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/exemplo.png" alt="Developer 4" />              
            </div>
            <Typography className="dev-text" variant="subtitle1">Rafael Marques</Typography>
            <Typography variant="body2">Cargo/Função</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/exemplo.png" alt="Developer 5" />    
            </div>
            <Typography className="dev-text" variant="subtitle1">Caique Ramos</Typography>
            <Typography variant="body2">Cargo/Função</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/cinthia.png" alt="Developer 6" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Cinthia Caroline</Typography>
            <Typography variant="body2">Cargo/Função</Typography>
          </Grid>
        </Grid>
      </div>

      <Grid xs={12} className="postagens"></Grid>
    </>
  );
}

export default Sobre;