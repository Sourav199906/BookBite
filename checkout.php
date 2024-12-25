<?php
include 'db.php';
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['checkout'])) {
    $userId = $_SESSION['user_id'];
    $address = htmlspecialchars($_POST['address']);

    $query = "INSERT INTO orders (user_id, address) VALUES (:user_id, :address)";
    $stmt = $pdo->prepare($query);
    $stmt->execute(['user_id' => $userId, 'address' => $address]);

    $orderId = $pdo->lastInsertId();

    foreach ($_SESSION['cart'] as $productId => $quantity) {
        $query = "INSERT INTO order_items (order_id, product_id, quantity) VALUES (:order_id, :product_id, :quantity)";
        $stmt = $pdo->prepare($query);
        $stmt->execute(['order_id' => $orderId, 'product_id' => $productId, 'quantity' => $quantity]);
    }

    unset($_SESSION['cart']);
    echo "Order placed successfully.";
}
?>