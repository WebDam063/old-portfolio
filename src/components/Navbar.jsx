import { motion } from 'framer-motion';

const Navbar = () => {
  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
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

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" }
  };

  return (
    <motion.nav 
      className={styles.navbar}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className={styles.logo}>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.h1>
      </div>
      <div className={styles.links}>
        {navLinks.map((link, index) => (
          <motion.div 
            key={index}
            className={styles.linkContainer}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href={link.href}>{link.text}</a>
            <motion.div 
              className={styles.underline}
              variants={underlineVariants}
              initial="hidden"
              whileHover="visible"
            />
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar; 