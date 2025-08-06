import React, { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
require('dotenv').config();

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });
    
    const form = useRef();

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
        }
    };

    const inputVariants = {
        focus: {
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: { scale: 0.95 },
        loading: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 0.35,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const successVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const socialIconVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                duration: 0.2
            }
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });
        
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        
        if (!serviceId || !templateId || !publicKey) {
            console.error('Variables d\'environnement EmailJS manquantes');
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Configuration EmailJS manquante. Veuillez contacter l\'administrateur.'
            });
            return;
        }
        
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('Email envoyé avec succès:', result.text);
                setStatus({
                    loading: false,
                    success: true,
                    error: false,
                    message: 'Message envoyé avec succès!'
                });
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'email:', error.text);
                setStatus({
                    loading: false,
                    success: false,
                    error: true,
                    message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
                });
            });
    };
    
    const handleTextareaWheel = (e) => {
        e.stopPropagation();
    };
    
    return(
        <motion.section 
            id="contact" 
            className={styles.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.div 
                className={styles.sectionHeader}
                variants={itemVariants}
            >
                <h1 className={styles.mainTitle}>
                    Me <span className={styles.coloredText}>contacter</span>
                </h1>
            </motion.div>
            
            <div className={styles.contactContainer}>
                <motion.form 
                    className={styles.contactForm} 
                    onSubmit={handleSubmit} 
                    ref={form}
                    variants={containerVariants}
                >
                    <motion.h3 
                        className={styles.contactInfoTitle}
                        variants={itemVariants}
                    >
                        M'envoyer un <span className={styles.coloredText}>message</span>
                    </motion.h3>
                    
                    <motion.div 
                        className={styles.formGroup}
                        variants={itemVariants}
                    >
                        <label htmlFor="name">Nom</label>
                        <motion.input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variants={inputVariants}
                            whileFocus="focus"
                        />
                    </motion.div>
                    
                    <motion.div 
                        className={styles.formGroup}
                        variants={itemVariants}
                    >
                        <label htmlFor="email">Email</label>
                        <motion.input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variants={inputVariants}
                            whileFocus="focus"
                        />
                    </motion.div>
                    
                    <motion.div 
                        className={styles.formGroup}
                        variants={itemVariants}
                    >
                        <label htmlFor="message">Message</label>
                        <motion.textarea 
                            id="message" 
                            name="message" 
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            onWheel={handleTextareaWheel}
                            required
                            variants={inputVariants}
                            whileFocus="focus"
                        ></motion.textarea>
                    </motion.div>
                    
                    <AnimatePresence>
                        {status.message && (
                            <motion.div 
                                className={`${styles.statusMessage} ${status.success ? styles.successMessage : styles.errorMessage}`}
                                variants={successVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {status.message}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    <motion.button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={status.loading}
                        variants={buttonVariants}
                        initial="initial"
                        whileHover={status.loading ? "loading" : "hover"}
                        whileTap="tap"
                        animate={status.loading ? "loading" : "initial"}
                    >
                        {status.loading ? 'Envoi en cours...' : 'Envoyer'}
                    </motion.button>
                </motion.form>
                
                <motion.div 
                    className={styles.contactInfo}
                    variants={containerVariants}
                >
                    <motion.h3 
                        className={styles.contactInfoTitle}
                        variants={itemVariants}
                    >
                        Mes <span className={styles.coloredText}>coordonnées</span>
                    </motion.h3>
                    
                    <motion.div 
                        className={styles.contactInfoItem}
                        variants={itemVariants}
                    >
                        <motion.div 
                            className={styles.contactIcon}
                            variants={socialIconVariants}
                            whileHover="hover"
                        >
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                style={{
                                    color: '#1fdf7c',
                                    background: 'linear-gradient(135deg, #1fdf7c, #64e5ff)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            />
                        </motion.div>
                        <p>hi@damien-mourot.fr</p>
                    </motion.div>
                    
                    <motion.div 
                        className={styles.contactInfoItem}
                        variants={itemVariants}
                    >
                        <motion.div 
                            className={styles.contactIcon}
                            variants={socialIconVariants}
                            whileHover="hover"
                        >
                            <FontAwesomeIcon 
                                icon={faGithub} 
                                style={{
                                    color: '#1fdf7c',
                                    background: 'linear-gradient(135deg, #1fdf7c, #64e5ff)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            />
                        </motion.div>
                        <p>github.com/WebDam063</p>
                    </motion.div>
                    
                    <motion.div 
                        className={styles.contactInfoItem}
                        variants={itemVariants}
                    >
                        <motion.div 
                            className={styles.contactIcon}
                            variants={socialIconVariants}
                            whileHover="hover"
                        >
                            <FontAwesomeIcon 
                                icon={faLinkedin} 
                                style={{
                                    color: '#1fdf7c',
                                    background: 'linear-gradient(135deg, #1fdf7c, #64e5ff)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            />
                        </motion.div>
                        <p>linkedin.com/in/damien-mourot</p>
                    </motion.div>
                    
                    <motion.div 
                        className={styles.contactInfoDivider}
                        variants={itemVariants}
                    ></motion.div>
                    
                    <motion.div 
                        className={styles.contactInfoStatus}
                        variants={itemVariants}
                    >
                        <span className={styles.statusDot}></span>
                        <p>Disponible pour travailler ensemble</p>
                    </motion.div>
                    
                    <motion.a 
                        href="http://curriculum.damien-mourot.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadCvButton}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '8px' }} />
                        Consulter mon CV
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default ContactSection;