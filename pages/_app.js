import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Damien MOUROT",
    "url": "https://www.damien-mourot.fr",
    "image": "https://www.damien-mourot.fr/images/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/damien-mourot-developpeur-concepteur-web-mobile/",
      "https://github.com/WebDam063"
    ],
    "jobTitle": "Concepteur Développeur d'applications Web & Mobile - Disponible pour opportunités",
    "description": "Description professionnelle courte qui résume votre expertise et votre offre",
    "knowsAbout": ["React", "React Native", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB", "SQL", "Git", "GitHub", "CI/CD", "Agile", "Scrum", "Kanban"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Concepteur Développeur d'applications Web & Mobile",
      "occupationLocation": {
        "@type": "City",
        "name": "Nice"
      },
      "description": "Description de vos services professionnels"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.damien-mourot.fr"
    }
  };


  return (<>
      <Head>
      <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="description" content="Portfolio professionnel de Mourot Damien. Expert en React & React Native. Découvrez mes réalisations, compétences et expériences."/>
<meta name="keywords" content="portfolio, React, React Native, Mourot Damien, développeur, concepteur, application web, application mobile"/>
<meta name="author" content="Mourot Damien"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.damien-mourot.fr/"/>
<meta property="og:title" content="Damien MOUROT | Portfolio Professionnel"/>
<meta property="og:description" content="Damien MOUROT | Développeur Web & Mobile | Développeur Web React & React Native | Découvrez mes réalisations, compétences et expériences. "/>
<meta property="og:site_name" content="Portfolio de Nom Prénom"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@votreidentifiant"/>
<meta name="twitter:creator" content="@votreidentifiant"/>
<meta name="twitter:title" content="Damien MOUROT | Portfolio Professionnel"/>
<meta name="twitter:description" content="Damien MOUROT | Développeur Web & Mobile | Développeur Web React & React Native | Découvrez mes réalisations, compétences et expériences. "/>
<meta name="robots" content="index, follow"/>
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
<meta name="language" content="French"/>
<meta name="geo.region" content="FR"/>
<meta name="geo.placename" content="Nice"/>
<link rel="canonical" href="https://www.damien-mourot.fr/"/>
<link rel="alternate" hrefLang="fr" href="https://www.damien-mourot.fr/"/>
<link rel="alternate" hrefLang="x-default" href="https://www.damien-mourot.fr/"/>
        <title>Damien MOUROT - Concepteur Développeur d'applications Web & Mobile</title>

  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>
</Head>
      <Component {...pageProps} />
  </>
  );
}

export default App;
