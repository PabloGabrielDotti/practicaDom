
let numero;


function numeroAzar() {
  numero = Math.floor(Math.random() * 11);
  console.log(numero)

}

function Enviar() {
  let numeroEnviado = parseInt(document.getElementById(`numeroIngresado`).value);
  console.log(numeroEnviado);

  if (numeroEnviado == numero) {
    alert("adivinaste");
  } else {
    alert("pifiaste");
  }
}
