//form element events
// created by Aleksandr Tselikovskii

//remove warning if Name not empty
document.querySelector('#clientname').addEventListener("blur", function() {
    if (this.value !== "") {
        nameError.innerText = "";
    }
});

//remove error if Phone number not empty
document.querySelector('#phoneNumber').addEventListener("blur", function() {
    if (this.value !== "") {
        phoneNumberError.innerText = "";
    }
});

//remove error if Email not empty
document.querySelector('#clientemail').addEventListener("blur", function() {
    if (this.value !== "") {
        clientemailError.innerText = "";
    }
});

//remove error if City not empty
document.querySelector('#city').addEventListener("blur", function() {
    if (this.value !== "") {
        cityError.innerText = "";
    }
});

//remove warning if Province is selected
document.querySelector('#province').addEventListener("click", function() {
    if (gameForm.province.options.selectedIndex !== 0) {
        provinceError.innerText = "";
    }
});

//remove warning if Country is selected
document.querySelector('#country').addEventListener("click", function() {
    if (gameForm.country.options.selectedIndex !== 0) {
        countryError.innerText = "";
    }
});

//remove error if Subject not empty
document.querySelector('#subject').addEventListener("blur", function() {
    if (this.value !== "") {
        subjectError.innerText = "";
    }
});

// Add an event to reset all alarm messages
document.gameForm.addEventListener('reset', function() {
    alertMsgs = document.gameForm.querySelectorAll('.alert');
    for (let i of alertMsgs) {
        if (i.innerText !== '') {
            i.innerText = '';
        }
    }
});

// Add an event to the form on submit to validate input
document.gameForm.addEventListener("submit", validate);
