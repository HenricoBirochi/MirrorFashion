function ValidaBusca(){
    if(document.querySelector('#q').value == ''){
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}
document.querySelector('#form-busca').onsubmit = ValidaBusca;