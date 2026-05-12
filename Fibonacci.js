function fibonacci(n) {
    if (n <= 1) {
        console.log("N deve ser maior que 1.");
        return;
    }

    let sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia;
}

// Exemplo de uso:
let N = 10;
console.log(`Os ${N} primeiros termos da sequência de Fibonacci são:`);
console.log(fibonacci(N));