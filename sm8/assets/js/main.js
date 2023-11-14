document.addEventListener('DOMContentLoaded', ()=>{
    const postEl = document.querySelector('.post-container');
    const postFull = document.querySelector('.post__info');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // console.log(posts);
            posts.slice(0,10).forEach(post => {
                postEl.insertAdjacentHTML('beforeend', `
                    <div class="post">
                        <p class="post__data" data-postId="${post.id}">${post.title}</p>
                    </div>
                `)
            });
    
    
        })
        .catch(error=>{
            postEl.insertAdjacentHTML('beforeend', `
                <h2 class="error"> Ошибка: ${error} <h2>
            `)
        })
    
        postEl.addEventListener('click',(event)=>{
            if(event.target.closest('.post__data')){
                const postId = event.target.getAttribute('data-postId');
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(response=>response.json())
                .then(post=>{
                    postEl.style.display = 'none';
                    postFull.insertAdjacentHTML('beforeend',`
                        <a id="back" href="#">Назад</a>
                        <div class="post">
                        <p>${post.title}</p>
                        <p>${post.body}</p>
                        </div>
                    `)
                    back.addEventListener('click', (event)=>{
                        event.preventDefault();
                        postFull.innerHTML = '';
                        postEl.style.display = 'flex';
                    })
                    postFull.style.display = 'flex';
                })
            }
        })

});


