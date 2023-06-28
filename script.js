const form = document.getElementById('form-convidados');
let linhas = [];
const nomeContato = document.getElementById('nome');
const telefoneContato = document.getElementById('telefone');

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    if (verificaIgual()) {
        return;
    }

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telefoneContato.value}</td>`;
    linha += '</tr>';

    linhas.push(linha);

    nomeContato.value = '';
    telefoneContato.value = '';
}

function verificaIgual() {
    const novoNome = nomeContato.value;
    const novoTelefone = telefoneContato.value;

    if (linhas.some(linha => linha.includes(novoNome) || linha.includes(novoTelefone))) {
        alert('Nome ou número já existente na tabela. Por favor, insira valores únicos.');
        return true;
    }

    return false;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas.join('');
}
