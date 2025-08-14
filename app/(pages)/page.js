import Benefits from "../components/Layout/Benefits/benefits";
import Contact from "../components/Layout/Contact/contact";
import Footer from "../components/Layout/Footer/footer";
import Statistic from "../components/Layout/Statistics/statistics";

export default async function Home(){
  return (
    <>
      <Benefits/>
      <Statistic/>
      <Contact/>
      <Footer/>
    </>
  );
}