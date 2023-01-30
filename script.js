
document.getElementById("1").addEventListener("click", function() {
    document.getElementById("hero").classList.add("hero1");
    document.getElementById("hero").classList.remove("hero2");
    document.getElementById("hero").classList.remove("hero3");
});

document.getElementById("2").addEventListener("click", function() {
    document.getElementById("hero").classList.add("hero2");
    document.getElementById("hero").classList.remove("hero1");
    document.getElementById("hero").classList.remove("hero3");

});

document.getElementById("3").addEventListener("click", function() {
    document.getElementById("hero").classList.add("hero3");
    document.getElementById("hero").classList.remove("hero1");
    document.getElementById("hero").classList.remove("hero2");
});