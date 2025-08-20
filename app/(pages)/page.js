import Benefits from "../components/Layout/Benefits/benefits";
import Contact from "../components/Layout/Contact/contact";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import NavHeader from "../components/Layout/Nav/nav";
import Prices from "../components/Layout/Prices/Prices";
import Statistic from "../components/Layout/Statistics/statistics";

export default async function Home(){
  return (
    <>
      <NavHeader/>
      <Header/>
      <Prices/>
      <Benefits/>
      <Statistic/>
      <Contact/>
      <Footer/>
    </>
  );
}