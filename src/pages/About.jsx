import { profile } from '../data/content'

export default function About(){
  return (
    <section className="grid">
      <div className="card" style={{padding:16}}>
        <h1>Sobre mí</h1>
        <p className="mt-3">{profile.summary}</p>
        <div className="mt-4" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          {profile.links.github && (
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" style={{color:'#ffffff'}}></i>
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" style={{color:'#0A66C2'}}></i>
              LinkedIn
            </a>
          )}
          {profile.links.email && (
            <a className="btn" href={`mailto:${profile.links.email}`} aria-label="Gmail">
              <i className="fa-solid fa-envelope" style={{color:'#EA4335'}}></i>
              Gmail
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
