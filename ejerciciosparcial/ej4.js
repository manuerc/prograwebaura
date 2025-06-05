let promedio = 0
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const total = document.getElementById('total')
const btnCalcular = document.getElementById('calcular-promedio')
const listaNotas = document.getElementById('lista-notas')

btnCalcular.addEventListener('click', calcularProm)

function calcularProm(){
    let n1 = parseFloat(nota1.value);
    let n2 = parseFloat(nota2.value);
    let n3 = parseFloat(nota3.value);

    const promedio = (n1 + n2 + n3) / 3;
    total.textContent = `Promedio: ${promedio}`;

}

function mostrarProm(){
    total.textContent = promedio
}

listaNotas.innerHTML(nota1, nota2, nota3)