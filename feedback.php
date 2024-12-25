<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['feedback'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    try {
        $query = "INSERT INTO feedback (name, email, message) VALUES (:name, :email, :message)";
        $stmt = $pdo->prepare($query);
        $stmt->execute(['name' => $name, 'email' => $email, 'message' => $message]);

        // Redirect to thank you page after successful submission
        header('Location: feedback_thankyou.html');
        exit;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    // Redirect back to home page if accessed improperly
    header('Location: home.html');
    exit;
}
?>
