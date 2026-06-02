function primo(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw new Error('O parâmetro deve ser um número inteiro');
    }

    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = primo;
