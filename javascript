setInterval(setClock, 1000);

const hour_hnd = document.querySelector('.hour');
const min_hnd = document.querySelector('.min');
const sec_hnd = document.querySelector('.sec');

function setClock(){
    const currentdate = new Date();
    const sec = currentdate.getSeconds()/60;
    const min = (sec + currentdate.getMinutes())/60;
    const hour = (min + currentdate.getHours())/12;

    setRotation(hour_hnd, hour);
    setRotation(min_hnd, min);
    setRotation(sec_hnd, sec);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotate', rotationRatio * 360);
}
