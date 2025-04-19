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
    setTimeout(() => {
      alert("Por favor, selecciona una talla antes de añadir al carrito.");
    }, 100);
  } else {
    setTimeout(() => {
      alert(`Producto añadido al carrito (Talla: ${tallaSeleccionada})`);
    }, 100);
  }
}

function cambiarImagen(elemento) {
  const mainImg = document.getElementById('mainImage');
  mainImg.src = elemento.src;
}

function mostrarDatosEntrega() {
  const metodo = document.getElementById('metodoEntrega').value;
  const datosEnvio = document.getElementById('datosEnvio');
  if (metodo === 'domicilio') {
    datosEnvio.classList.remove('d-none');
  } else {
    datosEnvio.classList.add('d-none');
  }
}