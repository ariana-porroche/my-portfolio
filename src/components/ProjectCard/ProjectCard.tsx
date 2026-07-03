import "./ProjectCard.css";

type ProjectCardProps = {
    type: string;
    year: string;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    alt: string;
};

function ProjectCard({
    type,
    year,
    title,
    description,
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
                <p className="project-desc">{description}</p>
                <div className="project-footer">
                    <div className="tech-stack">
                        {techStack.map((tech) => (
                            <span className="tech-tag" key={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <button className="btn-primary">
                        Ver más <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
