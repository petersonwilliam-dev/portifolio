import CardProject from "../Card/CardProject"
import projects from "../../assets/consts/projects"

function Projects() {
    return (
        <section id="projects" className="section_black">
            <h2 className="display-6 title_white">Projetos</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {projects.map((project, index) => (
                    <CardProject key={index} project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects