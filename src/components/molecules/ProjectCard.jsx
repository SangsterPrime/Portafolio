import PropTypes from 'prop-types'

export default function ProjectCard({project}){
  return (
    <article className="project-card card">
      {project.image && (
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          loading="lazy"
          onError={(e)=>{ e.currentTarget.src = '/perfil.webp' }}
        />
      )}
      <div className="content">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2">{project.summary ?? project.description}</p>
        {project.tags?.length ? (
          <div className="tags">
            {project.tags.map((t)=> <span className="tag" key={t}>{t}</span>)}
          </div>
        ) : null}
        {/* Acciones se muestran en la página de listado (Descripción/Código) */}
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      demo: PropTypes.string,
      repo: PropTypes.string,
    })
  }).isRequired
}
