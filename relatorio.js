
const { calcularValor } = require('./calculo');

// Descrição legível de cada serviço
const NOMES_SERVICOS = {
    1: 'Roupas comuns',
    2: 'Roupas delicadas',
    3: 'Edredons'
};

function formatarDinheiro(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function formatarPeso(peso) {
    return `${String(peso).replace('.', ',')} kg`;
}

function exibirRelatorio(clientes, pesos, servicos) {
    let totalReceber = 0;
    let qtdDelicadas = 0;
    let indiceMaiorPeso = 0;

    console.log('\n==============================');
    console.log('   RELATÓRIO DE ATENDIMENTOS');
    console.log('==============================');

    for (let i = 0; i < clientes.length; i++) {
        const valor = calcularValor(pesos[i], servicos[i]);
        const nomeServico = NOMES_SERVICOS[servicos[i]] || 'Serviço desconhecido';

        console.log(
            `${i + 1}) Cliente: ${clientes[i]} | ` +
            `Peso: ${formatarPeso(pesos[i])} | ` +
            `Serviço: ${nomeServico} | ` +
            `Valor: ${formatarDinheiro(valor)}`
        );

        totalReceber += valor;

        if (servicos[i] === 2) {
            qtdDelicadas++;
        }

        // Maior estrito: em caso de empate, preserva o primeiro cadastrado
        if (pesos[i] > pesos[indiceMaiorPeso]) {
            indiceMaiorPeso = i;
        }
    }

    console.log('\n------------------------------');
    console.log('           RESUMO');
    console.log('------------------------------');
    console.log(`Total a receber: ${formatarDinheiro(totalReceber)}`);
    console.log(`Atendimentos de roupas delicadas: ${qtdDelicadas}`);
    console.log(`Cliente do maior peso: ${clientes[indiceMaiorPeso]} (${formatarPeso(pesos[indiceMaiorPeso])})`);
    console.log('==============================\n');
}

module.exports = { exibirRelatorio };
