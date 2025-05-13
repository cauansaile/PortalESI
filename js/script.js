const menuBtn = document.querySelector('.menu')
const menusand = document.querySelector('.menu-sand') 
const main = document.querySelector('main')
    menuBtn.addEventListener('click', () => {
    menusand.classList.toggle('active');
    main.classList.toggle('menu-open')
    });

  document.querySelectorAll('.menusand a').forEach(link => {
   link.addEventListener('click', () => {
    menusand.classList.remove('active');
    menu.classList.remove('active');
  });
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

document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();

  const responsavel = document.getElementById("responsavel").value;
  const aluno = document.getElementById("aluno").value;
  const idade = document.getElementById("idade").value;
  const serie = document.getElementById("serie").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Gostaria de informações sobre matrícula.%0A%0A🧑 Responsável: ${responsavel}%0A👶 Aluno: ${aluno}%0A📅 Idade: ${idade} anos%0A🏫 Série: ${serie}%0A📝 Mensagem: ${mensagem || "N/A"}`;

  const numero = "5571993013949"; // Altere para o número da escola com DDI + DDD
  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
});
