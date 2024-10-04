// Función que calcula la diferencia simétrica entre dos arrays
const diff = (arr1, arr2) => [
    // Filtra los elementos de arr1 que no están en arr2
    ...arr1.filter(e => !arr2.includes(e)),
    // Filtra los elementos de arr2 que no están en arr1
    ...arr2.filter(e => !arr1.includes(e))
];

// Función que calcula la diferencia simétrica entre múltiples arrays
const sym = (...args) => [
    // Reduce los arrays usando la función diff para encontrar la diferencia simétrica
    ...new Set(args.reduce(diff))
];

// Ejemplo de uso
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// Salida: [1, 4, 5]
