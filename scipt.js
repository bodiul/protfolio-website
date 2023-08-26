function toggleClass(){
    let element = document.getElementById('navitems');
    element.classList.toggle('active')
}


window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 50) {
    document.querySelector("nav").classList.add("sticky");
  } else {
    document.querySelector("nav").classList.remove("sticky");
  }
});