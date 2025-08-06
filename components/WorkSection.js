import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

const WorkSection = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderProjects = (projectsList) => {
    return projectsList.map((project, index) => (
      <motion.div 
        key={index} 
        className={styles.projectCard}
        variants={projectVariants}
        whileHover="hover"
      >
        <motion.div 
          className={styles.projectImageContainer}
          variants={imageVariants}
        >
          <img 
            src={`images/${project.image}`} 
            alt={project.name} 
            className={styles.projectImage}
          />
        </motion.div>
        <div className={styles.projectContent}>
          <h3 className={styles.projectName}>{project.name}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectTechs}>
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i} 
                className={styles.projectTech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className={styles.projectLinks}>
            {project.category === "mobile" ? 
              <>
                <motion.a 
                  href={project.linkBackend} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Accéder au backend
                </motion.a>
                <motion.a 
                  href={project.linkFrontend} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Accéder au frontend
                </motion.a>
              </>
              :
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projectLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir le projet
              </motion.a>
            }
          </div>
        </div>
      </motion.div>
    ));
  };

  return (
    <motion.section 
      id="work" 
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div 
        className={styles.sectionHeader}
        variants={titleVariants}
      >
        <h1 className={`${styles.mainTitle} ${styles.hidden}`}>
          Mes <span className={styles.coloredText}>projets</span>
        </h1>
      </motion.div>

      <motion.div 
        className={styles.projectsContainer}
        variants={containerVariants}
      >
        {renderProjects(projects)}
      </motion.div>
    </motion.section>
  );
};

export default WorkSection;
