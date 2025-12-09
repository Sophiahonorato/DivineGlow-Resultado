import React from "react";
import "./style.css";
import { motion } from "framer-motion";

import Logo from "../../assets/images/logo.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/twitter.svg";
import Whats from "../../assets/images/whatsapp.svg";
import Insta from "../../assets/images/instagram.svg";

export default function Footer() {
  /* VARIANT GENÉRICO */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.12 }}
    >

      {/* === TOPO DO FOOTER === */}
      <motion.div className="footer-top" variants={fadeUp}>
        <motion.img
          src={Logo}
          alt="Divine Glow"
          className="footer-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25 }}
        />

        <div className="footer-socials">
          {[Linkedin, Twitter, Whats, Insta].map((icon, i) => (
            <motion.a
              key={i}
              className="social-icon"
              whileHover={{
                scale: 1.15,
                rotate: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
              }}
              transition={{ duration: 0.25 }}
            >
              <img src={icon} alt="Social" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* DIVISOR */}
      <motion.div className="footer-divider" variants={fadeUp} />

      {/* === COLUNAS === */}
      <motion.div className="footer-content">
        {[
          {
            titulo: "Institucional",
            itens: [
              "Sobre a Divine Glow",
              "Nossa missão",
              "Sustentabilidade e ética",
              "Blog / Dicas de beleza"
            ]
          },
          {
            titulo: "Conecte-se",
            itens: ["Instagram", "TikTok", "Pinterest", "YouTube"]
          },
          {
            titulo: "Atendimento",
            itens: [
              "E-mail: divineglow@gmail.com",
              "WhatsApp: (11) 99999-9999",
              "Seg. a sex. das 9h às 18h"
            ]
          },
          {
            titulo: "Informações legais",
            itens: ["Política de privacidade", "Termos de uso", "Cookies e segurança"]
          }
        ].map((col, index) => (
          <motion.div
            key={index}
            className="footer-column"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3>{col.titulo}</h3>
            <ul>
              {col.itens.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <a>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* ==== BOTTOM ==== */}
      <motion.div
        className="footer-bottom"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p>Copyright © 2025 Aurora Gastrô — Todos os direitos reservados</p>
      </motion.div>

    </motion.footer>
  );
}
