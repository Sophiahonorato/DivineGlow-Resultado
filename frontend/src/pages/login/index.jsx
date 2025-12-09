import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import React from "react";
import CurvedLoop from "../../components/component/CurvedLoop";

const Login = () => {
  return (
    <>
    <CurvedLoop marqueeText="Use o cupom GLOW10 e ganhe 10% OFF em toda loja! ✦" />
      <Header />
      <main
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="login-container"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <h2 data-aos="fade-down" data-aos-delay="200">
            JÁ TEM CONTA?
          </h2>

          <form
            className="login-form"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <label htmlFor="email">Email ou CPF</label>
            <input
              type="text"
              id="email"
              name="senha"
              placeholder="Digite seu email ou CPF"
            />

            <label htmlFor="senha">senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
            />

            <button
              type="submit"
              className="btn-login"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              ENTRAR
            </button>
          </form>

          <p
            className="social-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            FAÇA LOGIN COM AS REDES SOCIAIS
          </p>

          <div
            className="login-options"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <button className="link-button">CRIAR CONTA</button>
            <button className="link-button">ESQUECEU A SENHA?</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
