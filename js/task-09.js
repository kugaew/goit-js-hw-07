const refs = {
    btnEl: document.querySelector('.change-color'),
    spanEl: document.querySelector('.color'),
    bodyEl: document.querySelector('body'),
};

refs.btnEl.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn() {
    const genColor = getRandomHexColor();

    refs.bodyEl.style.backgroundColor = genColor;
    refs.spanEl.textContent = genColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
