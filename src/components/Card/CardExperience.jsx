import styles from './CardExperience.module.css'
import { format } from 'date-fns'

function CardExperience({experience}) {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image_experience}>
                    <img src={experience.image} alt="Imagem" className='w-100'/>
                </div>
                <div className="text-start">
                    <h5>{experience.name}</h5>
                    <p className='lead'><span>Função: </span>{experience.function}</p>
                    <p className='lead'><span>Status: </span>{experience.status}</p>
                    <p className='lead'><span>Duração: </span>{format(experience.startDate, 'dd/MM/yyyy')} - {experience.endDate ? format(experience.endDate, 'dd/MM/yyyy') : 'o momento'}</p>
                    <p className='lead'><span>Tecnologias: </span>{experience.technologies}</p>
                    <p className='lead'>{experience.description}</p>
                </div>
            </div>
        </>
    )
}

export default CardExperience