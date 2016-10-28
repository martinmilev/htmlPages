function isEmpty(field){
	var value = document.getElementById(field).value;
    if (value.length < 1){
        alert (field.concat("is empty!"));
    }
}