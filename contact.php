<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>ARCHI OPPORTUN</title>
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <link rel="shortcut icon" href="./images/de.ico" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script type="text/javascript" src="script/main.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>




<body>
    <header>
        <div id="menuBurger">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                <li><a href="aPropos.html">A PROPOS</a></li>
                <li><a href="methodologie.html">LA MÉTHODOLOGIE</a></li>
                <li><a href="jeu.html">LE JEU</a></li>
                <li><a href="bibliotheque.html">LA BIBLIOTHÈQUE</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </div>
        <div class="entete">
            <a href="index.html" class="archiOppo">
                <h1>ARCHI OPPORTUN</h1>
            </a>
            <div id="resultat">
                <div id="resultatDe"></div>
                <div id="resultat1"></div>
                <div id="resultat2"></div>
                <div id="resultat3"></div>
                <div id="resultat4"></div>
                <div></div>
            </div>
        </div>
    </header>



<!--
    <section id="contact" class="marginNav">
        <div class="introContact">
            <h3>Me contacter</h3>
            <p class="">Si vous avez une question, un projet, ou autres, n'hésitez pas à me contacter</p>
        </div>


        <div class="fondContact">
            <form action="envoie.php" method="post">
                <div class="formulaireContact form-group">

                    <div class="form-group">
                        <label for="nom">Votre nom : </label>
                        <input type="text" name="nom" id="nom" placeholder="Nom et prénom" id="nom" required="Veuillez renseigner ce champs" class="form-control"></div>

                    <div class="form-group"><label for="mail">Votre adresse e-mail : </label>
                        <input type="email" name="email" id="email" placeholder="Votre email" required="Veuillez renseigner ce champs" class="form-control"></div>
                    <div class="form-group">
                        <label for="message" id="message">Votre message : </label>
                        <textarea id="message" name="message" rows="5" cols="50" placeholder="Tapez ici votre message" required="Veuillez renseigner ce champs" class="form-control"></textarea>

                    </div>
                    <button type="submit" class="boutonCV">Envoyer</button>
                </div>

            </form>

        </div>
    </section>
-->



    <?php
        if ($_SERVER['REQUEST_METHOD']=='POST') {
            $nom     = htmlentities($_POST['nom']); 
            $email     = htmlentities($_POST['email']); 
            $message    = htmlentities($_POST['message']); 
            
            $destinataire ='paquetcoraline@gmail.com';
            $sujet = 'Formulaire de contact - Portfolio';
            $contenu = '<html>
                
                <head>
  <meta charset="UTF-8">
  <title>Titre du message</title></head><body>';
  $contenu .= '<p>Messagerie portfolio Mathilde Nardeux</p>';
  $contenu .= '<p><strong>Nom</strong>: '.$nom.'</p>';
  $contenu .= '<p><strong>Email</strong>: '.$email.'</p>';
  $contenu .= '<p><strong>Message</strong>: '.$message.'</p>';

  
  $contenu .= '</body></html>'; // Contenu du message de 
$headers = 'From: Portfolio Mathilde Nardeux'."\r\n";
$headers .= 'Mime-Version: 1.0'."\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
    if(($_POST['nom'] != "" ) && ( $_POST['email'] !="") && ( $_POST['message'] != "")){
  mail($destinataire, $sujet, $contenu, $headers); // Fonction principale qui envoi l'email
    echo '<script>alert("Votre message a bien été envoyé");</script>'; // Afficher un message pour indiquer que le message a été envoyé
  // (2) Fin du code pour traiter l'envoi de l'email
    }
        }
        ?>

    <section id="contact" class="marginNav">
        <div class="introContact">
            <h3>Me contacter</h3>
            <p class="">Si vous avez une question, un projet, ou autres, n'hésitez pas à me contacter</p>
        </div>


        <div class="fondContact">
            <form action="contact.php" method="post">
                <div class="formulaireContact form-group">

                    <div class="form-group">
                        <label for="nom">Votre nom : </label>
                        <input type="text" name="nom" id="nom" placeholder="Nom et prénom" id="nom" required="Veuillez renseigner ce champs" class="form-control"></div>

                    <div class="form-group"><label for="mail">Votre adresse e-mail : </label>
                        <input type="email" name="email" id="email" placeholder="Votre email" required="Veuillez renseigner ce champs" class="form-control"></div>
                    <div class="form-group">
                        <label for="message" id="message">Votre message : </label>
                        <textarea id="message" name="message" rows="5" cols="50" placeholder="Tapez ici votre message" required="Veuillez renseigner ce champs" class="form-control"></textarea>

                    </div>
                    <button type="submit" class="boutonCV">Envoyer</button>
                </div>

            </form>


            <main id="contact">
                <div class="lesPortraits">
                    <div class="portrait">
                        <div>
                            <img src="images/portrait/lea.jpg"></div>
                        <div class="desc">
                            <p><b>Léa Bilbot</b></p>
                            <p><b>2013 : </b>obtient le baccalauréat scientifique au Lycée Gustave Eiffel à Dijon (21)</p>
                            <p><b>2014 : </b>diplômée de la Mise A Niveaux en Arts Appliqués (MANAA) de l'Académie des Arts Appliqués de Dijon (21)</p>
                            <p><b>2016 : </b>diplômée du BTS Design d'Espace de LIM'ART à Bordeaux (33)</p>
                            <p><b>2019 : </b>obtient sa licence d'architecture à l'ENSA Paris Val-de-Seine (75)</p>
                        </div>
                    </div>
                    <div class="portrait">
                        <div>
                            <img src="images/portrait/hyuna.jpg"></div>
                        <div class="desc">
                            <p><b>Hyuna Kim</b></p>
                            <p><b>2015 : </b>obtient le baccalauréat Arts Appliqués (STD2A) au Lycée Technologique Maximilien Vox à Paris (75)</p>
                            <p><b>2017 : </b>diplômée du BTS Design d'Espace de l'ENS AAMA à Paris (75)</p>
                            <p><b>2019 : </b>obtient sa licence d'architecture à l'ENSA Paris Val-de-Seine (75)</p>
                        </div>
                    </div>
                    <div class="portrait">
                        <div>
                            <img src="images/portrait/melisa.jpg"></div>
                        <div class="desc">
                            <p><b>Sarah Yagmur</b></p>
                            <p><b>2011 : </b>obtient le baccalauréat scientifique au Lycée Notre Dame de Sion à Evry (91)</p>
                            <p><b>2015 : </b>diplômée de l'année préparatoire de l'école Prép'art à Paris (75)</p>
                            <p><b>2015 - 2017 :</b> étudie l'architecture à la Cambre Horta à Bruxelles (Belgique)</p>
                            <p><b>2019 :</b> obtient sa licence d'architecture à l'ENSA Paris Val-de-Seine (75)</p>
                        </div>
                    </div>
                    <div class="portrait">
                        <div>
                            <img src="images/portrait/amelie.jpg"></div>
                        <div class="desc">
                            <p><b>Amélie Paquet</b></p>
                            <p><b>2015 : </b>obtient le baccalauréat Arts Appliqués (STD2A) au Lycée Léonard de Vinci de Montaigu à Paris (85)</p>
                            <p><b>2017 :</b> diplômée du BTS Design d'Espace de l'Ecole Boulle à Paris (75)</p>
                            <p><b>2019 : </b>obtient sa licence d'architecture à l'ENSA Paris Val-de-Seine (75)</p>
                        </div>
                    </div>
                    <div class="portrait">
                        <div>
                            <img src="images/portrait/aliah.jpg"></div>
                        <div class="desc">
                            <p><b>Aliah Mouttou</b></p>
                            <p><b>2014 :</b> obtient le baccalauréat scientifique au Lycée Gustave Monod à Enghien-Les-Bains (95)</p>
                            <p><b>2015 :</b> diplômée de la Mise A Niveaux en Arts Appliqués (MANAA) de l'Ecole de Condé à Paris (75)</p>
                            <p><b>2017 :</b> diplômée du BTS Design d'Espace de l'Ecole de Condé à Paris (75)</p>
                            <p><b>2019 :</b> obtient sa licence d'architecture à l'ENSA Paris Val-de-Seine (75)</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <p>Coraline Paquet © 2020 - Tous droits réservés</p>
            </footer>

</body>

</html>
