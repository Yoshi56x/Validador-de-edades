function detectarEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        edad();
    }
}
function edad() {
    const edad = document.getElementById("edad").value
    const valiadar = edad


    if (edad > 18) {
        document.getElementById("valid").replaceChildren("Tu Edad es: " + valiadar+" y eres mayor de edad")

    } else {
        document.getElementById("valid").replaceChildren("Eres menor de edad")

    }
}


