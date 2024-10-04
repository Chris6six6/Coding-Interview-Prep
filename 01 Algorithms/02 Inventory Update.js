function updateInventory(arr1, arr2) {
    // Crear un Map a partir del inventario actual
    const inventoryMap = new Map(arr1.map(([quantity, item]) => [item, quantity]));

    // Actualizar el Map con los elementos del nuevo inventario
    arr2.forEach(([quantity, item]) => {
        inventoryMap.set(item, (inventoryMap.get(item) || 0) + quantity);
    });

    // Convertir el Map a un array y ordenarlo alfabéticamente
    return Array.from(inventoryMap)
        .map(([item, quantity]) => [quantity, item])
        .sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);