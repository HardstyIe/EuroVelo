let popUpApparaitre = document.getElementById("popup-contact-bas");
let hauteurPage = window.pageYOffset;

window.onscroll = function() {
    let hauteurActuel = window.pageYOffset;

    if (hauteurPage > hauteurActuel) {

        popUpApparaitre.style.display = "flex";


    } else {
        popUpApparaitre.style.display = "none";
    }
    hauteurPage = hauteurActuel;
}