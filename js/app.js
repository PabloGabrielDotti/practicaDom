function numeroAzar() {
  numero = Math.floor(Math.random() * 11);
  console.log(numero)
  return numero
}

function Enviar() {
  let numeroEnviado = parseInt(document.getElementById(`numeroIngresado`));
  console.log(numeroEnviado);

  if (numeroEnviado == numero) {
    alert("adivinaste");
  } else {
    alert("pifiaste");
  }
}
