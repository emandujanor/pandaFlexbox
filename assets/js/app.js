var cerrar = document.getElementsByClassName('cerrar');
var ocultarIzq = document.getElementById('ocultaTextIzquierda');
var ocultarDer = document.getElementById('ocultaTextDerecha');
var restaurar = document.getElementById('restaurar');

for (var i = 0; i < cerrar.length; i++) {
  cerrar[i].addEventListener('click', ocultarImagen);
};

function ocultarImagen() {
  var padre = this.parentElement;
  padre.style.display = 'none';
};

ocultarIzq.addEventListener('click', ocultarIzqierda);
function ocultarIzqierda() {
  var textoIzquierda = document.getElementById('textoIzquierda');
  textoIzquierda.style.display = 'none';
};

ocultarDer.addEventListener('click', ocultarDerecha);
function ocultarDerecha() {
  var textoDerecha = document.getElementById('textoDerecha');
  textoDerecha.style.display = 'none';
};
