import { useState } from 'react'

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <section id="resume" className="section">
      <div className="rule" />
      <div className="gallery-toggle-header">
        <div className="section-label" style={{ marginBottom: 0 }}>
          <span className="section-num">06</span>
          <span className="section-title">Resume</span>
        </div>
        <button className="gallery-toggle-btn" onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'View Resume →'}
        </button>
      </div>
      {!open && (
        <p className="gallery-teaser">Click above to view my resume.</p>
      )}
      {open && (
        <div className="gallery-content">
          <div className="resume-embed">
            <iframe
              src="/Shahriar_CV.pdf"
              title="Resume"
              className="resume-embed-iframe"
            />
          </div>
        </div>
      )}
    </section>
  )
}