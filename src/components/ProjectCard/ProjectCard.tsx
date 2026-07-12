import { Link } from "react-router-dom";
import "./ProjectCard.css";
import type { Project } from "../../data/projects";

type ProjectCardProps = Project;

function ProjectCard({
    type,
    year,
    title,
    summary,
    techStack,
    image,
    alt,
}: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className={`mockup-area`}>
                <img src={image} alt={alt} className="project-image" />
            </div>
            <div className="project-body">
                <div className="project-top">
                    <div className="project-type-wrap">
                        <span className="project-type">{type}</span>
                    </div>
                    <span className="project-year">{year}</span>
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-summary">{summary}</p>
                <div className="project-footer">
                    <div className="tech-stack">
                        {techStack.map((tech) => (
                            <span className="tech-tag" key={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <Link to={`/proyectos/${title.replace(/\s+/g, "-").toLowerCase()}`} className="btn-primary">
                        Ver más <span className="arrow">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
