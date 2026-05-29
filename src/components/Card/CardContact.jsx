import styles from './CardContact.module.css'

function CardContact({contact}) {

    return (
        <a 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.cardLink}
        >
            <div className={styles.card}>
                <div className={styles.logo}>
                    <img src={contact.image} alt={contact.label} />
                </div>
                <div className='d-flex align-items-center flex-column m-0'>
                    <h6 className={styles.label}>{contact.label}</h6>
                    <h5 className={styles.value}>{contact.value}</h5>
                </div>
            </div>
        </a>
    )
}

export default CardContact