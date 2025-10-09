import PropTypes from 'prop-types'

export default function ProjectCard({project}){
  return (
    <article className="project-card card">
      {project.image && (
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          loading="lazy"
          onError={(e)=>{ e.currentTarget.src = '/vite.svg' }}
        />
      )}
      <div className="content">
        <h3>{project.title}</h3>
        <p className="mt-2">{project.description}</p>
        {project.tags?.length ? (
          <div className="tags">
            {project.tags.map((t)=> <span className="tag" key={t}>{t}</span>)}
          </div>
        ) : null}
        <div className="mt-3" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          {project.links?.demo && <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">Demo</a>}
          {project.links?.repo && <a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">Código</a>}
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      demo: PropTypes.string,
      repo: PropTypes.string,
    })
  }).isRequired
}
