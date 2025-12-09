import { useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css";

import img1 from "../../../assets/images/baseClara.svg";
import img2 from "../../../assets/images/shampooCondionador.svg";
import img3 from "../../../assets/images/paletadeSombras1.svg";
import img4 from "../../../assets/images/CorretivoClaro.svg";
import img5 from "../../../assets/images/GlossRoxo.svg";
import img6 from "../../../assets/images/cremeFacial.svg";
import img7 from "../../../assets/images/kitCilios.svg";
import img8 from "../../../assets/images/lapisDuo.svg";
import img9 from "../../../assets/images/serumFacial.svg";
import img10 from "../../../assets/images/glitterStar.svg";

export default function Products() {
  const carouselRef = useRef(null);
  const controls = useAnimationControls();

  const animateSlide = (direction) => {
    const offset = direction === "right" ? -25 : 25;

    controls.start({
      x: offset,
      opacity: 0.7,
      transition: { duration: 0.1, ease: "easeOut" }
    });

    setTimeout(() => {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" }
      });
    }, 180);
  };

  const scrollLeft = () => {
    animateSlide("left");
    carouselRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    animateSlide("right");
    carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  const produtos = [
    { id: 1, nome: "BASE LÍQUIDA DIVINE GLOW", preco: "R$ 99,90", descricao: "Cobertura leve.", imagem: img1 },
    { id: 2, nome: "SHAMPOO E CONDICIONADOR", preco: "R$ 79,90", descricao: "Hidratação profunda.", imagem: img2 },
    { id: 3, nome: "PALETA MULTICOLOR", preco: "R$ 79,90", descricao: "Cores intensas.", imagem: img3 },
    { id: 4, nome: "CORRETIVO DIVINE GLOW", preco: "R$ 89,90", descricao: "Corrige e ilumina.", imagem: img4 },
    { id: 5, nome: "BATOM LÍQUIDO", preco: "R$ 49,90", descricao: "Alta fixação.", imagem: img5 },
    { id: 6, nome: "CREME FACIAL", preco: "R$ 69,90", descricao: "Nutrição intensa.", imagem: img6 },
    { id: 7, nome: "KIT CÍLIOS", preco: "R$ 39,90", descricao: "Volume marcante.", imagem: img7 },
    { id: 8, nome: "LÁPIS DUO", preco: "R$ 34,90", descricao: "Delineado preciso.", imagem: img8 },
    { id: 9, nome: "SÉRUM FACIAL", preco: "R$ 69,90", descricao: "Pele radiante.", imagem: img9 },
    { id: 10, nome: "GLITTER STAR", preco: "R$ 49,90", descricao: "Brilho intenso.", imagem: img10 },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      className="best-container"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.2 }}
    >
      <motion.h2
        className="best-title"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2 }}
      >
        MAIS VENDIDOS
      </motion.h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>{"<"}</button>

        <motion.div 
          className="carousel"
          ref={carouselRef}
          animate={controls}
        >
          {produtos.map((produto, index) => (
            <Link to="/produtos" key={produto.id} className="card-link">
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 60, scale: 0.85 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.06,
                  rotate: "-1deg",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.25)"
                }}
              >
                <motion.img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="card-img"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ scale: 1.20 }}
                />

                <div className="card-info">
                  <p className="rating">★★★★★</p>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <span className="price">{produto.preco}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <button className="arrow right" onClick={scrollRight}>{">"}</button>
      </div>

      {/* 🔥 BOTÃO "VER PRODUTOS" FUNCIONANDO */}
      <Link to="/produtos">
        <motion.button
          className="button-products"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 8px 25px rgba(0,0,0,0.20)",
            backgroundColor: "#b67870",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Ver Produtos
        </motion.button>
      </Link>

    </motion.section>
  );
}
