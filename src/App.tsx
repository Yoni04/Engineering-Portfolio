import './App.css'
import { useEffect, useRef, useState } from 'react'
import { base, githubUrl, linkedinUrl, projects, projectUrl, resumeUrl, type ProjectImage } from './data/projects'
import { CaseStudy } from './components/CaseStudy'
import { Icon } from './components/Icon'
import { Lightbox } from './components/Lightbox'
import { ProjectGallery } from './components/ProjectGallery'

const categories = ['All projects', 'Hardware & Electronics', 'Embedded Systems', 'Research & Development', 'Product Design']
const skills = [
  { title: 'Electronics & Circuit Design', items: ['Analog & digital circuits', 'MOSFETs & gate drivers', 'GPIO & PWM', 'LTspice', 'NI Multisim'] },
  { title: 'Embedded Systems', items: ['STM32', 'Arduino', 'MSP430', 'FPGA', 'RTOS', 'Hardware/software integration'] },
  { title: 'Programming & Development', items: ['C', 'C++', 'Python', 'Verilog', 'MATLAB', 'Java', 'Git & GitHub'] },
  { title: 'Prototyping & Testing', items: ['Oscilloscopes', 'Digital multimeters', 'Breadboard prototyping', 'Soldering', 'Signal analysis', 'Circuit debugging'] },
  { title: 'Engineering Software & Tools', items: ['Vivado', 'VS Code', 'Technical documentation'] },
  { title: 'Systems & Technical Support', items: ['Hardware & software troubleshooting', 'Network & system incident triage', 'HaloITSM', 'Knowledge base management'] },
]

const relativePath = window.location.pathname.slice(base.length).replace(/^\/+|\/+$/g, '').replace(/\/index\.html$/, '')
const currentProject = projects.find(project => relativePath === `projects/${project.id}`)

function App() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)
  const [filter, setFilter] = useState('All projects')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)
  const shownProjects = projects.filter(project => filter === 'All projects' || project.categories.includes(filter))

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (currentProject || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const page = pageRef.current
    const targets = page?.querySelectorAll('.reveal')
    if (!page || !targets) return
    page.classList.add('motion-ready')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    targets.forEach(target => observer.observe(target))
    return () => { observer.disconnect(); page.classList.remove('motion-ready') }
  }, [filter])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); document.getElementById('menu-toggle')?.focus() } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return <div className="portfolio">
    <div ref={pageRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header"><nav className="navbar" aria-label="Main navigation">
        <a className="logo" href={base} aria-label="Yonatan Konstantine, home">YK<span>/</span></a>
        <span className="nav-caption">Engineering portfolio</span>
        <button id="menu-toggle" className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        <div id="main-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)}>
          <a href={`${base}#projects`}>Projects</a><a href={`${base}#about`}>About</a><a href={`${base}#experience`}>Experience</a><a href={`${base}#skills`}>Skills</a><a href={`${base}#contact`}>Contact</a>
        </div>
        {!currentProject && <a className="nav-resume" href={resumeUrl} download>Resume <Icon name="download" /></a>}
      </nav></header>

      {currentProject ? <CaseStudy project={currentProject} onImage={setSelectedImage} /> : <>
        <header id="home" className="hero">
          <div className="hero-content"><p className="eyebrow">Electrical & Computer Engineering · WPI</p><h1>Yonatan<br /><span>Konstantine</span></h1><h2>Designing, prototyping, and testing hardware & embedded systems.</h2><p className="hero-intro">I'm an Electrical and Computer Engineering graduate student at Worcester Polytechnic Institute. My interests span research and development, experimental engineering, and hardware/software integration.</p>
            <div className="hero-actions"><a className="primary-link" href="#projects">View Projects <Icon name="right" /></a><a className="secondary-link" href={resumeUrl} download>Download Resume <Icon name="download" /></a></div>
            <div className="hero-socials"><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" /></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" /></a><a href="#contact">Contact <Icon name="mail" /></a></div>
          </div>
          <figure className="hero-build"><a href={projectUrl('early-bird')} aria-label="Read the Project Early Bird case study"><img src={`${base}projects/earlybird/EarlyBird1.webp`} alt="Early Bird physical prototype with an ultrasonic transducer array and alarm clock enclosure" width={493} height={500} fetchPriority="high" decoding="async" /><span className="build-link"><Icon name="external" /></span></a><figcaption><span><span className="eyebrow">Project Early Bird</span><strong>Ultrasonic parametric speaker</strong></span><span className="build-note">Physical prototype</span></figcaption></figure>
        </header>
        <div className="focus-strip"><span>Embedded systems</span><span>Electronics & circuit design</span><span>Prototyping & experimental testing</span><a href="#projects">Explore the projects ↓</a></div>

        <main id="main-content" tabIndex={-1}>
          <section id="projects" className="projects-section" aria-labelledby="projects-heading">
            <div className="section-heading"><span className="eyebrow">01 / Engineering projects</span><div><h2 id="projects-heading">Engineering Projects</h2><p>Two engineering projects, from the system concept to the physical build.</p></div></div>
            <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter engineering projects">{categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><span className="project-count" aria-live="polite" role="status">{shownProjects.length} {shownProjects.length === 1 ? 'project' : 'projects'}</span></div>
            <div className="project-grid">{shownProjects.map(project => <article className={`project-card reveal ${project.id}`} key={project.id} aria-labelledby={`${project.id}-title`}>
              <div className="card-topline"><span className="eyebrow">Project {project.number}</span><span>{project.period}</span></div>
              <ProjectGallery project={project} onImage={setSelectedImage} />
              <div className="card-copy"><p className="eyebrow">{project.category}</p><h3 id={`${project.id}-title`}><a href={projectUrl(project.id)}>{project.title}</a></h3><p className="card-subtitle">{project.subtitle}</p><p>{project.summary}</p><ul className="technology-list" aria-label="Technologies">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul><div className="card-result"><span>Outcome</span><p>{project.result}</p></div><a className="case-link" href={projectUrl(project.id)}>Read case study <Icon name="right" /></a></div>
            </article>)}</div>
          </section>

          <section id="about" className="about-section reveal" aria-labelledby="about-heading"><div className="about-portrait"><img src={`${base}profile.webp`} alt="Yonatan Konstantine" width={330} height={327} loading="lazy" decoding="async" /><span>Yonatan Konstantine · Natick, MA</span></div><div className="about-copy"><span className="eyebrow">02 / About</span><h2 id="about-heading">About Me</h2><p>I'm studying Electrical and Computer Engineering at Worcester Polytechnic Institute. I'm always curious about how technology works, and I learn best by building and testing things. My projects have given me experience with embedded systems, electronics, programming, and hands-on prototyping.</p><p>Working in IT support has taught me to troubleshoot problems, explain technical concepts clearly, and work with people from different backgrounds. In my engineering projects, I use those same skills to work through problems and explain what I find.</p><p>I enjoy the hands-on side of engineering: trying an idea, testing it, and figuring out what needs to change. When something doesn't work, I like working through the problem and seeing the next version improve.</p><a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">View full resume <Icon name="external" /></a></div></section>

          <section id="experience" className="experience-section reveal" aria-labelledby="experience-heading"><div className="section-heading"><span className="eyebrow">03 / Background</span><div><h2 id="experience-heading">Education & Experience</h2><p>Engineering study, technical support, and collaborative work.</p></div></div><div className="timeline">
            <article><div className="timeline-meta"><span className="eyebrow">Education</span><span>Aug 2022 – May 2027</span></div><div><h3>B.S. & M.S. in Electrical and Computer Engineering</h3><p className="organization">Worcester Polytechnic Institute · Expected May 2027</p><p>Coursework includes embedded systems, digital system design, microelectronics, signal analysis, information theory, and machine learning.</p></div></article>
            <article><div className="timeline-meta"><span className="eyebrow">Technical experience</span><span>May 2023 – Present</span></div><div><h3>IT Service Desk Specialist</h3><p className="organization">Worcester Polytechnic Institute</p><p>Triage, troubleshoot, and resolve technical support cases involving hardware, software, networking, accounts, and systems for students, faculty, and staff.</p><ul><li>Triaged, troubleshot, and resolved 10,000+ technical support cases.</li><li>Collaborate with Network and Systems Operations teams on complex incidents.</li><li>Develop documentation that supports efficient troubleshooting and user self-service.</li></ul></div></article>
            <article><div className="timeline-meta"><span className="eyebrow">Leadership</span><span>Feb 2024 – Feb 2026</span></div><div><h3>Music Director</h3><p className="organization">Audiophiles A Cappella · Worcester Polytechnic Institute</p><p>Led rehearsals, competed in the International Competition of Collegiate A Cappella, and mixed, mastered, and released the EP <em>BPM</em> on streaming platforms.</p></div></article>
          </div></section>

          <section id="skills" className="skills-section reveal" aria-labelledby="skills-heading"><div className="section-heading"><span className="eyebrow">04 / Technical expertise</span><div><h2 id="skills-heading">Skills & Tools</h2><p>Experience documented in my projects and resume.</p></div></div><div className="skills-grid">{skills.map((skill, index) => <article className="skill-group" key={skill.title}><span className="skill-number">0{index + 1}</span><h3>{skill.title}</h3><ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

          <section id="contact" className="contact-section reveal" aria-labelledby="contact-heading"><span className="eyebrow">05 / Contact</span><div className="contact-layout"><div><h2 id="contact-heading">Get in touch</h2><p>Interested in hardware, embedded systems, and research & development opportunities. I'd be glad to discuss my projects and experience.</p><span className="location">Natick, Massachusetts</span></div><div className="contact-actions"><a className="contact-email" href="mailto:yk204.konstantine@gmail.com">yk204.konstantine@gmail.com <Icon name="external" /></a><a href="tel:+16175865460">617-586-5460</a><div className="contact-links"><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" /></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" /></a><a href={resumeUrl} download>Download Resume <Icon name="download" /></a></div></div></div></section>
        </main>
      </>}
      <footer className="footer"><a href={base}>Yonatan Konstantine</a><span>Electrical & Computer Engineering</span><a href={currentProject ? '#main-content' : '#home'}>Back to top ↑</a></footer>
    </div>
    {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} onChange={setSelectedImage} />}
    {showBackToTop && !selectedImage && <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} aria-label="Back to top"><Icon name="up" /></button>}
  </div>
}
export default App
