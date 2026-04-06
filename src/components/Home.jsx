import portrait from '../assets/me.jpeg'

export default function Home() {
  return (
    <section id="intro" className="hero">
      <p className="hero-issue">Portfolio — Issue No. 1 / 2026</p>
      <div className="hero-grid">
        <div>
          <h1 className="hero-name">Shahriar Topu</h1>
          <p className="hero-role">Software Engineer</p>
          <div className="hero-divider" />
          <p className="hero-desc">
            I'm a Software Engineer at the New Jersey Courts and a senior IT student
            at NJIT. I built an enterprise module with role-based access control, audit
            logging, feature toggling, all for systems that serve the state judiciary.
            On the side, I helped develop full-stack projects with React, Spring Boot, and AWS.
            I like solving real problems with clean code and enjoy photography on occiasion, 
            linked in gallery to be checked out.
          </p>
          <div className="hero-meta">
            <span>Paterson, NJ</span>
            <span className="dot">·</span>
            <a href="mailto:shahriar.careers@gmail.com">shahriar.careers@gmail.com</a>
            <span className="dot">·</span>
            <a href="https://github.com/shahriar-topu" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="dot">·</span>
            <a href="https://linkedin.com/in/shahriar-topu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={portrait} alt="Shahriar Topu" />
        </div>
      </div>
    </section>
  )
}