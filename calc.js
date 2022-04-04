function Calculadora() {
    var a = parseInt(document.getElementById("c").value);

    var b = document.getElementById("e").value;

    var c = document.getElementById("d").value;

    var d = document.getElementById("b");

    var nerd = parseFloat(a);
    var nerd1 = parseFloat(b);

    if (c == "+") {
        d.innerHTML = nerd + nerd1
    }
    else if (c == "-") {
        d.innerHTML = nerd - nerd1;
    }
    else if (c == "*") {
        d.innerHTML = nerd * nerd1;
    }
    else if (c == "/") {
        d.innerHTML = nerd / nerd1;
    }
    else if (c == "**") {
        d.innerHTML = nerd ** nerd1;
    }
    else if (c == "//") {
        d.innerHTML = Math.sqrt(a)
    }

}