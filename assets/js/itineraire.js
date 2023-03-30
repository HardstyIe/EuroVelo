$('.gps.inactif').click(function () {
  $('.etapes').removeClass('actif')
  $('.etapes').addClass('inactif')
  $('.gps').removeClass('inactif')
  $('.gps').addClass('actif')
  $('.itineraire-map-informations-gps').addClass('actif')
  $('.itineraire-map-informations-gps').removeClass('hidden')
  $('.itineraire-map-informations').removeClass('actif')
  $('.itineraire-map-informations').addClass('hidden')
})

$('.etapes').click(function () {
  $('.gps').removeClass('actif')
  $('.gps').addClass('inactif')
  $('.etapes').removeClass('inactif')
  $('.etapes').addClass('actif')
  $('.itineraire-map-informations-gps').addClass('hidden')
  $('.itineraire-map-informations-gps').removeClass('actif')
  $('.itineraire-map-informations').removeClass('hidden')
  $('.itineraire-map-informations').addClass('actif')
})

function descSwitcher() {
  $(document).ready(function () {
    $('.description.inactif').click(function () {
      $('.avis').removeClass('actif')
      $('.avis').addClass('inactif')
      $('.description').removeClass('inactif')
      $('.description').addClass('actif')
      $('.itineraire-map-avis-div-global').addClass('hidden')
      $('.itineraire-map-avis-div-global').removeClass('actif')
      $('.itineraire-map-informations-second-body').removeClass('hidden')
      $('.itineraire-map-informations-second-body').addClass('actif')
    })
  })
}

function avisSwitcher() {
  $(document).ready(function () {
    $('.avis').click(function () {
      $('.description').removeClass('actif')
      $('.description').addClass('inactif')
      $('.avis').removeClass('inactif')
      $('.avis').addClass('actif')
      $('.itineraire-map-avis-div-global').addClass('actif')
      $('.itineraire-map-avis-div-global').removeClass('hidden')
      $('.itineraire-map-informations-second-body').addClass('hidden')
      $('.itineraire-map-informations-second-body').removeClass('actif')
    })
  })
}
