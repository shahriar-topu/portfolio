import coursifyImg from '../assets/coursify.png'
import towImg from '../assets/TOW.png'

const PROJECTS = [
  {
    name: 'Coursify',
    subtitle: 'AI Schedule Builder',
    link: 'https://coursify1.com/',
    period: 'Apr 2025 — Jun 2025',
    stack: 'React · Spring Boot · MySQL',
    img: coursifyImg,
    description: 'An AI-powered scheduling platform that generates personalized course plans. Deployed a lightweight intrusion detection layer and migrated from Google Cloud SQL to self-hosted infrastructure, cutting costs by 97%.',
  },
  {
    name: 'Taste of Worlds',
    subtitle: 'Recipe Discovery App',
    link: 'https://github.com/Ismail-Shaikh03/Taste-of-Worlds',
    period: 'Dec 2024 — Jan 2025',
    stack: 'Node.js · Express.js · MySQL · AWS EC2',
    img: towImg,
    description: 'A recipe discovery web app with a catalog of 500+ items, RESTful APIs on EC2, and hardened security through scoped MySQL permissions and Security Group configuration.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="rule" />
      <div className="section-label">
        <span className="section-num">02</span>
        <span className="section-title">Projects</span>
      </div>

      <div className="project-cards">
        {PROJECTS.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-card-img">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="project-card-body">
              <h3 className="project-card-name">{p.name} <span>– {p.subtitle}</span></h3>
              <p className="project-card-desc">{p.description}</p>
              <div className="project-card-footer">
                <span className="project-stack">{p.stack}</span>
                <span className="project-period">{p.period}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}