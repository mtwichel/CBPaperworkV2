// JavaScript Document
$('.overshort').on('input', function() {
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

$('.deposit').on('input', function(){
	"use strict";
	var headings = ["dHun", "dFif", "dTwe", "dTen", "dFiv", "dTwo", "dOne", "dDoc", "dFic", "dQua", "dDim", "dNic", "dPen"];
	var values = [100, 50, 20, 10, 5, 2, 1, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
	var total = 0;
	
	
	for(var i=0; i<headings.length; i++){
		var temp = $('#'.concat(headings[i])).val();
		if(temp === ""){
			//field empty
			total += 0;
		}else{
			total += (values[i] * temp);
		}
		
	}
	$('#total-deposit').text("Total Deposit: $ ".concat(round(total)));
});

$('.bankbag').on('input', function(){
	"use strict";
	var headings = ["bbHun", "bbFif", "bbTwe", "bbTen", "bbFiv", "bbOne", "bbQua", "bbDim", "bbNic", "bbPen"];
	var values = [100, 50, 20, 10, 5, 1, 10, 5, 2, 1];
	var total = 0;
	
	
	for(var i=0; i<headings.length; i++){
		var temp = $('#'.concat(headings[i])).val();
		if(temp === ""){
			//field empty
			total += 0;
		}else{
			total += (values[i] * temp);
		}
		
		if(i===9){
			if((temp%2)===0){
				$('#need-quarter-message').hide();
			}else{
				$('#need-quarter-message').css('display', 'table-cell');
			}
		}
	}
	$('#total-bankbag').text("Total Bank Bag: $ ".concat(round(total)));
});


  function round(value) {
	 "use strict";
	  return parseFloat(Math.round(value * 100) / 100).toFixed(2);
  }