const inputSymbolsRef = document.querySelector('#validation-input');

//exmpl-1
/* inputSymbolsRef.addEventListener('blur', () => {
    if (inputSymbolsRef.value.length == inputSymbolsRef.getAttribute('data-length')) {
        inputSymbolsRef.classList.add('valid');
        inputSymbolsRef.classList.remove('invalid');
    } else {
        inputSymbolsRef.classList.add('invalid');
        inputSymbolsRef.classList.remove('valid');
    }
}); */

//exmpl-2
/* inputSymbolsRef.addEventListener('blur', event => {
    if (event.currentTarget.value.length == inputSymbolsRef.getAttribute('data-length')) {
        inputSymbolsRef.classList.add('valid');
        inputSymbolsRef.classList.remove('invalid');
    } else {
        inputSymbolsRef.classList.add('invalid');
        inputSymbolsRef.classList.remove('valid');
    }
}); */

//exmpl-3
inputSymbolsRef.addEventListener('blur', onInputCheckNumSymbols);

function onInputCheckNumSymbols(event) {
    if (event.currentTarget.value.length == inputSymbolsRef.getAttribute('data-length')) {
        inputSymbolsRef.classList.add('valid');
        inputSymbolsRef.classList.remove('invalid');
    } else {
        inputSymbolsRef.classList.add('invalid');
        inputSymbolsRef.classList.remove('valid');
    }
}
