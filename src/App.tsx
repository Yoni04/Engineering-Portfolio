
import './App.css'
import { useEffect, useRef, useState } from 'react'


type ProjectImage = { src: string; caption: string }
type IconName = 'external' | 'mail' | 'plus' | 'minus' | 'close' | 'left' | 'right' | 'up'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    external: 'M7 17 17 7M7 7h10v10',
    mail: 'M4 5h16v14H4zM4 6l8 7 8-7',
    plus: 'M5 12h14M12 5v14',
    minus: 'M5 12h14',
    close: 'm6 6 12 12M6 18 18 6',
    left: 'm15 6-6 6 6 6',
    right: 'm9 6 6 6-6 6',
    up: 'M12 19V5m-7 7 7-7 7 7',
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  )
}

function adjacentImage(image: ProjectImage, direction: number): ProjectImage {
  const images = projects.find(project => project.images.some(candidate => candidate.src === image.src))?.images
  if (!images) return image
  const index = images.findIndex(candidate => candidate.src === image.src)
  return images[(index + direction + images.length) % images.length]
}
const projects = [ 
  {
    id: 'early-bird',
    title: 'Project Early Bird',
    summary: 'An ultrasonic alarm clock prototype exploring directional audio with STM32 PWM, a 40 kHz transducer array, and custom driver circuitry.',
    category: 'Ultrasonic Alarm Clock',
    
overview:
  'The goal of Project Early Bird was to build an alarm ' +
  'clock that directs sound toward the sleeper. ' +
  'The prototype uses an STM32 to generate ultrasonic ' +
  'signals and custom circuitry to drive an array of ' +
  'piezoelectric transducers. Development involved ' +
  'testing PWM signals, experimenting with MOSFETs ' +
  'and gate drivers, and troubleshooting the connections ' +
  'between the microcontroller and driver circuitry.',
  
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
  'The ultrasonic transducer array produced directional ' +
  'audible sound, demonstrating the core audio concept ' +
  'behind Project Early Bird.',


    technologies: ['STM32', 'PWM', 'Circuit Design', 'Ultrasonic Audio', 'Arduino Mega', 'C'],
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
  {id: 'smartzle',
    title: 'SMARTZLE',
    summary: 'An interactive educational puzzle combining conductive pieces, Arduino-based sensing, and LCD feedback.',
    category: 'Sustainable Interactive Electronics & Product Design',
overview:
  'SMARTZLE explores how electronics can make a physical ' +
  'puzzle interactive. Conductive pieces provide inputs ' +
  'to an Arduino Nano, while an LCD shows game information ' +
  'and feedback. GPIO expansion provides connections for ' +
  'multiple puzzle inputs. The work brought together ' +
  'circuit prototyping, embedded programming, and ' +
  'physical product design.',
  
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
  'The resulting prototype brought the sensing circuitry, ' +
  'Arduino Nano, and LCD together in a physical puzzle. ' +
  'The prototype let me explore how piece detection ' +
  'and on-screen feedback could work together during play.',

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
const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
const dialogRef = useRef<HTMLDivElement>(null);
const pageRef = useRef<HTMLDivElement>(null);
const isLightboxOpen = selectedImage !== null;

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
  if (!isLightboxOpen) return;
  const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const previousOverflow = document.body.style.overflow;
  const page = pageRef.current;
  const wasInert = page?.inert ?? false;
  document.body.style.overflow = 'hidden';
  if (page) page.inert = true;
  dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setSelectedImage(null);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      setSelectedImage(image => image ? adjacentImage(image, direction) : null);
    } else if (event.key === 'Tab') {
      const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button');
      if (!buttons?.length) return;
      const first = buttons[0], last = buttons[buttons.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (active === last || !dialogRef.current?.contains(active))) {
        event.preventDefault(); first.focus();
      }
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = previousOverflow;
    if (page) page.inert = wasInert;
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  };
}, [isLightboxOpen]);


  return (
    <div className="portfolio">
      <div ref={pageRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="navbar" aria-label="Main navigation">
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
  I'm an Electrical and Computer Engineering graduate student
  with hands-on experience in embedded systems,
  electronics prototyping, and hardware debugging.
  I enjoy turning ideas into working prototypes and
  figuring out what to change when they don't work as expected.
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
  View Resume <Icon name="external" />
</a>

    </div>
  </div>
</header>


      <main id="main-content" tabIndex={-1}>
        <section id="about">
          <div className="about-profile">
          <h2>About Me</h2>
          <div className="profile-photo">
          <img
            src="/profile.png"
            alt="Yonatan Konstantine"
            width={330}
            height={327}
            loading="lazy"
            decoding="async"
          />
          </div>
          </div>
          
<p>
  I'm studying Electrical and Computer Engineering at
  Worcester Polytechnic Institute. I'm always curious about how
  technology works, and I learn best by building and testing
  things. My projects have given me experience with embedded
  systems, electronics, programming, and hands-on prototyping.
</p>

<p>
  Working in IT support has taught me to troubleshoot
  problems, explain technical concepts clearly, and work
  with people from different backgrounds. In my engineering
  projects, I use those same skills to work through problems
  and explain what I find.
</p>

<p>
  Whether I'm developing an ultrasonic alarm clock,
  integrating electronics into a sustainable interactive product,
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
        expandedProject === project.id

      return (
        <article
          className={`project-card ${
            isExpanded ? 'expanded' : ''
          }`}
          key={project.id}
        >
          <button
            type="button"
            className="project-toggle"
            aria-expanded={isExpanded}
            aria-controls={`${project.id}-details`}
            onClick={() =>
              setExpandedProject(
                isExpanded ? null : project.id
              )
            }
          >
              <span className="project-preview">
                <img
                  src={project.images[0].src}
                  alt={project.images[0].caption}
                  loading="lazy"
                  decoding="async"
                />
              </span>

            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.summary}</p>

            <span className="expand-label">
              {isExpanded ? 'Hide Details' : 'Explore Project'}
              <Icon name={isExpanded ? 'minus' : 'plus'} />
            </span>
          </button>

          <div className="project-technologies">
            {project.technologies.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div id={`${project.id}-details`} className="expanded-content" aria-hidden={!isExpanded} inert={!isExpanded}>
            <div className="expanded-content-inner">
              <div className="expanded-content-body">
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
    <h4>Engineering Work</h4>

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
            </div>
          </div>
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
        Signal Analysis, Oscilloscopes, Multimeters,
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
  <h2>Let's Connect!</h2>

  <p>
    I'm interested in opportunities involving
    research and development, embedded systems,
    and hardware manufacturing.
  </p>

  <div className="contact-links">
    <a
      href="https://www.linkedin.com/in/yonatankonstantine"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-button"
    >
      LinkedIn <Icon name="external" />
    </a>

    <a
      href="mailto:yk204.konstantine@gmail.com"
      className="contact-button"
    >
      Email Me <Icon name="mail" />
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
      </div>
       {/* Project Image Lightbox */}
    {selectedImage && (
      <div
        className="image-lightbox"
        role="presentation"
        onClick={() => setSelectedImage(null)}
      >
        <div
          className="lightbox-content"
          ref={dialogRef}
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
            <Icon name="close" />
          </button>

          
<div className="lightbox-image-wrapper">
  <button
    type="button"
    className="lightbox-arrow lightbox-prev"
    aria-label="Previous image"
    onClick={() => setSelectedImage(image => image ? adjacentImage(image, -1) : null)}
  >
    <Icon name="left" />
  </button>

  <img
    src={selectedImage.src}
    alt={selectedImage.caption}
  />

  <button
    type="button"
    className="lightbox-arrow lightbox-next"
    aria-label="Next image"
    onClick={() => setSelectedImage(image => image ? adjacentImage(image, 1) : null)}
  >
    <Icon name="right" />
  </button>
</div>
          <p aria-live="polite" aria-atomic="true">{selectedImage.caption}</p>
        </div>
      </div>
    )}
    
{showBackToTop && !isLightboxOpen && (
  <button
    type="button"
    className="back-to-top"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      })
    }
    aria-label="Back to top"
    title="Back to top"
  >
    <Icon name="up" />
  </button>
)}
    </div>
  )
}
export default App
