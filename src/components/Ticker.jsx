import ticker from "../data/ticker";

function Ticker() {
    return (
        <section className="ticker">
            <div className="ticker-fita">
                {[...ticker, ...ticker, ...ticker, ...ticker, ...ticker,].map((musica, posicao) => (
                    <div key={posicao}>{musica.nome}</div>
                ))}
            </div>
        </section>
    )
}
export default Ticker;