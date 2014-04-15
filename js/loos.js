$(document).ready(function() {

var bestTeams = ["Notre Dame", "Southern California", "Alabama", "Nebraska", "Texas" ];

var teamTemplate = function(data){
	var markup = "";
	var i;

	for ( i = 0; i < data.length; i++) {
		markup += "<li>" + data[i] + "</li>";
		
	}

	return markup;
};

$(".teams").append(teamTemplate(bestTeams));

});



// tried and failed:
//var inchArray = [0, 30, 48, 60, 80, 96 ];

//var convertTemplate = function(data){
//    var markup = "";
//    var i;  
    
//    for ( i = 0; i<inchArray.length ; i++ ) {
//        markup +="<div class='feet'>" + i + "</div><div class='inches'>" + (i / 12) + "</div>";
//	}
//	
//	//console.log (markup);
//	return markup;
//};

//$(".feet").append(convertTemplate(inchArray));




//inchesTemplate(someArray);
//var someArray = ["hello", "mike"];

//$("body").append(inchesTemplate(someArray));


