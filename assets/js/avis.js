fetch('http://90.110.218.245:5003/api/avis')
  .then(response => response.json())
  .then(async data => {
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

      const date = new Date(Dates)
      const dateFormatted = new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date)

      const enfant = `
      <article>
      <p class="avisDate"> ${dateFormatted}</p>
      <h2 class="avisNom"> ${Nom}</h2>
      <p class="avisType"><span> ${Course}</p>
      <div class="notesAvis">
      <div class="column-avis">
       <div class="notes">
        <p>${Securite}</p>
        <p>Sécurité</p>
       </div>
       <div class="notes">
        <p>${Balisage}</p>
        <p>Balisage</p>
       </div>
       <div class="notes">
        <p>${Interets}</p>
        <p>Intérets</p>
       </div>
       <div class="notes">
        <p>${Services}</p>
        <p>Services</p>
       </div>
       </div>
       <div class="moyenne">
       <p class="median">Moyenne des notes :</p>
      <img src=${await rate([
        Securite,
        Balisage,
        Interets,
        Services
      ])} id="avisRating" style="height:25px"/>
      </div>
      </div>
      <p class="avisParcours"> ${Parcours}</p>
      <p class="avisComment">${Commentaire}</p>
      <div class="answer-read">
      <p class="nombreReponse"> ${Nbreponse} Réponse</p>
      <a href="" class="avisLire"><span>${Lire}</span></a>
      </div>
      </article>
      `
      document.querySelector('.avisHtml').innerHTML += enfant
    }
  })

function numAverage(a) {
  let b = a.length,
    c = 0,
    i = 0
  for (i = 0; i < b; i++) {
    c += parseInt(a[i])
  }
  return c / b
}

async function rate(arr) {
  const response = await fetch(
    `http://90.110.218.245:5003/api/stars/${Math.trunc(
      numAverage(arr) * 2 + 1
    )}`
  )

  const data = await response.json()

  const rating = data.data.attributes.url

  return 'http://90.110.218.245:5003' + rating
}
