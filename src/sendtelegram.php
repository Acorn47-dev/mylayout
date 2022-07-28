<?php
    $tel = $_POST['input-tel'];
    $email = $_POST['input-email'];
    $name = $_POST['input-name'];
    if($email===""){
        $email="none";
    }
    $to = 'nobody@example.com';
    $subject = 'the subject';
    $message = "name: ".$name." tel: ".$tel." email: ".$email;
    $headers = "this is header";
    mail($to, $subject, $message, $headers);
?>
