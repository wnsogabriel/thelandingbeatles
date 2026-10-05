import { useState } from "react";
import curiosidades from "../data/curiosidades";

function Curiosidades() {
  const [aberta, setAberta] = useState(null);

  return (
    <section id="curiosidades">
      <div className="accordion">
        <div className="container py-3">
          {curiosidades.map((item, pos) => (
            <div className="accordion-item" key={item.pergunta}>
              <button
                className={`accordion-button ${aberta !== pos ? "collapsed" : ""}`}
                type="button"
                onClick={() => setAberta(aberta === pos ? null : pos)}
              >
                {item.pergunta}
              </button>
              <div
                className={`accordion-collapse collapse ${aberta === pos ? "show" : ""}`}
              >
                <div className="accordion-body">{item.resposta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Curiosidades;
