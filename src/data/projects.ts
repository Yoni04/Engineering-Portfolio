export type ProjectImage = { src: string; caption: string; label: string }
export type Project = {
  id: string
  number: string
  title: string
  category: string
  categories: string[]
  period: string
  subtitle: string
  summary: string
  focus: string
  result: string
  technologies: string[]
  chain: string[]
  architecture: string
  role: string
  requirements: string[]
  development: { title: string; text: string }[]
  testing: string[]
  challenges: { title: string; text: string }[]
  presentation: {
    overview: string
    contributions: string[]
    highlights: string[]
    outcome: string
  }
  images: ProjectImage[]
}

export const base = import.meta.env.BASE_URL
export const resumeUrl = `${base}Yonatan Konstantine Resume.pdf`
export const githubUrl = 'https://github.com/ykonstantine'
export const linkedinUrl = 'https://www.linkedin.com/in/yonatankonstantine'
export const projectUrl = (id: string) => `${base}projects/${id}/`

export const projects: Project[] = [
  {
    id: 'early-bird', number: '01', title: 'Project Early Bird',
    category: 'Embedded systems / Directional audio',
    categories: ['Hardware & Electronics', 'Embedded Systems', 'Research & Development'],
    period: 'August 2025 – April 2026',
    subtitle: 'Ultrasonic parametric speaker',
    summary: 'An STM32-controlled ultrasonic array, custom driver circuitry, and a physical alarm clock prototype. The goal: direct sound toward the sleeper.',
    focus: 'PWM generation, driver circuits, hardware debugging',
    result: 'The ultrasonic array produced directional audible sound, demonstrating the core audio concept.',
    technologies: ['STM32', 'Arduino', 'C', 'PWM', 'MOSFETs', 'Gate drivers'],
    chain: ['Microcontroller', 'PWM signal', 'Driver circuit', 'Transducer array'],
    architecture: 'The prototype combines microcontroller-generated PWM, MOSFET switching and gate-driver circuitry, and an array of approximately 40 kHz piezoelectric ultrasonic transducers. STM32 and Arduino microcontrollers were explored during development. A resonant drive circuit uses the transducer capacitance and discrete inductance to improve drive voltage and efficiency near resonance.',
    role: 'My contributions include designing and prototyping the directional speaker, developing and iteratively testing embedded and analog driver architectures, debugging hardware iterations, and experimentally tuning the resonant piezoelectric drive circuit. I also worked on circuit measurements and acoustic and directivity testing. Teammates performed the SolidWorks modeling and ANSYS simulations; I observed that work.',
    requirements: [
      'Produce directional audible sound through modulation of an approximately 40 kHz ultrasonic carrier.',
      'Integrate embedded signal generation, electronic driver circuitry, and a piezoelectric transducer array.',
      'Resolve component voltage ratings, wiring, power delivery, and hardware/software compatibility during prototype development.',
      'Evaluate the prototype through circuit measurements, acoustic testing, and directivity measurements.',
    ],
    development: [
      { title: 'Embedded signal generation', text: 'Developed microcontroller-based PWM generation for a 40 kHz ultrasonic carrier and explored audio modulation using STM32 and Arduino architectures.' },
      { title: 'Transducer drive', text: 'Experimented with MOSFET switching and gate-driver circuitry to operate the piezoelectric array. Implemented and experimentally tuned a resonant drive circuit using the transducer capacitance and discrete inductance.' },
      { title: 'Team modeling and simulation work', text: 'Teammates performed the SolidWorks modeling and ANSYS modal, harmonic, and acoustic simulations. I observed this work alongside development of the physical alarm clock prototype.' },
    ],
    testing: [
      'Iteratively tested the embedded and analog driver architectures using circuit measurements and hardware debugging.',
      'Used acoustic testing and 360° directivity measurements to evaluate the directional audio system.',
      'Experimentally tuned the resonant piezoelectric drive near the transducer resonance.',
    ],
    challenges: [
      { title: 'Generating the signal', text: 'Developed microcontroller-based PWM generation for a 40 kHz ultrasonic carrier and explored audio modulation.' },
      { title: 'Driving the array', text: 'Experimented with MOSFET switching and gate-driver circuitry to operate the piezoelectric transducers.' },
      { title: 'Testing the hardware', text: 'Investigated signal-generation, wiring, and power-delivery issues through iterative circuit testing and debugging.' },
      { title: 'Hardware and software compatibility', text: 'Redesigned and debugged multiple hardware iterations, addressing component voltage ratings and legacy hardware/software compatibility to progress from nonfunctional prototypes to controlled audible output.' },
    ],
    presentation: {
      overview: 'For my WPI Major Qualifying Project, I worked on a directional ultrasonic speaker built into an alarm clock prototype. The goal was to direct audible sound toward the sleeper using a modulated ultrasonic carrier, embedded control, and custom driver circuitry.',
      contributions: [
        'Developed and iteratively tested embedded and analog driver architectures using STM32 and Arduino microcontrollers.',
        'Prototyped MOSFET and gate-driver circuits, debugged wiring and component-rating issues, and tuned a resonant piezoelectric drive circuit.',
        'Evaluated the system through circuit measurements, acoustic testing, and 360° directivity measurements.',
      ],
      highlights: [
        'Generated PWM for an approximately 40 kHz ultrasonic carrier and explored audio modulation.',
        'Used transducer capacitance and discrete inductance to tune the drive circuit near resonance.',
        'Worked through signal-generation, power-delivery, and legacy hardware/software compatibility problems across multiple prototype iterations.',
      ],
      outcome: 'The prototype progressed from nonfunctional hardware to controlled directional audible output. The work gave me hands-on experience connecting embedded signals, driver electronics, and physical testing to troubleshoot a complete system.',
    },
    images: [
      { src: `${base}projects/earlybird/EarlyBird1.webp`, caption: 'Early Bird physical prototype, showing the transducer array and alarm clock enclosure.', label: 'Physical prototype' },
      { src: `${base}projects/earlybird/EarlyBird2.webp`, caption: 'Early Bird CAD model and enclosure design.', label: 'CAD model' },
    ],
  },
  {
    id: 'smartzle', number: '02', title: 'SMARTZLE',
    category: 'Interactive electronics / Product design',
    categories: ['Hardware & Electronics', 'Embedded Systems', 'Product Design'],
    period: 'October – December 2024',
    subtitle: 'Sustainable educational toy development',
    summary: 'Conductive puzzle pieces, an Arduino Nano, and an LCD bring sensing and feedback into a hands-on educational game.',
    focus: 'Piece detection, embedded programming, electronic integration',
    result: 'The physical prototype integrated piece-sensing circuitry, the Arduino Nano, and LCD feedback.',
    technologies: ['Arduino Nano', 'C/C++', 'GPIO expansion', 'LCD', 'Circuit prototyping'],
    chain: ['Conductive pieces', 'GPIO expansion', 'Arduino Nano', 'LCD feedback'],
    architecture: 'Conductive pieces provide puzzle inputs through GPIO expansion. The Arduino Nano processes those inputs and provides game information on the LCD. The work brings sensing circuitry, embedded programming, and physical product design into one prototype.',
    role: 'My documented contributions include developing an interactive electronic puzzle prototype with an Arduino Nano, GPIO expander, LCD display, and conductive game pieces. I designed and prototyped the hardware/software interactions for responsive puzzle mechanics while incorporating sustainable design principles.',
    requirements: [
      'Detect physical interactions with conductive puzzle pieces.',
      'Accommodate multiple puzzle inputs through GPIO expansion.',
      'Provide game information and feedback on an LCD.',
      'Integrate the electronics into a physical educational toy while considering sustainable design principles.',
    ],
    development: [
      { title: 'Input sensing', text: 'Developed an electronic sensing approach using conductive puzzle pieces to detect physical interactions with the board.' },
      { title: 'Embedded integration', text: 'Integrated an Arduino Nano with GPIO expansion to connect multiple puzzle inputs and support the interactive system.' },
      { title: 'User feedback and physical design', text: 'Combined LCD-based feedback with the physical puzzle, addressing mechanical and electrical integration while considering sustainable product design.' },
    ],
    testing: [
      'Prototyped the hardware/software interactions between conductive pieces, sensing circuitry, the Arduino Nano, and the LCD.',
      'Used the integrated physical prototype to explore how piece detection and on-screen feedback worked together during play.',
    ],
    challenges: [
      { title: 'Detecting the pieces', text: 'Developed a sensing approach using conductive puzzle pieces to detect physical interactions with the board.' },
      { title: 'Connecting the electronics', text: 'Integrated an Arduino Nano with GPIO expansion to accommodate multiple puzzle inputs.' },
      { title: 'Building the interaction', text: 'Combined the sensing circuitry, LCD feedback, and physical puzzle design while addressing mechanical and electrical integration.' },
    ],
    presentation: {
      overview: 'SMARTZLE is an interactive educational puzzle that connects physical play with electronic feedback. The prototype uses conductive puzzle pieces, an Arduino Nano, GPIO expansion, and an LCD to detect interactions and show game information, while considering sustainable product design.',
      contributions: [
        'Developed the electronic puzzle prototype, integrating the Arduino Nano, GPIO expander, LCD, and conductive game pieces.',
        'Designed and prototyped the hardware/software interactions that connect piece detection to on-screen feedback.',
        'Worked on mechanical and electrical integration so the sensing circuitry and display could operate within the physical puzzle.',
      ],
      highlights: [
        'Used conductive pieces as physical inputs and GPIO expansion to accommodate multiple puzzle connections.',
        'Combined embedded programming and circuit prototyping with the educational toy design, incorporating sustainable design principles.',
      ],
      outcome: 'The resulting physical prototype brought piece sensing, embedded control, and LCD feedback together. It gave me practical experience integrating electronics into an interactive product and exploring how detection and feedback work together during play.',
    },
    images: [
      { src: `${base}projects/smartzle/Smartzle1.webp`, caption: 'SMARTZLE CAD model, showing the puzzle board and storage drawer.', label: 'CAD model' },
      { src: `${base}projects/smartzle/Screenshot Smartzle Real.webp`, caption: 'SMARTZLE physical prototype with conductive contacts and LCD.', label: 'Physical prototype' },
    ],
  },
]
