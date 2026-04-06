export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Will be connected to a real service in the final build)')
  }

  return (
    <section id="contact" className="section">
      <div className="rule" />
      <div className="section-label">
        <span className="section-num">09</span>
        <span className="section-title">Contact</span>
      </div>

      <div className="contact-grid">
        <div>
          <p className="contact-intro">
            Looking to collaborate, have an opportunity, or just want to connect — I'd love to hear from you.
          </p>
          <div className="contact-side-links">
            <a href="https://github.com/shahriar-topu" target="_blank" rel="noopener noreferrer">→ GitHub</a>
            <a href="https://linkedin.com/in/shahriar-topu" target="_blank" rel="noopener noreferrer">→ LinkedIn</a>
            <a href="mailto:shahriar.careers@gmail.com">→ shahriar.careers@gmail.com</a>
            <a href="tel:8623879434">→ 862-387-9434</a>
          </div>
        </div>
        <div className="contact-form" as="form" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label>Message</label>
            <textarea placeholder="What's on your mind?" required />
          </div>
          <button type="submit" onClick={handleSubmit}>Send Message →</button>
        </div>
      </div>
    </section>
  )
}