// JavaScript Document

var deposit = 0; var netGross; var netSales; var overShort;



$('.overshort').on('input', calculateOverShort);
$('.deposit').on('input', calculateDeposit);
$('.bankbag').on('input', calculateBankBag);
$('.till0, .till1, .till2').on('input', function(){
	'use strict';
	if(this.classList.contains('till0')){
		calculateTill(0);
	}else if(this.classList.contains('till1')){
		calculateTill(1);
	}if(this.classList.contains('till2')){
		calculateTill(2);
	}
});

function calculateOverShort(){

	"use strict";
	var headings = ["gs", "gcs", "gcr", "d", "v", "visa", "mc", "amex", "disc", "pdout"];
	var finals = [];
	deposit = 0;

	for(var i=0; i<headings.length; i++){
		var temp = $('#'.concat(headings[i])).val();
		if(temp === ""){
			finals[i] = 0;
		}else{
			finals[i] = 0;
		}

	}

	$('#deposit').text("$ ".concat(round(deposit)));
	$('#total-deposit').text("Total Deposit: $ ".concat(round(deposit)));
	calculateOverShort();
}

function calculateOverShort() {
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


	netGross = gs + gcs - gcr;
	netSales = netGross - d - v;
	overShort = netSales - visa - mc - amex - disc - pdout - deposit;

	$('#net-gross').text("$ ".concat(round(netGross)));
	$('#net-sales').text("$ ".concat(round(netSales)));
	$('#over-short').text("$ ".concat(round(overShort)));

}
function calculateDeposit(){

	"use strict";
	var headings = ["dHun", "dFif", "dTwe", "dTen", "dFiv", "dTwo", "dOne", "dDoc", "dFic", "dQua", "dDim", "dNic", "dPen"];
	var values = [100, 50, 20, 10, 5, 2, 1, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
	deposit = 0;

	for(var i=0; i<headings.length; i++){
		var temp = $('#'.concat(headings[i])).val();
		if(temp === ""){
			//field empty
			deposit += 0;
		}else{
			deposit += (values[i] * temp);
		}

	}

	$('#deposit').text("$ ".concat(round(deposit)));
	$('#total-deposit').text("Total Deposit: $ ".concat(round(deposit)));
	calculateOverShort();
}
function calculateBankBag(){
	"use strict";
	var headings = ["bbTwe", "bbTen", "bbFiv", "bbOne", "bbQua", "bbDim", "bbNic", "bbPen"];
	var values = [20, 10, 5, 1, 10, 5, 2, 0];
	var total = 0;


	for(var i=0; i<headings.length; i++){
		var temp = $('#'.concat(headings[i])).val();
		if(temp === ""){
			//field empty
			total += 0;
		}else{
			total += (values[i] * temp);
		}

		if(i===(headings.length -1)){	//if pennies field
			if((temp%2)===0){
				//pennies even
				$('#need-quarter-message').hide();
				total += (temp/2);
			}else{
				//pennies odd
				total += ((temp-1)/2) + 1;
				$('#need-quarter-message').css('display', 'table-cell');
			}
		}
	}
	$('#total-bankbag').text("Total Bank Bag: $ ".concat(round(total)));
}
function calculateTill(tillNum){
	"use strict";
	var headings = ["tTwe".concat(tillNum),
					"tTen".concat(tillNum),
					"tFiv".concat(tillNum),
					"tOne".concat(tillNum),
					"tQua".concat(tillNum),
					"tDim".concat(tillNum),
					"tNic".concat(tillNum),
					"tPen".concat(tillNum)];
	var values = [20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
	var total = 0;

	for(var i=0; i<headings.length; i++){
		var temp = $('#'.concat(headings[i])).val();
		if(total === ""){
			//field empty
			total += 0;
		}else{
			total += (values[i] * temp);
		}

	}

	$('#till-header'.concat(tillNum)).text("Till " + (tillNum+1) + " Total: $" + round(total));
}

  function round(value) {
	 "use strict";
	  return parseFloat(Math.round(value * 100) / 100).toFixed(2);
  }
