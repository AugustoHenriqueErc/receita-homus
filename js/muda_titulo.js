function mudarTitulo() {
    var meuTitulo = document.querySelector('h1');
    meuTitulo.textContent = 'Título mudou! ^.^';
}

setTimeout(mudarTitulo, 3000);