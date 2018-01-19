function showClass(className){
	var tempdict = dict[className];
	console.log(tempdict);
	document.getElementById("classInfos").innerHTML = "<div class='row'><div class='col-sm-2'><p>Class</p></div><div class='col-sm-2'><p>Location</p></div><div class='col-sm-2'><p>Instructor</p></div><div class='col-sm-2'><p>Start Time</p></div><div class='col-sm-2'><p>End Time</p></div><div class='col-sm-2'><p>Day(s)</p></div>";
	for(var key in tempdict){

		document.getElementById("classInfos").innerHTML += "<div class='row'><p>" + key + "-" + tempdict[key]["name"] +"</p></div>";
		for(var i =0; i < tempdict[key]["section"].length;i++){
			var sec=tempdict[key]["section"][i];
			var location=tempdict[key]["location"][i];
			var instructor=tempdict[key]["instructor"][i];
			var Stime=tempdict[key]["time"][i][0];
			var Etime=tempdict[key]["time"][i][1];
			var day = tempdict[key]["day"][i];
			document.getElementById("classInfos").innerHTML += "<div class='row'> <div class='col-sm-2'><p>" + sec + "</p></div><div class='col-sm-2'><p>" + location + "</p></div><div class='col-sm-2'><p>" + instructor + "</p></div><div class='col-sm-2'><p>" + Stime + "</p></div><div class='col-sm-2'><p>" + Etime + "</p></div><div class='col-sm-2'><p>" + day + "</p></div></div>";

			}

		
		var discussion=tempdict[key]["discussion"];
		if(discussion.length!==0){
			for(var j =0; j < discussion["section"].length;j++){
				var sec=discussion["section"][j];
				var location=discussion["location"][j];
				var instructor=discussion["instructor"][j];
				var Stime=discussion["time"][j][0];
				var Etime=discussion["time"][j][1];
				var day = discussion["day"][j];
				document.getElementById("classInfos").innerHTML += "<div class='row'> <div class='col-sm-2'><p>" + sec + "</p></div><div class='col-sm-2'><p>" + location + "</p></div><div class='col-sm-2'><p>" + instructor + "</p></div><div class='col-sm-2'><p>" + Stime + "</p></div><div class='col-sm-2'><p>" + Etime + "</p></div><div class='col-sm-2'><p>" + day + "</p></div></div>";
		}

		}
	}