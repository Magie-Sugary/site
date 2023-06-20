var questions = {
  "who": process.env.Q1,
  "since when": process.env.Q2,
  "why": process.env.Q3,
  "can we stop him": process.env.Q4,
  "can i stop him": process.env.Q5,
  "can melissa stop him": process.env.Q6,
  "i miss you": process.env.Q7,
  "sorry": process.env.Q8,
  "i hate myself": process.env.Q9,
  "i hate you": process.env.Q10,
  "magie": process.env.Q11,
  "what magie sugary means": process.env.Q12,
  "what magie sugary means to you": process.env.Q13,
  "who is ms": process.env.Q14,
  "what ms means": process.env.Q15,
  "what i mean to you": process.env.Q16,
  "what melissa suede means to you": process.env.Q17,
  "who is melissa": process.env.Q18,
  "are you good": process.env.Q19,
  "where are you": process.env.Q20,
  "can i reach you": process.env.Q21,
  "can you see the future": process.env.Q22,
  "\u16c9\u16e1\u16df\u00B0": process.env.Q23,
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