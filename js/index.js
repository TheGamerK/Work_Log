// DATA VARIABLES

var running = false,
    tenths  = 0,
    seconds = 0,
    minutes = 0,
    hours   = 0,
    target  = 0;
 


// DOM REFERENCES

var output = document.getElementById("output"),
progressBar = document.getElementById("progress"),
startPauseBtn = document.getElementById("startPause"),
targetOutput = document.getElementById("targetOutput"),
mstBtn = document.getElementById("mstBtn");



// START/PAUSE THE APPLICATION WHEN THE startPause BUTTON IS CLICKED

function startPause(){
    if(!running){
        running = true;
        increment();
        startPauseBtn.innerHTML = "PAUSE";
    }
    else{
        running = false;
        startPauseBtn.innerHTML = "START";
    }
}

// MAKE THE APPLICATION COUNT

function increment() {
    if(running) {
        setTimeout(function() {
            tenths++;
            if(tenths >= 10) {
                tenths = 0;
                seconds++;
                if(seconds >= 60) {
                    seconds = 0;
                    minutes++;
                }
                if(minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            } 
    
                    if(target == minutes) {
                        if(target == 1) {
                            target = 5;
                        }
                        else {
                            target *= 2;
                        }
                    }
output.innerHTML = hours + ":" + minutes  + ":" + seconds /*+ "." + tenths*/;

var width = (minutes + (seconds/60))/target * 100; 

    progressBar.style.width = width + "%";   
    targetOutput.innerHTML  = target;

      increment();
        }, 100)
    }  
}


//

//
// SAVE A MILESTONE
var person;
var milestone = "Time";

function saveMilestone() {
    var person = prompt("What did you work on?", "");
//

//
    var milestone = $("#output").html();
        $("ol").append('<div class="collapse transparent"> <h2>'+ milestone + '</h2> <p>'+person+'</p></div>');
    
    //<script src="js/js.js"></script>
add_toggle();

//    
    
    names.push(milestone + person + "<br>");
}

// RESET ALL THE VARIABLES AND DOM REFS TO DEFAULT VALUES

function reset() {
    running = false;
    tenths  = 0;
    seconds = 0;
    minutes = 0;
    hours   = 0;
    target  = 0;

        $("ol").empty();
  
    startPauseBtn.innerHTML = "START";
    output.innerHTML = hours + ":" + minutes  + ":" + seconds /*+ "." + tenths*/;
    progressBar.style.width = "0px";
    targetOutput.innerHTML  = target;
}


function add_toggle(){
   
var milestone_divs = document.getElementsByClassName("collapse");
    for(i=0;i<milestone_divs.length;i++){        
        milestone_divs[i].onclick=function(){
           
        if(!this.style.overflow | this.style.overflow=="hidden"){
            this.style.overflow="visible";
            
        }else{
            
            this.style.overflow="hidden";
            
        }
            
        }
    
    }
    
  
}




//
//
//
function lg(){
var str = document.getElementsByTagName('html')[0].innerHTML;

    var begin = str.indexOf("<ol>");
    var end = str.indexOf("<!--Stop-->");
    //alert(begin+','+end);
    var audit = str.slice(begin,end);
    
    //console.log(audit);
    alert(audit);
}

//
//
//


var x = localStorage.getItem("newL");

    //alert(x);

var names = [];
document.getElementById("demo").innerHTML = names;

var newL = names;

function add(){
 
    //alert(milestone);
    names.push(milestone);
    document.getElementById("demo").innerHTML = names;
    localStorage.setItem("newL", JSON.stringify(newL));
    var storedNames = JSON.parse(localStorage.getItem("newL"));
    
}

    //alert(names +  " js names array");

    //alert(typeof(names));
    //alert(newL);
    

    //alert(localStorage["names"] + " local storage names");

    
    //alert(storedNames);

   // alert(storedNames + " js names array brought back from local storage");

    //alert(typeof(storedNames));



function myFunction(){
 alert(newL);
 alert(localStorage.getItem("newL"));
}

function clear(){
    
    window.localStorage.clear();
    
}