import menu from "../data/menu";

function Footer() {

    return (
        <footer className="footer-beatles">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <img className="img-fluid logo-footer" src="/img/logo-branca.png" alt="Logo The Beatles" />
                    </div>
                    <div className="col-md-5">
                        <p>
                            <b>Trabalho de Front-end 2</b> - Banda<br />Desenvolvido por Enzo
                            Gabriel.<br />Todos os direitos reservados © 2026
                            - The Beatles
                        </p>
                    </div>
                    <div className="col-md-5">
                        <ul className="list-unstyled links-footer">
                            {menu.map(item => (
                                <li key={item.nome} className="nav-item">
                                    <a className="nav-link" href={item.url}>{item.nome}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
