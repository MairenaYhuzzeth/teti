function mostrarPreguntas() {
    const campos = ["Nombre","Apellido","Edad","Carrera","Anio"];
    for (let c of campos) {
        if (!document.getElementById(c).value) {
            alert("Completa todos los campos");
            return;
        }
    }

    document.getElementById("formUsuario").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
}

function calcularResultado() {
    let total = 0;
    const preguntas = ["p1","p2","p3"];

    for (let p of preguntas) {
        const r = document.querySelector(`input[name="${p}"]:checked`);
        if (!r) {
            alert("Responde todas las preguntas");
            return;
        }
        total += parseInt(r.value);
    }

    let mensaje = "";
    if (total <= 3) mensaje = "Nivel bajo de síntomas.";
    else if (total <= 6) mensaje = "Nivel moderado de síntomas.";
    else mensaje = "Nivel alto de síntomas. Busca ayuda profesional.";

    document.getElementById("preguntas").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("mensajeResultado").innerHTML = mensaje;
}