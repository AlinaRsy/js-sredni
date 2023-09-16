let menuBtns = document.querySelectorAll('.menu__btn');
let submenus = document.querySelectorAll('.submenu');
menuBtns.forEach(btn => {
    btn.addEventListener('click', function(event){
        let currentBtn = event.target.closest('.menu__btn');
        let submenu = currentBtn.closest('.menu__elem').querySelector('.submenu');
        
        menuBtns.forEach(btn=>{
            if(btn!==currentBtn){btn.classList.remove('menu__btn--active')}
        });
        submenus.forEach(sub => {
            if(sub!==submenu){
                sub.classList.remove('submenu--active');
            }
        })
        submenu.classList.toggle('submenu--active');
        currentBtn.classList.toggle('menu__btn--active');

    })
})
document.addEventListener('click',(event)=>{
    if(!event.target.closest('.menu')){
        menuBtns.forEach(btn=>{
            btn.classList.remove('menu__btn--active')
        });
        submenus.forEach(sub => {
                sub.classList.remove('submenu--active');
        })
    }
})