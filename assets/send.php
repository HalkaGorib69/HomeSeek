<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "sabi.hossan@homeseekadvisory.com.au";
    $subject = "Website lead, Customer Query ($name)";

    $body = "You have received a new enquiry:\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Message failed to send.'); window.location.href='index.html';</script>";
    }
}
?>
