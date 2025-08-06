import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const HomeSection = () => {
  const el = React.useRef(null);
  const [typedComplete, setTypedComplete] = useState(false);
  const [showTexts, setShowTexts] = useState(false);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Damien Mourot'],
      typeSpeed: 80,
      onComplete: () => {
        setTimeout(() => {
          setTypedComplete(true);
          setTimeout(() => {
            setShowTexts(true);
          }, 500);
        }, 300);
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('h1, p');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });

    elementsToAnimate.forEach((element) => observer.observe(element));

    return () => {
      elementsToAnimate.forEach((element) => observer.unobserve(element));
    };
  }, []);
  
  const scrollToAbout = () => {
    try {
      const aboutNavLink = document.querySelector('a[href="#about"]');
      if (aboutNavLink) {
        aboutNavLink.click();
      } else {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (error) {
      console.log('Erreur lors de la navigation vers About:', error);
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };
  
  return(
    <motion.section 
    id="home" 
    className={`${styles.section} ${styles.homeSection}`}
    initial="hidden"
    animate="visible"
    variants={titleVariants}
    >
    <ParticlesBackground />
      
      <motion.h1 
        className={`${styles.mainTitle} ${styles.hidden}`}
        variants={titleVariants}
      >
        <span ref={el} />
        <div className={styles.textContainer}>
          <AnimatePresence>
            {showTexts && (
              <motion.div 
                className={styles.textPrimary}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <h2 className={`${styles.mainTitle} ${styles.textPrimary}`}>Dev. Web & Mobile</h2>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showTexts && (
              <motion.div 
                className={styles.subTitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                Code d'exception pour des projets d'excellence.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.h1>
        <motion.button 
          onClick={scrollToAbout}
          className={styles.scrollDownButton}
          aria-label="Voir à propos"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial="hidden"
          animate="visible"
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.button>
    </motion.section>
  );
}

export default HomeSection;