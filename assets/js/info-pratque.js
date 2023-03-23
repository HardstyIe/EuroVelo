// var image = document.getElementById("image");

// image.addEventListener("mouseover", function() {
//     image.style.filter = "blur(5px)" ;
// });

// image.addEventListener("mouseout", function() {
//     image.style.filter = "none";
//   });

const element = document.getElementById("image");
element.addEventListener("mouseover", function() {
  element.classList.add("blur-image");
});

element.addEventListener("mouseout", function() {
    element.classList.remove("blur-image");
  });