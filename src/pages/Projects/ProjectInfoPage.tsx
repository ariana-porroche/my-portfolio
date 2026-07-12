import { useParams, Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { projects } from "../../data/projects";

function toSlug(title: string) {
    return title.replace(/\s+/g, "-").toLowerCase();
}

function ProjectInfoPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => toSlug(p.title) === slug);

    if (!project) {
        return (
            <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
                <h2>Proyecto no encontrado</h2>
                <Link to="/proyectos">← Volver a proyectos</Link>
            </section>
        );
    }

    return (
        <>
            <section>
                <SectionHeader title={project.title} />
                <p className="project-summary">{project.summary}</p>
            </section>
        </>
    );
}

export default ProjectInfoPage;
