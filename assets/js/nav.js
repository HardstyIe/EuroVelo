const nav = document.querySelector('.basNav');
const navOffsetTop = nav.offsetTop;

window.addEventListener('scroll', () => {

    if (window.scrollY >= navOffsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.width = "100%";
    }
    else {
        nav.style.position = 'static';
    }
})
////////////////////////////////////////////////////////////////////////////////


const searchIcon = document.querySelector('.ti-search');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', function() {
  if (searchContainer.style.display === 'none') {
    searchContainer.style.display = 'flex';
  } else {
    searchContainer.style.display = 'none';
  }
});