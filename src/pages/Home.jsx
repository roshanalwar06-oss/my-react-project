function Home() {
  return (
    <section className="home-section">
      <p className="welcome">WELCOME</p>

      <h1>Hi, I'm a Web Developer</h1>

      <p>
        I build modern and responsive websites using React,
        JavaScript, HTML and CSS.
      </p>

      <button onClick={() => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  })
}}>
  View My Projects
</button>
    </section>
  )
}

export default Home