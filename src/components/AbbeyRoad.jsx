function AbbeyRoad() {
    return (
        <section id="abbey-road">
            <img src="/img/abbey-road-vazia.png" className="img-fluid" alt="Foto da Abbey Road vazia" />
            <div className="container">
                <h2 className="display-5 fw-bold text-center py-3">Você reconhece este lugar?</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p className="paragrafo fs-5 text-justificado">Mesmo totalmente vazia, essa faixa de pedestres em Londres é instantaneamente reconhecível. Em agosto de 1969, a polícia parou o trânsito por apenas 10 minutos. Foi o tempo exato para um fotógrafo subir em uma escada e registrar 6 cliques rápidos. O melhor ângulo virou a capa do álbum <strong>Abbey Road</strong> eternizando os Beatles e transformando uma rua comum em patrimônio histórico mundial.</p>
                        <a className="btn btn-dark btn-sm px-4" href="#curiosidades" role="button">Descobrir os segredos da foto ↓</a>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/album-disco.png" className="img-fluid" alt="Foto do album e do disco abbey road" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AbbeyRoad