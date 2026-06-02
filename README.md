# Entregavel4 — Algoritmos Fundamentais

Implementação de algoritmos fundamentais em JavaScript com testes unitários utilizando o framework **Jest**.

## Algoritmos implementados

| Algoritmo  | Descrição                                      |
|------------|------------------------------------------------|
| Soma       | Soma dois números                              |
| Primo      | Verifica se um número é primo                  |
| Contagem   | Verifica se um número é composto (não primo)   |
| Fibonacci  | Retorna os N primeiros números de Fibonacci    |
| MDC        | Calcula o Máximo Divisor Comum entre dois números |
| Quicksort  | Ordena um array usando o algoritmo Quicksort   |

## Estrutura do projeto

```
Entregavel4/
├── src/
│   ├── functions/
│   │   ├── soma.js
│   │   ├── primo.js
│   │   ├── contagem.js
│   │   ├── fibonacci.js
│   │   ├── mdc.js
│   │   └── quicksort.js
│   └── tests/
│       └── allFunctions.test.js
├── package.json
└── README.md
```

## Como executar os testes

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

### Passo a passo

**1. Instale as dependências:**
```bash
npm install
```

**2. Execute os testes:**
```bash
npm test
```

### Resultado esperado

```
PASS  src/tests/allFunctions.test.js
  ✓ sunFunc 10+20 = 30
  ✓ sunFunc -10+20 = 10
  ✓ primeFunc 10 = false
  ✓ primeFunc 3 = true
  ✓ contFunc 10 = true
  ✓ contFunc 3 = false
  ✓ fibonacciFunc 5 = 0, 1, 1, 2, 3
  ✓ fibonacciFunc 1 = 0
  ✓ mdcFunc 5 10 = 5
  ✓ mdcFunc 1 = 1
  ✓ quicksortFunc 5,4,3,1 = 1,3,4,5
  ✓ quicksortFunc 100,4,3,150 = 3,4,100,150

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
```

<img width="1056" height="523" alt="{7A95C91D-8731-442B-B063-DF741051C681}" src="https://github.com/user-attachments/assets/80b9a8b0-8d67-453a-b4e2-6afdbb8e122a" />
