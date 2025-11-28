import styles from './CardSkill.module.css'

function CardSkill({skill}) {

    return (
        <div className={styles.card} style={{boxShadow: `1px 1px 5px ${skill.hex}`}}>
            <img src={skill.urlImage} alt="Logo"/>
            <p className='lead'>{skill.name}</p>
        </div>
    )
}

export default CardSkill