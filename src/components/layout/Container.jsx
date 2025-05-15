import styles from './Container.module.css'

function Container({children}) {
    return (
        <main className={`${styles.container} container-lg bg-dark my-3 text-light p-4`}>
            {children}
        </main>
    )
}

export default Container