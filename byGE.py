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
from selenium.webdriver.common.by import By


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

listurl=['https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Arts+and+Humanities&foun=AH&geCatName=Literary+and+Cultural+Analysis&ge_catg=LC&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex',
'https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Arts+and+Humanities&foun=AH&geCatName=Philosophical+and+Linguistic+Analysis&ge_catg=PL&ge_catg=&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex',
'https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Arts+and+Humanities&foun=AH&geCatName=Visual+and+Performance+Arts+Analysis+and+Practice&ge_catg=VP&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex',
'https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Scientific+Inquiry&foun=SI&geCatName=Life+Sciences&ge_cat=LS&ge_catg=&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex'
,'https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Scientific+Inquiry&foun=SI&geCatName=Physical+Sciences&ge_cat=PS&ge_catg=&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex'
,'https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Society+and+Culture&foun=SC&geCatName=Historical+Analysis&ge_cat=HA&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex'
,'https://sa.ucla.edu/ro/Public/SOC/Results?t=18W&sBy=geclass&fName=Foundations+of+Society+and+Culture&foun=SC&geCatName=Social+Analysis&ge_cat=SA&s_catlg=&subj=&catlg=&cls_no=&btnIsInIndex=btn_inIndex']
catelist=['Foundations of Arts and Humanities, Literary and Cultural Analysis', 'Foundations of Arts and Humanities, Philosophical and Linguistic Analysis', 'Foundations of Arts and Humanities, Visual and Performance Arts Analysis and Practice',
'Foundations of Scientific Inquiry, Life Sciences', 'Foundations of  Scientific Inquiry, Physical Sciences',
'Foundations of Society and Culture, Historical Analysis', 'Foundations of Society and Culture, Social Analysis']

actions = ActionChains(driver)

byGEdatabase={}

for i in range(len(listurl)):
	url=listurl[i]

	byGEdatabase[catelist[i]]={}

	driver.get(url)
	#data=urllib.request.urlopen(url).read().decode('UTF-8')
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0, 200)")

	try:
		driver.find_element_by_id("expandAll").click()
	except:
		print("something wrong with!!!!!!!!!!!!!!!!!!!!!!!! ===  "+catelist[i])



	time.sleep(5)

	data = driver.page_source.encode('utf-8')
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
		

		byGEdatabase[catelist[i]][id]={}
		byGEdatabase[catelist[i]][id]["name"]=name


		#find lec
		row=classlist[j].find_all('div',{"class":"row-fluid data_row primary-row class-info class-not-checked"})


	

		byGEdatabase[catelist[i]][id]["section"]=[]
		byGEdatabase[catelist[i]][id]["status"]=[]
		byGEdatabase[catelist[i]][id]["waitlist"]=[]
		byGEdatabase[catelist[i]][id]["location"]=[]
		byGEdatabase[catelist[i]][id]["instructor"]=[]
		byGEdatabase[catelist[i]][id]["time"]=[]
		byGEdatabase[catelist[i]][id]["day"]=[]
		byGEdatabase[catelist[i]][id]["discussion"]={}


		for k in (range(len(row))):
			#discussion
			dis=row[k].find_all('div',{"class":'row-fluid data_row secondary-row class-info class-not-checked'})

			if(dis):
				byGEdatabase[catelist[i]][id]["discussion"]["section"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]["status"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]["waitlist"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]["location"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]["instructor"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]["time"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]["day"]=[]
				for h in range(len(dis)):

					sectionItem=dis[h].find('div',{"class":"sectionColumn"})

					temp = sectionItem.find('a')

					section=temp.contents[0]

					byGEdatabase[catelist[i]][id]["discussion"]["section"].append(section)


					#status
					statusItem=dis[h].find('div',{"class":"statusColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					byGEdatabase[catelist[i]][id]["discussion"]["status"].append(status)

					

					#waitlist
					statusItem=dis[h].find('div',{"class":"waitlistColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					byGEdatabase[catelist[i]][id]["discussion"]["waitlist"].append(status)

					#time
					statusItem=dis[h].find('div',{"class":"timeColumn"})

					temp =  statusItem.find_all('p')
					try:
						status=getTimeAsInt(temp[1].text)

					except:
						pass


					byGEdatabase[catelist[i]][id]["discussion"]["time"].append(status)
					status = temp[0].text
					byGEdatabase[catelist[i]][id]["discussion"]["day"].append(status)


					statusItem=dis[h].find('div',{"class":"instructorColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					byGEdatabase[catelist[i]][id]["instructor"].append(status)

					statusItem=dis[h].find('div',{"class":"locationColumn hide-small"})

					temp =  statusItem.find('p')
					
					status = temp.text.rstrip()

					byGEdatabase[catelist[i]][id]["discussion"]["location"].append(status)
					




			#section
			sectionItem=row[k].find('div',{"class":"sectionColumn"})

			temp = sectionItem.find('a')

			section=temp.contents[0]

			byGEdatabase[catelist[i]][id]["section"].append(section)


			#status
			statusItem=row[k].find('div',{"class":"statusColumn"})

			temp =  statusItem.find('p')
			status = temp.text

			byGEdatabase[catelist[i]][id]["status"].append(status)

			

			#waitlist
			statusItem=row[k].find('div',{"class":"waitlistColumn"})

			temp =  statusItem.find('p')
			status = temp.text

			byGEdatabase[catelist[i]][id]["waitlist"].append(status)

			#time
			statusItem=row[k].find('div',{"class":"timeColumn"})

			temp =  statusItem.find_all('p')
			try:	
				status=getTimeAsInt(temp[1].text)
			except:
				pass


			byGEdatabase[catelist[i]][id]["time"].append(status)
			status = temp[0].text
			byGEdatabase[catelist[i]][id]["day"].append(status)


			statusItem=row[k].find('div',{"class":"instructorColumn"})

			temp =  statusItem.find('p')
			status = temp.text

			byGEdatabase[catelist[i]][id]["instructor"].append(status)

			statusItem=row[k].find('div',{"class":"locationColumn hide-small"})

			try:	
				temp =  statusItem.find('p')
			except:
				pass
			
			status = temp.text.rstrip()

			byGEdatabase[catelist[i]][id]["location"].append(status)
	#print(byGEdatabase)

	pages = soup.find('ul',{"class":"jPag-pages"})
	if(pages):
		driver.find_element_by_id("expandAll").click()

		time.sleep(2)
		pages=pages.find_all('a')

	
		for x in range(len(pages)):
			text=pages[x].contents
			driver.find_element(By.XPATH, '//a[text()='+text[0]+']').click()

			driver.execute_script("window.scrollTo(0, 200)")

			try:
				driver.find_element_by_id("expandAll").click()
				time.sleep(0.5)
				driver.find_element_by_id("expandAll").click()
			except:
				print("something wrong with!!!!!!!!!!!!!!!!!!!!!!!! ===  "+catelist[i])



			time.sleep(5)

			data = driver.page_source.encode('utf-8')
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
				

				byGEdatabase[catelist[i]][id]={}
				byGEdatabase[catelist[i]][id]["name"]=name


				#find lec
				row=classlist[j].find_all('div',{"class":"row-fluid data_row primary-row class-info class-not-checked"})


			

				byGEdatabase[catelist[i]][id]["section"]=[]
				byGEdatabase[catelist[i]][id]["status"]=[]
				byGEdatabase[catelist[i]][id]["waitlist"]=[]
				byGEdatabase[catelist[i]][id]["location"]=[]
				byGEdatabase[catelist[i]][id]["instructor"]=[]
				byGEdatabase[catelist[i]][id]["time"]=[]
				byGEdatabase[catelist[i]][id]["day"]=[]
				byGEdatabase[catelist[i]][id]["discussion"]={}


				for k in (range(len(row))):
					#discussion
					dis=row[k].find_all('div',{"class":'row-fluid data_row secondary-row class-info class-not-checked'})

					if(dis):
						byGEdatabase[catelist[i]][id]["discussion"]["section"]=[]
						byGEdatabase[catelist[i]][id]["discussion"]["status"]=[]
						byGEdatabase[catelist[i]][id]["discussion"]["waitlist"]=[]
						byGEdatabase[catelist[i]][id]["discussion"]["location"]=[]
						byGEdatabase[catelist[i]][id]["discussion"]["instructor"]=[]
						byGEdatabase[catelist[i]][id]["discussion"]["time"]=[]
						byGEdatabase[catelist[i]][id]["discussion"]["day"]=[]
						for h in range(len(dis)):

							sectionItem=dis[h].find('div',{"class":"sectionColumn"})

							temp = sectionItem.find('a')

							section=temp.contents[0]

							byGEdatabase[catelist[i]][id]["discussion"]["section"].append(section)


							#status
							statusItem=dis[h].find('div',{"class":"statusColumn"})

							temp =  statusItem.find('p')
							status = temp.text

							byGEdatabase[catelist[i]][id]["discussion"]["status"].append(status)

							

							#waitlist
							statusItem=dis[h].find('div',{"class":"waitlistColumn"})

							temp =  statusItem.find('p')
							status = temp.text

							byGEdatabase[catelist[i]][id]["discussion"]["waitlist"].append(status)

							#time
							statusItem=dis[h].find('div',{"class":"timeColumn"})

							temp =  statusItem.find_all('p')
							try:
								status=getTimeAsInt(temp[1].text)

							except:
								pass


							byGEdatabase[catelist[i]][id]["discussion"]["time"].append(status)
							status = temp[0].text
							byGEdatabase[catelist[i]][id]["discussion"]["day"].append(status)


							statusItem=dis[h].find('div',{"class":"instructorColumn"})

							temp =  statusItem.find('p')
							status = temp.text

							byGEdatabase[catelist[i]][id]["instructor"].append(status)

							statusItem=dis[h].find('div',{"class":"locationColumn hide-small"})

							temp =  statusItem.find('p')
							
							status = temp.text.rstrip()

							byGEdatabase[catelist[i]][id]["discussion"]["location"].append(status)
							




					#section
					sectionItem=row[k].find('div',{"class":"sectionColumn"})

					temp = sectionItem.find('a')

					section=temp.contents[0]

					byGEdatabase[catelist[i]][id]["section"].append(section)


					#status
					statusItem=row[k].find('div',{"class":"statusColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					byGEdatabase[catelist[i]][id]["status"].append(status)

					

					#waitlist
					statusItem=row[k].find('div',{"class":"waitlistColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					byGEdatabase[catelist[i]][id]["waitlist"].append(status)

					#time
					statusItem=row[k].find('div',{"class":"timeColumn"})

					temp =  statusItem.find_all('p')
					try:	
						status=getTimeAsInt(temp[1].text)
					except:
						pass


					byGEdatabase[catelist[i]][id]["time"].append(status)
					status = temp[0].text
					byGEdatabase[catelist[i]][id]["day"].append(status)


					statusItem=row[k].find('div',{"class":"instructorColumn"})

					temp =  statusItem.find('p')
					status = temp.text

					byGEdatabase[catelist[i]][id]["instructor"].append(status)

					statusItem=row[k].find('div',{"class":"locationColumn hide-small"})

					try:	
						temp =  statusItem.find('p')
					except:
						pass
					
					status = temp.text.rstrip()

					byGEdatabase[catelist[i]][id]["location"].append(status)
	print(byGEdatabase)






json = json.dumps(byGEdatabase)
with open('byGE.json', 'w') as f:
    f.write(json)

#print(byGEdatabase)
			

