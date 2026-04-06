import { useState } from 'react'

const PHOTOS = [
  { title: 'Urban Geometry', meta: 'NJ · 2025', span: 'wide' },
  { title: 'Light Study', meta: 'Golden Hour', span: 'tall' },
  { title: 'Street View', meta: 'NYC · 2025', span: '' },
  { title: 'Architecture', meta: 'Cityscape', span: '' },
  { title: 'Abstract', meta: 'Experimental', span: 'wide' },
  { title: 'Composition', meta: 'Personal', span: '' },
]

export default function Gallery() {
  const [open, setOpen] = useState(false)

  return (
    <section id="gallery" className="section">
      <div className="rule" />
      <div className="gallery-toggle-header">
        <div className="section-label" style={{ marginBottom: 0 }}>
          <span className="section-num">08</span>
          <span className="section-title">Gallery</span>
        </div>
        <button className="gallery-toggle-btn" onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'View Photography →'}
        </button>
      </div>
      {!open && (
        <p className="gallery-teaser">A selection of personal photography. Click above to browse.</p>
      )}
      {open && (
        <div className="gallery-content">
          <p className="gallery-intro">
            A selection of photographs. Replace these placeholders with your own images.
          </p>
          <div className="gallery-grid">
            {PHOTOS.map((p, i) => (
              <div key={i} className={`gal-item ${p.span}`}>
                <span>{p.title}</span>
                <span className="gal-title">{p.meta}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}