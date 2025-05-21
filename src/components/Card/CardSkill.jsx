import styles from './CardSkill.module.css'
import { useEffect, useState, useRef } from 'react'

function CardSkill({skill}) {


    const [percentage, setPercentage] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect();
                }
            },
            {threshold: 0.1}
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect();
    }, [])

    useEffect(() => {

        if (!isVisible) return

        if (percentage >= skill.percentage) return;

        const interval = setInterval(() => {
            setPercentage(percentage => {
                if (percentage >= skill.percentage) {
                    clearInterval(interval)
                    return percentage
                }
                return percentage + 1
            })
        }, 10)

        return () => clearInterval(interval)
    }, [isVisible, percentage, skill])

    return (
        <div className={styles.card} ref={ref}>
            <div className={`${styles.logo} bg-dark`} style={{boxShadow: `1px 1px 5px ${skill.hex}`}}>
                <img src={skill.urlImage} alt="Logo"/>
            </div>
            <div className={styles.percentage} style={{boxShadow: `1px 1px 5px ${skill.hex}`}} >
                <div className='d-flex justify-content-end'>
                    <p className='mx-4'>{skill.name}</p>
                    <p className='text-end'>{percentage}%</p>
                </div>
                <div className={styles.percentagebar} style={{width: `${percentage}%`, backgroundColor: `${skill.hex}`}}></div>
            </div>
        </div>
    )
}

export default CardSkill