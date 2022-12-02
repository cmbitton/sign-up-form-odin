
function checkPasswordsMatch() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', (e) => {
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirm-password').value;
        if (password !== confirmPassword) {
            e.preventDefault();
            console.log('nomatch');
            const error = document.querySelector(".error-message");
            error.textContent = "Passwords do not match";
            clearErrorMessage();
        }
        else if ((password && confirmPassword) && (password === confirmPassword)) {
            console.log('match');
            form.submit();
        }
    })
}

function clearErrorMessage(){
    const inputs = document.querySelectorAll('input[type="password"]')
    for (const input of inputs) {
        input.addEventListener('focus', () => {
            const error = document.querySelector(".error-message");
            error.textContent = "";
        })
    }
}
checkPasswordsMatch();