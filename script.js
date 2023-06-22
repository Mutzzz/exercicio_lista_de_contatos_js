const form = document.getElementById('form-convidados');
    let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function verificaIgual(){
    const novoNome = nomeContato.value;

    const novoTelefone = telefoneContato.value;


    if (linhas.some(linha => linha.includes(novoNome) || linha.includes(novoTelefone))) {

        alert('Nome ou número já existente na tabela. Por favor, insira valores únicos.');

        return;

    }

    let linha = '<tr>';

    linha += `<td>${novoNome}</td>`;

    linha += `<td>${novoTelefone}</td>`;

    linha += '</tr>';



    linhas.push(linha);
}

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

