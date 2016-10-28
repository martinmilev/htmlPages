function validate() {
	var firstname = document.getElementById("firstname");
    if (firstname.checkValidity() === false) {
        document.getElementById("firstname").setCustomValidity('Name must be in English, between 1 and 15 symbols.');
        return false;
    }

    var lasttname = document.getElementById("lasttname");
    if (lasttname.checkValidity() === false) {
        document.getElementById("lasttname").setCustomValidity('Name must be in English, between 1 and 15 symbols.');
        return false;
    }

    var egn = document.getElementById("egn");
    if (egn.checkValidity() === false) {
    	document.getElementById("egn").setCustomValidity('Enter correct EGN. Ten digits.');
        return false;
    }
    var age = document.getElementById("age");
    if (age.checkValidity() === false) {
    	document.getElementById("age").setCustomValidity('Please enter correct age between 18 and 118 years old.');
        return false;
    }

    var address = document.getElementById("address");
    if (address.checkValidity() === false) {
    	document.getElementById("address").setCustomValidity('Please enter correct address.');
        return false;
    }

    var password = document.getElementById("password");
    if (password.checkValidity() === false) {
    	document.getElementById("password").setCustomValidity('Password must be from 6 to 18 symbows.');
        return false;
    }

    var validatePassword = document.getElementById("validatePassword");
    if (password.value != validatePassword) {
    	document.getElementById("validatePassword").setCustomValidity('Passwords must match.');
        return false;
    }
}