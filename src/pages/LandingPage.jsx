import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Musicas from "../components/Musicas";
import Resultados from "../components/Resultados";
import AbbeyRoad from "../components/AbbeyRoad";
import Curiosidades from "../components/Curiosidades";
import ChamadaFinal from "../components/ChamadaFinal";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Musicas />
      <Resultados />  
      <AbbeyRoad />
      <Curiosidades />
      <ChamadaFinal />
    </>
  )
}