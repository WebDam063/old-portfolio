# Configuration d'EmailJS pour le formulaire de contact

Ce document explique comment configurer EmailJS pour permettre l'envoi d'emails depuis le formulaire de contact de votre portfolio.

## Étapes de configuration

1. **Créez un compte EmailJS**
   - Rendez-vous sur [https://www.emailjs.com/](https://www.emailjs.com/)
   - Inscrivez-vous pour un compte gratuit (200 emails par mois)

2. **Configurez un service d'email**
   - Dans le tableau de bord EmailJS, cliquez sur "Email Services"
   - Ajoutez un nouveau service (Gmail, Outlook, etc.)
   - Suivez les instructions pour connecter votre compte email
   - Notez l'ID du service (par exemple: "service_abc123")

3. **Créez un template d'email**
   - Dans le tableau de bord, cliquez sur "Email Templates"
   - Créez un nouveau template
   - Utilisez les variables suivantes dans votre template:
     - `{{name}}` - Nom de l'expéditeur
     - `{{email}}` - Email de l'expéditeur
     - `{{message}}` - Message
   - Notez l'ID du template (par exemple: "template_xyz789")

4. **Obtenez votre clé publique**
   - Dans le tableau de bord, cliquez sur "Account"
   - Trouvez votre "Public Key" (par exemple: "user_abcdefghijklmnopqrstuvwxyz")

5. **Mettez à jour le code**
   - Ouvrez le fichier `components/ContactSection.js`
   - Remplacez les valeurs suivantes par vos propres clés:
     ```javascript
     const serviceId = "YOUR_SERVICE_ID"; // Remplacez par votre ID de service
     const templateId = "YOUR_TEMPLATE_ID"; // Remplacez par votre ID de template
     const publicKey = "YOUR_PUBLIC_KEY"; // Remplacez par votre clé publique
     ```

## Exemple de template d'email

```
Nouveau message de contact depuis votre portfolio

De: {{name}} ({{email}})

Message:
{{message}}
```

## Remarques importantes

- Le plan gratuit d'EmailJS limite à 200 emails par mois
- Assurez-vous que votre service d'email autorise l'envoi d'emails via API
- Pour des raisons de sécurité, ne partagez jamais votre clé privée

## Dépannage

Si vous rencontrez des problèmes:
1. Vérifiez que toutes les clés sont correctement configurées
2. Assurez-vous que votre compte EmailJS est actif
3. Vérifiez les logs dans la console du navigateur pour plus de détails sur les erreurs 