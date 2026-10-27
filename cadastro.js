
const readline = require('readline-sync');

const TOTAL_ATENDIMENTOS = 7;

function lerNome() {
    while (true) {
        const nome = readline.question('Nome do cliente: ').trim();

       
        if (nome !== '' && isNaN(nome)) {
            return nome;
        }

        console.log('Nome inválido. Digite um nome válido.');
    }
}

function lerPeso() {
    while (true) {
        let entrada = readline.question('Peso das roupas (kg): ').trim();
        entrada = entrada.replace(',', '.');
        
        const peso = parseFloat(entrada);

        // Garante que é um número válido e maior do que zero
        if (!isNaN(peso) && peso > 0) {
            return peso;
        }

        console.log('Peso inválido. Digite um número positivo maior que zero.');
    }
}