import styles from './Container.module.css';

function Container({children}) {
    return (
        <main className={`w-100 ${styles.container}`}>
            {children}
        </main>
    )
}

export default Container