
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">YK.</a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home">
        <h1>Yonatan Konstantine</h1>
        <p>Electrical & Computer Engineer</p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am pursuing my master's degree in
            Electrical and Computer Engineering at
            Worcester Polytechnic Institute.
          </p>
          <p>
            My interests include embedded systems,
            electronics, hardware development,
            and information technology.
          </p>
        </section>

        <section id="projects">
          <h2>Engineering Projects</h2>
          <p>
            Explore my work in embedded systems,
            electronics, and hardware development.
          </p>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <p>
            Embedded Systems | Circuit Design |
            Programming | Information Technology
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Interested in connecting? Find my
            professional information here.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
