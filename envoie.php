<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'composer/vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);


if(isset($_POST) && isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])){
    extract($_POST);
    if(!empty($nom) && !empty($email) && !empty($message)){
try {
    //Server settings
    $mail->SMTPDebug = 1;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'coraline211285@gmail.com';                     // SMTP username
    $mail->Password   = 'Samlatortue';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('coraline211285@gmail.com', 'Archi Opportun');
    $mail->addAddress('paquetcoraline@gmail.com', 'Coraline');    // Add a recipient
    $mail->addAddress('paquet.amelie@hotmail.fr', 'Amelie');    // Add a recipient
    $mail->addAddress('mouttoualiah@gmail.com', 'Aliah');    // Add a recipient
    $mail->addAddress('hyunakim2807@gmail.com', 'Hyuna');    // Add a recipient
//    $mail->addAddress('yagmur.melisa@gmail.com', 'Melisa');    // Add a recipient

    $nom = $_POST['nom'];
    $adress = $_POST['email'];
    $message = $_POST['message'];
    
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Quelque un cherche a vous joindre';
    $mail->Body    = $message;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
           }
}
    
?>
