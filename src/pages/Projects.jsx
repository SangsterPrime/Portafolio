import { projects } from '../data/content'
import ProjectCard from '../components/molecules/ProjectCard'
import { Link } from 'react-router-dom'

export default function Projects(){
  return (
    <section>
      <h1>Proyectos</h1>
      <div className="grid grid-3 mt-4">
        {projects.map((p)=> (
          <div key={p.id}>
            <ProjectCard project={p} />
            <div className="mt-3" style={{display:'flex', gap:12}}>
              <Link className="btn primary" to={`/projects/${p.id}`}>Descripción</Link>
              {p.links?.repo && <a className="btn" href={p.links.repo} target="_blank" rel="noreferrer">Código</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
