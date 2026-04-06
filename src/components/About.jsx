export default function About() {
  return (
    <section id="about" className="section">
      <div className="rule" />
      <div className="section-label">
        <span className="section-num">01</span>
        <span className="section-title">About</span>
      </div>

      <div className="edu-header">
        <div>
          <h3 className="edu-school">New Jersey Institute of Technology</h3>
          <p className="edu-degree">B.S. in Information Technology — Web and Software Development</p>
        </div>
        <p className="edu-period">Sep 2022 — May 2026</p>
      </div>
      <p className="edu-coursework">
        Relevant coursework: Advanced Programming for IT, Database Design & Management, Computer Systems Security, System Administration, Systems Integration, IT Capstone Project, Computer Systems & Networks.
      </p>
    </section>
  )
}