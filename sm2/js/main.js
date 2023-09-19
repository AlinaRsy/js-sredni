let position = 0;
let slides  = document.querySelector('.slides');
let slide = document.querySelector('#slide');
next.addEventListener('click', function(){
    position = position+slide.offsetWidth;
    if(position>slides.offsetWidth-1){
        position = 0;
    }
    slides.style.left = -position + "px";
});
prev.addEventListener('click', function(){
    position = position-slide.offsetWidth;
    if(position<0){
        position = slides.offsetWidth-slide.offsetWidth;
    }
    slides.style.left = -position + "px";
});