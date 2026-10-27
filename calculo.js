
const TAXA_MINIMA = 25.0;


const PRECOS_POR_SERVICO = {
    1: 12.0,
    2: 16.0,
    3: 20.0
};

function calcularValor(peso, servico) {
    
    const precoKg = PRECOS_POR_SERVICO[servico];
    if (!precoKg) return 0;
   
    const valorBruto = Math.round((peso * precoKg) * 100) / 100;

       return Math.max(valorBruto, TAXA_MINIMA);
}

module.exports = { calcularValor };
