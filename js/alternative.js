// JavaScript Document
$(".currency").on("input", function(){
		"use strict";
    	var valid = /^\d{0,6}(\.\d{0,2})?$/.test(this.value),
        val = this.value;
    
    if(!valid){
       this.value = val.substring(0, val.length - 1);
    }
});

$(".number").on("input", function(){
		"use strict";
    	var valid = /^\d{0,6}?$/.test(this.value),
        val = this.value;
    
    if(!valid){
       this.value = val.substring(0, val.length - 1);
    }
});
