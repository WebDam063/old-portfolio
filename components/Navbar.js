import styles from '../styles/Navbar.module.css';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection, onNavClick }) => {
    const handleClick = (index, event) => {
        // Empêcher le comportement par défaut pour éviter que handleAnchorClick 
        // ne soit exécuté en plus
        event.preventDefault();
        
        // Appeler la fonction onNavClick fournie par le composant parent
        onNavClick(index);
        
        // Fermer le menu mobile après un clic
        setIsMenuOpen(false);
    };
      
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Déclenche le fade-in lorsque le composant est monté
        setIsVisible(true);
    }, []);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };
    
    return (
        <>
            <motion.div 
                className={styles.navbar}
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <motion.div 
                    className={styles.logoContainer}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
                </motion.div>
                
                <motion.button 
                    className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`} 
                    onClick={toggleMenu} 
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
                </motion.button>
                
                <div className={styles.navLinks}>
                    {['home', 'about', 'skills', 'work', 'contact'].map((section, index) => (
                        <React.Fragment key={section}>
                            <motion.a 
                                href={`#${section}`} 
                                className={`${activeSection === section ? styles.active : styles.underlineHover}`} 
                                onClick={(e) => handleClick(index, e)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </motion.a>
                            {index < 4 && <div className={styles.navbarDivider}></div>}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className={styles.mobileMenu}
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.button 
                            className={styles.closeButton} 
                            onClick={toggleMenu} 
                            aria-label="Fermer le menu"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ✕
                        </motion.button>
                        <div className={styles.mobileMenuContent}>
                            {['home', 'about', 'skills', 'work', 'contact'].map((section, index) => (
                                <motion.a 
                                    key={section}
                                    href={`#${section}`} 
                                    className={`${activeSection === section ? styles.active : ''}`} 
                                    onClick={(e) => handleClick(index, e)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;