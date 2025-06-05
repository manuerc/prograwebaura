let valor = 0

const elementoNumero = document.getElementById('numero')
const mas = document.getElementById('mas')
const menos = document.getElementById('menos')
const reset = document.getElementById('reset')

mas.addEventListener('click', sumar)
menos.addEventListener('click', restar)
reset.addEventListener('click', resetear)

function sumar(){
    valor ++;
    actualizarPantalla()
}

function restar(){
    valor --;
    actualizarPantalla()
}

function resetear(){
    valor = 0;
    actualizarPantalla()
}

function actualizarPantalla(){
    elementoNumero.textContent = valor
}