# Lavanderia — Registro de Atendimentos

Programa de terminal em Node.js (com `readline-sync`) para registrar 7 atendimentos de uma lavanderia e gerar um relatório.

## Como executar

```bash
npm install
npm start        # ou: node index.js
```

## Estrutura

| Arquivo | Responsabilidade |
|---|---|
| `index.js` | Arrays, menu (`switch`) e chamadas das funções |
| `cadastro.js` | Cadastra os 7 atendimentos (`for`) com validação de entrada |
| `calculo.js` | Recebe peso e serviço e retorna o valor a cobrar |
| `relatorio.js` | Percorre os arrays (`for` com `length`), usa `calculo.js` e exibe os totais |

## Regras de preço

- Roupas comuns: R$ 12,00/kg
- Roupas delicadas: R$ 16,00/kg
- Edredons: R$ 20,00/kg
- Cobrança mínima por atendimento: R$ 25,00

## Menu

```
1 - Cadastrar atendimentos
2 - Exibir relatório
0 - Encerrar
```

- O relatório fica bloqueado até o primeiro cadastro.
- Cadastrar novamente **substitui** todos os dados anteriores.
- Em empate de maior peso, vale o primeiro cliente cadastrado.
