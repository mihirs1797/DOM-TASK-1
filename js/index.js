//section containing header image
var sec = document.createElement("section");
var avatar = document.createElement("img");
avatar.src="images/me.jpg";
avatar.className = "avatar";
sec.appendChild(avatar);
//end of section 

//editing the name
var header = document.createElement("h1");
header.className = "name";
header.innerHTML = "MIHIR S";

//create br and hr for general use
var br = document.createElement("BR");
var hr = document.createElement("HR");


//div for bottom gray portion
var bottomGrey = document.createElement("div");
bottomGrey.className = "bottomGrey";

//below section text
var info = document.createElement("p");
info.className = "info";
info.innerHTML = "Balaji Park, Kolhapur 416007    |   819-723-5920    |   mihir.solankar1@gmail.com   |   www.github.com/mi88ir";

//div class row 
var row = document.createElement("div"); //parent
row.className = "row";
var column1 = document.createElement("div"); //child of row
column1.className = "column";
var leftContent = document.createElement("div"); // child of column
leftContent.className = "leftcontent";

//profile section
var profileInfo = document.createElement("div");
var profileHeader = document.createElement("h2");
var descProfile = document.createElement("p");
descProfile.innerHTML = "Innovative optimized solution seeker. Excited to be <br> at the development phase of my new career as a <br> web developer. I am ambitious, adventurous, <br> assiduous and animated.";
profileHeader.innerHTML = "Profile"
profileInfo.append(profileHeader,descProfile);

//skill section
var skillInfo = document.createElement("div");
var skillHeader = document.createElement("h2");
skillHeader.textContent = "Skills"

var tableName1 = document.createElement("p");
tableName1.innerHTML = "Technical Skills";
tableName1.className = "table-header";
tableName1.style.marginLeft = "100px";
var table1 = document.createElement("table");
var tbody1 = document.createElement("tbody");
tbody1.style.height="2px";

var tr1 = document.createElement("TR");
var td1 = document.createElement("TD");
td1.innerHTML = "Javascript";
var td2 = document.createElement("TD");
var input1 = document.createElement("input");
input1.type = "range";
input1.value = "75";
input1.className = "slider";

var tr2 = document.createElement("TR");
var td3 = document.createElement("TD");
td3.innerHTML = "CSS";
var td4 = document.createElement("TD");
var input2 = document.createElement("input");
input2.type = "range";
input2.value = "60";
input2.className = "slider";

var tr3 = document.createElement("TR");
var td5 = document.createElement("TD");
td5.innerHTML = "HTML";
var td6 = document.createElement("TD");
var input3 = document.createElement("input");
input3.type = "range";
input3.value = "85";
input3.className = "slider";

var tr4 = document.createElement("TR");
var td7 = document.createElement("TD");
td7.innerHTML = "React";
var td8 = document.createElement("TD");
var input4 = document.createElement("input");
input4.type = "range";
input4.value = "40";
input4.className = "slider";

var tr5 = document.createElement("TR");
var td9 = document.createElement("TD");
td9.innerHTML = "Redux";
var td10 = document.createElement("TD");
var input5 = document.createElement("input");
input5.type = "range";
input5.value = "40";
input5.className = "slider";

var tr6 = document.createElement("TR");
var td11 = document.createElement("TD");
td11.innerHTML = "MongoDB";
var td12 = document.createElement("TD");
var input6 = document.createElement("input");
input6.type = "range";
input6.value = "60";
input6.className = "slider";

var tr7 = document.createElement("TR");
var td13 = document.createElement("TD");
td13.innerHTML = "Deployment";
var td14 = document.createElement("TD");
var input7 = document.createElement("input");
input7.type = "range";
input7.value = "60";
input7.className = "slider";

//table for additional skills
var tableName2 = document.createElement("p");
tableName2.innerText = "Additional Skills";
tableName2.style.marginLeft = "110px";
var table2 = document.createElement("table");
var tbody2 = document.createElement("tbody");
tbody2.style.height = "2px";


var tr8 = document.createElement("TR");
var td15 = document.createElement("TD");
td15.innerHTML = "Project Management";
var td16 = document.createElement("TD");
var input8 = document.createElement("input");
input8.type = "range";
input8.value = "75";
input8.className = "slider";

var tr9 = document.createElement("TR");
var td17 = document.createElement("TD");
td17.innerHTML = "Recruitment";
var td18 = document.createElement("TD");
var input9 = document.createElement("input");
input9.type = "range";
input9.value = "75";
input9.className = "slider";

var tr10 = document.createElement("TR");
var td19 = document.createElement("TD");
td19.innerHTML = "Business Development";
var td20 = document.createElement("TD");
var input10 = document.createElement("input");
input10.type = "range";
input10.value = "75";
input10.className = "slider";


var tr11 = document.createElement("TR");
var td21 = document.createElement("TD");
td21.innerHTML = "Editing";
var td22 = document.createElement("TD");
var input11 = document.createElement("input");
input11.type = "range";
input11.value = "75";
input11.className = "slider";


var tr12 = document.createElement("TR");
var td23 = document.createElement("TD");
td23.innerHTML = "Fundraising";
var td24 = document.createElement("TD");
var input12 = document.createElement("input");
input12.type = "range";
input12.value = "75";
input12.className = "slider";

//append section of skillinfo
td24.append(input12);
td22.append(input11);
td20.append(input10);
td18.append(input9);
td16.append(input8);
td14.append(input7);
td12.append(input6);
td10.append(input5);
td8.append(input4);
td6.append(input3);
td4.append(input2);
td2.append(input1);

tr12.append(td23,td24);
tr11.append(td21,td22);
tr10.append(td19,td20);
tr9.append(td17,td18);
tr8.append(td15,td16);
tr7.append(td13,td14);
tr6.append(td11,td12);
tr5.append(td9,td10);
tr4.append(td7,td8);
tr3.append(td5,td6);
tr2.append(td3,td4);
tr1.append(td1,td2);
tbody2.append(tr8,tr9,tr10,tr11,tr12);
table2.appendChild(tbody2);
tbody1.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7);
table1.appendChild(tbody1);
skillInfo.append(skillHeader,tableName1,table1,tableName2,table2);
//end of skillinfo

//Work experience section
var workInfo = document.createElement("div");
var workHeader = document.createElement("h2");
workHeader.innerText = "Work Experience";
var table3 = document.createElement("table");
var tr13 = document.createElement("tr");
var td25 = document.createElement("td");
td25.innerHTML = "Event Manager &nbsp;&nbsp;&nbsp;&nbsp;"
var td26 = document.createElement("td");
td26.innerText = "Jan, 2019 to Feb, 2019";
var ul = document.createElement("ul");
var li1 = document.createElement("li");
li1.innerHTML = "Lead and execute all phases of event planning <br>and production spanning committee <br>recruitment, training, vendor relationships and <br> on-site facilitation.";
var li2 = document.createElement("li");
li2.innerHTML = "Brought new business to the organisation <br>through relentless networking and stewardship <br> which helped the company win the bid for the <br> State Department Summit on the Middle East <br>and, the companies largest civic event to date, <br> the United State of Women";
var li3 = document.createElement("li");
li3.innerHTML = "Exercise fiscal control over budget creation,<br>tracking and reporting. Collaborate with <br> employees at all organizational levels to <br> advance cohesive operations.";

ul.append(li1,li2,li3);
tr13.append(td25,td26);
table3.append(tr13);
workInfo.append(workHeader,table3,ul);
//work section end

leftContent.append(profileInfo,skillInfo,workInfo);
column1.append(leftContent);
//left content section end

//vertical line
var vl = document.createElement("vl");
vl.className = "vl";

//right content begin
var column2 = document.createElement("div");
var rightContent = document.createElement("div");
rightContent.className = "rightcontent";


var div2 = document.createElement("div");
var workHeader2 = document.createElement("h2");
workHeader2.innerText = "Work Experience";
var tab1 = document.createElement("table");
var tr_1 = document.createElement("tr");
var td_1 = document.createElement("td");
td_1.innerHTML = "Community Relations Mgr. &nbsp;&nbsp;&nbsp;&nbsp;";
var td_2 = document.createElement("td");
td_2.innerText = "July, 2018 to Dec, 2018";
tr_1.append(td_1,td_2);
tab1.appendChild(tr_1);
var ul2 = document.createElement("ul");
var li4 = document.createElement("li");
li4.innerHTML = "Arranging presentations and pitch deck.";
var li5 = document.createElement("li");
li5.innerHTML = "Designing a PR plan and establishing <br> important focus points.";
var li6 = document.createElement("li");
li6.innerHTML = "Designing, creating and managing content <br>across multiple communication platforms.";
var li7 = document.createElement("li");
li7.innerHTML = "Building relationships with key media players";
ul2.append(li4,li5,li6,li7);
div2.append(workHeader2,tab1,ul2)


var div3 = document.createElement("div");
var edHeader = document.createElement("h2");
edHeader.innerText = "Education";
var tab2 = document.createElement("table");
var tr_2 = document.createElement("tr");
var td_3 = document.createElement("td");
td_3.innerHTML = "B.E Computer Science & Engineering &nbsp;&nbsp;";
var td_4 = document.createElement("td");
td_4.innerText = "July, 2015 to July, 2019";

var msg = document.createElement("p");
msg.innerHTML = "Project-focused intensive program with emphasis <br> on Mongo, Express, React and Javascript (MERN) <br>technical stack.";

var ul3 = document.createElement("ul");
var li8 = document.createElement("li");
li8.innerHTML = "Developed a full-stack web application <br>'RenewU', using React that allows users to <br>explore various aspects of meditation. User's <br>progress is stored on a backend created using <br>Node and MongoDB";
var li9 = document.createElement("li");
li9.innerHTML = "Developed a language learning app, 'Foodie <br>Phonetics' using spaced repetition and a linked <br>list data structure. React was used to create <br>the front end components while Node and <br>Mongo were used to create a backend that <br>stores user data.";
var li10 = document.createElement("li");
li10.innerHTML = "Developed a concierge app, 'Pley', for <br>individuals looking for curated suggestions <br>when visiting a new place. React was use to <br>develop the front end which includes real-time <br>chat, drag and drop and variety of advanced features. The backend, built using Node, <br>Express and Mongo, takes advantage of well- <br>developed RESTful API, Geospatial searching, <br>and user authentication with JWT.";

ul3.append(li8,li9,li10);
tr_2.append(td_3,td_4);
tab2.append(tr_2);
div3.append(edHeader,tab2,msg,ul3);
rightContent.append(div2,div3);
column2.appendChild(rightContent);
row.append(column1,vl,column2);

//driver code
document.body.append(sec,header,br,bottomGrey,info,hr,row);