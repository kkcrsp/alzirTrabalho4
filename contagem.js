
function contagem(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw new Error('O parâmetro deve ser um número inteiro');
    }

    if (numero < 2) {
        return false;
    }

    // Retorna true se o número for composto (não primo)
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return true;
        }
    }

    return false;
}

module.exports = contagem;
