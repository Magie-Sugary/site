function ask() {
  var question = document.getElementById("ask-GM").value.toLowerCase();
  question = question.replace(/\?/g, "");
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      
      if (response.hasOwnProperty(question)) {
        reply = response[question];
      } else {
        reply = response["default"];
      }
      
      document.getElementById("hi").innerHTML = reply;
    }
  };
  
  xhttp.open("GET", "questions.php", true);
  xhttp.send();
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    ask();
  }
}