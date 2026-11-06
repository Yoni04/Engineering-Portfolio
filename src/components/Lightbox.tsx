import { useEffect, useRef } from 'react'
import { type ProjectImage, projects } from '../data/projects'
import { Icon } from './Icon'

export function Lightbox({ image, onClose, onChange }: { image: ProjectImage; onClose: () => void; onChange: (image: ProjectImage) => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const latest = useRef({ image, onChange })
  useEffect(() => { latest.current = { image, onChange } }, [image, onChange])

  function step(direction: number) {
    const current = latest.current
    const images = projects.find(project => project.images.some(candidate => candidate.src === current.image.src))?.images
    if (!images) return
    const index = images.findIndex(candidate => candidate.src === current.image.src)
    current.onChange(images[(index + direction + images.length) % images.length])
  }

  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const modal = dialog.current
    modal?.showModal()
    return () => {
      modal?.close()
      document.body.style.overflow = previousOverflow
      if (opener?.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])

  return <dialog className="lightbox" ref={dialog} aria-label={image.caption} onCancel={event => { event.preventDefault(); onClose() }}
    onClick={event => { if (event.target === event.currentTarget) onClose() }}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); onClose() }
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); step(event.key === 'ArrowRight' ? 1 : -1) }
      if (event.key === 'Tab') {
        const buttons = dialog.current?.querySelectorAll<HTMLButtonElement>('button')
        if (!buttons?.length) return
        const first = buttons[0], last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }}>
    <div className="lightbox-content">
      <button className="lightbox-close" onClick={onClose} aria-label="Close image preview" autoFocus><Icon name="close" /></button>
      <div className="lightbox-image-wrapper">
        <button className="lightbox-arrow lightbox-prev" onClick={() => step(-1)} aria-label="Previous image"><Icon name="left" /></button>
        <img src={image.src} alt={image.caption} />
        <button className="lightbox-arrow lightbox-next" onClick={() => step(1)} aria-label="Next image"><Icon name="right" /></button>
      </div>
      <p aria-live="polite">{image.caption}</p>
    </div>
  </dialog>
}
