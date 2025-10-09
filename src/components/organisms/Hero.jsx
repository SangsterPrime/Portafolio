import { profile } from '../../data/content'

export default function Hero(){
  return (
    <section className="hero">
      <div>
        <h1>{profile.name}</h1>
        <h2 className="mt-2" style={{color:'var(--muted)'}}>{profile.role} · {profile.location}</h2>
        <p className="mt-3">{profile.summary}</p>
        <div className="cta mt-4">
          <a className="btn primary" href="/projects">Ver proyectos</a>
          <a className="btn" href="/contact">Contactar</a>
        </div>
      </div>
    </section>
  )
}
