let tallaSeleccionada = null;

// Activar botón seleccionado
document.querySelectorAll('.talla-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.talla-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    tallaSeleccionada = this.textContent.trim();
  });
});

function mostrarDatosEntrega() {
  const metodo = document.getElementById('metodoEntrega').value;
  const datosEnvio = document.getElementById('datosEnvio');
  if (metodo === 'domicilio') {
    datosEnvio.classList.remove('d-none');
  } else {
    datosEnvio.classList.add('d-none');
  }
}

function agregarCarrito() {
  const metodoEntrega = document.getElementById("metodoEntrega").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;
  const color = document.getElementById("colorSeleccionado").value;

  if (!tallaSeleccionada) {
    alert("Por favor, selecciona una talla.");
    return;
  }

  const tablaCM = {
    "36": 22, "36 2/3": 22.5, "37 1/3": 23, "38": 23.5,
    "38 2/3": 24, "39 1/3": 24.5, "40": 25, "40 2/3": 25.5,
    "41 1/3": 26, "42": 26.5, "42 2/3": 27, "43 1/3": 27.5,
    "44": 28, "44 2/3": 28.5, "45 1/3": 29, "46": 29.5
  };

  const cm = tablaCM[tallaSeleccionada];
  const precioBase = 20000;
  let recargo = 0;

  if (cm >= 22 && cm <= 25) {
    if (color === "Negro") recargo = 9000;
    else recargo = 0;
  } else if (cm >= 25.5 && cm <= 27) {
    if (color === "Blanco") recargo = 4000;
    else if (color === "Negro") recargo = 13000;
    else if (color === "Rojo") recargo = 16000;
  } else if (cm >= 27.5 && cm <= 29.5) {
    if (color === "Blanco") recargo = 6000;
    else if (color === "Negro") recargo = 17000;
    else if (color === "Rojo") recargo = 19000;
  }

  const precioFinal = precioBase + recargo;
  let costoEnvio = 0;
  let datosEntrega = "Retiro en tienda";

  if (metodoEntrega === "domicilio") {
    if (!direccion || !telefono) {
      alert("Por favor, completa dirección y teléfono.");
      return;
    }
    costoEnvio = 4000;
    datosEntrega = `Dirección: ${direccion}<br>Teléfono: ${telefono}`;
  }

  const total = precioFinal + costoEnvio;

  const resumenHTML = `
    <p><strong>Color:</strong> ${color}</p>
    <p><strong>Talla:</strong> ${tallaSeleccionada}</p>
    <p><strong>Precio Zapatilla:</strong> $${precioFinal.toLocaleString()}</p>
    <p><strong>Costo de entrega:</strong> $${costoEnvio.toLocaleString()}</p>
    <p><strong>Datos de entrega:</strong><br>${datosEntrega}</p>
    <hr>
    <p><strong class="text-success">TOTAL A PAGAR: $${total.toLocaleString()}</strong></p>
  `;

  document.getElementById("resumenContenido").innerHTML = resumenHTML;

  const modal = new bootstrap.Modal(document.getElementById('resumenModal'));
  modal.show();
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