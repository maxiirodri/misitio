// ===============================
// CONFIGURACIÓN
// ===============================

// Poné acá los números vendidos
const vendidos = ["03", "17", "55"]; 

// Tu número de WhatsApp (con código de país)
const telefono = "5492477337784";


// ===============================
// GENERAR GRILLA 00–99
// ===============================

const contenedor = document.querySelector('.numeros-grid');

for (let i = 1; i < 121; i++) {
  const numeroFormateado = i.toString().padStart(2, '0');

  const div = document.createElement('div');
  div.classList.add('numero');
  div.dataset.numero = numeroFormateado;
  div.textContent = numeroFormateado;

  // Si el número está vendido → marcarlo
  if (vendidos.includes(numeroFormateado)) {
    div.classList.add('vendido');
    div.textContent = numeroFormateado;
  }

  contenedor.appendChild(div);
}


// ===============================
// EVENTO DE WHATSAPP
// ===============================

const numeros = document.querySelectorAll('.numero');

numeros.forEach(n => {
  // Si está vendido → no se puede hacer clic
  if (n.classList.contains('vendido')) return;

  n.addEventListener('click', () => {
    const elegido = n.dataset.numero;
    const mensaje = `Hola! Quiero el número ${elegido} de la rifa.`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});
