let promise = fetch('http://90.110.218.245:5003/api/avis')
  .then(response => response.json())
  .then(data => {
    let avis = data.data
    for (let i = 0; i < avis.length; i++) {
      const {
        Dates,
        Nom,
        Course,
        Securite,
        Balisage,
        Interets,
        Services,
        Parcours,
        Commentaire,
        Nbreponse,
        Lire
      } = avis[i].attributes

      const enfant = `
  <article>
    <p class="avisDate">Date de Publication: ${Dates}</p>
    <h2 class="avisNom">Nom: ${Nom}</h2>
    <p class="avisType">Itinéraire du Parcours: ${Course}</p>
    <div class="notesAvis">
      <p>${Securite}</p>
      <p>${Balisage}</p>
      <p>${Interets}</p>
      <p>${Services}</p>
    </div>
    <p class="avisParcours">Type de Parcours: ${Parcours}</p>
    <p class="avisComment">${Commentaire}</p>
    <p class="nombreReponse">${Nbreponse}</p>
    <p class="boutonAvis">${Lire}</p>
  </article>
  `

      document.querySelector('.avisHtml').innerHTML += enfant
    }
  })
