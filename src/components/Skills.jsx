import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className={styles.skills}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2>Compétences</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            variants={skillVariants}
            whileHover="hover"
          >
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
            <motion.div 
              className={styles.progressBar}
              variants={progressVariants}
            >
              <div 
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills; 