import styles from './CardProject.module.css'
import img from '../../assets/img/logo.png'

import { Link } from "react-router-dom"
import ModalProject from '../Modal/ModalProject'

function CardProject({project}) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image_project}>
                    <img src={project.images[0]} alt="Imagem do projeto" className='w-100'/>
                </div>
                <div className="text-start">
                    <h5>{project.name}</h5>
                    <p className='lead text-secondary'><span>Tecnologias: </span>{project.technologies}</p>
                    <div className="text-center mt-3">
                        <button data-bs-toggle="modal" data-bs-target={`#${project.id}`} className="btn btn-primary">Ver detalhes</button>   
                    </div>
                </div>
            </div>
            <ModalProject project={project}/>
        </>
    )
}

export default CardProject