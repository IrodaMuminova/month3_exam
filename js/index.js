let body = document.querySelector('body');
let header = document.querySelector('h1');
let mavzu_button = document.getElementById('mavzu');
mavzu_button.addEventListener('click', function (evt) {
    body.classList.toggle('dark')
    header.classList.toggle('dark')
})



