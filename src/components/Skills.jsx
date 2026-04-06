const SKILL_GROUPS = [
  { label: 'Programming', items: 'Java (J2EE), Python, SQL (DB2, MySQL, PostgreSQL), JavaScript, HTML5, CSS3, PHP' },
  { label: 'Frameworks', items: 'JSF, Spring Boot, React, Node.js, Express.js, RESTful APIs' },
  { label: 'Tools', items: 'AWS (EC2), IBM RSA, WebSphere, Git, VMware, VS Code' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="rule" />
      <div className="section-label">
        <span className="section-num">04</span>
        <span className="section-title">Skills & Certifications</span>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((g, i) => (
          <div key={i} className="skill-group">
            <h4>{g.label}</h4>
            <p>{g.items}</p>
          </div>
        ))}
      </div>

      <div className="certs">
        <strong>Certifications:</strong> Cisco Python Essentials 1 · Introduction to Cybersecurity
      </div>
    </section>
  )
}