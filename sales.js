const games_promotion = [
    {
        nome: "Call of Duty: Modern Warfare II",
        url_image: "imagens/cod.jpg",
        css: "img_cod",
        price: 200,
        promotion: 20
    },
    {

        nome: "god of war",
        css: "img_god_of-war",
        url_image: "imagens/god_of_war.webp",
        price: 200,
        promotion: 10
    },
    {

        nome: "elden Ring",
        url_image: "imagens/Elden_Ring_capa.jpg",
        css: "img_elden_ring",
        price: 200,
        promotion: 5
    },
    {

        nome: "far cry",
        url_image: "imagens/far_cry.png",
        css: "img_elden_ring",
        price: 200,
        promotion: 30
    },
    {

        nome: "cyberpunk",
        url_image: "imagens/cyberpunk.jpg",
        css: "img_elden_ring",
        price: 200,
        promotion: 15
    },
    {

        nome: "darksouls",
        url_image: "imagens/dark_souls.jpg",
        //esse css representa o css unico de cada card
        css: "img_elden_ring",
        price: 200,
        promotion: 7
    },

];

function func(a, b) {
    return 0.5 - Math.random();
}

const hideModal = () => {
    const fade = document.getElementById('fade');
    fade.style.display = 'none';
    document.body.style.overflowX = 'auto'
}

const openModalShopping = (id) => {
    const game = games_promotion[id];
    document.body.style.overflowX = 'hidden'

    document.getElementById("modal").innerHTML = `
   
        <div class="jogos_compra">
            <div class="primeira_parte">
                <i class="fa-solid fa-xmark x" onclick="hideModal()"></i>
                <img class="img_compra" src="${game.url_image}" alt="capa de gta-5">
                <p class="descrição_compra"></p>
            </div>
            <div class="segunda_parte">
                <h2 class="titulo_compra">${game.nome}</h2>
                <h3 class="preço_compra">$ ${game.price}</h3>
                <button class="btn--comprar">COMPRAR</button>
            </div>
        </div>
    
    `
    
    const fade = document.getElementById('fade');
    fade.style.display = 'block';
    fade.style.top = '50%!important';

}



document.addEventListener("DOMContentLoaded", function (event) {
    games_promotion.sort(func)
    setTimeout(() => {
        
    }, 200);
    for (let x = 0; x < 3; x++) {
        document.getElementById("hot_games").innerHTML += `
        <div class="card_jogo">
            <img class="${games_promotion[x].css}" src="${games_promotion[x].url_image}" alt="capa de god of war">
                <h2 class="preço">promoção de ${games_promotion[x].promotion}%</h2>
                <div class="introdução_game">
                    <h2 class="titulo--jogo">${games_promotion[x].nome}</h2>
                    <button class="compra" onclick="openModalShopping('${x}')">COMPRAR</button>
                </div>
            </div>
    `
    }
});
