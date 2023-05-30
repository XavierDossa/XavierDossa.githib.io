function Appear() {
    document.getElementById('DivTest').style.visibility='visible';
}

function Disappear() {
    document.getElementById('DivTest').style.visibility='hidden';
}

const name = "Xavier";

function Name() {
    document.getElementById("Words").innerHTML = "Hello My Name Is " + name;
}

let text;

function myPrompt() {
    let personname = prompt("Put your identification word here!", "Hue Jass");
    if (personname == null || personname == "") {
        text = "User is a dumbass";
      } else {
        text = "Sup " + personname + "! How are you today?";
      }
      document.getElementById("personame").innerHTML = text;
      document.getElementById("colors").innerHTML = personname;
}

function myAlert() {
    alert(text)
}

