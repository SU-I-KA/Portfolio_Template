const hamBurger = document.querySelector(".ham-burger");
hamBurger.addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("show");

})
const bg = document.querySelector(".jason");
bg.addEventListener("click", function(){
    document.querySelector(".navbar").classList.remove("show");
})