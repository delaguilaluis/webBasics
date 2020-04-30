function manejarClick() {
  alert('Presionaste el botón!')
}

const body = document.querySelector('body')
function manejarCambioDeTema() {
    body.className += 'dark'
}

const imagenMoneda = document.querySelector('#moneda-imagen')
function manejarMoneda() {
    const esCara = Math.random() >= 0.5

    if (esCara) {
        imagenMoneda.src = '../../imagenes/cara.jpg'
    } else {
        imagenMoneda.src = '../../imagenes/escudo.jpg'
    }    
}

const boton = document.querySelector('#mi-boton')
boton.addEventListener('click', manejarClick)

const botonMoneda = document.querySelector('#moneda-boton')
botonMoneda.addEventListener('click', manejarMoneda)

const botonTema = document.querySelector('#tema-boton')
botonTema.addEventListener('click', manejarCambioDeTema)
