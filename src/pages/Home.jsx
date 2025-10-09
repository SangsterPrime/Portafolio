import Hero from '../components/organisms/Hero'
import { skills } from '../data/content'
import SkillTag from '../components/atoms/SkillTag'

export default function Home(){
  return (
    <div className="grid">
      <Hero />
      <section className="card" style={{padding:16}}>
        <h2>Habilidades</h2>
        <div className="tags mt-3">
          {skills.map((s)=> <SkillTag key={s} label={s} />)}
        </div>
      </section>
    </div>
  )
}
