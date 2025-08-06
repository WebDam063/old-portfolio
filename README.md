# Portfolio Personnel

Ce projet est un portfolio personnel développé avec React et Next.js.

## Configuration des variables d'environnement

Ce projet utilise des variables d'environnement pour stocker des informations sensibles comme les clés API. Pour configurer ces variables :

1. Copiez le fichier `.env.example` vers un nouveau fichier `.env.local` :
   ```
   cp .env.example .env.local
   ```

2. Modifiez le fichier `.env.local` pour y ajouter vos propres valeurs :
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

3. Redémarrez votre serveur de développement pour que les changements prennent effet.

### Variables d'environnement pour la production

Pour la production, vous pouvez utiliser un fichier `.env.production` qui sera automatiquement chargé lors de la construction pour la production :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

**Note importante** : Le fichier `.env.production` est généralement inclus dans le dépôt Git, contrairement à `.env.local`. Assurez-vous que les clés que vous y placez sont des clés publiques qui peuvent être exposées sans risque de sécurité.

## Configuration d'EmailJS

Pour configurer EmailJS et permettre l'envoi d'emails depuis le formulaire de contact, consultez le fichier [README-EMAILJS.md](README-EMAILJS.md).

## Installation et démarrage

```bash
# Installation des dépendances
npm install
# ou
yarn install

# Démarrage du serveur de développement
npm run dev
# ou
yarn dev

# Construction pour la production
npm run build
# ou
yarn build

# Démarrage du serveur de production
npm run start
# ou
yarn start
```

## Déploiement

Pour déployer ce projet sur o2switch :

1. Construisez le projet :
   ```bash
   npm run build
   # ou
   yarn build
   ```

2. Téléchargez le contenu du dossier `out` vers votre hébergement o2switch via FileZilla.

3. Assurez-vous que les variables d'environnement sont correctement configurées sur votre serveur de production. 