import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import "./App.css";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Contato from "./paginas/contato/Contato";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaTema from "./components/temas/listaTema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from './store/Store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
       
          <div style={{ minHeight: '100vh' }}>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
      
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;