/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { AppBar, Toolbar, Typography, Box, useScrollTrigger, Slide } from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";
import  logo  from '../../../assets/images/logo.png'

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function navbar() {

  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    navigate('/login');
  }

  let navbarComponent;

  if (token !== '') {
    navbarComponent = (
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="flex-start" className="navbar-logo">
          <img className='logo' src= {logo} />
        </Box>
        <HideOnScroll>

          <AppBar className="nav" position="sticky">

            <Toolbar variant="dense" className="navbar-toolbar">
              <Box display="flex" alignItems="center" className="navbar-content">


                <Box display="flex" justifyContent="center" flex="1" className="navbar-links">

                  <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                      <Typography className='nav-links' variant="h4" color="inherit">
                        home
                      </Typography>
                    </Box>
                  </Link>
                  <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                      <Typography className='nav-links' variant="h4" color="inherit">
                        postagens
                      </Typography>
                    </Box>
                  </Link>

                  <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                      <Typography className='nav-links' variant="h4" color="inherit">
                        temas
                      </Typography>
                    </Box>
                  </Link>

                  <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                      <Typography className='nav-links' variant="h4" color="inherit">
                        cadastro tema
                      </Typography>
                    </Box>
                  </Link>
                  <Link to="/login" className="text-decorator-none">
                    <Box mx={1} className="cursor" onClick={goLogout}>
                      <Typography className='nav-links' variant="h4" color="inherit">
                        Sair
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    );

  }

  return <>{navbarComponent}</>;
}

export default navbar;