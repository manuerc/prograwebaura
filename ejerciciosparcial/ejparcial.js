// 1) Creamos un array vacío para guardar los libros
const libros = [];

// 2) Referencias a los elementos del HTML
const inputLibro = document.getElementById('input-libro');
const btnAgregar = document.getElementById('button-agregar');
const ulLibros = document.getElementById('lista-libros');
const formulario = document.getElementById('formulario');

// 3) Escuchamos el evento de submit del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // evitamos que se recargue la página

  const nombreLibro = inputLibro.value.trim(); // leemos el valor del input

  if (nombreLibro === '') {
    alert('Por favor, ingresá un nombre de libro.');
    return; // si el input está vacío, no sigue
  }

  libros.push(nombreLibro); // agregamos el libro al array
  inputLibro.value = ''; // limpiamos el input

  mostrarLibros(); // actualizamos la lista en pantalla
});

// 4) Función para mostrar los libros
function mostrarLibros() {
  ulLibros.innerHTML = ''; // vaciamos la lista antes de volver a dibujarla

  for (let i = 0; i < libros.length; i++) {
    const li = document.createElement('li'); // creamos un elemento <li>
    li.textContent = libros[i]; // le ponemos el nombre del libro

    ulLibros.appendChild(li); // agregamos el <li> a la <ul>
  }
}
