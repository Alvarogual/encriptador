function encriptar(texto) {
    const reglas = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    return texto.replace(/[eioua]/g, function(match) {
        return reglas[match];
    });
}

function desencriptar(textoEncriptado) {
    const reglas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    return textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return reglas[match];
    });
}

function procesarTexto(accion) {
    const texto = document.getElementById('texto').value;
    let resultado = '';

    if (accion === 'encriptar') {
        resultado = encriptar(texto);
    } else if (accion === 'desencriptar') {
        resultado = desencriptar(texto);
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}