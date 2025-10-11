import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/content'

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if(!project){
    return (
      <section className="card" style={{padding:16}}>
        <h1>Proyecto no encontrado</h1>
        <p className="mt-3">No pudimos encontrar el proyecto solicitado.</p>
        <div className="mt-4">
          <Link className="btn" to="/projects">Volver a proyectos</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="grid" style={{gap:24}}>
      <article className="card" style={{padding:16}}>
        {project.image && (
          <img
            src={project.image}
            alt={`Imagen del proyecto ${project.title}`}
            style={{width:'100%', aspectRatio:'16/9', objectFit:'cover', borderRadius:12}}
          />
        )}
        <h1 className="mt-4">{project.title}</h1>
        <p className="mt-3">{project.description}</p>
        {project.tags?.length ? (
          <div className="tags mt-3">
            {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        ) : null}

        <div className="mt-4" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <Link className="btn" to="/projects">Volver</Link>
          {project.links?.repo && (
            <a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">Código</a>
          )}
          {project.links?.demo && (
            <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">Sitio</a>
          )}
        </div>
      </article>
    </section>
  )
}
