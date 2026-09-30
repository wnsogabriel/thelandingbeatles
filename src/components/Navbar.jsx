import menu from "../data/menu";
import { useState } from "react";


function Navbar() {
    const [ativo, setAtivo] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-beatles sticky-top py-0">
            <div className="container">
                <a className="navbar-brand" href="#inicio">
                    <img src="/img/logo-branca.png" alt="The Beatles" height="80" />
                </a>

                {/*  Menu Hambúrguer celular */}
                <button className="navbar-toggler" onClick={() => setAtivo(!ativo)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*  Lista de Links que encolhem no celular */}
                <div className={`collapse navbar-collapse ${ativo ? "show" : ""}`} id="menuNavegacao">
                    <ul className="navbar-nav ms-auto">
                        {menu.map(item => (
                            <li key={item.nome} className="nav-item">
                                <a className="nav-link" href={item.url}>{item.nome}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
