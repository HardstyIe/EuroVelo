const reponse = await fetch('scriptAvis.json');
const avis = await reponse.json();

for (let i = 0; i < avis.length; i++) {

    const article = avis[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".avisHtml");
    // Création d’une balise dédiée à une pièce automobile
    const avisElement = document.createElement("article");
    // Création des balises 
    const datesElement = document.createElement("p");
    datesElement.innerText = article.Dates;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.Nom;
    const courseElement = document.createElement("p");
    courseElement.innerText = article.Course;
    const securiteElement = document.createElement("p");
    securiteElement.innerText = article.Securite;
    const balisageElement = document.createElement("p");
    balisageElement.innerText = article.Balisage;
    const interetsElement = document.createElement("p");
    interetsElement.innerText = article.Interets;
    const servicesElement = document.createElement("p");
    servicesElement.innerText = article.Services;
    const parcoursElement = document.createElement("p");
    parcoursElement.innerText = article.Parcours;
    const commentaireElement = document.createElement("p");
    commentaireElement.innerText = article.Commentaire;
    const etoileElement = document.createElement("p");
    etoileElement.innerText = article.etoile;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description;

    
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(avisElement);
    avisElement.appendChild(nomElement);
    avisElement.appendChild(villeElement);
    avisElement.appendChild(etoileElement);
    avisElement.appendChild(descriptionElement);
 }