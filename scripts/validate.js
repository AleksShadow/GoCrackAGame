//validate module
// created by Aleksandr Tselikovskii

function validate(events) {

    events.preventDefault();

    var valid = true;

    //display warning if Name is not entered
    if (gameForm.clientname.value === "") {
        document.querySelector('#nameError').innerText = "...Please enter the name...";
        valid = false;
    }

    //display warning if Phone number is not entered
    if (gameForm.phoneNumber.value == "") {
        document.querySelector('#phoneNumberError').innerText = "...Please enter the phone number...";
        valid = false;
    }

    //display warning if email is not entered
    if (gameForm.clientemail.value == "") {
        document.querySelector('#clientemailError').innerText = "...Please enter the email...";
        valid = false;
    }

    //display warning if City is not entered
    if (gameForm.city.value == "") {
        document.querySelector('#cityError').innerText = "...Please enter the city...";
        valid = false;
    }

    //display warning if Province is not selected
    if (gameForm.province.options.selectedIndex === 0) {
        valid = false;
        document.querySelector('#provinceError').innerText = "...Please select the Province...";
    }

    //display warning if Country is not selected
    if (gameForm.country.options.selectedIndex === 0) {
        valid = false;
        document.querySelector('#countryError').innerText = "...Please select the country...";
    }

    //display warning if Subject is not selected
    if (gameForm.subject.value == "") {
        valid = false;
        document.querySelector('#subjectError').innerText = "...Please select the subject...";
    }

    if (valid) {
        alert("...Thank you...");
    }
    return valid;
};