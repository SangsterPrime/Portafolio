import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground(){
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: '#7c5cff' },
      links: { enable: true, color: '#7c5cff', opacity: 0.3, distance: 120, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: 'out' } },
      number: { value: 50, density: { enable: true, area: 800 } },
      opacity: { value: 0.4 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  }), [])

  if(!ready) return null

  return (
    <div style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none'}} aria-hidden>
      <Particles id="tsparticles" options={options} />
    </div>
  )
}
