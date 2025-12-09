import "./style.css";
import bannerDiscount from "../../assets/images/bannerDiscount.svg"

export default function DiscountBanner() {
  return (
    <section
      className="discount-banner"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      <img
        src={bannerDiscount}
        alt="Banner de Desconto"
        className="banner-img"
        data-aos="fade-up"
        data-aos-delay="300"
      />
    </section>
  );
}
