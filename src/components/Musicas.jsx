import musicas from "../data/musicas";

function Musicas() {
  return (
    <section id="musicas" className="py-4">
      <div className="container">
        <h2 className="display-4 fw-bold text-center">Você já ouviu essa?</h2>
        <div className="row">
          {musicas.map((musica) => (
            <div key={musica.id} className="col-md-6 py-3">
              <div className="ratio ratio-16x9 hoverzada">
                <iframe
                  src={`https://www.youtube.com/embed/${musica.id}`}
                  title={musica.titulo}
                ></iframe>
              </div>
              <h3 className="fw-bold text-center py-3">{musica.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Musicas;
