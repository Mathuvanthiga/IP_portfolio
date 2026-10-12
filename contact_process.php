<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mathuvanthiga_portfolio";


// Create database connection

$conn = new mysqli(
    $servername,
    $username,
    $password,
    $dbname
);


// Check connection

if ($conn->connect_error) {

    die("Database connection failed: "
        . $conn->connect_error);

}


// Get form values

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


// Prepare SQL statement

$sql = "INSERT INTO messages
        (name, email, subject, message)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);


// Bind values

$stmt->bind_param(
    "ssss",
    $name,
    $email,
    $subject,
    $message
);


// Execute

if ($stmt->execute()) {

    echo "
    <!DOCTYPE html>

    <html>

    <head>

    <title>Message Sent</title>

    <link rel='stylesheet'
          href='../css/style.css'>

    </head>

    <body>

    <div class='success-page'>

        <div class='success-card'>

            <h1>✅ Message Sent!</h1>

            <p>
            Thank you, $name.
            Your message has been successfully
            stored in the database.
            </p>

            <a href='../contact.php'
               class='btn'>
               Back to Contact
            </a>

        </div>

    </div>

    </body>

    </html>
    ";

} else {

    echo "Error: " . $stmt->error;

}


$stmt->close();

$conn->close();

?>