
import './App.css'
import { useEffect, useState } from 'react'


const projects = [ 
  {
    title: 'Project Early Bird',
    category: 'Ultrasonic Alarm Clock',
    
overview:
  'Project Early Bird was developed around the idea ' +
  'of creating a more targeted alarm experience using ' +
  'directional sound. The engineering work focused ' +
  'on generating ultrasonic signals, integrating ' +
  'piezoelectric transducers, and developing the ' +
  'electronic circuitry needed to drive them. ' +
  'The prototype involved experimenting with ' +
  'microcontroller PWM generation, MOSFET switching, ' +
  'and gate-driver circuitry while troubleshooting ' +
  'hardware integration challenges.',
  
challenges: [
  {
    title: 'Signal Generation',
    solution:
      'Developed microcontroller-based PWM generation ' +
      'to drive a 40 kHz ultrasonic carrier for ' +
      'audio modulation.',
  },
  {
    title: 'Driver Circuit Development',
    solution:
      'Experimented with MOSFET switching and ' +
      'gate-driver circuitry to achieve reliable ' +
      'operation of the ultrasonic transducer array.',
  },
  {
    title: 'Hardware Troubleshooting',
    solution:
      'Investigated signal-generation, wiring, ' +
      'and power-delivery issues through iterative ' +
      'circuit testing and debugging.',
  },
],
result:
  'Successfully demonstrated directional audible ' +
  'sound generation using an ultrasonic transducer ' +
  'array, validating the core audio concept behind ' +
  'Project Early Bird.',


    technologies: ['STM32', 'PWM', 'Circuit Design'],    
    highlights: [
  '40 kHz ultrasonic transducer integration',
  'STM32-based PWM signal generation',
  'Gate driver and MOSFET switching circuitry',
  'Circuit prototyping and hardware debugging',
],
images: [
  {
    src: '/projects/earlybird/EarlyBird1.png',
    caption: 'Project Early Bird — Design visualization',
  },
  {
    src: '/projects/earlybird/EarlyBird2.png',
    caption: 'Project Early Bird — Prototype',
  },
],

  },
  {title: 'SMARTZLE',
    category: 'Sustainable Interactive Electronics & Product Design',
overview:
  'SMARTZLE is an interactive educational puzzle ' +
  'designed to combine physical gameplay with ' +
  'electronic feedback. The project integrates ' +
  'an Arduino Nano, conductive puzzle pieces, ' +
  'GPIO expansion, and an LCD display to explore ' +
  'how embedded electronics can support an ' +
  'engaging, reusable learning experience.',
  
challenges: [
  {
    title: 'Electronic Puzzle Detection',
    solution:
      'Designed an electronic sensing approach ' +
      'using conductive puzzle pieces to detect ' +
      'physical interactions with the game board.',
  },
  {
    title: 'Microcontroller Integration',
    solution:
      'Integrated an Arduino Nano with GPIO ' +
      'expansion to accommodate multiple puzzle ' +
      'inputs and support the interactive system.',
  },
  {
    title: 'User Feedback',
    solution:
      'Incorporated an LCD display to communicate ' +
      'game information and provide feedback ' +
      'during user interaction.',
  },
  {
    title: 'Physical Prototype Development',
    solution:
      'Combined electronic components with ' +
      'the physical puzzle design while addressing ' +
      'mechanical and electrical integration.',
  },
],
result:
  'Developed an interactive educational puzzle ' +
  'prototype combining physical gameplay, ' +
  'electronic sensing, and microcontroller-based ' +
  'feedback.',

    technologies: [
      'Arduino Nano',
      'C/C++',
      'GPIO Expander',
      'LCD Display',
      'Circuit Prototyping',
    ],    
  highlights: [
  'Arduino Nano microcontroller integration',
  'Conductive puzzle-piece detection',
  'GPIO expansion for multiple inputs',
  'LCD-based interactive feedback',
],
images: [
  {
    src: '/projects/smartzle/Smartzle1.png',
    caption: 'SMARTZLE — 3D design rendering',
  },
  {
    src: '/projects/smartzle/Screenshot Smartzle Real.png',
    caption: 'SMARTZLE — Physical prototype',
  },
],
  },
    
]



function App() {
  const [expandedProject, setExpandedProject] =
    useState<string | null>(null)
const [selectedImage, setSelectedImage] = useState<{
  src: string;
  caption: string;
} | null>(null);

const [showBackToTop, setShowBackToTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 400);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

useEffect(() => {
  if (!selectedImage) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSelectedImage(null);
      return;
    }

    const currentProject = projects.find((project) =>
      project.images.some((image) => image.src === selectedImage.src)
    );

    if (!currentProject) return;

    const currentIndex = currentProject.images.findIndex(
      (image) => image.src === selectedImage.src
    );

    if (event.key === 'ArrowRight') {
      const nextIndex =
        (currentIndex + 1) % currentProject.images.length;

      setSelectedImage(currentProject.images[nextIndex]);
    }

    if (event.key === 'ArrowLeft') {
      const previousIndex =
        (currentIndex - 1 + currentProject.images.length) %
        currentProject.images.length;

      setSelectedImage(currentProject.images[previousIndex]);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [selectedImage]);

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

<p className="hero-introduction">
  Electrical and Computer Engineering graduate student
  with hands-on experience in embedded systems,
  electronics prototyping, and hardware debugging.
  Passionate about turning engineering concepts into
  functional solutions through thoughtful design,
  experimentation, and problem-solving.
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
  My engineering journey has been shaped by a curiosity
  for how technology works and a desire to turn ideas
  into practical solutions. As an Electrical and Computer
  Engineering graduate student at Worcester Polytechnic
  Institute, I've developed experience across embedded
  systems, electronics, programming, and hands-on
  prototyping.
</p>

<p>
  Outside the classroom, my experience working in IT
  support has strengthened my ability to troubleshoot
  complex problems, communicate technical concepts,
  and collaborate with people from different
  backgrounds. I bring that same analytical and
  people-focused approach to engineering challenges.
</p>

<p>
  Whether I'm developing an ultrasonic alarm clock,
  integrating electronics into an interactive product,
  or learning a new technology, I enjoy the process
  of experimenting, refining designs, and building
  something that works.
</p>
        </section>

        

<section id="projects">
  <h2>Featured Engineering Projects</h2>

  <div className="project-grid">
    {projects.map((project) => {
      const isExpanded =
        expandedProject === project.title

      return (
        <article
          className={`project-card ${
            isExpanded ? 'expanded' : ''
          }`}
          key={project.title}
        >
          <button
            type="button"
            className="project-toggle"
            aria-expanded={isExpanded}
            onClick={() =>
              setExpandedProject(
                isExpanded ? null : project.title
              )
            }
          >
            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.overview}</p>

            <span className="expand-label">
              {isExpanded
                ? 'Hide Details −'
                : 'Explore Project +'}
            </span>
          </button>

          <div className="project-technologies">
            {project.technologies.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {isExpanded && (
            <div className="expanded-content">
              <h4>Project Overview</h4>
              <p>{project.overview}</p>

              
<h4>Technical Highlights</h4>

<ul className="project-highlights">
  {project.highlights.map((highlight) => (
    <li key={highlight}>
      {highlight}
    </li>
  ))}
</ul>
{project.challenges && 
(  <div className="project-engineering">
    <h4>Engineering Challenges & Solutions</h4>

    {project.challenges?.map((challenge) => (
      <div
        className="engineering-challenge"
        key={challenge.title}
      >
        <h5>{challenge.title}</h5>
        <p>{challenge.solution}</p>
      </div>
    ))}

    <h4>Project Results</h4>
    <p>{project.result}</p>
  </div>
)}



              
<div className="project-gallery">
  <h4>Prototype & Development</h4>

  <div className="project-gallery-grid">
    {project.images.map((image) => (
      <figure
        className="project-figure"
        key={image.src}
      >        

<button
  type="button"
  className="project-image-link"
  onClick={() => setSelectedImage(image)}
  aria-label={`View full-size image: ${image.caption}`}
>
  <img
    src={image.src}
    alt={image.caption}
    className="project-photo"
    loading="lazy"
  />
</button>

        <figcaption>
          {image.caption}
        </figcaption>
      </figure>
    ))}
  </div>
</div>

            </div>
          )}
        </article>
      )
    })}
  </div>
</section>



        

<section id="skills">
  <h2>Technical Skills</h2>

  <div className="skills-grid">
    <div className="skill-category">
      <h3>Programming & Development</h3>
      <p>
        C, C++, Python, Verilog, Git,
        GitHub, VS Code
      </p>
    </div>

    <div className="skill-category">
      <h3>Embedded Systems & Hardware</h3>
      <p>
        STM32, Arduino, MSP430, FPGA,
        PWM, Microcontroller Programming,
        Circuit Design
      </p>
    </div>

    <div className="skill-category">
      <h3>Electronics & Engineering Tools</h3>
      <p>
        Oscilloscopes, Multimeters,
        Circuit Prototyping, MOSFETs,
        Gate Drivers, Hardware Debugging
      </p>
    </div>

    <div className="skill-category">
      <h3>IT & Technical Support</h3>
      <p>
        Technical Troubleshooting,
        HaloITSM, Technical Documentation,
        Knowledge Base Management,
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
    
<p className="contact-email">
  Or email me directly at:{' '}
  <a href="mailto:yk204.konstantine@gmail.com">
    yk204.konstantine@gmail.com
  </a>
</p>

  </div>
</section>
      </main>
       {/* Project Image Lightbox */}
    {selectedImage && (
      <div
        className="image-lightbox"
        role="presentation"
        onClick={() => setSelectedImage(null)}
      >
        <div
          className="lightbox-content"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.caption}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          
<div className="lightbox-image-wrapper">
  <button
    type="button"
    className="lightbox-arrow lightbox-prev"
    aria-label="Previous image"
    onClick={() => {
      const project = projects.find((project) =>
        project.images.some(
          (image) => image.src === selectedImage.src
        )
      );

      if (!project) return;

      const index = project.images.findIndex(
        (image) => image.src === selectedImage.src
      );

      setSelectedImage(
        project.images[
          (index - 1 + project.images.length) %
            project.images.length
        ]
      );
    }}
  >
    ‹
  </button>

  <img
    src={selectedImage.src}
    alt={selectedImage.caption}
  />

  <button
    type="button"
    className="lightbox-arrow lightbox-next"
    aria-label="Next image"
    onClick={() => {
      const project = projects.find((project) =>
        project.images.some(
          (image) => image.src === selectedImage.src
        )
      );

      if (!project) return;

      const index = project.images.findIndex(
        (image) => image.src === selectedImage.src
      );

      setSelectedImage(
        project.images[(index + 1) % project.images.length]
      );
    }}
  >
    ›
  </button>
</div>
          <p>{selectedImage.caption}</p>
        </div>
      </div>
    )}
    
{showBackToTop && (
  <button
    type="button"
    className="back-to-top"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    aria-label="Back to top"
    title="Back to top"
  >
    ↑
  </button>
)}
    </div>
  )
}
export default App
