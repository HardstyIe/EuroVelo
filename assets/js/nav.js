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