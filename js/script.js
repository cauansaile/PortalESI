
const menuBtn = document.querySelector('.menu')
const menusand = document.querySelector('.menu-sand') 
const main = document.querySelector('main')
    menuBtn.addEventListener('click', () => {
    menusand.classList.toggle('active');
    main.classList.toggle('menu-open')
    });


function abrirLightbox(el){
    const imgSrc = el.querySelector('img').getAttribute('src')
    const descricao = el.getAttribute('descricao-legenda')

    document.getElementById('lightbox-img').src = imgSrc
    document.getElementById('lightbox-texto').innerText = descricao
    document.getElementById('lightbox').classList.add('active')
    descricao = document.body.style.color

}

function fecharLightbox(event){
    const lightbox = document.getElementById('lightbox')
    if (event.target.id === 'lightbox' || event.target.classList.contains('close-btn')) {
        lightbox.classList.remove('active')
}}