// Mapeando os botões e armazenando em variaveis
const btnBurguer = document.querySelector('.fa-bars');
console.log(btnBurguer);
const btnFechar = document.querySelector('.fa-x');
console.log(btnFechar);
const barraNav = document.querySelector('nav');


btnBurguer.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
    barraNav.style.display = 'flex';
    btnFechar.style.display = 'block'
    btnBurguer.style.display = 'none'
    document.body.style.overflowY = 'hidden'
}

function fecharMenu() {
    barraNav.style.display = 'none';
    btnFechar.style.display = 'none';
    btnBurguer.style.display = 'block'
    document.body.style.overflow = 'auto'
}