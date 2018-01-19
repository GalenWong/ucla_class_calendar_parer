import urllib
from urllib import request
import re
from collections import deque
import sys
import webbrowser
from bs4 import BeautifulSoup
import time    
from selenium import webdriver
import time
from selenium.webdriver.common.action_chains import ActionChains
import json


def timeToInt(time):
	digits = re.findall(r'\d+', time)
		#we don't need to check for the special case 12am-1am (0~1 in 24-hour), since no classes take place then
	if(len(digits)==1):	#check if we only have 1 element (10am vs 10:30am)
		digits.append("00")
	if(len(digits[0])==1):	#check if the first element of digits (before colon) needs a 0 in front or not
		digits[0] = '0' + digits[0]

	#digits = list(map(int, digits))	#it'll be easier to work with numbers now that we consolidated formatting

	if("pm" in time and int(digits[0]) < 12):	#add 12 to convert to military time
		digits[0] = str(int(digits[0])+12)
	return (int(digits[0] + digits[1]))

def getTimeAsInt(times):
	timeArr = times.split('-')
	timeArr[0] = timeToInt(timeArr[0])
	if(len(timeArr) > 1):
		timeArr[1] = timeToInt(timeArr[1])
	return timeArr



driver = webdriver.Chrome()

url1="https://sa.ucla.edu/ro/public/soc/Results?t=18W&sBy=subject&sName=" 
url2="&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+(Optional)&catlg=&cls_no=&undefined=Go&btnIsInIndex=btn_inIndex"

#subjectlist=['Aerospace+Studies+(AERO+ST)&subj=AERO+ST','African+American+Studies+(AF+AMER)&subj=AF+AMER']
subjectlist=['Aerospace+Studies+(AERO+ST)&subj=AERO+ST','African+American+Studies+(AF+AMER)&subj=AF+AMER','African+Studies+(AFRC+ST)&subj=AFRC+ST','Afrikaans+(AFRKAAN)&subj=AFRKAAN','American+Indian+Studies+(AM+IND)&subj=AM+IND','American+Sign+Language+(ASL)&subj=ASL','Ancient+Near+East+(AN+N+EA)&subj=AN+N+EA','Anesthesiology+(ANES)&subj=ANES','Anthropology+(ANTHRO)&subj=ANTHRO','Applied+Linguistics+(APPLING)&subj=APPLING','Arabic&subj=ARABIC','Archaeology+(ARCHEOL)&subj=ARCHEOL','Architecture+and+Urban+Design+(ARCH%26UD)&subj=ARCH%26UD','Armenian+(ARMENIA)&subj=ARMENIA','Art&subj=ART','Art+History+(ART+HIS)&subj=ART+HIS','Arts+and+Architecture+(ART%26ARC)&subj=ART%26ARC','Arts+Education+(ARTS+ED)&subj=ARTS+ED','Asian&subj=ASIAN','Asian+American+Studies+(ASIA+AM)&subj=ASIA+AM','Astronomy+(ASTR)&subj=ASTR','Atmospheric+and+Oceanic+Sciences+(A%26O+SCI)&subj=A%26O+SCI','Bioengineering+(BIOENGR)&subj=BIOENGR','Bioinformatics+(Graduate)+(BIOINFO)&subj=BIOINFO','Biological+Chemistry+(BIOL+CH)&subj=BIOL+CH','Biomathematics+(BIOMATH)&subj=BIOMATH','Biomedical+Research+(BMD+RES)&subj=BMD+RES','Biostatistics+(BIOSTAT)&subj=BIOSTAT','Central+and+East+European+Studies+(C%26EE+ST)&subj=C%26EE+ST','Chemical+Engineering+(CH+ENGR)&subj=CH+ENGR','Chemistry+and+Biochemistry+(CHEM)&subj=CHEM','Chicana+and+Chicano+Studies+(CHICANO)&subj=CHICANO','Chinese+(CHIN)&subj=CHIN','Civic+Engagement+(CIVIC)&subj=CIVIC','Civil+and+Environmental+Engineering+(C%26EE)&subj=C%26EE','Classics+(CLASSIC)&subj=CLASSIC','Clusters+(CLUSTER)&subj=CLUSTER','Communication+(COMM)&subj=COMM','Community+Health+Sciences+(COM+HLT)&subj=COM+HLT','Comparative+Literature+(COM+LIT)&subj=COM+LIT','Computational+and+Systems+Biology+(C%26S+BIO)&subj=C%26S+BIO','Computer+Science+(COM+SCI)&subj=COM+SCI','Conservation+of+Archaeological+and+Ethnographic+Materials+(CAEM)&subj=CAEM','Dance&subj=DANCE','Design+/+Media+Arts+(DESMA)&subj=DESMA','Digital+Humanities+(DGT+HUM)&subj=DGT+HUM','Disability+Studies+(DIS+STD)&subj=DIS+STD','Dutch&subj=DUTCH','Earth++Planetary++and+Space+Sciences+(EPS+SCI)&subj=EPS+SCI','Ecology+and+Evolutionary+Biology+(EE+BIOL)&subj=EE+BIOL','Economics+(ECON)&subj=ECON','Education+(EDUC)&subj=EDUC','Electrical+and+Computer+Engineering+(EC+ENGR)&subj=EC+ENGR','Electrical+Engineering+(EL+ENGR)&subj=EL+ENGR','Engineering+(ENGR)&subj=ENGR','English+(ENGL)&subj=ENGL','English+as+A+Second+Language+(ESL)&subj=ESL','English+Composition+(ENGCOMP)&subj=ENGCOMP','Environment+(ENVIRON)&subj=ENVIRON','Environmental+Health+Sciences+(ENV+HLT)&subj=ENV+HLT','Epidemiology+(EPIDEM)&subj=EPIDEM','Ethnomusicology+(ETHNMUS)&subj=ETHNMUS','Filipino+(FILIPNO)&subj=FILIPNO','Film+and+Television+(FILM+TV)&subj=FILM+TV','French+(FRNCH)&subj=FRNCH','Gender+Studies+(GENDER)&subj=GENDER','Geography+(GEOG)&subj=GEOG','German&subj=GERMAN','Gerontology+(GRNTLGY)&subj=GRNTLGY','Global+Health+(GLB+HLT)&subj=GLB+HLT','Global+Studies+(GLBL+ST)&subj=GLBL+ST','Graduate+Student+Professional+Development+(GRAD+PD)&subj=GRAD+PD','Greek&subj=GREEK','Health+Policy+and+Management+(HLT+POL)&subj=HLT+POL','Hebrew&subj=HEBREW','Hindi-Urdu+(HIN-URD)&subj=HIN-URD','History+(HIST)&subj=HIST','Honors+Collegium+(HNRS)&subj=HNRS','Human+Genetics+(HUM+GEN)&subj=HUM+GEN','Hungarian+(HNGAR)&subj=HNGAR','Indigenous+Languages+of+the+Americas+(IL+AMER)&subj=IL+AMER','Indo-European+Studies+(I+E+STD)&subj=I+E+STD','Indonesian+(INDO)&subj=INDO','Information+Studies+(INF+STD)&subj=INF+STD','International+and+Area+Studies+(I+A+STD)&subj=I+A+STD','International+Development+Studies+(INTL+DV)&subj=INTL+DV','Iranian&subj=IRANIAN','Islamic+Studies+(ISLM+ST)&subj=ISLM+ST','Italian&subj=ITALIAN','Japanese+(JAPAN)&subj=JAPAN','Jewish+Studies+(JEWISH)&subj=JEWISH','Korean+(KOREA)&subj=KOREA','Labor+and+Workplace+Studies+(LBR%26WS)&subj=LBR%26WS','Latin&subj=LATIN','Latin+American+Studies+(LATN+AM)&subj=LATN+AM','Lesbian++Gay++Bisexual++Transgender++and+Queer+Studies+(LGBTQS)&subj=LGBTQS','Life+Sciences+(LIFESCI)&subj=LIFESCI','Linguistics+(LING)&subj=LING','Management+(MGMT)&subj=MGMT','Management-Master+of+Financial+Engineering+(MGMTMFE)&subj=MGMTMFE','Management-Master+of+Science+in+Business+Analytics+(MGMTMSA)&subj=MGMTMSA','Management-PhD+(MGMTPHD)&subj=MGMTPHD','Materials+Science+Engineering+(MAT+SCI)&subj=MAT+SCI','Mathematics+(MATH)&subj=MATH','Mechanical+Aerospace+Engineering+(MECH%26AE)&subj=MECH%26AE','Medical+History+(MED+HIS)&subj=MED+HIS','Medicine+(MED)&subj=MED','Microbiology,+Immunology,+and+Molecular+Genetics+(MIMG)&subj=MIMG','Middle+Eastern+Studies+(M+E+STD)&subj=M+E+STD','Military+Science+(MIL+SCI)&subj=MIL+SCI','Molecular+and+Medical+Pharmacology+(M+PHARM)&subj=M+PHARM','Molecular+Biology+(MOL+BIO)&subj=MOL+BIO','Molecular+Toxicology+(MOL+TOX)&subj=MOL+TOX','Molecular,+Cell,+and+Developmental+Biology+(MCD+BIO)&subj=MCD+BIO','Molecular,+Cellular,+and+Integrative+Physiology+(MC%26IP)&subj=MC%26IP','Music+(MUSC)&subj=MUSC','Music+History+(MSC+HST)&subj=MSC+HST','Music+Industry+(MSC+IND)&subj=MSC+IND','Musicology+(MUSCLG)&subj=MUSCLG','Naval+Science+(NAV+SCI)&subj=NAV+SCI','Near+Eastern+Languages+(NR+EAST)&subj=NR+EAST','Neurobiology+(NEURBIO)&subj=NEURBIO','Neurology+(NEURLGY)&subj=NEURLGY','Neuroscience+(Graduate)+(NEURO)&subj=NEURO','Neuroscience+(NEUROSC)&subj=NEUROSC','Nursing&subj=NURSING','Obstetrics+and+Gynecology+(OBGYN)&subj=OBGYN','Oral+Biology+(ORL+BIO)&subj=ORL+BIO','Pathology+and+Laboratory+Medicine+(PATH)&subj=PATH','Philosophy+(PHILOS)&subj=PHILOS','Physics&subj=PHYSICS','Physics+and+Biology+in+Medicine+(PBMED)&subj=PBMED','Physiological+Science+(PHYSCI)&subj=PHYSCI','Physiology+(PHYSIOL)&subj=PHYSIOL','Polish+(POLSH)&subj=POLSH','Political+Science+(POL+SCI)&subj=POL+SCI','Portuguese+(PORTGSE)&subj=PORTGSE','Program+in+Computing+(COMPTNG)&subj=COMPTNG','Psychiatry+and+Biobehavioral+Sciences+(PSYCTRY)&subj=PSYCTRY','Psychology+(PSYCH)&subj=PSYCH','Public+Health+(PUB+HLT)&subj=PUB+HLT','Public+Policy+(PUB+PLC)&subj=PUB+PLC','Religion,+Study+of+(RELIGN)&subj=RELIGN','Romanian+(ROMANIA)&subj=ROMANIA','Russian+(RUSSN)&subj=RUSSN','Scandinavian+(SCAND)&subj=SCAND','Science+Education+(SCI+EDU)&subj=SCI+EDU','Semitic&subj=SEMITIC','Serbian/Croation+(SRB+CRO)&subj=SRB+CRO','Slavic+(SLAVC)&subj=SLAVC','Social+Science+(SOC+SC)&subj=SOC+SC','Social+Thought+(SOC+THT)&subj=SOC+THT','Social+Welfare+(SOC+WLF)&subj=SOC+WLF','Society+and+Genetics+(SOC+GEN)&subj=SOC+GEN','Sociology+(SOCIOL)&subj=SOCIOL','South+Asian+(S+ASIAN)&subj=S+ASIAN','Spanish+(SPAN)&subj=SPAN','Statistics+(STATS)&subj=STATS','Surgery&subj=SURGERY','Swahili&subj=SWAHILI','Thai&subj=THAI','Theater&subj=THEATER','Turkic+Languages+(TURKIC)&subj=TURKIC','University+Studies+(UNIV+ST)&subj=UNIV+ST','Urban+Planning+(URBN+PL)','Vietnamese+(VIETMSE)&subj=VIETMSE','World+Arts+and+Cultlures+(WL+ARTS)&subj=WL+ARTS','Yiddish+(YIDDSH)&subj=YIDDSH']
actions = ActionChains(driver)

bySubjectDatabase={}

for i in range(len(subjectlist)):
	url=url1+subjectlist[i]+url2

	bySubjectDatabase[subjectlist[i]]={}

	driver.get(url)
	#data=urllib.request.urlopen(url).read().decode('UTF-8')
#	driver.maximize_window()
	driver.execute_script("window.scrollTo(0, 200)")
#	try:
	driver.find_element_by_id("expandAll").click()
#	except:
#		print("something wrong with!!!!!!!!!!!!!!!!!!!!!!!! ===  "+subjectlist[i])

	data=driver.page_source.encode('utf-8')
	soup = BeautifulSoup(data, 'html.parser')

	classlist=soup.find_all('div',{"class":"row-fluid class-title"})
	
	for j in range(len(classlist)):
		#find name
		nameh3=classlist[j].find_all('h3')
		title=nameh3[0].find('a')
		name=title.contents[0]
		idre=re.compile("(.+) - (.+)")
		id1=idre.findall(name)[0][0]
		name=idre.findall(name)[0][1]
		

		bySubjectDatabase[subjectlist[i]][id1]={}
		bySubjectDatabase[subjectlist[i]][id1]["name"]=name


		#find lec
		row=classlist[j].find_all('div',{"class":"row-fluid data_row primary-row class-info class-not-checked"})


	

		bySubjectDatabase[subjectlist[i]][id1]["section"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["status"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["waitlist"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["location"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["instructor"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["time"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["day"]=[]
		bySubjectDatabase[subjectlist[i]][id1]["discussion"]={}



		for k in (range(len(row))):



			#section
			sectionItem=row[k].find('div',{"class":"sectionColumn"})

			temp = sectionItem.find('a')

			section=temp.contents[0]

			bySubjectDatabase[subjectlist[i]][id1]["section"].append(section)


			#status
			statusItem=row[k].find('div',{"class":"statusColumn"})

			temp =  statusItem.find('p')
			status = temp.text

			bySubjectDatabase[subjectlist[i]][id1]["status"].append(status)

			

			#waitlist
			statusItem=row[k].find('div',{"class":"waitlistColumn"})

			temp =  statusItem.find('p')
			status = temp.text

			bySubjectDatabase[subjectlist[i]][id1]["waitlist"].append(status)

			#time
			statusItem=row[k].find('div',{"class":"timeColumn"})

			temp =  statusItem.find_all('p')
			try:	
				status=getTimeAsInt(temp[1].text)
			except:
				pass


			bySubjectDatabase[subjectlist[i]][id1]["time"].append(status)
			status = temp[0].text
			bySubjectDatabase[subjectlist[i]][id1]["day"].append(status)


			statusItem=row[k].find('div',{"class":"instructorColumn"})

			temp =  statusItem.find('p')
			status = temp.text

			bySubjectDatabase[subjectlist[i]][id1]["instructor"].append(status)

			statusItem=row[k].find('div',{"class":"locationColumn hide-small"})

			try:	
				temp =  statusItem.find('p')
			except:
				pass
			
			status = temp.text.rstrip()

			bySubjectDatabase[subjectlist[i]][id1]["location"].append(status)


			#discussion
			dis=row[k].find_all('div',{"class":'secondarySection'})

			if(dis):
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["section"]=[]
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["status"]=[]
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["waitlist"]=[]
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["location"]=[]
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["instructor"]=[]
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["time"]=[]
				bySubjectDatabase[subjectlist[i]][id1]["discussion"]["day"]=[]
				
				for h in range(len(dis)):

					sectionItem=dis[h].find('div',{"class":"sectionColumn"})

					temp = sectionItem.find('a')

					section=temp.contents[0]

					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["section"].append(section)


					#status
					statusItem=dis[h].find('div',{"class":"statusColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["status"].append(status)

					

					#waitlist
					statusItem=dis[h].find('div',{"class":"waitlistColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["waitlist"].append(status)

					#time
					statusItem=dis[h].find('div',{"class":"timeColumn"})

					temp =  statusItem.find_all('p')
					try:
						status=getTimeAsInt(temp[1].text)

					except:
						pass


					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["time"].append(status)
					status = temp[0].text
					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["day"].append(status)


					statusItem=dis[h].find('div',{"class":"instructorColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["instructor"].append(status)

					statusItem=dis[h].find('div',{"class":"locationColumn hide-small"})

					temp =  statusItem.find('p')
					
					status = temp.text.rstrip()

					bySubjectDatabase[subjectlist[i]][id1]["discussion"]["location"].append(status)
					

	print(bySubjectDatabase)

json = json.dumps(bySubjectDatabase)
with open('library', 'w') as f:
    print(f.write(json))

print(bySubjectDatabase)
			

			
