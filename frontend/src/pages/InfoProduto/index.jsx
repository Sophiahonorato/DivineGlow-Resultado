import React from "react";
import Stars from "../../assets/images/stars.svg";
import Produto from "../../assets/images/produtoglitter.svg";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CurvedLoop from "../../components/component/CurvedLoop";
import { Link } from "react-router-dom";



const InfoProdutos = () => {
  return (
    <div className="zoom-75">
      <CurvedLoop/>
      <Header />

      <main
        className="container"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="content-main">
          <div
            className="produto"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src={Produto} alt="produto" />
          </div>

          <div
            className="container-produtos"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <div className="infoProduto">
              <h1>Lip Juice - Morango Divine Glow Makeup</h1>
              <p>Contém 6ml</p>
              <h2>R$ 50,90</h2>

              <div
                className="stars"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <img src={Stars} alt="avaliação" />
              </div>
<div className="quantity-buy">
  <div className="counter">
    <button>-</button>
    <span>1</span>
    <button>+</button>
  </div>

  <Link to="/login">
  <button className="btn-buy">Comprar</button>
</Link>

</div>

              <div className="descricao">
                <p><strong>Descrição :</strong></p>
                <p>
                  O glitter roxo da divine glow makeup é a escolha perfeita para quem
                  busca um toque de ousadia e sofisticação na maquiagem. Com partículas
                  ultrafinas e acabamento cintilante, ele oferece uma aplicação
                  confortável e um efeito visual deslumbrante. Sua cor vibrante, um roxo
                  profundo com reflexos multidimensionais, garante destaque imediato em
                  qualquer produção — seja para eventos noturnos, editoriais ou looks
                  criativos do dia a dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section
        className="section-produto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="detalhes-produto"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1200"
        >
          <p><strong>Produto:</strong></p>
          <p>
            O glitter roxo da divine glow makeup é a escolha perfeita para quem busca um
            toque de ousadia e sofisticação na maquiagem. Com partículas ultrafinas e
            acabamento cintilante, ele oferece uma aplicação confortável e um efeito
            visual deslumbrante. Sua cor vibrante, um roxo profundo com reflexos
            multidimensionais, garante destaque imediato em qualquer produção — seja para
            eventos noturnos, editoriais ou looks criativos do dia a dia.
          </p>

          <p><strong>Textura e fixação:</strong></p>
          <p>
            A textura leve e macia permite que o glitter deslize suavemente sobre a pele,
            proporcionando uma cobertura uniforme sem sensação áspera. Quando combinado
            com primer ou cola para glitter, sua fixação é duradoura, mantendo o brilho
            intacto por horas sem escorrer ou perder intensidade.
          </p>

          <p><strong>Versatilidade de uso:</strong></p>
          <p>
            Este glitter é ideal para aplicação nos olhos, rosto, corpo e até em unhas ou
            acessórios. Pode ser usado com pincel, esponja ou com os dedos, adaptando-se
            facilmente a diferentes técnicas e estilos. É seguro para uso cosmético, mas
            recomenda-se evitar o contato direto com os olhos sem base adequada. Design e
            embalagem: O produto vem em um pote transparente que destaca a beleza do
            glitter e facilita a visualização da cor. A tampa rosqueável garante
            segurança no armazenamento e praticidade no transporte, tornando-o perfeito
            para levar na nécessaire ou em viagens.
          </p>

          <p><strong>Dicas de aplicação:</strong></p>
          <p>
            Para um efeito tridimensional, combine o glitter com sombras metálicas ou
            cremosas. Use como iluminador artístico em áreas estratégicas do rosto ou
            misture com gloss transparente para criar um batom personalizado com brilho.
            Também pode ser usado como detalhe decorativo em produções criativas e
            fantasias. Conteúdo: Cada pote contém aproximadamente 5g de glitter roxo
            ultrafino, suficiente para diversas aplicações com alto rendimento.
          </p>
        </div>
      </section>
      <Footer/>;
    </div>
  );
};

export default InfoProdutos;
