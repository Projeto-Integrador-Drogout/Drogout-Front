import React, {useEffect} from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub"
import "./Sobre.css";


function Sobre() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="caixa-sobre">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Box paddingX={10}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="titulo slide-right"
              >
                Quem somos nós?
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
          <Grid item xs={6} sm={2} md={4}>
            <img
              src="/src/assets/images/time.png"
              alt="Logo"
              className="logo-image slide-left"
            />
          </Grid>
        </Grid>
      </div>
      <Typography className="developers-title slide-left">
        Conheça nossa equipe:
      </Typography>
      <div className="developers-section slide-right">
        <Grid container spacing={2} className="developers-container">
          <Grid className="dev-align" item xs={6} sm={2} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/lucas.jpg" alt="Developer 1" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Lucas Pinheiro</Typography>
            <div className='social-link'>
            <a 
            href="https://www.linkedin.com/in/splucas/" 
            target="_blank">
              <LinkedInIcon className="redes-dev" />
            </a>
            <a 
            href="https://github.com/spLusca" 
            target="_blank">
              <GitHubIcon className="redes-dev" />
            </a>
           
</div>
          </Grid>
          <Grid className="dev-align" item xs={6} sm={2} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/deborah.jpg" alt="Developer 2" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Deborah Pantaleão</Typography>
            <div className='social-link'>
            <a 
            href="https://www.linkedin.com/in/deborahpantaleao/" 
            target="_blank">
              <LinkedInIcon className="redes-dev" />
            </a>
            <a 
            href="https://github.com/DehPantaleao" 
            target="_blank">
              <GitHubIcon className="redes-dev" />
            </a>
           
            </div>
          </Grid>
          <Grid className="dev-align" item xs={6} sm={2} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/samuel.jpg" alt="Developer 3" />

            </div>
            <Typography className="dev-text" variant="subtitle1">Samuel Souza</Typography>
            <div className='social-link'>
            <a 
            href="https://www.linkedin.com/in/samuel-souza-marques-1045b0274/" 
            target="_blank">
              <LinkedInIcon className="redes-dev" />
            </a>
            <a 
            href="https://github.com/Samuel123n" 
            target="_blank">
              <GitHubIcon className="redes-dev" />
            </a>

            </div>
          </Grid>
          <Grid className="dev-align" item xs={6} sm={2} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/rafael.jpg" alt="Developer 4" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Rafael Marques</Typography>
            <div className='social-link'>
            <a 
            href="https://www.linkedin.com/in/rafael-marques019/" 
            target="_blank">
              <LinkedInIcon className="redes-dev" />
            </a>
            <a 
            href="https://github.com/dysrrafaa" 
            target="_blank">
              <GitHubIcon className="redes-dev" />
            </a>
           
            </div>
          </Grid>
          <Grid className="dev-align" item xs={6} sm={2} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/caique.jpg" alt="Developer 5" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Caique Ramos</Typography>
            <div className='social-link'>
            <a 
            href="https://www.linkedin.com/in/caique-ramos-22b398192/" 
            target="_blank">
              <LinkedInIcon className="redes-dev" />
            </a>
            <a 
            href="https://github.com/caique0299" 
            target="_blank">
              <GitHubIcon className="redes-dev" />
            </a>
            
            </div>
          </Grid>
          <Grid className="dev-align" item xs={6} sm={2} md={4}>
            <div className="developer">
              <img className="fotos" src="/src/assets/images/FotosDevs/cinthia.png" alt="Developer 6" />
            </div>
            <Typography className="dev-text" variant="subtitle1">Cinthia Caroline</Typography>
            <div className='social-link'>
            <a 
            href="https://www.linkedin.com/in/cinthia-caroline-479173276/" 
            target="_blank">
              <LinkedInIcon className="redes-dev" />
            </a>
            <a 
            href="https://github.com/cinthia40"
            target="_blank">
              <GitHubIcon className="redes-dev" />
            </a>
           
                  </div>
          </Grid>
        </Grid>
      </div>

      <Grid xs={12} className="postagens"></Grid>
    </>
  );
}




export default Sobre;