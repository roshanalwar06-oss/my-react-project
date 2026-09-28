import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Thank you! Your message has been submitted.')
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  )
}

export default Contact