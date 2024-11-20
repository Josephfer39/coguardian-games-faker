const res = document.getElementById("result");

function calculate(value) {
const calculateValue = eval(value || null);
if(isNaN(calculateValue)) {
    res.value = "Can't divide 0";
    setTimeout(() => {
        res.value="";
    }, 1500);
} else {
    res.value = calculateValue;
}
}

function updete(entervalue) {
if (!res.value) {
    res.value = "";
}
res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
e.preventDefault();
if (e.key === "0") {
    res.value += "0"
} else if (e.key ==="1") {
    res.value += "1";
} else if (e.key === "2") {
    res.value += "2";
} else if (e.key === "3") {
    res.value += "3";
} else if (e.key === "4"){
    res.value += "4";
} else if (e.key === "5"){
    res.value += "5";
} else if (e.key ==="6") {
    res.value += "6";
} else if (e.key === "7") {
    res.value += "7";
} else if (e.key === "8") {
    res.value += "8";
} else if (e.key === "9"){
    res.value += "9";
}

if (e.key === "+") {
 res.value += "+";
} else if (e.key === "-") {
 res.value += "-";
} else if (e.key === "*") {
 res.value += "*";
} else if (e.key === "/") {
 res.value += "/";
}

if (e.key === ".") {
 res.value += ".";
}

if (e.key === "m") {
  let new_tab = window.open("https://clever.com")
  new_tab.document.write("<iframe src = 'https://www.google.com/url?q=https://eaglercraft.q13x.com/&sa=U&ved=2ahUKEwihvd-VobGJAxW24ckDHRngLaAQFnoECAkQAg&usg=AOvVaw1ggJajXFT8AePj6xXRPkgR' style = 'width: 100%; height: 100%'>")
}

if (e.key === "G") {
   let new_tab = window.open("https://clever.com")
   new_tab.document.write("<iframe src = 'https://www.gamenora.com/#google_vignette' style = 'width: 100%; height: 100%'>")
}

if (e.key === "g") {
   let new_tab = window.open("https://clever.com")
   new_tab.document.write("<iframe src = 'https://gooberdash.winterpixel.io/' style = 'width: 100%; height: 100%'>")
}

if (e.key === "j") {
   let new_tab = window.open("https://clever.com")
   new_tab.document.write("<iframe src = 'https://www.freegames.com/t/hot?source=ADW-21339530363&gad_source=1&gclid=Cj0KCQjw7Py4BhCbARIsAMMx-_I0qhkG5EM-rhoXMVK-enTImzlxbWZ7VpnYW9vdy_pbJXCZ5u_Mh5QaAh6gEALw_wcB' style = 'width: 100%; height: 100%'>")
}

if (e.key === "b") {
   let new_tab = window.open("https://clever.com")
   new_tab.document.write("<iframe src = 'https://www.blooket.com/' style = 'width: 100%; height: 100%'>")
}

if (e.key === "o") {
   let new_tab = window.open("https://clever.com")
   new_tab.document.write("<iframe src = 'https://www.twoplayergames.org/' style = 'width: 100%; height: 100%'>")
}

if (e.key === "s") {
   let new_tab = window.open("https://clever.com")
   new_tab.document.write("<iframe src = 'https://rocketsoccerderby.com/' style = 'width: 100%; height: 100%'>")
}

if (e.key === "Enter") {
 calculate(result.value);
}

if (e.key === "Backspace") {
 const resultInput = res.value;
 res.value = resultInput.substring(0, res.value.lenght - 1);
}
}





