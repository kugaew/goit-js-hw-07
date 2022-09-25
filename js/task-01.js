'use strict';

const itemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsRef.length}`);

//example-1
console.log('Example-1');
for (let i = 0; i < itemsRef.length; i += 1) {
    console.log(
        `Category: ${itemsRef[i].children[0].textContent}\nElements: ${itemsRef[i].children[1].children.length}`
    );
}

//example-2
console.log('Example-2');
itemsRef.forEach(item => {
    console.log(
        `Category: ${item.children[0].textContent}\nElements: ${item.children[1].children.length}`
    );
});

//example-3
console.log('Example-3');
itemsRef.forEach(item => {
    console.log(
        `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
    );
});
