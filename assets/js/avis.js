let promise = fetch('http://90.110.218.245:5003/api/avis')
  .then(response => response.json())
  .then(data => {
    let avis = data.data
    for (let i = 0; i < avis.length; i++) {
      const article = avis[i].attributes
      // Récupération de l'élément du DOM qui accueillera les fiches
      const sectionFiches = document.querySelector('.avisHtml')
      // Création d’une balise dédiée à une pièce automobile
      const avisElement = document.createElement('article')
      // Création des balises
      const datesElement = document.createElement('p')
      datesElement.innerText = article.Dates

      const nomElement = document.createElement('h2')
      nomElement.innerText = article.Nom

      const courseElement = document.createElement('p')
      courseElement.innerText = article.Course

      const securiteElement = document.createElement('p')
      securiteElement.innerText = article.Securite

      const balisageElement = document.createElement('p')
      balisageElement.innerText = article.Balisage

      const interetsElement = document.createElement('p')
      interetsElement.innerText = article.Interets

      const servicesElement = document.createElement('p')
      servicesElement.innerText = article.Services

      const parcoursElement = document.createElement('p')
      parcoursElement.innerText = article.Parcours

      const commentaireElement = document.createElement('p')
      commentaireElement.innerText = article.Commentaire

      const reponseElement = document.createElement('p')
      reponseElement.innerText = article.Nbreponse

      const lireElement = document.createElement('p')
      lireElement.innerText = article.Lire

      // On rattache la balise article a la section Fiches

      sectionFiches?.appendChild(avisElement)
      avisElement.appendChild(datesElement)
      avisElement.appendChild(nomElement)
      avisElement.appendChild(courseElement)
      avisElement.appendChild(securiteElement)
      avisElement.appendChild(balisageElement)
      avisElement.appendChild(interetsElement)
      avisElement.appendChild(servicesElement)
      avisElement.appendChild(parcoursElement)
      avisElement.appendChild(commentaireElement)
      avisElement.appendChild(reponseElement)
      avisElement.appendChild(lireElement)
    }
  })
