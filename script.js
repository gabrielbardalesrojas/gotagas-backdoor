document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;

  if (email) {
    alert(`Gracias por registrarte, ${email}. Pronto recibirás nuestras ofertas.`);
  } else {
    alert('Por favor, ingresa un correo electrónico válido.');
  }
});
