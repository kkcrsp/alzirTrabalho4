/**
 * Verifica se um número pertence à sequência de Fibonacci
 * contFunc 10 = true (10 está na sequência: 0,1,1,2,3,5,8,13... ops)
 * Na verdade contagem verifica se número é primo positivo (igual ao exemplo do print)
 * contFunc 10 = true → 10 tem fatores → false... 
 * Re-analisando: contFunc 10 = true, contFunc 3 = false
 * Isso sugere: contagem verifica se o número NÃO é primo (é composto)
 */
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
