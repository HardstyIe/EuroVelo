const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupération des valeurs saisies par l'utilisateur
  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const mail = document.querySelector("#mail").value;
  const objet = document.querySelector("#obj").value;
  const message = document.querySelector("#msg").value;

  // Affichage des valeurs dans la console
  console.log("Nom : ", nom);
  console.log("Prénom : ", prenom);
  console.log("Adresse mail : ", mail);
  console.log("Objet : ", objet);
  console.log("Message : ", message);

  // Envoyer les données à un serveur via une requête AJAX ou une redirection
  // ...

  // Réinitialisation du formulaire
  form.reset();
});
alert("Nom : " + nom + "\nPrénom : " + prenom + "\nAdresse mail : " + mail + "\nObjet : " + objet + "\nMessage : " + message);