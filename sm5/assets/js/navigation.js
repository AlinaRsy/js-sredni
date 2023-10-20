'use strict';
// бургер
let nav = document.querySelector('.header__nav').cloneNode(true);
let headerBtns = document.querySelector('.header__btns').cloneNode(true);
drop__down.appendChild(nav);
drop__down.appendChild(headerBtns);
burger.onclick = function(){
    burger.style.opacity = '0';
    drop__down.style.transform = 'translateX(0)';
    profileAbout.style.zIndex = '0';
}
close__burger.onclick = function(){
    burger.style.opacity = '1';
    drop__down.style.transform = 'translateX(-100%)';
    profileAbout.style.zIndex = '3';
}