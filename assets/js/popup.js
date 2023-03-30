let popUpApparaitre = document.getElementById('popup-contact-bas')
let hauteurPage = window.pageYOffset

window.onscroll = function () {
  let hauteurActuel = window.pageYOffset

  if (hauteurPage > hauteurActuel) {
    popUpApparaitre.style.display = 'flex'
  } else {
    popUpApparaitre.style.display = 'none'
  }
  hauteurPage = hauteurActuel
}

window.addEventListener('scroll', () => {
  const popUp = document.querySelector('#popup-contact-bas')
  const scrollable = (document.documentElement.scrollHeight =
    window.innerHeight)
  const scrolled = window.scrollY

  if (Math.ceil(scrolled) === scrollable) {
    return popUp
  }
})
