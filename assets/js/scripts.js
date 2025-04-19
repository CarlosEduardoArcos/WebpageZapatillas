let tallaSeleccionada = null;

document.querySelectorAll('.talla-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.talla-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    tallaSeleccionada = this.textContent;
  });
});

function agregarCarrito() {
  if (!tallaSeleccionada) {
    alert("Por favor, selecciona una talla antes de añadir al carrito.");
  } else {
    alert(`Producto añadido al carrito (Talla: ${tallaSeleccionada})`);
  }
}

function cambiarImagen(elemento) {
  const mainImg = document.getElementById('mainImage');
  mainImg.src = elemento.src;
}