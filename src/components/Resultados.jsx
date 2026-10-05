import resultados from "../data/resultados";
function Resultados() {
return (
     <section id="resultados" className="container-fluid faixa-preta text-white py-4">
    <div className="container text-center">
        <div className="row g-4 mb-4">
            {resultados.map((resultado) => (
                <div key={resultado.numero} className="col-md-3 passada">
                    <p className="display-3 fw-bold num-home text-white">{resultado.numero}</p>
                    <p className="fw-bold fs-5">{resultado.legenda}</p>
                </div>
            ))}
        </div>
        
        <div className="row justify-content-center">
            <div className="col-md-8">
                <p className="paragrafo text-center fs-5 mt-3 mb-4">
                    Em pouco mais de sete anos de carreira de estúdio, os Beatles atravessaram fases
                    completamente distintas: do pop cru dos primeiros singles à
                    experimentação psicodélica. Cada disco é a fotografia de uma banda em constante transformação.
                </p>
                <a className="btn btn-light px-4" href="https://www.youtube.com/@TheBeatles" target="_blank" rel="noopener noreferrer" role="button">Ver no YouTube →</a>
            </div>
        </div>
    </div>
</section>
)
}
export default Resultados