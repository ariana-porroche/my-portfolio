import { useParams, Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
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
            <p className="project-text">{project.description}</p>
            <h3 className="project-section-title">Stack tecnológico</h3>
            <div className="tech-stack">
                {project.techStack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                        {tech}
                    </span>
                ))}
            </div>
            <h3 className="project-section-title">Descripción</h3>
            <p className="project-text">{project.detailedDescription}</p>
            {project.architecture && (
                <>
                    <h3 className="project-section-title">Arquitectura</h3>
                    <p className="project-text">{project.architecture}</p>
                </>
            )}
            {project.domainModel && (
                <>
                    <h3 className="project-section-title">Modelo de dominio</h3>
                    <p className="project-text">{project.domainModel}</p>
                </>
            )}
        </section>
    );
}

export default ProjectInfoPage;
