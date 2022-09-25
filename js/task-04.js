const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const spanResultRef = document.querySelector('#value');

let counterValue = Number(spanResultRef.textContent);

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    spanResultRef.textContent = counterValue;
});

decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1;
    spanResultRef.textContent = counterValue;
});
