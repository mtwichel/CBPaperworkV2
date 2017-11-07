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
	var gs; var gcs; var gcr; var d; var v; var visa; var mc; var amex; var disc; var pdout;
	
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
	
	if($('#d').val()===""){
		d = 0.0;
	}else{
		d = parseFloat($('#d').val());
	}
	
	if($('#v').val()===""){
		v = 0.0;
	}else{
		v = parseFloat($('#v').val());
	}
	
	if($('#visa').val()===""){
		visa = 0.0;
	}else{
		visa = parseFloat($('#visa').val());
	}
	
	if($('#mc').val()===""){
		mc = 0.0;
	}else{
		mc = parseFloat($('#mc').val());
	}
	
	if($('#amex').val()===""){
		amex = 0.0;
	}else{
		amex = parseFloat($('#amex').val());
	}
	
	if($('#disc').val()===""){
		disc = 0.0;
	}else{
		disc = parseFloat($('#disc').val());
	}
	
	if($('#pdout').val()===""){
		pdout = 0.0;
	}else{
		pdout = parseFloat($('#pdout').val());
	}
	
	 
	var netGross = gs + gcs - gcr;
	var netSales = netGross - d - v;
	var overShort = netSales - visa - mc - amex - disc - pdout;
	
	console.log(gcs);
	$('#net-gross').text("$ ".concat(round(netGross)));
	$('#net-sales').text("$ ".concat(round(netSales)));
	$('#over-short').text("$ ".concat(round(overShort)));

});


  function round(value) {
	 "use strict";
	  return (Math.round(value*100))/100;
  }