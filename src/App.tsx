
import './App.css'
import UltrasonicProject from './components/UltrasonicProject'

const projects = [ 
  {
    title: 'Ultrasonic Parametric Speaker',
    category: 'Embedded Systems & Electronics',
    description:
      'Development of an ultrasonic audio system using ' +
      '40 kHz piezoelectric transducers, microcontroller-based ' +
      'signal generation, and electronic driver circuitry.',
    technologies: ['STM32', 'PWM', 'Circuit Design'],
  },
  {
    title: 'FPGA Countdown Timer',
    category: 'Digital Logic Design',
    description:
      'Designed a programmable countdown timer using ' +
      'Verilog HDL, button inputs, digital timing logic, ' +
      'and a seven-segment display.',
    technologies: ['Verilog', 'FPGA', 'Digital Logic'],
  },
  {
    title: 'Embedded Systems Development',
    category: 'Microcontrollers',
    description:
      'Developed and tested microcontroller-based ' +
      'applications involving digital I/O, ' +
      'hardware interfacing, and circuit debugging.',
    technologies: ['C', 'Arduino', 'STM32'],
  },
]


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

      
<header id="home" className="hero">
  <div className="hero-content">
    <span className="hero-intro">
      Welcome to my engineering portfolio
    </span>

    <h1>Yonatan Konstantine</h1>

    <h2>
      Electrical & Computer Engineer
    </h2>

    <p className="hero-description">
      Graduate engineering student at Worcester
      Polytechnic Institute with experience in
      embedded systems, electronics, hardware
      development, and technical problem-solving.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="hero-primary">
        Explore My Projects
      </a>

      <a href="#contact" className="hero-secondary">
        Get in Touch
      </a>
      
<a
  href="/Yonatan Konstantine Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-resume"
>
  View Resume ↗
</a>

    </div>
  </div>
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
  <h2>Featured Engineering Projects</h2>

  <div className="project-grid">
    {projects.map((project) => (
      <article
        className="project-card"
        key={project.title}
      >
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span className="tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>
<section id="ultrasonic-project">
  <UltrasonicProject />
</section>


        
<section id="skills">
  <h2>Technical Skills</h2>

  <div className="skills-grid">
    <div className="skill-category">
      <h3>Programming & Development</h3>
      <p>C, C++, Python, Verilog, Git</p>
    </div>

    <div className="skill-category">
      <h3>Embedded Systems & Hardware</h3>
      <p>
        STM32, Arduino, MSP430, FPGA,
        PWM, Circuit Design
      </p>
    </div>

    <div className="skill-category">
      <h3>Engineering Tools</h3>
      <p>
        Oscilloscopes, Multimeters,
        Circuit Prototyping, Hardware Debugging
      </p>
    </div>

    <div className="skill-category">
      <h3>IT & Technical Support</h3>
      <p>
        Troubleshooting, HaloITSM,
        Technical Documentation,
        Customer Support
      </p>
    </div>
  </div>
</section>


        
<section id="contact">
  <h2>Let's Connect</h2>

  <p>
    I'm interested in opportunities involving
    electrical and computer engineering,
    embedded systems, hardware development,
    and technical problem-solving.
  </p>

  <div className="contact-links">
    <a
      href="https://github.com/Yoni04"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-button"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.linkedin.com/in/yonatankonstantine"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-button"
    >
      LinkedIn ↗
    </a>

    <a
      href="mailto:yk204.konstantine@gmail.com"
      className="contact-button"
    >
      Email Me ✉
    </a>
  </div>
</section>
      </main>
    </div>
  )
}

export default App
