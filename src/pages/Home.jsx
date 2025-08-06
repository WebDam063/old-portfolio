import { motion } from 'framer-motion';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.hero}
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeInUp} className={styles.title}>
          Damien
        </motion.h1>
        <motion.h2 variants={fadeInUp} className={styles.subtitle}>
          Développeur Web Full Stack
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.description}>
          Passionné par la création d'applications web modernes et performantes
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home; 