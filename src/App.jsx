import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Ticker from "./components/Ticker"
import Musicas from "./components/Musicas"
import Resultados from "./components/Resultados"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Musicas />
      <Resultados />  
      <Footer />  
    </>
  )
}
