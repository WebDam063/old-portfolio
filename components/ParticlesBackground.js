import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Création des particules
        const createParticles = () => {
            particles.current = Array.from({ length: 50 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() * 1.25 - 0.75) * 0.5,
                speedY: (Math.random() * 1.25 - 0.75) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            }));
        };

        createParticles();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.current.forEach(particle => {
                particle.x += particle.speedX * 0.7;
                particle.y += particle.speedY * 0.7;

                // Rebond sur les bords
                if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > height) particle.speedY *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(31, 223, 124, ${particle.opacity})`;
                ctx.fill();
            });

            // Dessiner les connexions entre les particules
            particles.current.forEach((particle1, i) => {
                particles.current.slice(i + 1).forEach(particle2 => {
                    const dx = particle1.x - particle2.x;
                    const dy = particle1.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(31, 223, 124, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle1.x, particle1.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
};

export default ParticlesBackground; 