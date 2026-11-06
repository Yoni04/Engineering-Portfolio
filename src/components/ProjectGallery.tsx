import { useState } from 'react'
import { type Project, type ProjectImage } from '../data/projects'
import { Icon } from './Icon'

export function ProjectGallery({ project, onImage, eager = false }: { project: Project; onImage: (image: ProjectImage) => void; eager?: boolean }) {
  const [imageIndex, setImageIndex] = useState(0)
  const activeImage = project.images[imageIndex]
  return <div className={`project-visual ${project.id}`}>
    <button className={`image-stage ${imageIndex === 1 ? 'alternate-image' : ''}`} onClick={() => onImage(activeImage)} aria-label={`Enlarge: ${activeImage.caption}`}>
      <img src={activeImage.src} alt={activeImage.caption} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      <span className="image-enlarge"><Icon name="plus" /> Enlarge</span>
    </button>
    <div className="image-selector" role="group" aria-label={`${project.title} images`}>
      {project.images.map((image, index) => <button key={image.src} aria-pressed={imageIndex === index} onClick={() => setImageIndex(index)}>{image.label}</button>)}
    </div>
    <p className="image-caption" aria-live="polite">{activeImage.caption}</p>
  </div>
}
