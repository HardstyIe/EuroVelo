let promise = fetch('http://90.110.218.245:5003/api/avis')
  .then(response => response.json())
  .then(data => {
    let avis = data.data

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

    function numAverage(Securite, Balisage, Interets, Services) {
      var b = a.length,
        c = 0,
        i = 0
      for (i = 0; i < b; i++) {
        c += Number(a[i])
      }
      return c / b
    }
  })
