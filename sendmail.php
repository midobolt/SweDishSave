<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (
        !empty($_POST['name']) &&
        !empty($_POST['email']) &&
        !empty($_POST['subject']) &&
        !empty($_POST['message'])
    ) {
        $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
        $email = htmlspecialchars(strip_tags(trim($_POST["email"])));
        $subject = htmlspecialchars(strip_tags(trim($_POST["subject"])));
        $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

        $to = "midobolt@yahoo.com";
        $subject = "New Contact Form Submission: {$subject}";
        $body = "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\nMessage: {$message}";
        $headers = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {
            $response = "Message sent successfully!";
        } else {
            $response = "Failed to send message.";
        }
    } else {
        $response = "All fields are required.";
    }
}
?>