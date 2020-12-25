$(document).ready(function () {

	var bestTeams = ["Notre Dame", "Southern California", "Alabama", "Nebraska", "Texas"];

	var teamTemplate = function (data) {
		var markup = "";
		for (dta of data) {
			markup += "<li>" + dta + "</li>";

		}

		return markup;
	};

	$(".teams").append(teamTemplate(bestTeams));


	//second loop | favorite bands with active a tag

	var bandLinks = ["<a href=\"http://slimcessnasautoclub.com\">Slim Cessna's Auto Club</a>", "<a href=\"http://www.thosepoorbastards.com\">Those Poor Bastards</a>", "<a href=\"http://www.handsomefamily.com\">The Handsome Family</a>"];

	var bandsTemplate = function (favbands) {

		var markup = "";

		for (fbands of favbands) {
			markup += "<li>" + fbands + "</li>";
		}

		return markup;

	};

	$(".bands").append(bandsTemplate(bandLinks));

	//third loop below ; table instead of ul-li

	var secEast = ["Georgia", "South Carolina", "Vanderbilt", "Florida", "Tennessee", "Missouri", "Kentucky",];

	var secTemplate = function (secdata) {
		var markup = "";
		for (sdata of secdata) {
			markup += "<tr><td>" + sdata + "</td></tr>";
		}

		return markup;
	};

	$(".sec").append(secTemplate(secEast));



	//JQ each



	$(".each").each(function (index) {

		$(this).css("border", "10px solid black");
	});

});




// tried and failed (conversion table):
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







