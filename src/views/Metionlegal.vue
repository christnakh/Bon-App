<template>
  <div>
    <h1>Mentions Légales</h1>
    <div class="container">
      <h2>Conditions d'utilisation</h2>
      <p>Voici les conditions d'utilisation pour notre site web :</p>
      <ul>
        <li>Vous devez avoir au moins 18 ans pour utiliser nos services.</li>
        <li>
          Vous acceptez d'utiliser le site conformément aux lois et
          réglementations applicables.
        </li>
        <li>
          Vous êtes entièrement responsable du contenu que vous publiez sur
          notre site web.
        </li>
        <li>
          Nous nous réservons le droit de suspendre ou de résilier votre compte
          si vous enfreignez ces conditions.
        </li>
      </ul>

      <h2>Politique de confidentialité</h2>
      <p>Voici notre politique de confidentialité :</p>
      <ul>
        <li>
          Nous collectons et stockons vos informations personnelles afin de
          fournir nos services.
        </li>
        <li>
          Nous ne partageons pas vos informations avec des tiers sans votre
          consentement.
        </li>
        <li>
          Nous utilisons des cookies pour améliorer votre expérience de
          navigation sur notre site web.
        </li>
        <li>
          Vos informations personnelles sont protégées et stockées en toute
          sécurité.
        </li>
      </ul>

      <h2>Propriété intellectuelle</h2>
      <p>Notre site web respecte les droits de propriété intellectuelle :</p>
      <ul>
        <li>
          Tous les contenus de ce site web sont protégés par les lois sur le
          droit d'auteur.
        </li>
        <li>
          Vous ne pouvez pas reproduire ou distribuer notre contenu sans
          autorisation.
        </li>
        <li>
          Les marques commerciales et les logos utilisés sur ce site web sont la
          propriété de leurs propriétaires respectifs.
        </li>
      </ul>

      <h2>Limitation de responsabilité</h2>
      <p>Nous fournissons les informations sur ce site web telles quelles :</p>
      <ul>
        <li>
          Nous ne donnons aucune garantie quant à l'exactitude ou l'exhaustivité
          des informations.
        </li>
        <li>
          Nous ne sommes pas responsables des dommages ou des pertes résultant
          de l'utilisation de ce site web.
        </li>
      </ul>
    </div>

    <footer>
      <p>&copy; 2023 Bon App. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LegalPage"
};
</script>

<style scoped>
/* Styles CSS */
body {
  font-family: "Roboto", Arial, sans-serif;
  margin: 0;
  color: #333;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

h2 {
  color: #555;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

p {
  line-height: 1.6;
}

footer {
  margin-top: 50px;
  text-align: center;
  color: #777;
  font-size: 14px;
  font-style: italic;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.container p:last-child {
  margin-bottom: 0;
}

/* Styles responsives */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  p {
    line-height: 1.5;
  }

  .container {
    padding: 30px;
  }
}
</style>
