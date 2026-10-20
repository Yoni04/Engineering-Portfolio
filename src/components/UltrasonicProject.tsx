
function UltrasonicProject() {
  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <span className="project-category">
          Embedded Systems & Electronics
        </span>

        <h2>Ultrasonic Parametric Speaker</h2>

        <p>
          An engineering project exploring
          directional audio transmission using
          ultrasonic transducers, embedded
          control, and electronic driver circuitry.
        </p>
      </div>

      <div className="project-detail-content">
        <h3>Project Overview</h3>
        <p>
          This project investigates the generation
          of audible sound through a modulated
          ultrasonic carrier.
        </p>

        <h3>System Architecture</h3>
        <p>
          The prototype incorporates a
          microcontroller, gate driver circuitry,
          and an array of 40 kHz piezoelectric
          ultrasonic transducers.
        </p>

        <h3>Engineering Challenges</h3>
        <p>
          Development involved troubleshooting
          PWM signal generation, MOSFET switching,
          circuit connections, and driver
          power delivery.
        </p>

        <h3>Technical Skills</h3>
        <div className="project-technologies">
          {[
            'STM32',
            'PWM',
            '40 kHz Ultrasonics',
            'Circuit Prototyping',
            'Hardware Debugging',
          ].map((skill) => (
            <span className="tech-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <h3>Results & Future Development</h3>
        <p>
          Prototype development included
          signal-generation testing and
          troubleshooting of the electronic
          driver stages. Further characterization
          of audio output and directional
          performance will be documented here.
        </p>
      </div>
    </div>
  )
}

export default UltrasonicProject
