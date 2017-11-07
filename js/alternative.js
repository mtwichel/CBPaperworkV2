// JavaScript Document
$(".currency").on("input", function(){
		"use strict";
    var valid = /^\d{0,6}(\.\d{0,2})?$/.test(this.value),
        val = this.value;
    
    if(!valid){
       this.value = val.substring(0, val.length - 1);
    }
});

$('.currency').on('input', function() {
    "use strict";
	var gs = 0.0; var gcs = 0.0; var gcr = 0.0;
	
	if($('#gs').val()===""){
		gs = 0.0;
	}else{
		gs = parseFloat($('#gs').val());
		
	}
	
	if($('#gcs').val()===""){
		gcs = 0.0;
	}else{
		gcs = parseFloat($('#gcs').val());
	}
	
	if($('#gcr').val()===""){
		gcr = 0.0;
	}else{
		gcr = parseFloat($('#gcr').val());
	}
	 
	 
	 
	var netGross = gs + gcs - gcr;
	console.log(gcs);
	$('#net-gross').text("$ ".concat(round(netGross)));
});


  function round(value) {
	 "use strict";
	  return (Math.round(value*100))/100;
  }