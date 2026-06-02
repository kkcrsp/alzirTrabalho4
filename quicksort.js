/**
 * Ordena um array de números usando o algoritmo Quicksort
 */
function quicksort(array) {
    if (!Array.isArray(array)) {
        throw new Error('O parâmetro deve ser um array');
    }

    if (array.length <= 1) {
        return array;
    }

    const pivo = array[0];
    const menores = [];
    const maiores = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] <= pivo) {
            menores.push(array[i]);
        } else {
            maiores.push(array[i]);
        }
    }

    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

module.exports = quicksort;
