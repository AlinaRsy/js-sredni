
// что такое вебко
let newLeft = document.querySelector('.about__body');
let aboutColumns = animated__line.querySelectorAll('.about__column');
animated__line.onmouseover = function(event){
    let target = event.target.closest('.about__column');
    if(!target){
        return;
    }
    newLeft.style.setProperty('--left',Array.from(this.children).indexOf(target)*37+'%');
   animated__line.querySelector('.active').classList.remove('active');
   target.classList.add('active');
}

// аккордеон
let accordionElems = document.querySelectorAll('.accordion__item');
for(let item of accordionElems){
    item.onclick = function(event){
        let target = event.target.closest('.accordion__name');
        if(!target) return;
        let text = item.querySelector('.accordion__text');
        text.classList.toggle('active');
        target.classList.toggle('open');
    }
}


// отложенный вызов
let signUp = document.querySelector('.signup__btn');
let countTimer = 5;

setTimeout(()=> {
    dialog.showModal();
    
    let timerid = setInterval(function(){
        if(countTimer<0){
            dialog.close();
            countTimer = 5;
            dialogTimer.textContent = countTimer;
            signUp.style.display = 'flex';
            clearInterval(timerid);
        }
        dialogTimer.textContent = countTimer;
        countTimer--;
    }, 1000);
 },5000);

signUp.onclick = function(){
    dialog.showModal();
    let timerid = setInterval(function(){
        if(countTimer<0){
            dialog.close();
            countTimer = 5;
            dialogTimer.textContent = countTimer;
            clearInterval(timerid);
        }
        dialogTimer.textContent = countTimer;
        countTimer--;
    }, 1000);
    return false;
} ;