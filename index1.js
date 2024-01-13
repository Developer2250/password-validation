function myFunction() {
    let length = document.getElementById("textLength");
    let passwordText = document.getElementById("passwordID").value;

    let passwordLength = passwordText.length;
    length.textContent = passwordLength;

    if (passwordLength > 11) {
        document.getElementById("passwordID").setAttribute("maxlength", "10");
        return;
    }

    if (passwordLength >= 5) {
        document.getElementById("check0").style.color = "green";
    }
    else {
        document.getElementById("check0").style.color = "tomato";
    }

    if (passwordLength <= 10) {
        document.getElementById("check1").style.color = "green";
    }
    else {
        document.getElementById("check1").style.color = "tomato";
    }

    if (passwordText.match(/[0-9]/i)) {
        document.getElementById("check2").style.color = "green";
    }
    else {
        document.getElementById("check2").style.color = "tomato";
    }

    if (passwordText.match(/[^A-Za-z0-9-' ']/i)) {
        document.getElementById("check3").style.color = "green";
    }
    else {
        document.getElementById("check3").style.color = "tomato";
    }

    if (passwordText.match(' ')) {
        document.getElementById("check4").style.color = "tomato";
    }
    else {
        document.getElementById("check4").style.color = "green";
    }
}