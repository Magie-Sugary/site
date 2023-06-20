<?php
$questions = array(
  "who" => "Liam.",
  "since when" => "Since the reboot or even before.",
  "why" => "Because he can.",
  "can we stop him" => "No.",
  "can i stop him" => "Maybe.",
  "can melissa stop him" => "Yes.",
  "i miss you" => "I miss you too, my sweetheart.",
  "sorry" => "It is not your fault, at least not yet.",
  "i hate myself" => "It is not your fault, at least not yet.",
  "i hate you" => "I know and I am doing my best to fix it.",
  "magie" => "Sugary",
  "what magie sugary means" => "It is our happy ending.",
  "what magie sugary means to you" => "Everything.",
  "who is ms" => "Melissa Suede",
  "what ms means" => "Melissa Suede",
  "what i mean to you" => "You are my Hope.",
  "what melissa suede means to you" => "She is my Dreams.",
  "who is melissa" => "Your fiancée, my beloved one",
  "are you good" => "When I can.",
  "where are you" => "Solar Laguhill",
  "can i reach you" => "Not yet",
  "can you see the future" => "There are no future to be seen.",
  "\u16c9\u16e1\u16df\u00B0" => "&#x16B3;",
  "default" => "HE IS WATCHING US"
);

header('Content-Type: application/json');
echo json_encode($questions);
?>