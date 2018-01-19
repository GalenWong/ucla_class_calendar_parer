# ucla_class_calendar_parser

### Dependencies

	- Python 3.x
	- BeautifulSoup4
	- Selenium 

This is a hackathon (Hack on the Hill @ UCLA) project by **Brendan Xiong, Chris Lam, Galen Wong (me).**

The problem we are trying to solve is that the current official class planner is very slow. Each click on the webpage will send a server request for class information. Students are already stressed out by planning classes. The slow and obnoxious class planner just ruins everyone's day.

The basic idea is that the **PYTHON** scripts will parse the school website to get the schedule of classes, then organising them into **JSON** files. When user uses the webpage, the JSON file will be included into the **Javascript** and be sent to the users local memory. The localised database eliminates the neccessity to send server request, increasing access speed.

My main role in the project was writing the python code that parse the school calendar from the website. 

Since the school website calendar has a definite and predictable structure for all pages, it is possible to write a loop to go through all the pages and use **BEAUTIFULSOUP** to parse the html header and retrieve the information. However, before that, the website needs to receive a button click, then it will send request and retrieve class info. I used **SELENIUM** to simulate the click. 

Thanks to my teammate for the work on the HTML and JAVASCRIPT.
