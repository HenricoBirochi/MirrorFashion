function ValidaBusca(){
    if(document.querySelector('#q').value == ''){
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}
document.querySelector('#form-busca').onsubmit = ValidaBusca;


var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);

function ParaLooping() {
    clearInterval(timer);
}
function RecomecaLooping(){
    timer = setInterval(trocaBanner, 4000);
}