import styles from './AboutMe.module.css'
import eu from '../../assets/img/eu3.png'

function AboutMe() {
    return (
        <section id="aboutme">
            <h2 className="display-6">Sobre mim</h2>
            <div className="row">
                <div className={`col-12 col-lg-6 order-2 order-lg-1 ${styles.text}`}>
                    <p className="lead">
                        Meu nome é Peterson William, tenho 20 anos e sou técnico em Desenvolvimento de Sistemas. Atualmente, estou cursando Sistemas de Informação na UFPB. Iniciei meus estudos em programação ao ter o primeiro contato com esse mundo durante o curso técnico no ensino médio, e desde então me apaixonei pelo universo da tecnologia. Sou um grande entusiasta do desenvolvimento web e estou sempre em busca de aprimorar minhas habilidades para contribuir de forma significativa no desenvolvimento de soluções tecnológicas que atendam a desafios atuais. Meu foco é unir conhecimento técnico com criatividade para criar projetos inovadores.
                    </p>
                </div>
                <div className={`col-12 col-lg-6 order-1 order-lg-2 ${styles.image}`}>
                    <img src={eu} alt="Petersonw dev" className="rounded rounded-circle " />
                </div>
            </div>
        </section>
    )
}

export default AboutMe