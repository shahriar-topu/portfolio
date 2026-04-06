import { useState, useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Leadership from './components/Leadership'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const NAV_ITEMS = [
  { label: 'Intro', id: 'intro' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

export default function App() {
  const [active, setActive] = useState('intro')

  useEffect(() => {
    const onScroll = () => {
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          setActive(item.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#intro" className="nav-logo">ST</a>
          <div className="nav-links">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Leadership />
        <Gallery />
        <Contact />

        <footer className="footer">
          <div className="rule" />
          <div className="footer-inner">
            <span className="footer-text">© 2026 Shahriar Topu</span>
            <span className="footer-text">Built with intention.</span>
          </div>
        </footer>
      </main>
    </>
  )
}