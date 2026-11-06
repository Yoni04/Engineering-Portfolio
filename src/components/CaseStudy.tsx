import { type Project, type ProjectImage, base, projectUrl, projects } from '../data/projects'
import { Icon } from './Icon'
import { ProjectGallery } from './ProjectGallery'

const sections = [
  ['overview', 'Overview'], ['contributions', 'My Contributions'], ['highlights', 'Technical Highlights'], ['outcome', 'Outcome'],
]

export function CaseStudy({ project, onImage }: { project: Project; onImage: (image: ProjectImage) => void }) {
  const nextProject = projects.find(candidate => candidate.id !== project.id)!
  const { presentation } = project
  return <main id="main-content" className="case-page" tabIndex={-1}>
    <header className="case-header">
      <a className="back-link" href={`${base}#projects`}><Icon name="left" /> All engineering projects</a>
      <p className="eyebrow">Engineering project / {project.number}</p>
      <h1>{project.title}</h1>
      <p className="case-subtitle">{project.subtitle}</p>
      <div className="case-meta"><span>Worcester Polytechnic Institute</span><span>{project.period}</span><span>Prototype development</span></div>
    </header>
    <section id="overview" className="case-introduction" aria-labelledby="overview-heading">
      <ProjectGallery project={project} onImage={onImage} eager />
      <div className="case-at-a-glance">
        <p className="eyebrow">01 / Overview</p><h2 id="overview-heading">{project.subtitle}</h2><p>{presentation.overview}</p>
        <dl><div><dt>Technical focus</dt><dd>{project.focus}</dd></div></dl>
        <ul className="technology-list" aria-label="Technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
      </div>
    </section>
    <div className="case-layout">
      <aside className="case-navigation" aria-label="Project navigation"><span className="eyebrow">In this project</span><nav>{sections.map(([id, title], index) => <a key={id} href={`#${id}`}><span>0{index + 1}</span>{title}</a>)}</nav></aside>
      <div className="case-content">
        <section id="contributions"><p className="eyebrow">02 / My Contributions</p><h2>What I worked on</h2><ul className="requirement-list">{presentation.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul></section>
        <section id="highlights"><p className="eyebrow">03 / Technical Highlights</p><h2>Key engineering details</h2><div className="architecture" aria-label="System flow"><ol>{project.chain.map(part => <li key={part}>{part}</li>)}</ol></div><ul className="requirement-list">{presentation.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></section>
        <section id="outcome"><p className="eyebrow">04 / Outcome</p><h2>What I accomplished</h2><div className="result-callout"><p>{presentation.outcome}</p></div>
          <div className="document-links" aria-label="Project materials">{project.images.map(image => <a key={image.src} href={image.src} target="_blank" rel="noopener noreferrer">{image.label}<Icon name="external" /></a>)}</div>
          <details className="technical-notes"><summary>Additional technical notes</summary>
            <div className="additional-notes">
              <h3>Contribution details</h3><p>{project.role}</p>
              <h3>Design goals & constraints</h3><ul className="requirement-list">{project.requirements.map(requirement => <li key={requirement}>{requirement}</li>)}</ul>
              <h3>System architecture</h3><p>{project.architecture}</p>
              {project.development.map(note => <article key={note.title}><h4>{note.title}</h4><p>{note.text}</p></article>)}
              <h3>Testing & experimentation</h3><ul className="requirement-list">{project.testing.map(test => <li key={test}>{test}</li>)}</ul>
              <h3>Challenges & iterations</h3>{project.challenges.map(challenge => <article key={challenge.title}><h4>{challenge.title}</h4><p>{challenge.text}</p></article>)}
              <h3>Results</h3><p>{project.result}</p>
            </div>
          </details>
        </section>
      </div>
    </div>
    <a className="next-project" href={projectUrl(nextProject.id)}><span><span className="eyebrow">Next project</span><strong>{nextProject.title}</strong></span><Icon name="right" /></a>
  </main>
}
