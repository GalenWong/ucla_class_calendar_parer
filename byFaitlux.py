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

url="https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=fiatlux&s_catlg=All+Fiat+Lux+Classes&subj=%25&catlg=%25&cls_no=%25&btnIsInIndex=btn_inIndex"

actions = ActionChains(driver)

byFLdatabase={}



driver.get(url)
#data=urllib.request.urlopen(url).read().decode('UTF-8')
driver.maximize_window()
driver.execute_script("window.scrollTo(0, 200)")
try:
	driver.find_element_by_id("expandAll").click()
except:
	print("something wrong with!!!!!!!!!!!!!!!!!!!!!!!! ===  "+subjectlist[i])

time.sleep(5)

data=driver.page_source.encode('utf-8')
soup = BeautifulSoup(data, 'html.parser')

classlist=soup.find_all('div',{"class":"row-fluid class-title"})

for j in range(len(classlist)):
	#find name
	nameh3=classlist[j].find_all('h3')
	title=nameh3[0].find('a')
	name=title.contents[0]
	idre=re.compile("(.+) - (.+)")
	id=idre.findall(name)[0][0]
	name=idre.findall(name)[0][1]
	

	byFLdatabase[id]={}
	byFLdatabase[id]["name"]=name


	#find lec
	row=classlist[j].find_all('div',{"class":"row-fluid data_row primary-row class-info class-not-checked"})




	byFLdatabase[id]["section"]=[]
	byFLdatabase[id]["status"]=[]
	byFLdatabase[id]["waitlist"]=[]
	byFLdatabase[id]["location"]=[]
	byFLdatabase[id]["instructor"]=[]
	byFLdatabase[id]["time"]=[]
	byFLdatabase[id]["day"]=[]
	byFLdatabase[id]["discussion"]={}


	for k in (range(len(row))):
		#discussion
		dis=row[k].find_all('div',{"class":'row-fluid data_row secondary-row class-info class-not-checked'})

		if(dis):
			byFLdatabase[id]["discussion"]["section"]=[]
			byFLdatabase[id]["discussion"]["status"]=[]
			byFLdatabase[id]["discussion"]["waitlist"]=[]
			byFLdatabase[id]["discussion"]["location"]=[]
			byFLdatabase[id]["discussion"]["instructor"]=[]
			byFLdatabase[id]["discussion"]["time"]=[]
			byFLdatabase[id]["discussion"]["day"]=[]
			for h in range(len(dis)):

				sectionItem=dis[h].find('div',{"class":"sectionColumn"})

				temp = sectionItem.find('a')

				section=temp.contents[0]

				byFLdatabase[id]["discussion"]["section"].append(section)


				#status
				statusItem=dis[h].find('div',{"class":"statusColumn"})

				temp =  statusItem.find('p')
				status = temp.text

				byFLdatabase[id]["discussion"]["status"].append(status)

				

				#waitlist
				statusItem=dis[h].find('div',{"class":"waitlistColumn"})

				temp =  statusItem.find('p')
				status = temp.text

				byFLdatabase[id]["discussion"]["waitlist"].append(status)

				#time
				statusItem=dis[h].find('div',{"class":"timeColumn"})

				temp =  statusItem.find_all('p')
				try:
					status=getTimeAsInt(temp[1].text)

				except:
					pass


				byFLdatabase[id]["discussion"]["time"].append(status)
				status = temp[0].text
				byFLdatabase[id]["discussion"]["day"].append(status)


				statusItem=dis[h].find('div',{"class":"instructorColumn"})

				temp =  statusItem.find('p')
				status = temp.text

				byFLdatabase[id]["instructor"].append(status)

				statusItem=dis[h].find('div',{"class":"locationColumn hide-small"})

				temp =  statusItem.find('p')
				
				status = temp.text.rstrip()

				byFLdatabase[id]["discussion"]["location"].append(status)
				




		#section
		sectionItem=row[k].find('div',{"class":"sectionColumn"})

		temp = sectionItem.find('a')

		section=temp.contents[0]

		byFLdatabase[id]["section"].append(section)


		#status
		statusItem=row[k].find('div',{"class":"statusColumn"})

		temp =  statusItem.find('p')
		status = temp.text

		byFLdatabase[id]["status"].append(status)

		

		#waitlist
		statusItem=row[k].find('div',{"class":"waitlistColumn"})

		temp =  statusItem.find('p')
		status = temp.text

		byFLdatabase[id]["waitlist"].append(status)

		#time
		statusItem=row[k].find('div',{"class":"timeColumn"})

		temp =  statusItem.find_all('p')
		try:	
			status=getTimeAsInt(temp[1].text)
		except:
			pass


		byFLdatabase[id]["time"].append(status)
		status = temp[0].text
		byFLdatabase[id]["day"].append(status)


		statusItem=row[k].find('div',{"class":"instructorColumn"})

		temp =  statusItem.find('p')
		status = temp.text

		byFLdatabase[id]["instructor"].append(status)

		statusItem=row[k].find('div',{"class":"locationColumn hide-small"})

		try:	
			temp =  statusItem.find('p')
		except:
			pass
		
		status = temp.text.rstrip()

		byFLdatabase[id]["location"].append(status)
print(byFLdatabase)

json = json.dumps(byFLdatabase)
with open('byFL.json', 'w') as f:
	print(f.write(json))

print(byFLdatabase)
		

		
