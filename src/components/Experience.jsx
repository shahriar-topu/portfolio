const BULLETS = [
  'Architected a Maintenance module in JSF and Java enabling management of 100+ system-critical lookup tables through confirmation-based workflows.',
  'Implemented role-based access control across JSF managed beans, restricting sensitive screens to authorized judiciary staff.',
  'Built environment-specific feature toggling via property files to gate admin tools by environment, preventing test interfaces from reaching production.',
  'Developed an audit logging system capturing user IDs, timestamps, and before/after data states for all code table modifications.',
  'Enhanced the Judgement of Conviction application with updated penalty logic to reflect new state regulations.',
  'Traced and optimized DAO–EJB call flows, adding logging to pinpoint bottlenecks in database operations.',
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="rule" />
      <div className="section-label">
        <span className="section-num">02</span>
        <span className="section-title">Experience</span>
      </div>

      <div className="job-header">
        <div>
          <h3 className="job-role">Software Engineer</h3>
          <p className="job-company">New Jersey Courts — Trenton, NJ</p>
        </div>
        <p className="job-period">Jun 2025 — Present</p>
      </div>
      <ul className="bullet-list">
        {BULLETS.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </section>
  )
}