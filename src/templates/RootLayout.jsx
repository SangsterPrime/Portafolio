import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react'
import ParticlesBackground from '../components/atoms/ParticlesBackground'

export default function RootLayout(){
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = ()=> setMenuOpen(v=>!v)
  const closeMenu = ()=> setMenuOpen(false)

  return (
    <div style={{position:'relative'}}>
      {/* Fondo de partículas */}
      <ParticlesBackground />
      <header className="site">
        <div className="container">
          <nav className="site">
            <NavLink to="/" className="brand" aria-label="Inicio">Mi Portafolio</NavLink>
            {/* Enlaces de escritorio */}
            <div className="nav-desktop">
              <NavLink to="/" end>Inicio</NavLink>
              <NavLink to="/about">Sobre mí</NavLink>
              <NavLink to="/projects">Proyectos</NavLink>
              <NavLink to="/news">Noticias</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
            </div>
            {/* Botón menú móvil (tres puntos) */}
            <div className="nav-mobile" style={{position:'relative'}}>
              <button
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                className="btn-ghost"
                onClick={toggleMenu}
                onKeyDown={(e)=>{ if(e.key === 'Escape') closeMenu() }}
              >
                <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
              </button>
              {menuOpen && (
                <>
                  {/* Overlay para cerrar al hacer clic fuera */}
                  <button
                    className="menu-overlay"
                    aria-label="Cerrar menú"
                    onClick={closeMenu}
                  />
                  <div
                    className="dropdown dropdown-mobile"
                    style={{position:'absolute', right:0, top:'100%', marginTop:8}}
                  >
                    <NavLink to="/" end onClick={closeMenu} className="dropdown-item">
                      <i className="fa-solid fa-house" aria-hidden="true"></i>
                      <span>Inicio</span>
                    </NavLink>
                    <NavLink to="/about" onClick={closeMenu} className="dropdown-item">
                      <i className="fa-solid fa-user" aria-hidden="true"></i>
                      <span>Sobre mí</span>
                    </NavLink>
                    <NavLink to="/projects" onClick={closeMenu} className="dropdown-item">
                      <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
                      <span>Proyectos</span>
                    </NavLink>
                    <NavLink to="/news" onClick={closeMenu} className="dropdown-item">
                      <i className="fa-solid fa-newspaper" aria-hidden="true"></i>
                      <span>Noticias</span>
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMenu} className="dropdown-item">
                      <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                      <span>Contacto</span>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
      <main className="container" role="main">
        <Outlet />
      </main>
      <footer className="site">
        <div className="container">
          <p>© {new Date().getFullYear()} Joel Sangster. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
