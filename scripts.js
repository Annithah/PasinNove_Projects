const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy'); 

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-`~[]\\{}|;\':",./<>?';

lengthValue.textContent = lengthInput.value;

function generatePassword() {
    const length = parseInt(lengthInput.value);
    let chars = '';

    if (uppercaseCheck.checked) chars += uppercaseChars;
    if (lowercaseCheck.checked) chars += lowercaseChars;
    if (numbersCheck.checked) chars += numberChars;
    if (symbolsCheck.checked) chars += symbolChars;

    if (chars.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    passwordDisplay.value = password;
}

function copyToClipboard() {
    if (!passwordDisplay.value || passwordDisplay.value === "generated password") {
        alert("No password generated to copy!");
        return;
    }

    navigator.clipboard.writeText(passwordDisplay.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy password:", err);
        });
}


copyBtn.addEventListener('click', copyToClipboard);
lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});
generateBtn.addEventListener('click', generatePassword);
