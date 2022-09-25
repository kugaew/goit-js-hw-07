const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const listRef = document.querySelector('.gallery');

//example-1
/* const imagesRef = images
    .map(({ url, alt }) => `<li><img alt=${alt} src=${url}></img></li>`)
    .join('');

listRef.insertAdjacentHTML('afterbegin', imagesRef); */

//example-2
function createImageItemsStucture(parametrs) {
    return parametrs.map(({ url, alt }) => `<li><img alt=${alt} src=${url}></img></li>`).join('');
}

listRef.insertAdjacentHTML('afterbegin', createImageItemsStucture(images));
