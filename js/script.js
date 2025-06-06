const imagens = ["img/homus1.webp", "img/homus2.jpg", "img/homus3.webp"];
let i = 0;

const imgCarroussel = document.getElementById("imgCarroussel")
function avancar()
{
    i++;
    if (i >= imagens.length) {
        i = 0; // Volta ao início
    }
    imgCarroussel.src = imagens[i]
}
function voltar() 
{
     i--;
     if (i < 0) {
        i = imagens.length - 1; // Vai para o final
    }
    imgCarroussel.src = imagens[i]
}
document.getElementById("avancar").addEventListener("click" , avancar);
document.getElementById("voltar").addEventListener("click" , voltar);