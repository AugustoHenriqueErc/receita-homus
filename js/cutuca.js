function exibirMensagem() {
    alert('Hey! Pare de me cutucar!');
}

var pagina = document.querySelector('h1');
pagina.addEventListener('click', exibirMensagem);