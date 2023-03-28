////////////////////////////Js pour que la partie haute ne suive pas la partie basse de la nav en scrollant///////////////////////////////////////////

const nav = document.querySelector('.basNav')
const navOffsetTop = nav.offsetTop

window.addEventListener('scroll', () => {
  if (window.scrollY >= navOffsetTop) {
    nav.style.position = 'fixed'
    nav.style.top = 0
    nav.style.width = '100%'
  } else {
    nav.style.position = 'static'
  }
})

//////////////////////////////Bouton de recherche de la barre de nav///////////////////////////////////

const searchIcon = document.querySelector('.ti-search')
const searchContainer = document.querySelector('.search-container')

searchIcon.addEventListener('click', function () {
  if (searchContainer.style.display === 'none') {
    searchContainer.style.display = 'flex'
    searchIcon.classList.remove('ti-search')
    searchIcon.classList.add('ti-close')
  } else {
    searchContainer.style.display = 'none'
    searchIcon.classList.add('ti-search')
    searchIcon.classList.remove('ti-close')
  }
})
