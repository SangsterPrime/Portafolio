import { profile } from '../data/content'

export default function About(){
  return (
    <div className="about-page">
      <div className="card" style={{padding:24, marginBottom:24}}>
        <h1>Sobre mí</h1>
        <div className="hero-grid" style={{gap:24, alignItems:'center'}}>
          <img 
            src={profile.avatar} 
            alt="Joel Sangster - Foto de perfil" 
            className="profile-photo"
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid var(--brand)'
            }}
          />
          <div>
            <h2>{profile.name}</h2>
            <p style={{fontSize:'1.2em', color:'var(--brand)', margin:'8px 0'}}>{profile.role}</p>
            <p><strong>Edad:</strong> 26 años (21 de abril, 1999)</p>
            <p><strong>Ubicación:</strong> {profile.location}</p>
            <p><strong>Teléfono:</strong> +56 9 5739 5007</p>
          </div>
        </div>
      </div>

      <div className="card" style={{padding:24, marginBottom:24}}>
        <h2>Perfil Profesional</h2>
        <p style={{lineHeight:1.6, textAlign:'justify'}}>
          Estudiante de segundo año de Ingeniería en Informática en DuocUC Plaza Oeste con 
          sólida base en tecnologías de la información, desarrollo de software y ciberseguridad. 
          Experiencia práctica en sistemas Linux y herramientas de seguridad informática. Busco 
          oportunidades para aplicar mis conocimientos técnicos en el área de informática y 
          ciberseguridad, contribuyendo al crecimiento tecnológico de la organización. 
          Comprometido con el aprendizaje continuo y la excelencia en el desarrollo de soluciones 
          tecnológicas seguras.
        </p>
      </div>

      <div className="grid" style={{gap:24}}>
        <div className="card" style={{padding:24}}>
          <h2>Educación</h2>
          <div style={{marginBottom:20}}>
            <h3 style={{color:'var(--brand)', marginBottom:8}}>Ingeniería en Informática</h3>
            <p style={{margin:'4px 0', fontWeight:500}}>DuocUC Plaza Oeste (2025 - Presente)</p>
            <p style={{margin:'4px 0', color:'var(--text-secondary)'}}>En curso - 2do año</p>
          </div>
          
          <h4 style={{marginTop:20, marginBottom:12}}>Competencias Académicas:</h4>
          <ul style={{paddingLeft:20, lineHeight:1.6}}>
            <li>Programación y desarrollo de software</li>
            <li>Base de datos y sistemas de información</li>
            <li>Análisis y diseño de sistemas</li>
            <li>Redes y telecomunicaciones</li>
            <li>Ciberseguridad y seguridad informática</li>
            <li>Metodologías de desarrollo ágil</li>
            <li>Gestión de proyectos informáticos</li>
            <li>Administración de sistemas Linux</li>
            <li>Integración de APIs</li>
          </ul>
        </div>

        <div className="card" style={{padding:24}}>
          <h2>Habilidades Técnicas</h2>
          
          <div style={{marginBottom:20}}>
            <h4 style={{color:'var(--brand)', marginBottom:8}}>Lenguajes de Programación</h4>
            <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
              {['Java', 'Python', 'C#', 'JavaScript', 'SQL', 'HTML/CSS'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div style={{marginBottom:20}}>
            <h4 style={{color:'var(--brand)', marginBottom:8}}>Herramientas</h4>
            <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
              {['GitHub', 'MySQL', 'PostgreSQL', 'Windows/Linux', 'Parrot OS', 'Visual Studio Code', 'Scrum/Agile'].map(tool => (
                <span key={tool} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{color:'var(--brand)', marginBottom:8}}>Habilidades Blandas</h4>
            <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
              {['Trabajo en equipo', 'Comunicación', 'Pensamiento crítico', 'Adaptabilidad', 'Seguridad informática'].map(soft => (
                <span key={soft} className="skill-tag" style={{backgroundColor:'var(--background-secondary)'}}>{soft}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{padding:24, marginTop:24}}>
        <h2>Proyectos Académicos</h2>
        <div style={{display:'grid', gap:16}}>
          <div style={{borderLeft:'3px solid var(--brand)', paddingLeft:16}}>
            <h3 style={{marginBottom:8}}>Sistema de Gestión Académica</h3>
            <p>Desarrollo de aplicación web con Java, MySQL y HTML/CSS.</p>
          </div>
          <div style={{borderLeft:'3px solid var(--brand)', paddingLeft:16}}>
            <h3 style={{marginBottom:8}}>Herramienta de Análisis de Vulnerabilidades</h3>
            <p>Script en Python para escaneo de red en Parrot OS.</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{gap:24, marginTop:24}}>
        <div className="card" style={{padding:24}}>
          <h2>Certificaciones y Cursos</h2>
          <ul style={{paddingLeft:20, lineHeight:1.8}}>
            <li>Fundamentos de Python 1 (Credly)</li>
            <li>Fundamentos de Programación</li>
            <li>Base de Datos Relacionales</li>
            <li>Desarrollo Web Front-end</li>
            <li>Metodologías Ágiles de Desarrollo</li>
            <li>Seguridad Informática Básica</li>
            <li>Administración básica de sistemas Linux</li>
          </ul>
        </div>

        <div className="card" style={{padding:24}}>
          <h2>Idiomas</h2>
          <div style={{display:'grid', gap:12}}>
            <div>
              <strong>Español:</strong> Nativo
            </div>
            <div>
              <strong>Inglés:</strong> Intermedio (lectura técnica)
            </div>
          </div>

          <h2 style={{marginTop:24}}>Disponibilidad</h2>
          <p style={{lineHeight:1.6}}>
            Disponible para prácticas profesionales, horario flexible, 
            modalidad presencial o remota, incorporación inmediata.
          </p>
        </div>
      </div>

      <div className="card" style={{padding:24, marginTop:24}}>
        <h2>Objetivos Profesionales</h2>
        <p style={{lineHeight:1.6, textAlign:'justify'}}>
          Busco integrarme a un equipo de desarrollo o ciberseguridad donde pueda aplicar mis 
          conocimientos en informática y seguridad, contribuir con soluciones innovadoras y 
          continuar mi crecimiento profesional en el área tecnológica.
        </p>
      </div>

      <div className="card" style={{padding:24, marginTop:24, textAlign:'center'}}>
        <h2>Conectemos</h2>
        <p style={{marginBottom:16}}>¿Interesado en colaborar? ¡Hablemos!</p>
        <div style={{display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap'}}>
          {profile.links.github && (
            <a className="btn primary" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" style={{color:'#ffffff'}}></i>
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a className="btn primary" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" style={{color:'#0A66C2'}}></i>
              LinkedIn
            </a>
          )}
          <a className="btn primary" href={`mailto:${profile.links.email}`} aria-label="Email">
            <i className="fa-solid fa-envelope" style={{color:'#D44638'}}></i>
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
