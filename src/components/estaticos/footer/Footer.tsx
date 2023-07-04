import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import "./Footer.css";
import {Link} from "react-router-dom";
import sobrelogo from '../../../assets/images/sobre.png'

function footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;

      if(token != "") {
        footerComponent =   
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                sobre nós
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
            <Link to="/sobre" className="text-decorator-none sobre-icon">
                 <img src={sobrelogo} width="40%" />
                 <span className="tooltip-text">Conheça nossa equipe</span>
              </Link>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle1"
                align="center"
                className="textos"
              >
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className="textos"
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
}

return (
  <>
    {footerComponent}
  </>
)
}

export default footer;
