//a
/* const inputTextSizeRangeRef = document.querySelector('#font-size-control');
const spanOutputTextValueSize = document.querySelector('#text'); */

//b
const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text'),
};

//exampel-1a
/* inputTextSizeRangeRef.addEventListener('input', () => {
    spanOutputTextValueSize.style.fontSize = `${inputTextSizeRangeRef.value}px`;
}); */

//exampel-2a
/* inputTextSizeRangeRef.addEventListener('input', event => {
    spanOutputTextValueSize.style.fontSize = `${event.currentTarget.value}px`;
}); */

//exampel-3b
refs.input.addEventListener('input', onInputTextSizeChange);

function onInputTextSizeChange(event) {
    refs.output.style.fontSize = `${event.currentTarget.value}px`;
}
