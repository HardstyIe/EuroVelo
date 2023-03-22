// const reponse = await fetch('scriptAvis.json');
// const avis = await reponse.json();

// for (let i = 0; i < avis.length; i++) {

//     const article = avis[i];
//     // Récupération de l'élément du DOM qui accueillera les fiches
//     const sectionFiches = document.querySelector(".avisHtml");
//     // Création d’une balise dédiée à une pièce automobile
//     const avisElement = document.createElement("article");
//     // Création des balises 
//     const nomElement = document.createElement("h2");
//     nomElement.innerText = article.nom;
//     const villeElement = document.createElement("p");
//     villeElement.innerText = article.ville;
//     const etoileElement = document.createElement("p");
//     etoileElement.innerText = article.etoile;
//     const descriptionElement = document.createElement("p");
//     descriptionElement.innerText = article.description;

    
//     // On rattache la balise article a la section Fiches
//     sectionFiches.appendChild(avisElement);
//     avisElement.appendChild(nomElement);
//     avisElement.appendChild(villeElement);
//     avisElement.appendChild(etoileElement);
//     avisElement.appendChild(descriptionElement);
//  }