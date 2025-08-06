import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

/* Navbar import */
import Navbar from './Navbar.js';

/* Sections imports */
import HomeSection from './HomeSection.js';
import AboutSection from './AboutSection.js'
import SkillsSection from './SkillsSection.js';
import WorkSection from './WorkSection.js';
import ContactSection from './ContactSection.js';

function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  
  // Vérifier si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const skills = [
  {
    name: 'Next.js',
    picture: 'nextjs.svg',
    tooltipPlace: 'left',
    type: 'frontend'
  },
  {
    name: 'Node.js',
    picture: 'nodejs.svg',
    tooltipPlace: 'left',
    type: 'backend'
  },
  {
    name: 'React',
    picture: 'react.svg',
    tooltipPlace: 'top',
    type: 'frontend'
  },
  {
    name: 'Tailwind',
    picture: 'tailwind.svg',
    tooltipPlace: 'top',
    type: 'frontend'
  },
  {
    name: 'Express',
    picture: 'express.svg',
    tooltipPlace: 'top',
    type: 'backend'
  },
  {
    name: 'MongoDB',
    picture: 'mongodb.svg',
    tooltipPlace: 'top',
    type: 'backend'
  },
  {
    name: 'Mongoose',
    picture: 'mongoose.svg',
    tooltipPlace: 'top',
    type: 'backend'
  },
  {
    name: 'Redux',
    picture: 'redux.svg',
    tooltipPlace: 'top',
    type: 'frontend'
  },
  {
    name: 'Bootstrap',
    picture: 'bootstrap.svg',
    tooltipPlace: 'top',
    type: 'frontend'
  },
  {
    name: 'React Native',
    picture: 'react-native.svg',
    tooltipPlace: 'top',
    type: 'frontend'
  },
  {
    name: 'Git',
    picture: 'git.svg',
    tooltipPlace: 'left',
    type: 'autre'
  },
  {
    name: 'Vercel',
    picture: 'vercel.svg',
    tooltipPlace: 'top',
    type: 'autre'
  },
];

  // Données des projets
  const projects = [
    {
      name: 'Portfolio Personnel',
      description: 'Mon portfolio développé avec React et Next.js, me présentant moi, mes compétences et mes réalisations.',
      image: 'logo_portfolio.svg',
      technologies: ['React', 'Next.js'],
      category: 'frontend',
      link: '#'
    },
    {
      name: 'Greenthumb',
      description: 'Application mobile permettant de gérer des plantes et de recevoir des conseils pour leur entretien.',
      image: 'greenthumb.png',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Expo Go'],
      category: 'mobile',
      linkBackend: 'https://github.com/WebDam063/greenthumb-backend',
      linkFrontend: 'https://github.com/WebDam063/greenthumb-frontend'
    }
  ];

  const handleWheel = (event) => {
    // Désactiver le défilement personnalisé sur les appareils mobiles
    if (isMobile) return;
    
    // Toujours empêcher le comportement de défilement par défaut
    event.preventDefault();
    
    // Ne pas continuer si un défilement est déjà en cours
    if (isScrolling) return;
    
    // Seules les textareas peuvent défiler
    const targetElement = event.target;
    if (targetElement.tagName === 'TEXTAREA') {
      return; // Permettre le défilement dans les textareas uniquement
    }
    
    // Calculer la direction du défilement
    const direction = event.deltaY > 0 ? 1 : -1;
    
    // Définir la nouvelle section cible
    const newSection = Math.max(0, Math.min(4, currentSection + direction));
    
    // Ne pas continuer si nous sommes déjà dans la section cible
    if (newSection === currentSection) return;
    
    // Marquer comme en défilement
    setIsScrolling(true);
    
    // Mettre à jour la section active
    setCurrentSection(newSection);
    
    // Effectuer un défilement fluide vers la section cible
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: newSection * sectionHeight,
      behavior: 'smooth'
    });
    
    // Mettre à jour le nom de la section
    const sectionNames = ['home', 'about', 'skills', 'work', 'contact'];
    setActiveSection(sectionNames[newSection]);
    
    // Réinitialiser l'état de défilement après l'animation
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };
  
  const handleScroll = () => {
    if (isScrolling || isMobile) return;
    
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionIndex = Math.round(scrollPosition / windowHeight);
    
    if (sectionIndex !== currentSection) {
      const sectionNames = ['home', 'about', 'skills', 'work', 'contact'];
      setCurrentSection(sectionIndex);
      setActiveSection(sectionNames[sectionIndex]);
    }
  };
  
  // Ajout d'une fonction spécifique pour le défilement sur mobile
  const handleMobileScroll = () => {
    if (!isMobile || isScrolling) return;
    
    const sections = ['home', 'about', 'skills', 'work', 'contact'];
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    sections.forEach((section, index) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Si la section est visible à plus de 50% dans le viewport
        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
          setCurrentSection(index);
          setActiveSection(section);
        }
      }
    });
  };
  
  const handleNavClick = (index) => {
    // Définir la section active
    setIsScrolling(true);
    setCurrentSection(index);
    
    // Obtenir la section cible
    const sectionNames = ['home', 'about', 'skills', 'work', 'contact'];
    const targetSection = document.getElementById(sectionNames[index]);
    
    if (targetSection) {
      // Sur mobile, utiliser scrollIntoView pour une meilleure compatibilité
      if (isMobile) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Sur desktop, conserver le comportement existant
        const sectionHeight = window.innerHeight;
        window.scrollTo({
          top: index * sectionHeight,
          behavior: 'smooth'
        });
      }
    }
    
    // Mettre à jour le nom de la section active
    setActiveSection(sectionNames[index]);
    
    // Réinitialiser le drapeau isScrolling après la fin de l'animation
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', handleMobileScroll);
      return () => {
        window.removeEventListener('scroll', handleMobileScroll);
      };
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile, isScrolling, currentSection]);

  // Modifier ce useEffect pour utiliser scrollTo au lieu de scrollIntoView
  useEffect(() => {
    if (isScrolling) return;
    
    const sectionNames = ['home', 'about', 'skills', 'work', 'contact'];
    const targetSection = document.getElementById(sectionNames[currentSection]);
    
    if (targetSection) {
      if (isMobile) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        const sectionHeight = window.innerHeight;
        window.scrollTo({
          top: currentSection * sectionHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [currentSection, isMobile]);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      // Vérifier si l'ancre a la classe navLink (ajoutée à la navbar)
      if (event.currentTarget.closest('.navLinks')) {
        // Laisser handleClick de Navbar gérer ce clic
        return;
      }
      
      // Empêcher le comportement par défaut du navigateur
      event.preventDefault();
      
      // Extraire l'ID de la section cible
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      
      // Trouver l'index de la section correspondante pour mettre à jour currentSection
      const sectionNames = ['home', 'about', 'skills', 'work', 'contact'];
      const sectionIndex = sectionNames.indexOf(targetId);
      
      if (sectionIndex !== -1) {
        // Si c'est une section connue, utiliser notre système de navigation
        setCurrentSection(sectionIndex);
        setActiveSection(targetId);
        
        // Déclencher un défilement fluide
        const sectionHeight = window.innerHeight;
        window.scrollTo({
          top: sectionIndex * sectionHeight,
          behavior: 'smooth'
        });
      } else {
        // Pour les autres liens d'ancrage (non dans la navbar), utiliser le comportement standard
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Ne sélectionner que les liens d'ancrage qui ne sont pas dans la navbar
    const anchors = document.querySelectorAll('a[href^="#"]:not(.navLinks a)');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [setCurrentSection, setActiveSection]);

  return (
    <>
      <div className={styles.main}>
        <Navbar activeIndex={currentSection} activeSection={activeSection} onNavClick={handleNavClick} />

        <div className={styles.sectionContent} ref={(el) => (sectionsRef.current[0] = el)}>
          <HomeSection />
        </div>

        <div className={styles.sectionContent} ref={(el) => (sectionsRef.current[1] = el)}>
          <AboutSection />
        </div>

        <div className={styles.sectionContent} ref={(el) => (sectionsRef.current[2] = el)}>
          <SkillsSection currentSkills={skills} />
        </div>

        <div className={styles.sectionContent} ref={(el) => (sectionsRef.current[3] = el)}>
          <WorkSection projects={projects} />
        </div>

        <div className={styles.sectionContent} ref={(el) => (sectionsRef.current[4] = el)}>
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default Home;
