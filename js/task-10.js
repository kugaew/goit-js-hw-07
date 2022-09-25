const refs = {
    divBox: document.querySelector('div#boxes'),
    inputNumber: document.querySelector('input[type="number"]'),
    btnCreate: document.querySelector('button[data-create]'),
    btnClear: document.querySelector('button[data-destroy]'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnClear.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = refs.inputNumber.value;

    if (amount < 1) {
        alert('Input field is epty or equals 0');
        return;
    }
    destroyBoxes();

    const divArr = [];

    for (
        let i = 0, divWidth = 30, divHeight = 30;
        i < amount;
        i += 1, divWidth += 10, divHeight += 10
    ) {
        const divBgColor = getRandomHexColor();
        const divEl = document.createElement('div');

        divEl.style.width = `${divWidth}px`;
        divEl.style.height = `${divHeight}px`;
        divEl.style.backgroundColor = divBgColor;

        divArr.push(divEl);
    }

    refs.divBox.append(...divArr);
}

function destroyBoxes() {
    const numOfDiv = refs.divBox.children.length;

    refs.inputNumber.value = '';

    for (let i = 0; i < numOfDiv; i += 1) {
        refs.divBox.firstChild.remove();
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
