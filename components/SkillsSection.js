import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

const SkillsSection = ({currentSkills}) => {
  // Trier les compétences par type
  const frontendSkills = currentSkills.filter(skill => skill.type === 'frontend');
  const backendSkills = currentSkills.filter(skill => skill.type === 'backend');
  const autreSkills = currentSkills.filter(skill => skill.type === 'autre');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2
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

  const renderSkills = (skills) => {
    return skills.map((data, i) => {
      return (
        <motion.a 
          key={i} 
          className={styles.skillBox} 
          data-tooltip-id="my-tooltip"
          data-tooltip-content={data.name}
          data-tooltip-place={data.tooltipPlace}
          variants={itemVariants}
          whileHover="hover"
        >
          <img 
            className={`${styles.mask} ${styles.maskSquircle}`} 
            style={{maskImage: 'images/mask.svg'}} 
            src={`images/${data.picture}`} 
            alt={data.name} 
            width="100" 
            height="100"
          />
        </motion.a>
      )
    });
  };

  return (
    <>
      <motion.section 
        id="skills" 
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
            Mes <span className={styles.coloredText}>skills</span>
          </h1>
        </motion.div>

        <div className={styles.skillsCategoryContainer}>
          <motion.div 
            className={styles.skillsCategory}
            variants={containerVariants}
          >
            <motion.h2 
              className={styles.skillsTitle}
              variants={titleVariants}
            >
              Frontend
            </motion.h2>
            <motion.div 
              className={styles.skillsContainer}
              variants={containerVariants}
            >            
              {renderSkills(frontendSkills)}           
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.skillsCategory}
            variants={containerVariants}
          >
            <motion.h2 
              className={styles.skillsTitle}
              variants={titleVariants}
            >
              Backend
            </motion.h2>
            <motion.div 
              className={styles.skillsContainer}
              variants={containerVariants}
            >            
              {renderSkills(backendSkills)}           
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.skillsCategory}
            variants={containerVariants}
          >
            <motion.h2 
              className={styles.skillsTitle}
              variants={titleVariants}
            >
              Autres
            </motion.h2>
            <motion.div 
              className={styles.skillsContainer}
              variants={containerVariants}
            >            
              {renderSkills(autreSkills)}           
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Tooltip id="my-tooltip"/>
    </>
  );
}

export default SkillsSection;