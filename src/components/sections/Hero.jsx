import styles from './Hero.module.css';

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Peterson William <span className={styles.subtitle} style={{fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '700'}}>DEV</span></h1>
        <p className={styles.subtitle}>Full-Stack Developer | Web Enthusiast | Tech Innovator</p>
        <p className={styles.description}>
          Passionate about building scalable, user-friendly web solutions that make a real impact
        </p>
        <button 
          className={styles.ctaButton}
          onClick={() => scrollToSection('aboutme')}
        >
          Veja meus trabalhos
        </button>
      </div>
    </section>
  );
}

export default Hero;
