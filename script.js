const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const imagemTopo = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

function textoTopo(texto1, texto2) {
    titulo.innerHTML = `${texto1} <br> <strong class="app__title-strong">${texto2}</strong>`;
}

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    imagemTopo.setAttribute('src', './imagens/foco.png');
    focoBt.setAttribute('class', 'app__card-button app__card-button--foco active');
    curtoBt.setAttribute('class', 'app__card-button app__card-button--curto');
    longoBt.setAttribute('class', 'app__card-button app__card-button--longo');
    textoTopo('Otimize sua produtividade,', 'mergulhe no que importa.');

})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    imagemTopo.setAttribute('src', './imagens/descanso-curto.png');
    focoBt.setAttribute('class', 'app__card-button app__card-button--foco');
    curtoBt.setAttribute('class', 'app__card-button app__card-button--curto active');
    longoBt.setAttribute('class', 'app__card-button app__card-button--longo');
    textoTopo('Recarregue as energias,', 'faça uma pausa curta.');
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    imagemTopo.setAttribute('src', './imagens/descanso-longo.png');
    focoBt.setAttribute('class', 'app__card-button app__card-button--foco');
    curtoBt.setAttribute('class', 'app__card-button app__card-button--curto');
    longoBt.setAttribute('class', 'app__card-button app__card-button--longo active');
    textoTopo('Por um dia mais leve,', 'faça uma pausa');
})