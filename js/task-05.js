const inputValueRef = document.querySelector('#name-input');
const spanOutputResultRef = document.querySelector('#name-output');

//exmpl-1
/* inputValueRef.addEventListener('input', () => {
    spanOutputResultRef.textContent =
        inputValueRef.value.length != 0 ? inputValueRef.value : 'Anonymous';
}); */

//exmpl-2
/* inputValueRef.addEventListener('input', event => {
    spanOutputResultRef.textContent =
        event.currentTarget.value.length != 0 ? event.currentTarget.value : 'Anonymous';
}); */

//exmpl-3
inputValueRef.addEventListener('input', onChangeSpanValue);

function onChangeSpanValue(event) {
    spanOutputResultRef.textContent =
        event.currentTarget.value.length != 0 ? event.currentTarget.value : 'Anonymous';
}
