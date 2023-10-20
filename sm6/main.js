'use strict';

let options = {
    threshold: 0.5
}
let observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        fixedBlock.style.display = 'block';
    }
    
},options);

observer.observe(block);
