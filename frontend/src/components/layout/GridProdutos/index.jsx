import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import cremeFacial from "../../../assets/images/cremeFacial.svg";
import corretivoClaro from "../../../assets/images/corretivoClaro.svg";
import kitCilios from "../../../assets/images/kitCilios.svg";
import lapisDuo from "../../../assets/images/lapisDuo.svg";
import glitterStar from "../../../assets/images/glitterStar.svg";
import paletadeSombras1 from "../../../assets/images/paletadeSombras1.svg";

const GridProdutos = () => {
  const produtos = [
    {
      imagem: cremeFacial,
      titulo: "CREME FACIAL DIVINE GLOW",
      descricao: "Hidratação profunda, maciez e brilho natural.",
      preco: "59,90",
    },
    {
      imagem: corretivoClaro,
      titulo: "Corretivo Líquido Divine Glow",
      descricao: "Cobertura leve, acabamento radiante.",
      preco: "79,90",
    },
    {
      imagem: kitCilios,
      titulo: "Kit cílios Divine Glow",
      descricao: "Cílios volumosos e kit de aplicação profissional.",
      preco: "39,90",
    },
    {
      imagem: lapisDuo,
      titulo: "Lapís duo Divine Glow",
      descricao: "Definição dupla com a ponta marrom e a preta.",
      preco: "19,00",
    },
    {
      imagem: glitterStar,
      titulo: "Glitter Star Dust Divine Glow",
      descricao: "Brilho solto e intenso para um toque de glamour imediato.",
      preco: "15,90",
    },
    {
      imagem: paletadeSombras1,
      titulo: "Paleta de sombras Divine Glow",
      descricao:
        "Tons neutros essenciais para qualquer look, do básico ao dramático.",
      preco: "99,90",
    },
  ];

  return (
    <div className="produtos-grid">
      {produtos.map((p, index) => (
        <Link
          to="/produtos"
          key={index}
          className="card-link"
        >
          <motion.div
            className="card-produto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.03,
              rotate: "-1deg",
              boxShadow: "0 8px 25px rgba(0,0,0,0.18)",
              transition: { duration: 0.25 },
            }}
          >
            <motion.img
              src={p.imagem}
              alt={p.titulo}
              className="card-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12 + 0.1,
                ease: "easeOut",
              }}
            />

            <div className="card-info">
              <h3>{p.titulo}</h3>
              <div className="stars">★★★★★</div>
              <p className="descricao">{p.descricao}</p>
              <p className="preco">R$ {p.preco}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default GridProdutos;
