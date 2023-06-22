import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import "./Contato.css";

function Contato() {
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
              Contato
            </Typography>
            
        
              <Typography className="about">
                
              <a
                href="https://www.instagram.com/generationbrasil/"
                target="_blank" className="contatos"
              >
                    Instagram da Generation
              </a>

                

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

export default Contato;
