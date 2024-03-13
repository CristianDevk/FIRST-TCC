const sanfona = document.querySelectorAll('.sanfona');
const conteudoSanfona = document.querySelectorAll('.c--sanfona');
const icones = document.querySelectorAll('.fa-arrow-down')
console.log(icones);

for (let i = 0; i < sanfona.length; i++) {
    sanfona[i].addEventListener('click', abrirSanfona)
    function abrirSanfona() {
        sanfona[i].classList.toggle('active');
		icones[i].classList.toggle('fa-rotate-180')
    }
    
}
