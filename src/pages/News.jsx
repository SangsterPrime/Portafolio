import { noticias } from '../data/noticia'

export default function News() {
  return (
    <section>
      <h1>Noticias</h1>
      <p className="mt-3">Últimas noticias relevantes sobre ciberseguridad y tecnología</p>
      
      <div className="grid grid-2 mt-6">
        {noticias.map((noticia) => (
          <article key={noticia.id} className="card" style={{padding: 16}}>
            {noticia.imagen && (
              <img 
                src={noticia.imagen} 
                alt={`Imagen de ${noticia.titulo}`}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}
              />
            )}
            
            <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px'}}>
              <span className="tag">{noticia.categoria}</span>
              <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>{noticia.fuente} • {noticia.fecha}</span>
            </div>
            
            <h2 style={{fontSize: '1.25rem', marginBottom: '12px'}}>{noticia.titulo}</h2>
            <p className="mt-2">{noticia.resumen}</p>
            
            <div className="mt-4">
              <a 
                className="btn primary" 
                href={noticia.enlace} 
                target="_blank" 
                rel="noreferrer"
                aria-label={`Leer noticia completa: ${noticia.titulo}`}
              >
                Leer más
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}