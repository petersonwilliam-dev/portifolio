import styles from './CardSkill.module.css'

function CardSkill({skill}) {

    return (
        <div className={styles.card} style={{ '--skill-color' : skill.hex}} title={skill.name}>
            <img src={skill.urlImage} alt={`${skill.name} Logo`} style={{filter: `drop-shadow(0 4px 8px ${skill.hex}))`}}/>
            <p className='lead' style={{color: '#333331', marginTop: '0.75rem'}}>{skill.name}</p>
        </div>
    )
}

export default CardSkill

{/*
    box-shadow: 0 12px 24px rgba(55, 201, 239, 0.25);
*/}