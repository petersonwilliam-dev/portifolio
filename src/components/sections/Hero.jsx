import styles from './Hero.module.css';
import CodeRain from './CodeRain';

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <CodeRain />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Peterson William <span className={styles.devSpan}>DEV</span>
        </h1>
        <p className={styles.subtitle}>
          Desenvolvedor Full-Stack | Engenharia de Software & Soluções Web
        </p>
        <p className={styles.description}>
          Especializado em construir aplicações modernas, escaláveis e de alto desempenho, 
          transformando ideias complexas em código limpo e soluções de real impacto.
        </p>
        <div className={styles.actions}>
          <button 
            className={styles.ctaButton}
            onClick={() => scrollToSection('projects')} // Alterado para fazer mais sentido com o texto do botão
          >
            Conheça meu trabalho
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;