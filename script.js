var home = document.querySelector(".home")

var dot = document.querySelector(".dot")

home.addEventListener("mousemove", function(dotss){
    dot.style.left = dotss.clientX + "px"
    dot.style.top = dotss.clientY + "px"
})