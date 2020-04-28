(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", initialiser);
    var carteN1;
    var carteN2;
    var carteN3;
    var carteN4;
    var carteN5;
    var carteN6;
    var carteN7;
    var carteN8;
    var carteN9;
    var carteN10;
    var carteO1;
    var carteO2;
    var carteO3;
    var carteO4;
    var carteO5;
    var carteO6;
    var carteO7;
    var carteO8;
    var carteP1;
    var carteOP;
    var de1;
    var x = 0;
    var o = 0;
    var n = 0;
    var uneImg;

    function initialiser(evt) {
        var lesImgO = document.getElementById("jeuCartesOrange").getElementsByClassName("flip");
        for (uneImg of lesImgO) {
            uneImg.addEventListener("click", clickCarteOrange, true);

            var alea = Math.floor(Math.random() * (1 - (-1) + 1)) - 1;
            uneImg.style.order = alea;
        }
        var lesImgN = document.getElementById("jeuCartesNoir").getElementsByClassName("flip");
        for (uneImg of lesImgN) {
            uneImg.addEventListener("click", clickCarteNoir, true);

            var alea = Math.floor(Math.random() * (1 - (-1) + 1)) - 1;
            uneImg.style.order = alea;
        }

        var lesImgP = document.getElementById("programme").getElementsByClassName("flip");
        for (uneImg of lesImgP) {
            uneImg.addEventListener("click", etape3, true);

            var alea = Math.floor(Math.random() * (1 - (-1) + 1)) - 1;
            uneImg.style.order = alea;
        }
        
        var lesImgOP = document.getElementById("oppoArchi").getElementsByClassName("flip");
        for (uneImg of lesImgOP) {
            uneImg.addEventListener("click", etape4, true);

            var alea = Math.floor(Math.random() * (1 - (-1) + 1)) - 1;
            uneImg.style.order = alea;
        }

        var button1 = document.querySelector(".bouton1");
        button1.addEventListener('click', etape1, true);
        var button2 = document.querySelector(".bouton2");

    }

    function etape1(evt) {
        const bouton1 = document.querySelector('.bouton1');

        var lesDes = document.getElementById("des");
        while (lesDes.firstChild) {
            lesDes.removeChild(lesDes.firstChild);
        }

        const random = (max, min) => {

            de1 = Math.floor(Math.random() * (max - min + 1) + min)
            return de1;
        }
        bouton1.value = random(9, 1);
        var img = document.createElement("img");



        console.log(de1);
        if (de1 == 1) {
            img.src = "images/DES/d%C3%A9d%C3%A9.jpg";
            o = 1;
            n = 1;
        } else if (de1 == 2) {
            img.src = "images/DES/d%C3%A9d%C3%A92.jpg";
            o = 1;
            n = 2;
        } else if (de1 == 3) {
            img.src = "images/DES/d%C3%A9d%C3%A93.jpg";
            o = 2;
            n = 1;
        } else if (de1 == 4) {
            img.src = "images/DES/d%C3%A9d%C3%A94.jpg";
            o = 2;
            n = 2;
        } else if (de1 == 5) {
            img.src = "images/DES/d%C3%A9d%C3%A95.jpg";
            o = 1;
            n = 3;
        } else if (de1 == 6) {
            img.src = "images/DES/d%C3%A9d%C3%A96.jpg";
            o = 2;
            n = 3;
        } else if (de1 == 7) {
            img.src = "images/DES/d%C3%A9d%C3%A97.jpg";
            o = 1;
            n = 4;
        } else if (de1 == 8) {
            img.src = "images/DES/d%C3%A9d%C3%A98.jpg";
            o = 2;
            n = 4;
        } else if (de1 == 9) {
            img.src = "images/DES/d%C3%A9d%C3%A99.jpg";
            o = 3;
            n = 3;
        }
        img.style.margin = "0%";
        document.getElementById("des").appendChild(img);

        let cloneDe = img.cloneNode(true);
        document.getElementById("resultatDe").append(cloneDe);

        cloneDe.classList.add("resultatDe");

        document.querySelector(".bouton1").remove();


        console.log(o);
        console.log(n);
    }

    function clickCarteOrange(evt) {
        this.classList.add("face");
        this.removeEventListener("click", clickCarteOrange);
        if (carteO1 == null) {
            carteO1 = this;
            x = x + 1;
            if (o == 1) {
                x = 0;
                window.setTimeout(ajouterO1, 500);
                document.getElementById("jeuCartesOrange").addEventListener("click", stop, true);
            }
            console.log(x);
        } else if (carteO2 == null && x <= o) {
            carteO2 = this;
            x = x + 1;
            if (o == 2) {
                x = 0;
                window.setTimeout(ajouterO2, 500);
                document.getElementById("jeuCartesOrange").addEventListener("click", stop, true);
            }
        } else if (carteO3 == null && x <= o) {
            carteO3 = this;
            x = x + 1;
            if (o == 3) {
                x = 0;
                window.setTimeout(ajouterO3, 500);
                document.getElementById("jeuCartesOrange").addEventListener("click", stop, true);
            }
        }
    }

    function clickCarteNoir(evt) {
        this.classList.toggle("face");
        this.removeEventListener("click", clickCarteNoir);
        if (carteN1 == null) {
            carteN1 = this;
            if (n == 1) {
                window.setTimeout(ajouterN1, 500);
                document.getElementById("jeuCartesNoir").addEventListener("click", stop, true);
            }
            console.log(x);
        } else if (carteN2 == null && x <= n) {
            carteN2 = this;
            x = x + 1;
            if (n == 2) {
                window.setTimeout(ajouterN2, 500);
                document.getElementById("jeuCartesNoir").addEventListener("click", stop, true);
            }
        } else if (carteN3 == null && x <= n) {
            carteN3 = this;
            x = x + 1;
            if (n == 3) {
                window.setTimeout(ajouterN3, 500);
                document.getElementById("jeuCartesNoir").addEventListener("click", stop, true);
            }
        } else if (carteN4 == null && x <= n) {
            carteN4 = this;
            x = x + 1;

            if (n == 4) {
                window.setTimeout(ajouterN4, 500);
                document.getElementById("jeuCartesNoir").addEventListener("click", stop, true);
            }
        }

    }

    function stop(evt) {
        evt.stopPropagation();
    }

    function ajouterO1(evt) {
        let clone1 = carteO1.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes1");
        document.getElementById("resultat1").append(clone1);
        var lesCartes = document.getElementById("jeuCartesOrange");

    }

    function ajouterN1(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes2");
        document.getElementById("resultat2").append(clone1);
        var lesCartes = document.getElementById("jeuCartesNoir");

    }

    function ajouterO2(evt) {
        let clone1 = carteO1.firstElementChild.cloneNode(true);
        let clone2 = carteO2.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes1");
        clone2.classList.add("resultatCartes1");
        document.getElementById("resultat1").append(clone1);
        document.getElementById("resultat1").append(clone2);
        var lesCartes = document.getElementById("jeuCartesOrange");

    }

    function ajouterN2(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone2 = carteN2.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes2");
        clone2.classList.add("resultatCartes2");
        document.getElementById("resultat2").append(clone1);
        document.getElementById("resultat2").append(clone2);

        var lesCartes = document.getElementById("jeuCartesNoir");

    }

    function ajouterO3(evt) {
        let clone1 = carteO1.firstElementChild.cloneNode(true);
        let clone2 = carteO2.firstElementChild.cloneNode(true);
        let clone3 = carteO3.firstElementChild.cloneNode(true);

        clone1.classList.add("resultatCartes1");
        clone2.classList.add("resultatCartes1");
        clone3.classList.add("resultatCartes1");
        document.getElementById("resultat1").append(clone1);
        document.getElementById("resultat1").append(clone2);
        document.getElementById("resultat1").append(clone3);

        var lesCartes = document.getElementById("jeuCartesOrange");

    }

    function ajouterN3(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone2 = carteN2.firstElementChild.cloneNode(true);
        let clone3 = carteN3.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes2");
        clone2.classList.add("resultatCartes2");
        clone3.classList.add("resultatCartes2");
        document.getElementById("resultat2").append(clone1);
        document.getElementById("resultat2").append(clone2);
        document.getElementById("resultat2").append(clone3);

        var lesCartes = document.getElementById("jeuCartesNoir");

    }

    function ajouterN4(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone2 = carteN2.firstElementChild.cloneNode(true);
        let clone3 = carteN3.firstElementChild.cloneNode(true);
        let clone4 = carteN4.firstElementChild.cloneNode(true);
        document.getElementById("resultat2").append(clone1);
        document.getElementById("resultat2").append(clone2);
        document.getElementById("resultat2").append(clone3);
        document.getElementById("resultat2").append(clone4);
        clone1.classList.add("resultatCartes2");
        clone2.classList.add("resultatCartes2");
        clone3.classList.add("resultatCartes2");
        clone4.classList.add("resultatCartes2");
        var lesCartes = document.getElementById("jeuCartesOrange");
    }

    function etape3(evt) {
        this.classList.add("face");
        this.removeEventListener("click", etape3);
        carteP1 = this;
        window.setTimeout(ajouterP1, 500);
        document.getElementById("programme").addEventListener("click", stop, true);
    }

    function ajouterP1(evt) {
        let clone1 = carteP1.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes3");
        document.getElementById("resultat3").append(clone1);

        var lesCartes = document.getElementById("programme");
    }
    
    
     function etape4(evt) {
        this.classList.add("face");
        this.removeEventListener("click", etape4);
        carteOP = this;
        window.setTimeout(ajouterOP, 500);
        document.getElementById("oppoArchi").addEventListener("click", stop, true);
    }

    function ajouterOP(evt) {
        let clone1 = carteOP.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes4");
        document.getElementById("resultat4").append(clone1);

        var lesCartes = document.getElementById("oppoArchi");
    }

}());
