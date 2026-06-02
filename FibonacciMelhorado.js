function fibonacci(quantidadeNumeros) {
    let n1 = 0;
    let n2 = 1;

    if (quantidadeNumeros <= 0) {
        return [];
    }

    if (quantidadeNumeros === 1) {
        return [0];
    }

    if (quantidadeNumeros === 2) {
        return [0, 1];
    }

    const numeros = [0, 1];

    for (let i = 2; i < quantidadeNumeros; i++) {
        const sucessor = n1 + n2;
        numeros.push(sucessor);
        n1 = n2;
        n2 = sucessor;
    }

    return numeros;
}

module.exports = fibonacci;