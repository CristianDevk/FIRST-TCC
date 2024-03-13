const btnLogin = document.querySelector('.login');
const btnFechar = document.querySelector('.fechar--modal');
const janelaModal = document.querySelector('.janela--modal');
const overlay = document.querySelector('.overlay');

console.log(btnLogin);
console.log(btnFechar);
console.log(janelaModal);

btnLogin.addEventListener('click', abrirmodal);
btnFechar.addEventListener('click', fecharModal);

function abrirmodal() {
    janelaModal.classList.add('aberta');
    overlay.classList.add('visivel');
    document.body.style.overflowY = 'hidden'
}

function fecharModal() {
    janelaModal.classList.remove('aberta');
    overlay.classList.remove('visivel');
    document.body.style.overflowY = 'auto'
} 