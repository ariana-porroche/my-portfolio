import './App.css'

function App() {

  return (
    <div className="portfolio">
      <section className="hero">
        <div>
          <div className="hero-eyebrow">Ingeniera informática</div>
          <h1 className="hero-name">ARIANA<br></br><em>PORROCHE</em></h1>
          <p className="hero-desc">
            Ingeniera de Software especializada en el desarrollo de aplicaciones multiplataforma con experiencias de usuario impecables, y backends robustos y mantenibles
          </p>
          <button className="hero-cta">
            Ver proyectos <span className="arrow">→</span>
          </button>
        </div>
      </section>


      <section>
        <div className="section-header">
          <h2 className="section-title">Proyectos destacados</h2>
          <span className="section-count">3 trabajos</span>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="mockup-area">
              <div className="monitor">
                <div className="monitor-screen">
                  <div className="monitor-camera"></div>
                  <img src="a-darts-web.png" alt="A-Darts web"/>
                </div>
                <div className="monitor-stand-neck"></div>
                <div className="monitor-stand-base"></div>
              </div>
              <div className="phone">
                <div className="phone-notch"></div>
                <div className="phone-inner">
                  <img src="a-darts-web.png" className="phone-screen" alt="A-Darts móvil"/>
                </div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-top">
                <span className="project-type">DDD · Frontend · Backend</span>
                <span className="project-year">2026</span>
              </div>
              <h3 className="project-title">A-Darts</h3>
              <p className="project-desc">Sistema de gestión en tiempo real de torneos de dardos de punta de acero.</p>
              <div className="project-footer">
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <button className="btn-primary">Ver más <span className="arrow">→</span></button>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="mockup-area web-only">
              <div className="monitor">
                <div className="monitor-screen">
                  <div className="monitor-camera"></div>
                  <img src="geoada.png" alt="GeoAda web"/>
                </div>
                <div className="monitor-stand-neck"></div>
                <div className="monitor-stand-base"></div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-top">
                <span className="project-type">DDD · Frontend · Backend</span>
                <span className="project-year">2026</span>
              </div>
              <h3 className="project-title">GeoAda</h3>
              <p className="project-desc">Aplicación web para gestionar las reservas de los espacios del edificio Ada Byron de la Universidad de Zaragoza.</p>
              <div className="project-footer">
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">NestJS</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">pygeoapi</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <button className="btn-primary">Ver más <span className="arrow">→</span></button>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="mockup-area web-only">
              <div className="monitor">
                <div className="monitor-screen">
                  <div className="monitor-camera"></div>
                  <img src="plan-my-weather.png" alt="PlanMyWeather web"/>
                </div>
                <div className="monitor-stand-neck"></div>
                <div className="monitor-stand-base"></div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-top">
                <span className="project-type">Hackaton · Full stack</span>
                <span className="project-year">2025</span>
              </div>
              <h3 className="project-title">PlanMyWeather</h3>
              <p className="project-desc">Aplicación web que utiliza datos de observación terrestre de la NASA para predecir condiciones meteorológicas en Zaragoza.</p>
              <div className="project-footer">
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">IA</span>
                </div>
                <button className="btn-primary">Ver más <span className="arrow">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section>
        <div className="section-header">
          <h2 className="section-title">Stack tecnológico</h2>
        </div>
        <div className="about-strip">
          <div className="about-column">
            <div className="about-label">Frontend</div>
            <div className="skill-row">
              <span className="skill-name">React.js</span>
              <span className="skill-domain">web</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">React Native</span>
              <span className="skill-domain">web & mobile</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">Angular</span>
              <span className="skill-domain">web</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">Kotlin</span>
              <span className="skill-domain">mobile</span>
            </div>
          </div>
          <div className="about-column">
            <div className="about-label">Backend & Datos</div>
            <div className="skill-row">
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">Spring Boot</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">PostgreSQL</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">MongoDB</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">KNIME</span>
            </div>
          </div>
          <div className="about-column">
            <div className="about-label">DevOps</div>
            <div className="skill-row">
              <span className="skill-name">Docker</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">CI/CD Pipelines</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">Git</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">Despliegue cloud</span>
            </div>
          </div>
          <div className="about-column">
            <div className="about-label">Metodologías</div>
            <div className="skill-row">
              <span className="skill-name">DDD</span>
            </div>
            <div className="skill-row">
              <span className="skill-name">Scrum</span>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="ticks"></div> */}

      {/* <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <div className="ticks"></div>
      <section id="spacer"></section> */}
    </div>
  )
}

export default App
