let slideindex = 1;
let remainingTime = 86400 ;

function setTime(){
    if(remainingTime == 0) return;
    let h = Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s = (remainingTime%3600)%60;
    document.querySelector('#hours').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#seconds').innerHTML = s
}

setInterval(()=>{
    remainingTime -= 1;
    setTime()
} , 1000)
function setslide(input,index){
    slideindex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((Element)=>{
        Element.classList.remove('active');
    })
    item.classList.add('active')
}
setInterval(() => {
    slideindex +=1;
    if(slideindex==4){
        slideindex=1;
    }
    setslide(`slide${slideindex}`,slideindex)
}, 6000);  