import { Outlet, NavLink } from 'react-router-dom'

export default function RootLayout(){
  return (
    <div>
      <header className="site">
        <div className="container">
          <nav className="site">
            <NavLink to="/" className="brand" aria-label="Inicio">Mi Portafolio</NavLink>
            <div>
              <NavLink to="/" end>Inicio</NavLink>
              <NavLink to="/about">Sobre mí</NavLink>
              <NavLink to="/projects">Proyectos</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
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
