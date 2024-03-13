const criptografarTexto = texto => texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
const descriptografarTexto = texto => texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

const errorMessage = document.getElementById('errorMessage');
const outputText = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');

document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === '') {
        errorMessage.textContent = 'Erro: O campo de texto não pode ficar em branco.';
        outputText.value = '';
        copyButton.style.display = 'none';
    } else if (/[^a-z, ]/.test(inputText)) {
        errorMessage.textContent = 'Erro: Apenas letras minúsculas e sem acento são permitidas.';
        outputText.value = '';
        copyButton.style.display = 'none';
    } else {
        errorMessage.textContent = '';
        const encryptedText = criptografarTexto(inputText);
        outputText.value = encryptedText;
        copyButton.style.display = 'block';
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === '') {
        errorMessage.textContent = 'Erro: O campo de texto não pode ficar em branco.';
        outputText.value = '';
        copyButton.style.display = 'none';
    } else if (/[^a-z, ]/.test(inputText)) {
        errorMessage.textContent = 'Erro: Apenas letras minúsculas e sem acento são permitidas.';
        outputText.value = '';
        copyButton.style.display = 'none';
    } else {
        errorMessage.textContent = '';
        const decryptedText = descriptografarTexto(inputText);
        outputText.value = decryptedText;
        copyButton.style.display = 'none';
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    outputText.select();
    document.execCommand('copy');
});