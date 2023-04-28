const textArea = document.querySelector(".texto-inicial");
const mensaje = document.querySelector(".mensaje");

const texto_encontrado = document.getElementById('texto_desencriptado')
const texto_no_encontrado = document.getElementById('vacio')

texto_desencriptado.style.display = 'none'



function btnEncriptar() {
    var textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    cambiaSection();
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}



function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    return stringEncriptada
    
}

function btnDesencriptar() {
    var textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    cambiaSection();
    textArea.value = "";
}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
    return stringDesencriptada
    
}


function copiar() {
    let texto_copiado = document.querySelector(".mensaje");
    texto_copiado.select();
    document.execCommand("copy");
}


function cambiaSection() {
    console.log(textArea.value.length)
    if (textArea.value.length==0) {
        texto_desencriptado.style.display = 'none'  
        vacio.style.display = 'flex'   
    } else {
        vacio.style.display = 'none'
        texto_desencriptado.style.display = 'flex'       
    }
}