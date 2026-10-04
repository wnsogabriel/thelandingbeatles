function Hero() {
    return (
        <section id="inicio">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="destaque">
                            Beatles.
                        </h1>
                        <p className="subtitle-hero">Talvez você já os conheça sem saber.</p>
                        <p className="paragrafo">
                            Do feed das suas redes sociais aos maiores clássicos do cinema: as músicas que você já ama têm a mesma assinatura. Venha descobrir quais são.
                        </p>
                        <a className="btn btn-dark" href="#musicas">Quais músicas eu já conheço?</a>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="/img/foto-da-hero.png" alt="banda posando em preto e branco" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero