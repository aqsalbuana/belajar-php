<?php
session_start();

$emaillogin = 'admin@gmail.com';
$passwordlogin = 'admin';


$email = $_POST['email'];
$password = $_POST['password'];

if ($email == $emaillogin && $password == $passwordlogin) {
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    header('Location: dashboard.php');
} else {
    header('Location: login.php');
}