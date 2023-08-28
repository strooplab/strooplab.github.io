const expansionContainers = document.querySelectorAll('.expansion');
const expandirImgs = document.querySelectorAll('.expandirimg');
const streetImgs = document.querySelectorAll('.street');
const cerrarBtns = document.querySelectorAll('.cerrar');

expandirImgs.forEach((expandirImg, index) => {
    streetImgs[index].addEventListener('click', () => {
        expansionContainers[index].style.display = "block";
        expandirImgs[index].src = streetImgs[index].src;
    });

    cerrarBtns[index].addEventListener('click', () => {
        expansionContainers[index].style.display = "none";
    });

    window.addEventListener('click', event => {
        if (event.target === expansionContainers[index]) {
            expansionContainers[index].style.display = "none";
        }
    });
});

window.onscroll = function() {
    botonback();
};

function botonback() {
    var btn = document.getElementById("botonbck");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function parriba() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE y Opera
}