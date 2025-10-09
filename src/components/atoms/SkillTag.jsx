import PropTypes from 'prop-types'

export default function SkillTag({label}){
  return <span className="tag" aria-label={`Habilidad: ${label}`}>{label}</span>
}

SkillTag.propTypes = {
  label: PropTypes.string.isRequired
}
