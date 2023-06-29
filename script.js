const form = document.getElementById('form-convidados');
let linhas = [];
const nomeContato = document.getElementById('nome');
const telefoneContato = document.getElementById('telefone');

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete-button')) {
        const row = e.target.closest('.linha');
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);
        linhas.splice(rowIndex, 1);
        atualizaTabela();
    }
});


form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    if (verificaIgual()) {
        return;
    }

    const novaLinha = {
        nome: nomeContato.value,
        telefone: telefoneContato.value
    };

    linhas.push(novaLinha);

    nomeContato.value = '';
    telefoneContato.value = '';
}


function verificaIgual() {
    const novoNome = nomeContato.value;
    const novoTelefone = telefoneContato.value;

    if (linhas.some(linha => linha.nome === novoNome || linha.telefone === novoTelefone)) {
        alert('Nome ou número já existente na tabela. Por favor, insira valores únicos.');
        return true;
    }

    return false;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('.tabela');
    corpoTabela.innerHTML = '';

    for (const linha of linhas) {
        const linhaDiv = document.createElement('div');
        linhaDiv.classList.add('linha');

        const nomeDiv = document.createElement('div');
        nomeDiv.classList.add('celula');
        nomeDiv.textContent = linha.nome;
        linhaDiv.appendChild(nomeDiv);

        const telefoneDiv = document.createElement('div');
        telefoneDiv.classList.add('celula');
        telefoneDiv.textContent = linha.telefone;
        linhaDiv.appendChild(telefoneDiv);

        const botaoDiv = document.createElement('div');
        botaoDiv.classList.add('celula');
        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add('delete-button');
        botaoExcluir.textContent = 'Excluir';
        botaoDiv.appendChild(botaoExcluir);
        linhaDiv.appendChild(botaoDiv);

        corpoTabela.appendChild(linhaDiv);
    }
}

