import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
const AboutSection = () => {
    return(
        <section id="about" className={styles.AboutSection}>
                  <h1 className={`${styles.mainTitle} ${styles.hidden}`}>
                    À propos de <span className={styles.coloredText}>moi</span>
                  </h1>
                  <div className={`${styles.container}`}>
                    <div className={styles.aboutLeft}>
                      <p className={`${styles.AboutDesc} ${styles.hidden}`}>
                        <span className={styles.coloredText}>Développeur web et mobile</span>, je suis <span className={styles.coloredText}>passionné</span> par l'univers de la technologie et de la programmation.<br /><br />
                        Mon <span className={styles.coloredText}>intérêt</span> pour cet univers remonte à mes premiers contacts avec l'informatique, où une <span className={styles.coloredText}>curiosité insatiable</span> et un <span className={styles.coloredText}>attrait marqué</span> pour la programmation web se sont rapidement manifestés.<br /><br />
                        J'ai entamé mon parcours dans le développement web en 2013, alors que j'étais encore collégien.<br/> Toutefois, j'ai temporairement mis en pause cet apprentissage afin de me consacrer pleinement à mes études, avec la <span className={styles.coloredText}>détermination</span> de reprendre ce chemin par la suite.
                      </p>
                    </div>
                    <div className={styles.aboutCenter}>
                      <svg 
                        overflow="hidden" 
                        fill="black" 
                        style={{
                          width: '100px',
                          height: '100px',
                          transformOrigin: 'center center',
                          animation: 'spin 10s linear infinite'
                        }}
                      >
                        <path 
                          id="curve-wnxkz4" 
                          d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50" 
                          strokeWidth="none" 
                          fill="transparent"
                        ></path>
                        <text>
                          <textPath 
                            href="#curve-wnxkz4" 
                            startOffset="0" 
                            dominantBaseline="Hanging" 
                            style={{
                              fontSize: '13px',
                              fontWeight: 600,
                              wordSpacing: '5px',
                              letterSpacing: '2.1px',
                              fill: 'rgba(242, 242, 242, 0.9)'
                            }}
                          >
                            OPEN TO WORK · OPEN TO WORK ·
                          </textPath>
                        </text>
                      </svg>

                      <style>
                        {`
                          @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                          }
                        `}
                      </style>
                    </div>
                    <div className={styles.aboutRight}>
                      <p className={`${styles.AboutDesc} ${styles.hidden}`}>
                        Aujourd'hui âgé de 24 ans, après une carrière en tant qu'Employé Polyvalent dans le secteur de la distribution, j'ai pris la décision de réorienter ma trajectoire professionnelle pour me <span className={styles.coloredText}>consacrer</span> à nouveau pleinement à l'informatique, et plus particulièrement à la programmation, domaine qui me <span className={styles.coloredText}>passionne</span> profondément.<br /><br />
                        <span className={styles.coloredText}>Animé</span> par un désir constant d'<span className={styles.coloredText}>amélioration</span>, j'ai entrepris de consolider et d'actualiser mes connaissances acquises par le passé, tout en poursuivant un apprentissage <span className={styles.coloredText}>rigoureux</span> dans ce secteur.<br />
                        Mon objectif est de développer une <span className={styles.coloredText}>expertise</span> de haut niveau et de viser l'<span className={styles.coloredText}>excellence</span> dans chacune de mes réalisations.
                      </p>
                    </div>
                  </div>
                </section>
    );
}

export default AboutSection;