import experiences from '../../assets/consts/experiences'
import CardExperience from '../Card/CardExperience'

function Experiences() {
    return (
        <section id="experiences" className='section_black'>
            <h2 className='display-6 title_white'>Experiências</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {experiences.map((experience, index) => <CardExperience key={index} experience={experience}/>)}
            </div>
        </section>
    )
}

export default Experiences