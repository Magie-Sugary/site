function ask() {
    var question = document.getElementById("ask-GM").value.toLowerCase();
	question = question.replace(/\?/g, "");
    switch (question) {
		case "who":
			reply = "Liam.";
			break;
		case "since when":
			reply = "Since the reboot or even before.";
			break;
		case "why":
			reply = "Because he can.";
			break;
		case "can we stop him":
			reply = "No.";
			break;
		case "can i stop him":
			reply = "Maybe.";
			break;
		case "liam is that you":
			reply = "...";
			break;
		case "i miss you":
			reply = "I miss you too, my sweetheart.";
			break;
		case "sorry":
		case "i hate myself":
			reply = "It is not your fault, at least not yet.";
			break;
		case "i hate you":
			reply = "I know and I am doing my best to fix it.";
			break;
		case "magie":
			reply = "Sugary";
			break;
		case "what magie sugary means":
			reply = "It is our happy ending.";
			break;
		case "what magie sugary means to you":
			reply = "Everything.";
			break;
		case "who is ms":
		case "what ms means":
			reply = "Melissa Suede";
			break;
		case "are you god":
			reply = "No."
			break
		default:
			reply = "HE IS WATCHING US"
			break;
    };
	document.getElementById("hi").innerHTML = reply;
}

function handleKeyDown(event) {
    if (event.keyCode === 13) {
        ask();
    }
}