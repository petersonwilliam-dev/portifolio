import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
// CSS
import styles from './Navbar.module.css'

function Navbar() {

    const scrollView = (id) => {
        const section = document.getElementById(id)
        section.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <nav className={`d-block d-lg-flex bg-dark text-light p-3 sticky-top ${styles.navbar}`}>
            <div className="logo d-flex justify-content-center d-lg-block">
                <img src={logo} alt="Logo" className={styles.logo}/>
            </div>
            <div className='d-none d-md-flex align-items-center'>
                <ul className={`${styles.menu} lead`}>
                    <li onClick={() => scrollView('aboutme')}>Sobre mim</li>
                    <li onClick={() => scrollView('skills')}>Habilidades</li>
                    <li onClick={() => scrollView('projects')}>Projetos</li>
                    <li onClick={() => scrollView('contacts')}>Contatos</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar