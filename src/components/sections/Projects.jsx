import CardProject from "../Card/CardProject"
import { projects } from "../../assets/consts/consts"

function Projects() {
    return (
        <section id="projects">
            <h2>Projetos</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {projects.map((project, index) => (
                    <CardProject key={index} project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects