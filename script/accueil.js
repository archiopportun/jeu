(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", initialiser);


    function initialiser(evt) {
        var fleche = document.querySelector(".scroll");
        fleche.addEventListener("click", scroll, true);
    }

    function scroll(evt) {
        
        var regle = document.querySelector(".regleA");
        regle.style.display = "block";

        var accueil = document.querySelector(".accueil");
        accueil.style.transform = "translateX(0%) translateY(-100%)";
        accueil.style.transition = "transform 0.6s cubic-bezier(0.77, 0.2, 0.05, 1.0)";
    }
    
    

    

}());
