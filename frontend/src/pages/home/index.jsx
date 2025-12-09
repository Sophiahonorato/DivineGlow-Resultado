import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "../../components/layout/products";
import DiscountBanner from "../../components/Discount";
import CurvedLoop from "../../components/component/CurvedLoop";
import Lancamentos from "../../components/layout/lancamentos";
import SectionLinhaDivine from "../../components/layout/sectionLinhaDivine";
import SectionInstagram from "../../components/layout/sectionInstagram";
import GridProdutos from "../../components/layout/GridProdutos";
import Main from "../../components/layout/main";

export default function Home() {
  return (
    <>

      <Header />
      <CurvedLoop marqueeText="Use o cupom GLOW10 e ganhe 10% OFF em toda loja! ✦" />
      <Main />
      <Products />
      <DiscountBanner />
      <Lancamentos />
      <SectionLinhaDivine />
      <GridProdutos />
      <SectionInstagram />
      <Footer />
    </>
  );
}
