import { projects } from '../data/content'
import ProjectCard from '../components/molecules/ProjectCard'

export default function Projects(){
  return (
    <section>
      <h1>Proyectos</h1>
      <div className="grid grid-3 mt-4">
        {projects.map((p)=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
