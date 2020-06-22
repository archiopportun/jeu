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
    var carteS;
    var de1;
    var orange = 0;
    var noir = 0;
    var o = 0;
    var n = 0;
    var x = 0;
    var uneImg;
    var nb = 0;

    function initialiser(evt) {
        if (document.body.className == "index") {
            var fleche = document.querySelector(".scroll");
            fleche.addEventListener("click", scroll, true);
        } else if (document.body.className == "methodologie") {
            $('.slider').each(function () {
                var $this = $(this);
                var $group = $this.find('.slide_group');
                var $slides = $this.find('.slide');
                var bulletArray = [];
                var currentIndex = 0;
                var timeout;

                function move(newIndex) {
                    var animateLeft, slideLeft;

                    advance();

                    if ($group.is(':animated') || currentIndex === newIndex) {
                        return;
                    }

                    bulletArray[currentIndex].removeClass('active');
                    bulletArray[newIndex].addClass('active');

                    if (newIndex > currentIndex) {
                        slideLeft = '100%';
                        animateLeft = '-100%';
                    } else {
                        slideLeft = '-100%';
                        animateLeft = '100%';
                    }

                    $slides.eq(newIndex).css({
                        display: 'block',
                        left: slideLeft
                    });
                    $group.animate({
                        left: animateLeft
                    }, function () {
                        $slides.eq(currentIndex).css({
                            display: 'none'
                        });
                        $slides.eq(newIndex).css({
                            left: 0
                        });
                        $group.css({
                            left: 0
                        });
                        currentIndex = newIndex;
                    });
                }

                function advance() {
                    clearTimeout(timeout);

                }

                $('.next_btn').on('click', function () {
                    if (currentIndex < ($slides.length - 1)) {
                        move(currentIndex + 1);
                    } else {
                        move(0);
                    }
                });

                $('.previous_btn').on('click', function () {
                    if (currentIndex !== 0) {
                        move(currentIndex - 1);
                    } else {
                        move(5);
                    }
                });

                $.each($slides, function (index) {
                    var $button = $('<a class="slide_btn">&bull;</a>');

                    if (index === currentIndex) {
                        $button.addClass('active');
                    }
                    $button.on('click', function () {
                        move(index);
                    }).appendTo('.slide_buttons');
                    bulletArray.push($button);
                });

                advance();
            });



        } else if (document.body.className == "jeu") {
            var lesImgO = document.getElementById("jeuCartes").getElementsByClassName("flip");
            for (uneImg of lesImgO) {
                uneImg.addEventListener("click", clickCarte, true);


                var alea = Math.floor(Math.random() * (27 - (0))) - 1;
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

            var lesImgS = document.getElementById("site").getElementsByClassName("flip");
            for (uneImg of lesImgS) {
                uneImg.addEventListener("click", etape5, true);

                var alea = Math.floor(Math.random() * (1 - (-1) + 1)) - 1;
                uneImg.style.order = alea;
            }

            var button1 = document.querySelector(".bouton1");

            button1.addEventListener('click', etape1, true);
        }
    }


    /********************************   ACCUEIL    ******************************/

    function scroll(evt) {

        var regle = document.querySelector(".regleA");
        regle.style.display = "block";

        var accueil = document.querySelector(".accueil");
        accueil.style.transform = "translateX(0%) translateY(-100%)";
        accueil.style.transition = "transform 0.6s cubic-bezier(0.77, 0.2, 0.05, 1.0)";
    }

    /*******************************   JEU    ***********************************/

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


        if (de1 == 1) {
            img.src = "images/DES/de%20(1).png";
            o = 1;
            n = 1;
        } else if (de1 == 2) {
            img.src = "images/DES/de%20(2).png";
            o = 1;
            n = 2;
        } else if (de1 == 3) {
            img.src = "images/DES/de%20(3).png";
            o = 2;
            n = 2;
        } else if (de1 == 4) {
            img.src = "images/DES/de%20(4).png";
            o = 2;
            n = 3;
        } else if (de1 == 5) {
            img.src = "images/DES/de%20(5).png";
            o = 2;
            n = 4;
        } else if (de1 == 6) {
            img.src = "images/DES/de%20(6).png";
            o = 2;
            n = 1;
        } else if (de1 == 7) {
            img.src = "images/DES/de%20(7).png";
            o = 1;
            n = 3;
        } else if (de1 == 8) {
            img.src = "images/DES/de%20(8).png";
            o = 1;
            n = 4;
        } else if (de1 == 9) {
            img.src = "images/DES/de%20(9).png";
            o = 3;
            n = 3;
        }

        nb = o + n;

        img.style.margin = "0%";
        document.getElementById("des").appendChild(img);

        let cloneDe = img.cloneNode(true);
        document.getElementById("resultatDe").append(cloneDe);

        cloneDe.classList.add("resultatDe");

        document.querySelector(".bouton1").remove();
        document.querySelector(".bouton2").style.display = "block";

        console.log("nombre de carte oranges : " + o);
        console.log("nombre de carte noires : " + n);
        console.log("nombre de cartes : " + nb);

        document.querySelector(".bouton2").addEventListener("click", supprimerPage, true);


        var consigne2 = "Retourne " + o + " carte(s) orange(s) et " + n + " carte(s) noire(s) pour déterminer les matériaux que tu aura à ta disposition"
        var texte2 = document.getElementById("consigne2");
        texte2.innerHTML = consigne2;
    }

    function clickCarte(evt) {
        if (this.dataset.etat == "retournee") {
            console.log("déja retournée");
        } else if (this.dataset.couleur == "orange" && orange == o) {
            console.log("trop de orange");
        } else if (this.dataset.couleur == "orange") {
            orange = orange + 1;
            this.classList.add("face");
            this.lastElementChild.remove();
            var data = this.dataset.etat = "retournee";

            if (carteO1 == null) {
                evt.preventDefault();
                carteO1 = this;
                if (o == 1) {
                    window.setTimeout(ajouterO1, 500);
                }
            } else if (carteO2 == null && orange <= o) {
                evt.preventDefault();
                carteO2 = this;
                if (o == 2) {
                    window.setTimeout(ajouterO2, 500);
                }
            } else if (carteO3 == null && orange <= o) {
                evt.preventDefault();
                carteO3 = this;
                if (o == 3) {
                    window.setTimeout(ajouterO3, 500);
                }
            }
        } else if (this.dataset.couleur == "noir" && noir == n) {
            console.log("trop de noir");
        } else {
            noir = noir + 1;
            this.classList.add("face");
            this.lastElementChild.remove();
            var data = this.dataset.etat = "retournee";

            if (carteN1 == null) {
                carteN1 = this;
                if (n == 1) {
                    window.setTimeout(ajouterN1, 500);
                }
            } else if (carteN2 == null && noir <= n) {
                carteN2 = this;
                if (n == 2) {
                    window.setTimeout(ajouterN2, 500);
                }
            } else if (carteN3 == null && noir <= n) {
                carteN3 = this;
                if (n == 3) {
                    window.setTimeout(ajouterN3, 500);
                }
            } else if (carteN4 == null && x <= n) {
                carteN4 = this;
                x = x + 1;

                if (n == 4) {
                    window.setTimeout(ajouterN4, 500);
                }
            }
        }

        console.log(orange + noir);

        if (orange + noir == nb) {
            document.querySelector(".bouton3").style.display = "block";
            document.getElementById("jeuCartes").addEventListener("click", stop, true);
        }


    }

    function supprimerPage(evt) {
        document.querySelector("#page2").remove();
    }

    function stop(evt) {
        evt.stopPropagation();
    }

    function ajouterO1(evt) {
        let clone1 = carteO1.firstElementChild.cloneNode(true);
        let clone11 = carteO1.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes1");
        clone11.classList.add("bilanCartes1");
        document.getElementById("resultat1").append(clone1);
        document.getElementById("bilan1").append(clone11);


    }

    function ajouterN1(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone11 = carteN1.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes2");
        clone11.classList.add("bilanCartes2");
        document.getElementById("resultat2").append(clone1);
        document.getElementById("bilan2").append(clone11);
    }

    function ajouterO2(evt) {
        let clone1 = carteO1.firstElementChild.cloneNode(true);
        let clone11 = carteO1.firstElementChild.cloneNode(true);
        let clone2 = carteO2.firstElementChild.cloneNode(true);
        let clone21 = carteO2.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes1");
        clone11.classList.add("bilanCartes1");
        clone2.classList.add("resultatCartes1");
        clone21.classList.add("bilanCartes1");
        document.getElementById("resultat1").append(clone1);
        document.getElementById("bilan1").append(clone11);
        document.getElementById("resultat1").append(clone2);
        document.getElementById("bilan1").append(clone21);



    }

    function ajouterN2(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone11 = carteN1.firstElementChild.cloneNode(true);
        let clone2 = carteN2.firstElementChild.cloneNode(true);
        let clone21 = carteN2.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes2");
        clone11.classList.add("bilanCartes2");
        clone2.classList.add("resultatCartes2");
        clone21.classList.add("bilanCartes2");
        document.getElementById("resultat2").append(clone1);
        document.getElementById("bilan2").append(clone11);
        document.getElementById("resultat2").append(clone2);
        document.getElementById("bilan2").append(clone21);
    }

    function ajouterO3(evt) {
        let clone1 = carteO1.firstElementChild.cloneNode(true);
        let clone11 = carteO1.firstElementChild.cloneNode(true);
        let clone2 = carteO2.firstElementChild.cloneNode(true);
        let clone21 = carteO2.firstElementChild.cloneNode(true);
        let clone3 = carteO3.firstElementChild.cloneNode(true);
        let clone31 = carteO3.firstElementChild.cloneNode(true);

        clone1.classList.add("resultatCartes1");
        clone11.classList.add("bilanCartes1");
        clone2.classList.add("resultatCartes1");
        clone21.classList.add("bilanCartes1");
        clone3.classList.add("resultatCartes1");
        clone31.classList.add("bilanCartes1");
        document.getElementById("resultat1").append(clone1);
        document.getElementById("bilan1").append(clone11);
        document.getElementById("resultat1").append(clone2);
        document.getElementById("bilan1").append(clone21);
        document.getElementById("resultat1").append(clone3);
        document.getElementById("bilan1").append(clone31);


    }

    function ajouterN3(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone11 = carteN1.firstElementChild.cloneNode(true);
        let clone2 = carteN2.firstElementChild.cloneNode(true);
        let clone21 = carteN2.firstElementChild.cloneNode(true);
        let clone3 = carteN3.firstElementChild.cloneNode(true);
        let clone31 = carteN3.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes2");
        clone11.classList.add("bilanCartes2");
        clone2.classList.add("resultatCartes2");
        clone21.classList.add("bilanCartes2");
        clone3.classList.add("resultatCartes2");
        clone31.classList.add("bilanCartes2");
        document.getElementById("resultat2").append(clone1);
        document.getElementById("bilan2").append(clone11);
        document.getElementById("resultat2").append(clone2);
        document.getElementById("bilan2").append(clone21);
        document.getElementById("resultat2").append(clone3);
        document.getElementById("bilan2").append(clone31);
    }

    function ajouterN4(evt) {
        let clone1 = carteN1.firstElementChild.cloneNode(true);
        let clone11 = carteN1.firstElementChild.cloneNode(true);
        let clone2 = carteN2.firstElementChild.cloneNode(true);
        let clone21 = carteN2.firstElementChild.cloneNode(true);
        let clone3 = carteN3.firstElementChild.cloneNode(true);
        let clone31 = carteN3.firstElementChild.cloneNode(true);
        let clone4 = carteN4.firstElementChild.cloneNode(true);
        let clone41 = carteN4.firstElementChild.cloneNode(true);
        document.getElementById("resultat2").append(clone1);
        document.getElementById("bilan2").append(clone11);
        document.getElementById("resultat2").append(clone2);
        document.getElementById("bilan2").append(clone21);
        document.getElementById("resultat2").append(clone3);
        document.getElementById("bilan2").append(clone31);
        document.getElementById("resultat2").append(clone4);
        document.getElementById("bilan2").append(clone41);
        clone1.classList.add("resultatCartes2");
        clone11.classList.add("bilanCartes2");
        clone2.classList.add("resultatCartes2");
        clone21.classList.add("bilanCartes2");
        clone3.classList.add("resultatCartes2");
        clone31.classList.add("bilanCartes2");
        clone4.classList.add("resultatCartes2");
        clone41.classList.add("bilanCartes2");
    }

    function etape3(evt) {
        this.classList.add("face");
        this.lastElementChild.remove();
        this.removeEventListener("click", etape3);
        carteP1 = this;
        window.setTimeout(ajouterP1, 500);
        document.getElementById("programme").addEventListener("click", stop, true);
    }

    function ajouterP1(evt) {
        let clone1 = carteP1.firstElementChild.cloneNode(true);
        let clone11 = carteP1.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes3");
        clone11.classList.add("bilanCartes3");
        document.getElementById("resultat3").append(clone1);
        document.getElementById("bilan3").append(clone11);

        var lesCartes = document.getElementById("programme");
        document.querySelector(".bouton4").style.display = "block";
        document.querySelector("#page3").remove();

    }

    function etape4(evt) {
        this.classList.add("face");
        this.lastElementChild.remove();
        this.removeEventListener("click", etape4);
        carteOP = this;
        window.setTimeout(ajouterOP, 500);
        document.getElementById("oppoArchi").addEventListener("click", stop, true);
    }

    function ajouterOP(evt) {
        let clone1 = carteOP.firstElementChild.cloneNode(true);
        let clone11 = carteOP.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes4");
        clone11.classList.add("bilanCartes4");
        document.getElementById("resultat4").append(clone1);
        document.getElementById("bilan4").append(clone11);
        document.querySelector(".bouton5").style.display = "block";
        document.querySelector("#page4").remove();

    }

    function etape5(evt) {
        this.classList.add("face");
        this.lastElementChild.remove();
        this.removeEventListener("click", etape5);
        carteS = this;
        window.setTimeout(ajouterS, 500);
        document.getElementById("site").addEventListener("click", stop, true);
    }

    function ajouterS(evt) {
        let clone1 = carteS.firstElementChild.cloneNode(true);
        let clone11 = carteS.firstElementChild.cloneNode(true);
        clone1.classList.add("resultatCartes5");
        clone11.classList.add("bilanCartes5");
        document.getElementById("resultat5").append(clone1);
        document.getElementById("bilan5").append(clone11);

        var lesCartes = document.getElementById("site");
        document.querySelector(".bouton7").style.display = "block";
        document.querySelector(".bouton7").addEventListener("click", ExportPdf, true);

        document.querySelector(".bouton6").style.display = "block";

        document.querySelector("#page5").remove();

    }

    function rejouer(evt) {
        window.location.reload();
    }

    function ExportPdf() {
        kendo.drawing
            .drawDOM("#p2", {
                paperSize: "A4",
                landscape: true,
                margin: {
                    top: "1.6cm",
                    bottom: "1cm",
                    left: "1cm",
                },
                height: 500,
                template: $("#page-template").html()
            })
            .then(function (group) {
                kendo.drawing.pdf.saveAs(group, "À toi de jouer !.pdf")
            });
    }


}());
