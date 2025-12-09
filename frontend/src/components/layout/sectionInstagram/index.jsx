import React from "react";
import "./style.css";
import img1 from "../../../assets/images/1.svg";
import img2 from "../../../assets/images/2.svg";
import img3 from "../../../assets/images/3.svg";
import img4 from "../../../assets/images/4.svg";
import img5 from "../../../assets/images/5.svg";
import img6 from "../../../assets/images/6.svg"; // se quiser usar depois

const SectionInstagram = () => {
  return (
    <section
      className="section-instagram"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="section-divider">
        <h1>INSTAGRAM</h1>
      </div>

      <p className="subtitle-instagram">
        Fique por dentro de todas as novidades
      </p>

      <div className="instagram-grid">
        {/* LINHA 1 */}
        <img
          src={img1}
          className="insta-item"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="0"
        />
        <img
          src={img2}
          className="insta-item"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <img
          src={img3}
          className="insta-item"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        {/* LINHA 2 */}
        <img
          src={img4}
          className="insta-item"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="250"
        />

        {/* CARD CENTRAL IGUAL AO FIGMA */}
        <div
          className="insta-center-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="insta-handle">@DIVINEGLOWBELEZA</span>
          <a
            href="https://instagram.com/divineglow"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            Acesse a nossa bio!
          </a>
        </div>

        <img
          src={img5}
          className="insta-item"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="350"
        />
      </div>
    </section>
  );
};

export default SectionInstagram;
