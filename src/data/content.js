import dontSleepImg from '../assets/dont-sleep.webp'
import vitalcoImg from '../assets/vitalco.webp'
import reactLogo from '../assets/react.svg'

export const profile = {
  name: 'Joel Sangster',
  role: 'estudiante de ingeniería en informática y Desarrollador Frontend',
  location: 'Santiago, Chile',
  summary: 'Estudiante de Ingeniería en Informática y desarrollador Frontend especializado en React y JavaScript. Creo interfaces accesibles y responsivas, integro APIs y aplico buenas prácticas de rendimiento y mantenibilidad.',
  avatar: '/perfil.webp',
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
    summary: 'Catálogo estático con carrito y pedido por WhatsApp (sin frameworks ni servidor).',
    description: 'Distribuidora Oeste - VitalCO: catálogo estático con carrito y pedido por WhatsApp. Incluye catálogo por categorías, página de Promociones, carrito con persistencia en localStorage, toasts al agregar, imágenes con skeleton y checkout por WhatsApp con mensaje inteligente (detecta móvil/escritorio). Precios en COP con IVA incluido. Estructura simple (HTML/CSS/JS) pensada para desplegar sin backend.',
    image: vitalcoImg,
    tags: ['Proyecto', 'GitHub'],
    links: { demo: 'https://vitalco.cl', repo: 'https://github.com/SangsterPrime/Distribuidora-Oeste' },
  },
  {
    id: 'dont-sleep',
    title: "Don't Sleep",
    summary: 'Evita suspensión y apagado de pantalla en Windows desde PowerShell.',
    description: 'Script de PowerShell que evita que el PC entre en suspensión o apague la pantalla. Utiliza la API Win32 SetThreadExecutionState con las banderas ES_CONTINUOUS | ES_SYSTEM_REQUIRED | ES_DISPLAY_REQUIRED para mantener activo el sistema y el display. Ejecuta un bucle con Start-Sleep (60 s) y se detiene con Ctrl+C, restaurando luego el comportamiento de energía.',
    image: dontSleepImg,
    tags: ['Proyecto', 'GitHub'],
    links: { repo: 'https://github.com/SangsterPrime/Don-t-Sleep' },
  },
  {
    id: 'altar-oracion',
    title: 'Ministerio Evangélico Altar Oración',
    summary: 'Sitio informativo del ministerio con secciones de Videos, Fotos y Voluntariado.',
    description: 'Sitio web del Ministerio Evangélico Altar Oración que brinda apoyo espiritual y material. Contiene secciones de Videos y Fotos alimentadas desde data/media.json, además de Voluntariado. Incluye componentes reutilizables (header/footer) cargados dinámicamente y botones de acción por WhatsApp con mensajes prellenados para aportes económicos, pedidos de oración y donaciones en mercadería. Para desarrollo local, se recomienda servir con http-server o Python por uso de fetch().',
    image: reactLogo,
    tags: ['Proyecto', 'GitHub'],
    links: { demo: 'https://altardeoracion.cl', repo: 'https://github.com/SangsterPrime/Ministerio-Evang-lico-Altar-Oraci-n' },
  },
]
