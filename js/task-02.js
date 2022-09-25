const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

//example-1
/* const itemsRef = ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    itemRef.classList = 'item';
    return itemRef;
});

listRef.append(...itemsRef); */

//example-2
const createItemsStructure = parametrs => {
    return parametrs.map(ingredient => {
        const itemRef = document.createElement('li');
        itemRef.textContent = ingredient;
        itemRef.classList = 'item';
        return itemRef;
    });
};

listRef.append(...createItemsStructure(ingredients));
