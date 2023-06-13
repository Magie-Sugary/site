var questions = {
  "who": "Liam.",
  "since when": "Since the reboot or even before.",
  "why": "Because he can.",
  "can we stop him": "No.",
  "can i stop him": "Maybe.",
  "can melissa stop him": "Yes.",
  "liam is that you": "...",
  "i miss you": "I miss you too, my sweetheart.",
  "sorry": "It is not your fault, at least not yet.",
  "i hate myself": "It is not your fault, at least not yet.",
  "i hate you": "I know and I am doing my best to fix it.",
  "magie": "Sugary",
  "what magie sugary means": "It is our happy ending.",
  "what magie sugary means to you": "Everything.",
  "who is ms": "Melissa Suede",
  "what ms means": "Melissa Suede",
  "are you god": "No.",
  "are you good": "When I can.",
  "can you see the future": "There are no future to be seen.",
  "\u16c9\u16e1\u16df\u00B0": "&#x16B3;",
  "default": "HE IS WATCHING US"
}
function ask() {
    var question = document.getElementById("ask-GM").value.toLowerCase();
	question = question.replace(/\?/g, "");
	if (questions.hasOwnProperty(question)) {
		reply = questions[question];
	} else {
		reply = questions["default"];
	}
	document.getElementById("hi").innerHTML = reply;
}

function handleKeyDown(event) {
    if (event.keyCode === 13) {
        ask();
    }
}