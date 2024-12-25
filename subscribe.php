<?php
include 'db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['subscribe'])) {
    $email = htmlspecialchars($_POST['email']);

    $query = "INSERT INTO subscriptions (email) VALUES (:email)";
    $stmt = $pdo->prepare($query);
    $stmt->execute(['email' => $email]);

    echo "Thank you for subscribing.";
}
?>