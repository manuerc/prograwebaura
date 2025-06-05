const listaCompras = []

const inputNombre   = document.getElementById('nombre');
const inputCantidad = document.getElementById('cantidad');
const btnAgregar    = document.getElementById('btn-agregar');
const ulLista       = document.getElementById('lista-compras');

btnAgregar.addEventListener('click', agregarItem);

function agregarItem(){
  // 4.1) Leemos y limpiamos (.trim()) el texto del input
  const nombre   = inputNombre.value.trim();
  // 4.2) parseInt convierte la cadena en número entero
  const cantidad = parseInt(inputCantidad.value, 10);


  listaCompras.push({ nombre, cantidad });

  // Limpia los inputs para el siguiente ingreso
  inputNombre.value   = '';
  inputCantidad.value = '';

  renderizarLista();
}

// 5) Función que dibuja todos los elementos del array en el <ul>
function renderizarLista() {
    ulLista.innerHTML = '';  // Vacía el <ul> antes de llenarlo de nuevo
  
    listaCompras.forEach((item, indice) => {
      // Crea un <li> con el texto
      const li = document.createElement('li');
      li.textContent = `${item.nombre} — Cantidad: ${item.cantidad}`;
  
      // Crea el botón “Eliminar”
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.style.marginLeft = '8px';
      btnEliminar.addEventListener('click', () => {
        listaCompras.splice(indice, 1);  // Borra este elemento del array
        renderizarLista();                // Vuelve a dibujar la lista
      });
  
      // Inserta el botón en el <li>, y el <li> en el <ul>
      li.appendChild(btnEliminar);
      ulLista.appendChild(li);
    });
  }