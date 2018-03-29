<?php
if(isset($_POST['submit'])){
  $to = "jpolak@ppcsystem.pl";
  $from = $_POST['email'];
  $name = $_POST['full_name'];
  $number = $_POST['number'];
  $subject = "PPC System";
  $subject2 = "Copy of your form submission";
  $message = $name . " " . $number . " wrote the following:" . "\n\n" . $_POST['message'];
  $message2 = "Here is a copy of your message " . $full_name . "\n\n" . $_POST['message'];

  $headers = "From:" . $from;
  $headers2 = "From:" . $to;
  mail($to,$subject,$message,$headers);
  mail($from,$subject2,$message2,$headers2);
  echo "Dziękujemy za wiadomość" . $name . ", skontaktujemy się z Tobą najszybciej jak to możliwe.";
}
?>
