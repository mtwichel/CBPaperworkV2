// JavaScript Document
$("#gs").on("keyup", function(){
		"use strict";
    var valid = /^\d{0,6}(\.\d{0,2})?$/.test(this.value),
        val = this.value;
    
    if(!valid){
        console.log("Invalid input!");
        this.value = val.substring(0, val.length - 1);
    }
});

$('#gs').on('input', function() {
    "use strict";
	var val = $('#gs').val();
	$('#total').text(val);
});