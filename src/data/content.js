import dontSleepImg from '../assets/dont-sleep.webp'
import vitalcoImg from '../assets/vitalco.webp'
import reactLogo from '../assets/react.svg'

export const profile = {
  name: 'Joel Sangster',
  role: 'estudiante de ingeniería en informática y Desarrollador Frontend',
  location: 'Santiago, Chile',
  summary: 'Estudiante de Ingeniería en Informática y desarrollador Frontend especializado en React y JavaScript. Creo interfaces accesibles y responsivas, integro APIs y aplico buenas prácticas de rendimiento y mantenibilidad.',
  avatar: '/vite.svg',
  links: {
    github: 'https://github.com/SangsterPrime',
    linkedin: 'https://www.linkedin.com/in/joelsangster',
    email: 'jo.sangster@duocuc.cl',
  },
}

// Recursos locales procesados por Vite (ubicados en src/assets)

export const skills = [
  'JavaScript', 'React', 'HTML', 'CSS', 'Vite',
]

export const projects = [
  {
    id: 'p1',
    title: 'Distribuidora Oeste',
    description: 'Repositorio del proyecto Distribuidora Oeste: código fuente y documentación.',
    image: vitalcoImg,
    tags: ['Proyecto', 'GitHub'],
    links: { demo: '#', repo: 'https://github.com/SangsterPrime/Distribuidora-Oeste' },
  },
  {
    id: 'dont-sleep',
    title: "Don't Sleep",
    description: "Repositorio del proyecto Don't Sleep: código fuente y documentación.",
    image: dontSleepImg,
    tags: ['Proyecto', 'GitHub'],
    links: { demo: '#', repo: 'https://github.com/SangsterPrime/Don-t-Sleep' },
  },
  {
    id: 'altar-oracion',
    title: 'Ministerio Evangélico Altar Oración',
    description: 'Repositorio del proyecto Ministerio Evangélico Altar Oración: código fuente y documentación.',
    image: reactLogo,
    tags: ['Proyecto', 'GitHub'],
    links: { demo: '#', repo: 'https://github.com/SangsterPrime/Ministerio-Evang-lico-Altar-Oraci-n' },
  },
]
