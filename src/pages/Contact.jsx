import { profile } from '../data/content'
import ContactForm from '../components/organisms/ContactForm'

export default function Contact(){
  return (
    <section className="grid">
      <div className="card" style={{padding:16}}>
        <h1>Contacto</h1>
        <p className="mt-3">Si te interesa colaborar o tienes una propuesta, completa el siguiente formulario.</p>
        <ContactForm />
      </div>
      <div className="card" style={{padding:16}}>
        <h2>También puedes escribirme</h2>
        <p className="mt-3"><a href={`mailto:${profile.links.email}`}>{profile.links.email}</a></p>
        <div className="mt-3" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
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
        </div>
      </div>
    </section>
  )
}
