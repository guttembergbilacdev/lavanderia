
const readline = require('readline-sync');
const { cadastrarAtendimentos } = require('./cadastro');
const { exibirRelatorio } = require('./relatorio');

// Bancos de dados em memória
const clientes = [];
const pesos = [];
const servicos = [];

function mostrarMenu() {
    console.log('\n--- SISTEMA DE LAVANDERIA ---');
    console.log('[1] Cadastrar atendimentos');
    console.log('[2] Exibir relatório');
    console.log('[0] Sair');
}

function iniciar() {
    let opcao = '';

    while (opcao !== '0') {
        mostrarMenu();
        opcao = readline.question('\nEscolha uma opcao: ').trim();

        switch (opcao) {
            case '1':
                cadastrarAtendimentos(clientes, pesos, servicos);
                break;

            case '2':
                if (clientes.length === 0) {
                    console.log('\nAviso: Nenhum atendimento registrado até o momento.');
                } else {
                    exibirRelatorio(clientes, pesos, servicos);
                }
                break;

            case '0':
                console.log('\nEncerrando o sistema. Até mais!');
                break;

            default:
                console.log('\nOpção inválida! Digite 1, 2 ou 0.');
                break;
        }
    }
}


iniciar();
