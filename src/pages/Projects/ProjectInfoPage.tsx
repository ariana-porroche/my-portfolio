import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { projects } from "../../data/projects";
import "./ProjectInfoPage.css";

function toSlug(title: string) {
    return title.replace(/\s+/g, "-").toLowerCase();
}

function ProjectInfoPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => toSlug(p.title) === slug);

    if (!project) {
        return (
            <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
                <h2 className="project-not-found-text">Proyecto no encontrado</h2>
                <Link to="/proyectos" className="btn-primary">
                    <span className="arrow">←</span> Volver a proyectos
                </Link>
            </section>
        );
    }

    return (
        <section className="project-info">
            <h2 className="project-name">{project.title}</h2>

            {project.description && (
                <div className="project-text">
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
            )}

            <h3 className="project-section-title">Stack tecnológico</h3>
            <div className="tech-stack">
                {project.techStack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                        {tech}
                    </span>
                ))}
            </div>

            {project.detailedDescription && (
                <>
                    <h3 className="project-section-title">Descripción</h3>
                    <div className="project-text">
                        <ReactMarkdown>{project.detailedDescription}</ReactMarkdown>
                    </div>
                </>
            )}

            {project.mobileMockups && project.mobileMockups.length > 0 && (
                <>
                    <h3 className="project-section-title">Aplicación móvil</h3>
                    <div className="mockup-gallery mockup-gallery--mobile">
                        {project.mobileMockups.map((src, i) => (
                            <div key={i} className="mockup-frame mockup-frame--portrait">
                                <img src={src} alt={`${project.title} móvil ${i + 1}`} className="mockup-img" />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {project.webMockups && project.webMockups.length > 0 && (
                <>
                    <h3 className="project-section-title">Aplicación web</h3>
                    <div className="mockup-gallery mockup-gallery--web">
                        {project.webMockups.map((src, i) => (
                            <div key={i} className="mockup-frame mockup-frame--landscape">
                                <img src={src} alt={`${project.title} web ${i + 1}`} className="mockup-img" />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {project.architecture && (
                <>
                    <h3 className="project-section-title">Arquitectura</h3>
                    <div className="project-text">
                        <ReactMarkdown>{project.architecture}</ReactMarkdown>
                    </div>
                </>
            )}

            {project.domainModel && (
                <>
                    <h3 className="project-section-title">Modelo de dominio</h3>
                    <div className="project-text">
                        <ReactMarkdown>{project.domainModel}</ReactMarkdown>
                    </div>
                </>
            )}

            {project.scrum && (
                <>
                    <h3 className="project-section-title">Scrum</h3>
                    <div className="project-text">
                        <ReactMarkdown>{project.scrum}</ReactMarkdown>
                    </div>
                </>
            )}
        </section>
    );
}

export default ProjectInfoPage;
