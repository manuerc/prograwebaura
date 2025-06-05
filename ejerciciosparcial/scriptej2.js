const listaNombres = [];

const inputNombre = document.getElementById('nombre');
const btnAgregar = document.getElementById('agregar');
const ulLista = document.getElementById('lista-nombres');
const btnBorrar = document.getElementById('eliminar')

btnAgregar.addEventListener('click', agregarNombre);
btnBorrar.addEventListener('click', eliminarTodo)

function agregarNombre() {
  const nombre = inputNombre.value.trim();
  if (nombre === '') return;

  listaNombres.push(nombre);
  inputNombre.value = '';

  mostrarNombres();
}

function mostrarNombres() {
  ulLista.innerHTML = '';
  for (let i = 0; i < listaNombres.length; i++) {
    ulLista.innerHTML += `<li>${listaNombres[i]}</li>`;
  }
}

function eliminarTodo(){
    ulLista.innerHTML = '';
    listaNombres.length = 0;
}