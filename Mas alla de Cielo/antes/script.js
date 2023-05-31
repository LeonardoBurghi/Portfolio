let cajas = document.querySelectorAll('.scrollScale');

function scrollActive(){
    let pixel = document.documentElement.scrollTop;
    console.log(pixel);

    for (var i = 0; i < cajas.length; i++ ) {
        //cajas[i].style.scale = pixel / 1000;

        cajas[i].style.translate = "300";

    }
}

window.addEventListener('scroll', scrollActive);