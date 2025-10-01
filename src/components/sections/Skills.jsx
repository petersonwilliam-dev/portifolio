import CardSkill from "../Card/CardSkill"
import skills from "../../assets/consts/skills"

function Skills() {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {skills.map((skill, index) => (
                    <CardSkill key={index} skill={skill}/>
                ))}
            </div>
        </section>
    )
}

export default Skills