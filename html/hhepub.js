

//*****************************************************************************
//Functions for Expandable Sections

function doSection (secNum){
	//display the section if it's not displayed; hide it if it is displayed
	if (secNum.style.display=="none"){secNum.style.display=""}
	else{secNum.style.display="none"}
}

function noSection (secNum){
	//remove the section when user clicks in the opened DIV
	if (secNum.style.display==""){secNum.style.display="none"}
}

function doExpand(paraNum,arrowNum){
	//expand the paragraph and rotate the arrow; collapse and rotate it back
	if (paraNum.style.display=="none"){paraNum.style.display="";arrowNum.src="arrowdn.gif"}
	else{paraNum.style.display="none";arrowNum.src="arrowrt.gif"}
}


//*****************************************************************************
//Functions control the behavior of the Go Arrows.

function liteGo(spNo){
	spNo.style.background="#cc0033";
	spNo.style.color="#FFFFFF";
}

function liteOff(spNo){
	spNo.style.background="transparent";
	spNo.style.color="#000000";
}


//*****************************************************************************
// Functions for Typing Text Special Effect

var it=0 //Global variable 

function InitiliseTyping(){
	mytext=typing.innerText;
	var myheight=typing.offsetHeight;
	typing.innerText='';
	document.all.typing.style.height=myheight;
	document.all.typing.style.visibility="visible";
	TypeText();
}

function TypeText(){
	var TypeInteval=100;  //Speed Interval
	typing.insertAdjacentText("beforeEnd",mytext.charAt(it));
	if (it<mytext.length-1){
		it++;
		setTimeout("TypeText()",TypeInteval);
	}
	else
	 return;
}

//*****************************************************************************
//Function for Magic Text Special Effect

var cnt=new Array()

function changetext(whichcontent){
        if (document.all)
        MagicArea.innerHTML=whichcontent.innerHTML}
