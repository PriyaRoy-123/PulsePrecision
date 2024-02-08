//Set id  get element by id
var hours = 0;
var minut = 0;
var second = 0;
var milisecond = 0;
var headingTextHour = document.getElementById("hours");
var headingTextMint = document.getElementById("mint");
var headingTextsecond = document.getElementById("second");
var headingTextmilisecond = document.getElementById("milisecond");
var interval;

runfunc = function(){
    milisecond = milisecond+1;
    headingTextmilisecond.innerHTML = milisecond;

    if(milisecond >= 10){
        second = second+1;
        headingTextsecond.innerHTML = second;
        milisecond = 0;
    }
    else if(second >= 60){
        minut = minut+1;
        headingTextMint.innerText = minut;
        second = 0;
    }
    else if(minut >= 60){
        hours = hours+1;
        headingTextHour.innerHTML = hours;
        minut = 0;
    }
}


function start(){
   interval = setInterval(runfunc,100);
   document.getElementById("startbtn").disabled = true;
}

function pause(){
    clearInterval(interval)
    document.getElementById("startbtn").disabled = false;
}
function reset(){
    milisecond = 0;
    second = 0;
    minut = 0;
    hours = 0;
    headingTextmilisecond.innerHTML = milisecond;
    headingTextsecond.innerText = second;
    headingTextMint.innerHTML = minut;
    headingTextHour.innerHTML = hours;
    document.getElementById("startbtn").disabled = false;
}

//Take data from use:
var userDataCollect = [];
var dataCollect 
function saveData(){
    var userName = document.getElementById("userName");
    alert("Data Added Successfully")
    userDataCollect.push(userName.value+" ");    
}
function displayHistory(){
    document.getElementById("showDtaUser").innerHTML = userDataCollect;
    alert("Let's See User Name Use This Application")
}
