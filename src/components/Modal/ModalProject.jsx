import { useState } from "react"
import styles from './ModalProject.module.css'

function ModalProject({project}) {

    const [indexImage, setIndexImage] = useState(0)

    return (
        <div className="modal fade" id={project.id} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header d-flex justify-content-between">
                        <h4 className="modal-title fs-5" id="exampleModalLabel">{project.name}</h4>
                        <ion-icon style={{color: '#fff', fontSize: '30px', cursor: 'pointer'}} data-bs-dismiss="modal" aria-label="Close" name="close-outline"></ion-icon>
                    </div>
                    <div className="modal-body py-5">
                        <div className={`w-100 d-flex align-items-center justify-content-center ${styles.image} mb-3`}>
                            <img src={project.images[indexImage]} alt="Imagem do projeto"/>
                        </div>
                        <div className={`d-flex justify-content-center flex-wrap mb-3 px-2 ${styles.images_project}`}>
                            {project.images.map((image, index) => (
                                <img src={image} key={index} onClick={() => setIndexImage(index)} alt="Imagem do projeto" className="mx-2" style={{boxShadow: image === project.images[indexImage] ? '1px 1px 10px #0a84df' : "none"}}/>
                            ))}
                        </div>
                        <div className={styles.technologies}>
                            <p className="lead text-secondary"><span>Tecnologias: </span> {project.technologies}</p>
                        </div>
                        <div className={`${styles.description}`}>
                             <p className="lead">
                                {project.details}
                             </p>
                        </div>
                        <div className={`d-flex justify-content-end ${styles.links}`}>
                            <a target="_blank" href={project.urlPage} className="btn btn-primary"><ion-icon name="code-slash-outline"></ion-icon>Ver projeto</a>
                            <a target="_blank" href={project.urlCode} className="btn btn-dark"><ion-icon name="logo-github"></ion-icon>Ver código fonte</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProject