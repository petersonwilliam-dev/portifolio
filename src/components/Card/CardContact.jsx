import styles from './CardContact.module.css'

function CardContact({value, urlImage}) {

    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <img src={urlImage} alt="Logo" />
            </div>
            <div className='d-flex align-items-center m-0'>
                <h5>{value}</h5>
            </div>
        </div>
    )
}

export default CardContact