import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import "./Home.css";

function Home() {
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
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
              Ver Postagens
            </Button>
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






/* <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper style={{ height: "100vh", background: "lightgrey" }}></Paper>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4} spacing={2}>
          <Grid item>
            <Paper style={{ height: "49vh", background: "red" }}></Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: "49vh", background: "green" }}></Paper>
          </Grid>
        </Grid>
      </Grid> */


/*<Paper>
<Box p={2}>
  <Box display="flex" justifyContent="center">
      <h1>Titulo</h1>
    </Box>
    <img
      src="https://64.media.tumblr.com/7524655cbb15562a2144450394759fa5/f09abb0f6bcba2f6-4d/s540x810/f1aa4a1cfc34178a7933521ce336ad1d62039822.gif"
      alt="Foto de poder"
      style={{width: "90%", height: "90%"}}
/>
  <Box display="flex" justifyContent="center" p={2}>
      <Button variant="contained" color="primary">
        {" "}
        texto 1
      </Button>

      <Button variant="contained" color="secondary">
        {" "}
        texto 2
      </Button>
  </Box>
</Box>
</Paper> */