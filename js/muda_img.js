var imgs = ['gnu_pb.png', 'gnu_cor.jpg', 'gnu_3d.jpg', 'gnu_meditando.png'];
var atual = 0;

var img = document.querySelector('img');
img.addEventListener('click', function () {
    atual = (atual + 1) % imgs.length;
    img.setAttribute('src', 'img/' + imgs[atual]);
});