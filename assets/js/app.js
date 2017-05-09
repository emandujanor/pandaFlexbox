var cerrar = document.getElementsByClassName('cerrar');

for (var i = 0; i < cerrar.length; i++) {
  cerrar[i].addEventListener('click', ocultarImagen);
};

function ocultarImagen() {
  var padre = this.parentElement;
  padre.style.display = 'none';
};
