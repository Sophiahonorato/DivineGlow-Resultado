import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css";

import Produtos from "../../../assets/images/produtos.svg";
import img1 from "../../../assets/images/corretivoMedio.svg";
import img2 from "../../../assets/images/corretivoClaro.svg";
import img3 from "../../../assets/images/corretivoEscuro.svg";

export default function Lancamentos() {
  const cards = [
    {
      id: 1,
      titulo: "CORRETIVO LÍQUIDO MÉDIO",
      descricao: "Corrige, ilumina e uniformiza a pele.",
      preco: "89,90",
      imagem: img1
    },
    {
      id: 2,
      titulo: "CORRETIVO LÍQUIDO CLARO",
      descricao: "Corrige, ilumina e uniformiza a pele.",
      preco: "89,90",
      imagem: img2
    },
    {
      id: 3,
      titulo: "CORRETIVO LÍQUIDO ESCURO",
      descricao: "Corrige, ilumina e uniformiza a pele.",
      preco: "89,90",
      imagem: img3
    }
  ];

  return (
    <section className="lanc-section">

      {/* IMAGEM GRANDE DA ESQUERDA — SÓLIDA */}
      <motion.img
        src={Produtos}
        alt="Produtos"
        className="lanc-img-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="lanc-content">

        {/* TÍTULO */}
        <motion.h2
          className="lanc-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ÚLTIMOS LANÇAMENTOS
        </motion.h2>

        {/* GRID DOS CARDS */}
        <div className="lanc-grid">
          {cards.map((item, index) => (
            <Link to="/produtos" key={item.id} className="card-link">
              <motion.div
                className="card-produto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.01,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.15)"
                }}
              >
                <img src={item.imagem} className="card-img" alt={item.titulo} />

                <div className="card-info">
                  <h3>{item.titulo}</h3>
                  <div className="stars">★★★★★</div>
                  <p className="descricao">{item.descricao}</p>
                  <p className="preco">R$ {item.preco}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
