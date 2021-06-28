const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');
const marker = document.querySelector('#menu');
const item = document.querySelectorAll('ul.menu li');
// const url = window.location.pathname.split("/")[1];
const url = window.location.pathname.split("/")[1].includes('semana') ? 'lab-2.html' : window.location.pathname.split("/")[1];
var sObjeto;

// console.log(marker);
// console.log(item)
// console.log(url)

toggle.onclick = function (){
    toggle.classList.toggle('active');
    banner.classList.toggle('active');

    if(sObjeto){
        sObjeto.classList.toggle('activado');
    }

    if(url.includes('quiensoy')){
        const imgYS = document.querySelector('#imgys');
        const secQS = document.querySelector('#secqs');
        imgYS.classList.toggle('addYoSoy');
    }

    if(url.includes('lab-2') || url.split('.')[0].includes('semana')){
        const imgLab = document.querySelector('#imglab');
        imgLab.classList.toggle('addYoSoy');
    }

    if(url.includes('contactame')){
        const imgYS = document.querySelector('#imgys');
        imgYS.classList.toggle('addYoSoy');
    }

    if(url.includes('experiencia')){
        const imgYS = document.querySelector('#imgys');
        imgYS.classList.toggle('addYoSoy');
    }
}

function parallax(e){
    this.querySelectorAll('.elements').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100;
        Layer.style.transform = `translateX(${x}px)`;
    });
}

function indicator(e){
    // console.log(e);
    e.classList.toggle('activado');
}

item.forEach(link => {

    if(url.includes(link.id)){
        sObjeto = link;
    }

    link.addEventListener('click', (e) => {
        indicator(e.target);
    });
    
});

document.addEventListener("mousemove", parallax);

function toggleVideo(){
    var trailer = document.querySelector(".trailer");
    var video = document.querySelector("video");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}