const form = document.getElementById('form-convidados');
    let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha() {
    const nomeContato = document.getElementById('nome');
    const telefoneContato = document.getElementById('telefone');



    

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telefoneContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    nomeContato.value = '';
    telefoneContato.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}