var subjectAreas = ['Aerospace Studies (AERO ST)', 'African American Studies (AF AMER)', 'African Studies (AFRC ST)', 'Afrikaans (AFRKAAN)', 'American Indian Studies (AM IND)', 'American Sign Language (ASL)', 'Ancient Near East (AN N EA)', 'Anesthesiology (ANES)', 'Anthropology (ANTHRO)', 'Applied Linguistics (APPLING)', 'Arabic', 'Archaeology (ARCHEOL)', 'Architecture and Urban Design (ARCH&UD)', 'Armenian (ARMENIA)', 'Art', 'Art History (ART HIS)', 'Arts and Architecture (ART&ARC)', 'Arts Education (ARTS ED)', 'Asian', 'Asian American Studies (ASIA AM)', 'Astronomy (ASTR)', 'Atmospheric and Oceanic Sciences (A&O SCI)', 'Bioengineering (BIOENGR)', 'Bioinformatics (Graduate) (BIOINFO)', 'Biological Chemistry (BIOL CH)', 'Biomathematics (BIOMATH)', 'Biomedical Research (BMD RES)', 'Biostatistics (BIOSTAT)', 'Central and East European Studies (C&EE ST)', 'Chemical Engineering (CH ENGR)', 'Chemistry and Biochemistry (CHEM)', 'Chicana and Chicano Studies (CHICANO)', 'Chinese (CHIN)', 'Civic Engagement (CIVIC)', 'Civil and Environmental Engineering (C&EE)', 'Classics (CLASSIC)', 'Clusters (CLUSTER)', 'Communication (COMM)', 'Community Health Sciences (COM HLT)', 'Comparative Literature (COM LIT)', 'Computational and Systems Biology (C&S BIO)', 'Computer Science (COM SCI)', 'Conservation of Archaeological and Ethnographic Materials (CAEM)', 'Dance', 'Design / Media Arts (DESMA)', 'Digital Humanities (DGT HUM)', 'Disability Studies (DIS STD)', 'Dutch', 'Earth  Planetary  and Space Sciences (EPS SCI)', 'Ecology and Evolutionary Biology (EE BIOL)', 'Economics (ECON)', 'Education (EDUC)', 'Electrical and Computer Engineering (EC ENGR)', 'Electrical Engineering (EL ENGR)', 'Engineering (ENGR)', 'English (ENGL)', 'English as A Second Language (ESL)', 'English Composition (ENGCOMP)', 'Environment (ENVIRON)', 'Environmental Health Sciences (ENV HLT)', 'Epidemiology (EPIDEM)', 'Ethnomusicology (ETHNMUS)', 'Filipino (FILIPNO)', 'Film and Television (FILM TV)', 'French (FRNCH)', 'Gender Studies (GENDER)', 'Geography (GEOG)', 'German', 'Gerontology (GRNTLGY)', 'Global Health (GLB HLT)', 'Global Studies (GLBL ST)', 'Graduate Student Professional Development (GRAD PD)', 'Greek', 'Health Policy and Management (HLT POL)', 'Hebrew', 'Hindi-Urdu (HIN-URD)', 'History (HIST)', 'Honors Collegium (HNRS)', 'Human Genetics (HUM GEN)', 'Hungarian (HNGAR)', 'Indigenous Languages of the Americas (IL AMER)', 'Indo-European Studies (I E STD)', 'Indonesian (INDO)', 'Information Studies (INF STD)', 'International and Area Studies (I A STD)', 'International Development Studies (INTL DV)', 'Iranian', 'Islamic Studies (ISLM ST)', 'Italian', 'Japanese (JAPAN)', 'Jewish Studies (JEWISH)', 'Korean (KOREA)', 'Labor and Workplace Studies (LBR&WS)', 'Latin', 'Latin American Studies (LATN AM)', 'Lesbian  Gay  Bisexual  Transgender  and Queer Studies (LGBTQS)', 'Life Sciences (LIFESCI)', 'Linguistics (LING)', 'Management (MGMT)', 'Management-Master of Financial Engineering (MGMTMFE)', 'Management-Master of Science in Business Analytics (MGMTMSA)', 'Management-PhD (MGMTPHD)', 'Materials Science Engineering (MAT SCI)', 'Mathematics (MATH)', 'Mechanical Aerospace Engineering (MECH&AE)', 'Medical History (MED HIS)', 'Medicine (MED)', 'Microbiology, Immunology, and Molecular Genetics (MIMG)', 'Middle Eastern Studies (M E STD)', 'Military Science (MIL SCI)', 'Molecular and Medical Pharmacology (M PHARM)', 'Molecular Biology (MOL BIO)', 'Molecular Toxicology (MOL TOX)', 'Molecular, Cell, and Developmental Biology (MCD BIO)', 'Molecular, Cellular, and Integrative Physiology (MC&IP)', 'Music (MUSC)', 'Music History (MSC HST)', 'Music Industry (MSC IND)', 'Musicology (MUSCLG)', 'Naval Science (NAV SCI)', 'Near Eastern Languages (NR EAST)', 'Neurobiology (NEURBIO)', 'Neurology (NEURLGY)', 'Neuroscience (Graduate) (NEURO)', 'Neuroscience (NEUROSC)', 'Nursing', 'Obstetrics and Gynecology (OBGYN)', 'Oral Biology (ORL BIO)', 'Pathology and Laboratory Medicine (PATH)', 'Philosophy (PHILOS)', 'Physics', 'Physics and Biology in Medicine (PBMED)', 'Physiological Science (PHYSCI)', 'Physiology (PHYSIOL)', 'Polish (POLSH)', 'Political Science (POL SCI)', 'Portuguese (PORTGSE)', 'Program in Computing (COMPTNG)', 'Psychiatry and Biobehavioral Sciences (PSYCTRY)', 'Psychology (PSYCH)', 'Public Health (PUB HLT)', 'Public Policy (PUB PLC)', 'Religion, Study of (RELIGN)', 'Romanian (ROMANIA)', 'Russian (RUSSN)', 'Scandinavian (SCAND)', 'Science Education (SCI EDU)', 'Semitic', 'Serbian/Croation (SRB CRO)', 'Slavic (SLAVC)', 'Social Science (SOC SC)', 'Social Thought (SOC THT)', 'Social Welfare (SOC WLF)', 'Society and Genetics (SOC GEN)', 'Sociology (SOCIOL)', 'South Asian (S ASIAN)', 'Spanish (SPAN)', 'Statistics (STATS)', 'Surgery', 'Swahili', 'Thai', 'Theater', 'Turkic Languages (TURKIC)', 'University Studies (UNIV ST)', 'Urban Planning (URBN PL)', 'Vietnamese (VIETMSE)', 'World Arts and Cultlures (WL ARTS)', 'Yiddish (YIDDSH)'];
var subjectTag = ['Aerospace+Studies+(AERO+ST)&subj=AERO+ST','African+American+Studies+(AF+AMER)&subj=AF+AMER','African+Studies+(AFRC+ST)&subj=AFRC+ST','Afrikaans+(AFRKAAN)&subj=AFRKAAN','American+Indian+Studies+(AM+IND)&subj=AM+IND','American+Sign+Language+(ASL)&subj=ASL','Ancient+Near+East+(AN+N+EA)&subj=AN+N+EA','Anesthesiology+(ANES)&subj=ANES','Anthropology+(ANTHRO)&subj=ANTHRO','Applied+Linguistics+(APPLING)&subj=APPLING','Arabic&subj=ARABIC','Archaeology+(ARCHEOL)&subj=ARCHEOL','Architecture+and+Urban+Design+(ARCH%26UD)&subj=ARCH%26UD','Armenian+(ARMENIA)&subj=ARMENIA','Art&subj=ART','Art+History+(ART+HIS)&subj=ART+HIS','Arts+and+Architecture+(ART%26ARC)&subj=ART%26ARC','Arts+Education+(ARTS+ED)&subj=ARTS+ED','Asian&subj=ASIAN','Asian+American+Studies+(ASIA+AM)&subj=ASIA+AM','Astronomy+(ASTR)&subj=ASTR','Atmospheric+and+Oceanic+Sciences+(A%26O+SCI)&subj=A%26O+SCI','Bioengineering+(BIOENGR)&subj=BIOENGR','Bioinformatics+(Graduate)+(BIOINFO)&subj=BIOINFO','Biological+Chemistry+(BIOL+CH)&subj=BIOL+CH','Biomathematics+(BIOMATH)&subj=BIOMATH','Biomedical+Research+(BMD+RES)&subj=BMD+RES','Biostatistics+(BIOSTAT)&subj=BIOSTAT','Central+and+East+European+Studies+(C%26EE+ST)&subj=C%26EE+ST','Chemical+Engineering+(CH+ENGR)&subj=CH+ENGR','Chemistry+and+Biochemistry+(CHEM)&subj=CHEM','Chicana+and+Chicano+Studies+(CHICANO)&subj=CHICANO','Chinese+(CHIN)&subj=CHIN','Civic+Engagement+(CIVIC)&subj=CIVIC','Civil+and+Environmental+Engineering+(C%26EE)&subj=C%26EE','Classics+(CLASSIC)&subj=CLASSIC','Clusters+(CLUSTER)&subj=CLUSTER','Communication+(COMM)&subj=COMM','Community+Health+Sciences+(COM+HLT)&subj=COM+HLT','Comparative+Literature+(COM+LIT)&subj=COM+LIT','Computational+and+Systems+Biology+(C%26S+BIO)&subj=C%26S+BIO','Computer+Science+(COM+SCI)&subj=COM+SCI','Conservation+of+Archaeological+and+Ethnographic+Materials+(CAEM)&subj=CAEM','Dance&subj=DANCE','Design+/+Media+Arts+(DESMA)&subj=DESMA','Digital+Humanities+(DGT+HUM)&subj=DGT+HUM','Disability+Studies+(DIS+STD)&subj=DIS+STD','Dutch&subj=DUTCH','Earth++Planetary++and+Space+Sciences+(EPS+SCI)&subj=EPS+SCI','Ecology+and+Evolutionary+Biology+(EE+BIOL)&subj=EE+BIOL','Economics+(ECON)&subj=ECON','Education+(EDUC)&subj=EDUC','Electrical+and+Computer+Engineering+(EC+ENGR)&subj=EC+ENGR','Electrical+Engineering+(EL+ENGR)&subj=EL+ENGR','Engineering+(ENGR)&subj=ENGR','English+(ENGL)&subj=ENGL','English+as+A+Second+Language+(ESL)&subj=ESL','English+Composition+(ENGCOMP)&subj=ENGCOMP','Environment+(ENVIRON)&subj=ENVIRON','Environmental+Health+Sciences+(ENV+HLT)&subj=ENV+HLT','Epidemiology+(EPIDEM)&subj=EPIDEM','Ethnomusicology+(ETHNMUS)&subj=ETHNMUS','Filipino+(FILIPNO)&subj=FILIPNO','Film+and+Television+(FILM+TV)&subj=FILM+TV','French+(FRNCH)&subj=FRNCH','Gender+Studies+(GENDER)&subj=GENDER','Geography+(GEOG)&subj=GEOG','German&subj=GERMAN','Gerontology+(GRNTLGY)&subj=GRNTLGY','Global+Health+(GLB+HLT)&subj=GLB+HLT','Global+Studies+(GLBL+ST)&subj=GLBL+ST','Graduate+Student+Professional+Development+(GRAD+PD)&subj=GRAD+PD','Greek&subj=GREEK','Health+Policy+and+Management+(HLT+POL)&subj=HLT+POL','Hebrew&subj=HEBREW','Hindi-Urdu+(HIN-URD)&subj=HIN-URD','History+(HIST)&subj=HIST','Honors+Collegium+(HNRS)&subj=HNRS','Human+Genetics+(HUM+GEN)&subj=HUM+GEN','Hungarian+(HNGAR)&subj=HNGAR','Indigenous+Languages+of+the+Americas+(IL+AMER)&subj=IL+AMER','Indo-European+Studies+(I+E+STD)&subj=I+E+STD','Indonesian+(INDO)&subj=INDO','Information+Studies+(INF+STD)&subj=INF+STD','International+and+Area+Studies+(I+A+STD)&subj=I+A+STD','International+Development+Studies+(INTL+DV)&subj=INTL+DV','Iranian&subj=IRANIAN','Islamic+Studies+(ISLM+ST)&subj=ISLM+ST','Italian&subj=ITALIAN','Japanese+(JAPAN)&subj=JAPAN','Jewish+Studies+(JEWISH)&subj=JEWISH','Korean+(KOREA)&subj=KOREA','Labor+and+Workplace+Studies+(LBR%26WS)&subj=LBR%26WS','Latin&subj=LATIN','Latin+American+Studies+(LATN+AM)&subj=LATN+AM','Lesbian++Gay++Bisexual++Transgender++and+Queer+Studies+(LGBTQS)&subj=LGBTQS','Life+Sciences+(LIFESCI)&subj=LIFESCI','Linguistics+(LING)&subj=LING','Management+(MGMT)&subj=MGMT','Management-Master+of+Financial+Engineering+(MGMTMFE)&subj=MGMTMFE','Management-Master+of+Science+in+Business+Analytics+(MGMTMSA)&subj=MGMTMSA','Management-PhD+(MGMTPHD)&subj=MGMTPHD','Materials+Science+Engineering+(MAT+SCI)&subj=MAT+SCI','Mathematics+(MATH)&subj=MATH','Mechanical+Aerospace+Engineering+(MECH%26AE)&subj=MECH%26AE','Medical+History+(MED+HIS)&subj=MED+HIS','Medicine+(MED)&subj=MED','Microbiology,+Immunology,+and+Molecular+Genetics+(MIMG)&subj=MIMG','Middle+Eastern+Studies+(M+E+STD)&subj=M+E+STD','Military+Science+(MIL+SCI)&subj=MIL+SCI','Molecular+and+Medical+Pharmacology+(M+PHARM)&subj=M+PHARM','Molecular+Biology+(MOL+BIO)&subj=MOL+BIO','Molecular+Toxicology+(MOL+TOX)&subj=MOL+TOX','Molecular,+Cell,+and+Developmental+Biology+(MCD+BIO)&subj=MCD+BIO','Molecular,+Cellular,+and+Integrative+Physiology+(MC%26IP)&subj=MC%26IP','Music+(MUSC)&subj=MUSC','Music+History+(MSC+HST)&subj=MSC+HST','Music+Industry+(MSC+IND)&subj=MSC+IND','Musicology+(MUSCLG)&subj=MUSCLG','Naval+Science+(NAV+SCI)&subj=NAV+SCI','Near+Eastern+Languages+(NR+EAST)&subj=NR+EAST','Neurobiology+(NEURBIO)&subj=NEURBIO','Neurology+(NEURLGY)&subj=NEURLGY','Neuroscience+(Graduate)+(NEURO)&subj=NEURO','Neuroscience+(NEUROSC)&subj=NEUROSC','Nursing&subj=NURSING','Obstetrics+and+Gynecology+(OBGYN)&subj=OBGYN','Oral+Biology+(ORL+BIO)&subj=ORL+BIO','Pathology+and+Laboratory+Medicine+(PATH)&subj=PATH','Philosophy+(PHILOS)&subj=PHILOS','Physics&subj=PHYSICS','Physics+and+Biology+in+Medicine+(PBMED)&subj=PBMED','Physiological+Science+(PHYSCI)&subj=PHYSCI','Physiology+(PHYSIOL)&subj=PHYSIOL','Polish+(POLSH)&subj=POLSH','Political+Science+(POL+SCI)&subj=POL+SCI','Portuguese+(PORTGSE)&subj=PORTGSE','Program+in+Computing+(COMPTNG)&subj=COMPTNG','Psychiatry+and+Biobehavioral+Sciences+(PSYCTRY)&subj=PSYCTRY','Psychology+(PSYCH)&subj=PSYCH','Public+Health+(PUB+HLT)&subj=PUB+HLT','Public+Policy+(PUB+PLC)&subj=PUB+PLC','Religion,+Study+of+(RELIGN)&subj=RELIGN','Romanian+(ROMANIA)&subj=ROMANIA','Russian+(RUSSN)&subj=RUSSN','Scandinavian+(SCAND)&subj=SCAND','Science+Education+(SCI+EDU)&subj=SCI+EDU','Semitic&subj=SEMITIC','Serbian/Croation+(SRB+CRO)&subj=SRB+CRO','Slavic+(SLAVC)&subj=SLAVC','Social+Science+(SOC+SC)&subj=SOC+SC','Social+Thought+(SOC+THT)&subj=SOC+THT','Social+Welfare+(SOC+WLF)&subj=SOC+WLF','Society+and+Genetics+(SOC+GEN)&subj=SOC+GEN','Sociology+(SOCIOL)&subj=SOCIOL','South+Asian+(S+ASIAN)&subj=S+ASIAN','Spanish+(SPAN)&subj=SPAN','Statistics+(STATS)&subj=STATS','Surgery&subj=SURGERY','Swahili&subj=SWAHILI','Thai&subj=THAI','Theater&subj=THEATER','Turkic+Languages+(TURKIC)&subj=TURKIC','University+Studies+(UNIV+ST)&subj=UNIV+ST','Urban+Planning+(URBN+PL)','Vietnamese+(VIETMSE)&subj=VIETMSE','World+Arts+and+Cultlures+(WL+ARTS)&subj=WL+ARTS','Yiddish+(YIDDSH)&subj=YIDDSH'];

window.onload = function() {
	searchSubject();
};



function searchSubject(){
	var input, filter, ul, li;
	input = document.getElementById("inputBySubject");
	filter = input.value.toLowerCase();
	subjectList = document.getElementById("subjects");
	subjectList.innerHTML = "";

	var display = [];
	var tags = [];
	var tagNum = 0;	//Keep track of which subjectArea indexes we're displaying
	for(var i=0, len = subjectAreas.length; i < len; i++)
	{
		var subject = subjectAreas[i];
		if(subject.toLowerCase().indexOf(filter) > -1)
		{
			display.push(subject);
			tags.push(tagNum);
		}
		tagNum++;
	}
	
	for(var i=0, len = display.length; i < len; i++)
	{
		subjectList.innerHTML += "<li>" + "<a href='#' class=" + tags[i] + ">" + display[i] + "</a> </li> <br/>";
	}
}

function searchGE(){
	var input, filter, ul, li;
	input = document.getElementById("inputBySubject");
	filter = input.value.toLowerCase();
	subjectList = document.getElementById("subjects");
	subjectList.innerHTML = "";

	var display = [];
	for(var i=0, len = subjectAreas.length; i < len; i++)
	{
		var subject = subjectAreas[i];
		if(subject.toLowerCase().indexOf(filter) > -1)
		{
			display.push(subject);
		}
	}
	
	for(var i=0, len = display.length; i < len; i++)
	{
		subjectList.innerHTML += "<li>" + "<a href='#'>" + display[i] + "</a> </li> <br/>";
	}
}

function searchFiat(){
	var input, filter, ul, li;
	input = document.getElementById("inputBySubject");
	filter = input.value.toLowerCase();
	subjectList = document.getElementById("subjects");
	subjectList.innerHTML = "";

	var display = [];
	for(var i=0, len = subjectAreas.length; i < len; i++)
	{
		var subject = subjectAreas[i];
		if(subject.toLowerCase().indexOf(filter) > -1)
		{
			display.push(subject);
		}
	}
	
	for(var i=0, len = display.length; i < len; i++)
	{
		subjectList.innerHTML += "<li>" + "<a href='#'>" + display[i] + "</a> </li> <br/>";
	}
}

function formatTime(time)
{
	if(time != parseInt(time, 10)) return time;
	var timeWord = "";
	var timeOfDay;
	time = parseInt(time, 10);
	if(time >= 1300) {
		time -= 1200;
		timeOfDay = "pm";
	} else {
		timeOfDay = "am";
	}
	if(time > 999)	// 4 digits
	{
		console.log(time);
		timeWord += String(Math.floor(time/1000)) % 10 + String(Math.floor(time/100) % 10) + ":" + String(Math.floor(time/10) % 10) + time % 10;
	} else {
		timeWord += String(Math.floor(time/100)) % 10 + ":" + String(Math.floor(time/10) % 10) + time % 10;
	}

	timeWord += timeOfDay;

	return timeWord;
}

var dict;
$.getJSON('https://www.jasonbase.com/things/8W0L', function(data) {
	dict = eval(data);
});

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
			var Stime=formatTime(tempdict[key]["time"][i][0]);
			var Etime=formatTime(tempdict[key]["time"][i][1]);
			var day = tempdict[key]["day"][i];
			document.getElementById("classInfos").innerHTML += "<div class='row'> <div class='col-sm-2'><p>" + sec + "</p></div><div class='col-sm-2'><a>Add</a><p>" + location + "</p></div><div class='col-sm-2'><p>" + instructor + "</p></div><div class='col-sm-2'><p>" + Stime + "</p></div><div class='col-sm-2'><p>" + Etime + "</p></div><div class='col-sm-2'><p>" + day + "</p></div></div>";

			}

//<a id= onClick="reply_click(this.id)"></a>
		var discussion=tempdict[key]["discussion"];
		if(discussion.length!==0){
			for(var j =0; j < discussion["section"].length;j++){
				var sec=discussion["section"][j];
				var location=discussion["location"][j];
				var instructor=discussion["instructor"][j];
				var Stime=formatTime(discussion["time"][j][0]);
				var Etime=formatTime(discussion["time"][j][1]);
				var day = discussion["day"][j];
				document.getElementById("classInfos").innerHTML += "<div class='row dis'> <div class='col-sm-2'><p>" + sec + "</p></div><div class='col-sm-2'><a>Add</a><p>" + location + "</p></div><div class='col-sm-2'><p>" + instructor + "</p></div><div class='col-sm-2'><p>" + Stime + "</p></div><div class='col-sm-2'><p>" + Etime + "</p></div><div class='col-sm-2'><p>" + day + "</p></div></div>";
		}

		}
	}
}


function reply_click(id){
	$("#"+id).parent(".row").hide();
}
$(document).ready(function(){
	attacheventhandlers();
});
function attacheventhandlers(){
$('#subjects').on('click', '.0',function() {showClass('Aerospace+Studies+(AERO+ST)&subj=AERO+ST');});
$('#subjects').on('click', '.1',function() {showClass('African+American+Studies+(AF+AMER)&subj=AF+AMER');});
$('#subjects').on('click', '.2',function() {showClass('African+Studies+(AFRC+ST)&subj=AFRC+ST');});
$('#subjects').on('click', '.3',function() {showClass('Afrikaans+(AFRKAAN)&subj=AFRKAAN');});
$('#subjects').on('click', '.4',function() {showClass('American+Indian+Studies+(AM+IND)&subj=AM+IND');});
$('#subjects').on('click', '.5',function() {showClass('American+Sign+Language+(ASL)&subj=ASL');});
$('#subjects').on('click', '.6',function() {showClass('Ancient+Near+East+(AN+N+EA)&subj=AN+N+EA');});
$('#subjects').on('click', '.7',function() {showClass('Anesthesiology+(ANES)&subj=ANES');});
$('#subjects').on('click', '.8',function() {showClass('Anthropology+(ANTHRO)&subj=ANTHRO');});
$('#subjects').on('click', '.9',function() {showClass('Applied+Linguistics+(APPLING)&subj=APPLING');});
$('#subjects').on('click', '.10',function() {showClass('Arabic&subj=ARABIC');});
$('#subjects').on('click', '.11',function() {showClass('Archaeology+(ARCHEOL)&subj=ARCHEOL');});
$('#subjects').on('click', '.12',function() {showClass('Architecture+and+Urban+Design+(ARCH%26UD)&subj=ARCH%26UD');});
$('#subjects').on('click', '.13',function() {showClass('Armenian+(ARMENIA)&subj=ARMENIA');});
$('#subjects').on('click', '.14',function() {showClass('Art&subj=ART');});
$('#subjects').on('click', '.15',function() {showClass('Art+History+(ART+HIS)&subj=ART+HIS');});
$('#subjects').on('click', '.16',function() {showClass('Arts+and+Architecture+(ART%26ARC)&subj=ART%26ARC');});
$('#subjects').on('click', '.17',function() {showClass('Arts+Education+(ARTS+ED)&subj=ARTS+ED');});
$('#subjects').on('click', '.18',function() {showClass('Asian&subj=ASIAN');});
$('#subjects').on('click', '.19',function() {showClass('Asian+American+Studies+(ASIA+AM)&subj=ASIA+AM');});
$('#subjects').on('click', '.20',function() {showClass('Astronomy+(ASTR)&subj=ASTR');});
$('#subjects').on('click', '.21',function() {showClass('Atmospheric+and+Oceanic+Sciences+(A%26O+SCI)&subj=A%26O+SCI');});
$('#subjects').on('click', '.22',function() {showClass('Bioengineering+(BIOENGR)&subj=BIOENGR');});
$('#subjects').on('click', '.23',function() {showClass('Bioinformatics+(Graduate)+(BIOINFO)&subj=BIOINFO');});
$('#subjects').on('click', '.24',function() {showClass('Biological+Chemistry+(BIOL+CH)&subj=BIOL+CH');});
$('#subjects').on('click', '.25',function() {showClass('Biomathematics+(BIOMATH)&subj=BIOMATH');});
$('#subjects').on('click', '.26',function() {showClass('Biomedical+Research+(BMD+RES)&subj=BMD+RES');});
$('#subjects').on('click', '.27',function() {showClass('Biostatistics+(BIOSTAT)&subj=BIOSTAT');});
$('#subjects').on('click', '.28',function() {showClass('Central+and+East+European+Studies+(C%26EE+ST)&subj=C%26EE+ST');});
$('#subjects').on('click', '.29',function() {showClass('Chemical+Engineering+(CH+ENGR)&subj=CH+ENGR');});
$('#subjects').on('click', '.30',function() {showClass('Chemistry+and+Biochemistry+(CHEM)&subj=CHEM');});
$('#subjects').on('click', '.31',function() {showClass('Chicana+and+Chicano+Studies+(CHICANO)&subj=CHICANO');});
$('#subjects').on('click', '.32',function() {showClass('Chinese+(CHIN)&subj=CHIN');});
$('#subjects').on('click', '.33',function() {showClass('Civic+Engagement+(CIVIC)&subj=CIVIC');});
$('#subjects').on('click', '.34',function() {showClass('Civil+and+Environmental+Engineering+(C%26EE)&subj=C%26EE');});
$('#subjects').on('click', '.35',function() {showClass('Classics+(CLASSIC)&subj=CLASSIC');});
$('#subjects').on('click', '.36',function() {showClass('Clusters+(CLUSTER)&subj=CLUSTER');});
$('#subjects').on('click', '.37',function() {showClass('Communication+(COMM)&subj=COMM');});
$('#subjects').on('click', '.38',function() {showClass('Community+Health+Sciences+(COM+HLT)&subj=COM+HLT');});
$('#subjects').on('click', '.39',function() {showClass('Comparative+Literature+(COM+LIT)&subj=COM+LIT');});
$('#subjects').on('click', '.40',function() {showClass('Computational+and+Systems+Biology+(C%26S+BIO)&subj=C%26S+BIO');});
$('#subjects').on('click', '.41',function() {showClass('Computer+Science+(COM+SCI)&subj=COM+SCI');});
$('#subjects').on('click', '.42',function() {showClass('Conservation+of+Archaeological+and+Ethnographic+Materials+(CAEM)&subj=CAEM');});
$('#subjects').on('click', '.43',function() {showClass('Dance&subj=DANCE');});
$('#subjects').on('click', '.44',function() {showClass('Design+/+Media+Arts+(DESMA)&subj=DESMA');});
$('#subjects').on('click', '.45',function() {showClass('Digital+Humanities+(DGT+HUM)&subj=DGT+HUM');});
$('#subjects').on('click', '.46',function() {showClass('Disability+Studies+(DIS+STD)&subj=DIS+STD');});
$('#subjects').on('click', '.47',function() {showClass('Dutch&subj=DUTCH');});
$('#subjects').on('click', '.48',function() {showClass('Earth++Planetary++and+Space+Sciences+(EPS+SCI)&subj=EPS+SCI');});
$('#subjects').on('click', '.49',function() {showClass('Ecology+and+Evolutionary+Biology+(EE+BIOL)&subj=EE+BIOL');});
$('#subjects').on('click', '.50',function() {showClass('Economics+(ECON)&subj=ECON');});
$('#subjects').on('click', '.51',function() {showClass('Education+(EDUC)&subj=EDUC');});
$('#subjects').on('click', '.52',function() {showClass('Electrical+and+Computer+Engineering+(EC+ENGR)&subj=EC+ENGR');});
$('#subjects').on('click', '.53',function() {showClass('Electrical+Engineering+(EL+ENGR)&subj=EL+ENGR');});
$('#subjects').on('click', '.54',function() {showClass('Engineering+(ENGR)&subj=ENGR');});
$('#subjects').on('click', '.55',function() {showClass('English+(ENGL)&subj=ENGL');});
$('#subjects').on('click', '.56',function() {showClass('English+as+A+Second+Language+(ESL)&subj=ESL');});
$('#subjects').on('click', '.57',function() {showClass('English+Composition+(ENGCOMP)&subj=ENGCOMP');});
$('#subjects').on('click', '.58',function() {showClass('Environment+(ENVIRON)&subj=ENVIRON');});
$('#subjects').on('click', '.59',function() {showClass('Environmental+Health+Sciences+(ENV+HLT)&subj=ENV+HLT');});
$('#subjects').on('click', '.60',function() {showClass('Epidemiology+(EPIDEM)&subj=EPIDEM');});
$('#subjects').on('click', '.61',function() {showClass('Ethnomusicology+(ETHNMUS)&subj=ETHNMUS');});
$('#subjects').on('click', '.62',function() {showClass('Filipino+(FILIPNO)&subj=FILIPNO');});
$('#subjects').on('click', '.63',function() {showClass('Film+and+Television+(FILM+TV)&subj=FILM+TV');});
$('#subjects').on('click', '.64',function() {showClass('French+(FRNCH)&subj=FRNCH');});
$('#subjects').on('click', '.65',function() {showClass('Gender+Studies+(GENDER)&subj=GENDER');});
$('#subjects').on('click', '.66',function() {showClass('Geography+(GEOG)&subj=GEOG');});
$('#subjects').on('click', '.67',function() {showClass('German&subj=GERMAN');});
$('#subjects').on('click', '.68',function() {showClass('Gerontology+(GRNTLGY)&subj=GRNTLGY');});
$('#subjects').on('click', '.69',function() {showClass('Global+Health+(GLB+HLT)&subj=GLB+HLT');});
$('#subjects').on('click', '.70',function() {showClass('Global+Studies+(GLBL+ST)&subj=GLBL+ST');});
$('#subjects').on('click', '.71',function() {showClass('Graduate+Student+Professional+Development+(GRAD+PD)&subj=GRAD+PD');});
$('#subjects').on('click', '.72',function() {showClass('Greek&subj=GREEK');});
$('#subjects').on('click', '.73',function() {showClass('Health+Policy+and+Management+(HLT+POL)&subj=HLT+POL');});
$('#subjects').on('click', '.74',function() {showClass('Hebrew&subj=HEBREW');});
$('#subjects').on('click', '.75',function() {showClass('Hindi-Urdu+(HIN-URD)&subj=HIN-URD');});
$('#subjects').on('click', '.76',function() {showClass('History+(HIST)&subj=HIST');});
$('#subjects').on('click', '.77',function() {showClass('Honors+Collegium+(HNRS)&subj=HNRS');});
$('#subjects').on('click', '.78',function() {showClass('Human+Genetics+(HUM+GEN)&subj=HUM+GEN');});
$('#subjects').on('click', '.79',function() {showClass('Hungarian+(HNGAR)&subj=HNGAR');});
$('#subjects').on('click', '.80',function() {showClass('Indigenous+Languages+of+the+Americas+(IL+AMER)&subj=IL+AMER');});
$('#subjects').on('click', '.81',function() {showClass('Indo-European+Studies+(I+E+STD)&subj=I+E+STD');});
$('#subjects').on('click', '.82',function() {showClass('Indonesian+(INDO)&subj=INDO');});
$('#subjects').on('click', '.83',function() {showClass('Information+Studies+(INF+STD)&subj=INF+STD');});
$('#subjects').on('click', '.84',function() {showClass('International+and+Area+Studies+(I+A+STD)&subj=I+A+STD');});
$('#subjects').on('click', '.85',function() {showClass('International+Development+Studies+(INTL+DV)&subj=INTL+DV');});
$('#subjects').on('click', '.86',function() {showClass('Iranian&subj=IRANIAN');});
$('#subjects').on('click', '.87',function() {showClass('Islamic+Studies+(ISLM+ST)&subj=ISLM+ST');});
$('#subjects').on('click', '.88',function() {showClass('Italian&subj=ITALIAN');});
$('#subjects').on('click', '.89',function() {showClass('Japanese+(JAPAN)&subj=JAPAN');});
$('#subjects').on('click', '.90',function() {showClass('Jewish+Studies+(JEWISH)&subj=JEWISH');});
$('#subjects').on('click', '.91',function() {showClass('Korean+(KOREA)&subj=KOREA');});
$('#subjects').on('click', '.92',function() {showClass('Labor+and+Workplace+Studies+(LBR%26WS)&subj=LBR%26WS');});
$('#subjects').on('click', '.93',function() {showClass('Latin&subj=LATIN');});
$('#subjects').on('click', '.94',function() {showClass('Latin+American+Studies+(LATN+AM)&subj=LATN+AM');});
$('#subjects').on('click', '.95',function() {showClass('Lesbian++Gay++Bisexual++Transgender++and+Queer+Studies+(LGBTQS)&subj=LGBTQS');});
$('#subjects').on('click', '.96',function() {showClass('Life+Sciences+(LIFESCI)&subj=LIFESCI');});
$('#subjects').on('click', '.97',function() {showClass('Linguistics+(LING)&subj=LING');});
$('#subjects').on('click', '.98',function() {showClass('Management+(MGMT)&subj=MGMT');});
$('#subjects').on('click', '.99',function() {showClass('Management-Master+of+Financial+Engineering+(MGMTMFE)&subj=MGMTMFE');});
$('#subjects').on('click', '.100',function() {showClass('Management-Master+of+Science+in+Business+Analytics+(MGMTMSA)&subj=MGMTMSA');});
$('#subjects').on('click', '.101',function() {showClass('Management-PhD+(MGMTPHD)&subj=MGMTPHD');});
$('#subjects').on('click', '.102',function() {showClass('Materials+Science+Engineering+(MAT+SCI)&subj=MAT+SCI');});
$('#subjects').on('click', '.103',function() {showClass('Mathematics+(MATH)&subj=MATH');});
$('#subjects').on('click', '.104',function() {showClass('Mechanical+Aerospace+Engineering+(MECH%26AE)&subj=MECH%26AE');});
$('#subjects').on('click', '.105',function() {showClass('Medical+History+(MED+HIS)&subj=MED+HIS');});
$('#subjects').on('click', '.106',function() {showClass('Medicine+(MED)&subj=MED');});
$('#subjects').on('click', '.107',function() {showClass('Microbiology,+Immunology,+and+Molecular+Genetics+(MIMG)&subj=MIMG');});
$('#subjects').on('click', '.108',function() {showClass('Middle+Eastern+Studies+(M+E+STD)&subj=M+E+STD');});
$('#subjects').on('click', '.109',function() {showClass('Military+Science+(MIL+SCI)&subj=MIL+SCI');});
$('#subjects').on('click', '.110',function() {showClass('Molecular+and+Medical+Pharmacology+(M+PHARM)&subj=M+PHARM');});
$('#subjects').on('click', '.111',function() {showClass('Molecular+Biology+(MOL+BIO)&subj=MOL+BIO');});
$('#subjects').on('click', '.112',function() {showClass('Molecular+Toxicology+(MOL+TOX)&subj=MOL+TOX');});
$('#subjects').on('click', '.113',function() {showClass('Molecular,+Cell,+and+Developmental+Biology+(MCD+BIO)&subj=MCD+BIO');});
$('#subjects').on('click', '.114',function() {showClass('Molecular,+Cellular,+and+Integrative+Physiology+(MC%26IP)&subj=MC%26IP');});
$('#subjects').on('click', '.115',function() {showClass('Music+(MUSC)&subj=MUSC');});
$('#subjects').on('click', '.116',function() {showClass('Music+History+(MSC+HST)&subj=MSC+HST');});
$('#subjects').on('click', '.117',function() {showClass('Music+Industry+(MSC+IND)&subj=MSC+IND');});
$('#subjects').on('click', '.118',function() {showClass('Musicology+(MUSCLG)&subj=MUSCLG');});
$('#subjects').on('click', '.119',function() {showClass('Naval+Science+(NAV+SCI)&subj=NAV+SCI');});
$('#subjects').on('click', '.120',function() {showClass('Near+Eastern+Languages+(NR+EAST)&subj=NR+EAST');});
$('#subjects').on('click', '.121',function() {showClass('Neurobiology+(NEURBIO)&subj=NEURBIO');});
$('#subjects').on('click', '.122',function() {showClass('Neurology+(NEURLGY)&subj=NEURLGY');});
$('#subjects').on('click', '.123',function() {showClass('Neuroscience+(Graduate)+(NEURO)&subj=NEURO');});
$('#subjects').on('click', '.124',function() {showClass('Neuroscience+(NEUROSC)&subj=NEUROSC');});
$('#subjects').on('click', '.125',function() {showClass('Nursing&subj=NURSING');});
$('#subjects').on('click', '.126',function() {showClass('Obstetrics+and+Gynecology+(OBGYN)&subj=OBGYN');});
$('#subjects').on('click', '.127',function() {showClass('Oral+Biology+(ORL+BIO)&subj=ORL+BIO');});
$('#subjects').on('click', '.128',function() {showClass('Pathology+and+Laboratory+Medicine+(PATH)&subj=PATH');});
$('#subjects').on('click', '.129',function() {showClass('Philosophy+(PHILOS)&subj=PHILOS');});
$('#subjects').on('click', '.130',function() {showClass('Physics&subj=PHYSICS');});
$('#subjects').on('click', '.131',function() {showClass('Physics+and+Biology+in+Medicine+(PBMED)&subj=PBMED');});
$('#subjects').on('click', '.132',function() {showClass('Physiological+Science+(PHYSCI)&subj=PHYSCI');});
$('#subjects').on('click', '.133',function() {showClass('Physiology+(PHYSIOL)&subj=PHYSIOL');});
$('#subjects').on('click', '.134',function() {showClass('Polish+(POLSH)&subj=POLSH');});
$('#subjects').on('click', '.135',function() {showClass('Political+Science+(POL+SCI)&subj=POL+SCI');});
$('#subjects').on('click', '.136',function() {showClass('Portuguese+(PORTGSE)&subj=PORTGSE');});
$('#subjects').on('click', '.137',function() {showClass('Program+in+Computing+(COMPTNG)&subj=COMPTNG');});
$('#subjects').on('click', '.138',function() {showClass('Psychiatry+and+Biobehavioral+Sciences+(PSYCTRY)&subj=PSYCTRY');});
$('#subjects').on('click', '.139',function() {showClass('Psychology+(PSYCH)&subj=PSYCH');});
$('#subjects').on('click', '.140',function() {showClass('Public+Health+(PUB+HLT)&subj=PUB+HLT');});
$('#subjects').on('click', '.141',function() {showClass('Public+Policy+(PUB+PLC)&subj=PUB+PLC');});
$('#subjects').on('click', '.142',function() {showClass('Religion,+Study+of+(RELIGN)&subj=RELIGN');});
$('#subjects').on('click', '.143',function() {showClass('Romanian+(ROMANIA)&subj=ROMANIA');});
$('#subjects').on('click', '.144',function() {showClass('Russian+(RUSSN)&subj=RUSSN');});
$('#subjects').on('click', '.145',function() {showClass('Scandinavian+(SCAND)&subj=SCAND');});
$('#subjects').on('click', '.146',function() {showClass('Science+Education+(SCI+EDU)&subj=SCI+EDU');});
$('#subjects').on('click', '.147',function() {showClass('Semitic&subj=SEMITIC');});
$('#subjects').on('click', '.148',function() {showClass('Serbian/Croation+(SRB+CRO)&subj=SRB+CRO');});
$('#subjects').on('click', '.149',function() {showClass('Slavic+(SLAVC)&subj=SLAVC');});
$('#subjects').on('click', '.150',function() {showClass('Social+Science+(SOC+SC)&subj=SOC+SC');});
$('#subjects').on('click', '.151',function() {showClass('Social+Thought+(SOC+THT)&subj=SOC+THT');});
$('#subjects').on('click', '.152',function() {showClass('Social+Welfare+(SOC+WLF)&subj=SOC+WLF');});
$('#subjects').on('click', '.153',function() {showClass('Society+and+Genetics+(SOC+GEN)&subj=SOC+GEN');});
$('#subjects').on('click', '.154',function() {showClass('Sociology+(SOCIOL)&subj=SOCIOL');});
$('#subjects').on('click', '.155',function() {showClass('South+Asian+(S+ASIAN)&subj=S+ASIAN');});
$('#subjects').on('click', '.156',function() {showClass('Spanish+(SPAN)&subj=SPAN');});
$('#subjects').on('click', '.157',function() {showClass('Statistics+(STATS)&subj=STATS');});
$('#subjects').on('click', '.158',function() {showClass('Surgery&subj=SURGERY');});
$('#subjects').on('click', '.159',function() {showClass('Swahili&subj=SWAHILI');});
$('#subjects').on('click', '.160',function() {showClass('Thai&subj=THAI');});
$('#subjects').on('click', '.161',function() {showClass('Theater&subj=THEATER');});
$('#subjects').on('click', '.162',function() {showClass('Turkic+Languages+(TURKIC)&subj=TURKIC');});
$('#subjects').on('click', '.163',function() {showClass('University+Studies+(UNIV+ST)&subj=UNIV+ST');});
$('#subjects').on('click', '.164',function() {showClass('Urban+Planning+(URBN+PL)');});
$('#subjects').on('click', '.165',function() {showClass('Vietnamese+(VIETMSE)&subj=VIETMSE');});
$('#subjects').on('click', '.166',function() {showClass('World+Arts+and+Cultlures+(WL+ARTS)&subj=WL+ARTS');});
$('#subjects').on('click', '.167',function() {showClass('Yiddish+(YIDDSH)&subj=YIDDSH');});
}
