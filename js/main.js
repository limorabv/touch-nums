'use strict'

var gNums = [];
var gLastInSequene = 0;
var gInterval;
var gtime = 0;
var gIsGameStart = false;
var gSize = 0



function startGame(size){
    clearInterval(gInterval);
    gIsGameStart = false;
    var elTimer = document.querySelector('.timer');
    elTimer.innerHTML = `<h2>0.000</h2>`
    gtime = 0;
    gLastInSequene = 0;

    //creating gNums
    for(var i=0; i<size; i++){
        gNums[i] = i+1;
    }
    gSize =size;

    shuffle(gNums);
    renderTable(gNums,size);


}

// function init(size){
//     shuffle(gNums);
//     renderTable(gNums);

// }

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
  }


function renderTable(board){
    var elTbody = document.querySelector('tbody');
    var elStr ='';

    for(var i = 0; i<Math.sqrt(gSize); i++){
        elStr += '<tr>';
        for(var j =0; j<Math.sqrt(gSize); j++){
            console.log(gNums[i*Math.sqrt(gSize)+j]);
            elStr += `<td onclick="numClicked(this)">${board[i*Math.sqrt(gSize)+j]}</td>`
        }
        elStr += '</tr>';
        elTbody.innerHTML = elStr;

    }
    elStr ='';
}  

function numClicked(elTd){
    if(!gIsGameStart){
        gIsGameStart = true;
        startTime()
    }
    var numberClicked = +elTd.innerText;
    if(numberClicked === gLastInSequene+1){
        gLastInSequene++;
        elTd.style.backgroundColor = 'greenyellow'
        console.log("have sequence");
        
    }
    if(gLastInSequene === gSize){
        console.log("finish");
        clearInterval(gInterval);
        gtime = 0;
        gLastInSequene = 0;
        gIsGameStart = false;

    }
}


function setTime(){
    gtime ++;
    var elTimer = document.querySelector('.timer');
    var pretyTime = (gtime/1000).toFixed(3)
    elTimer.innerHTML = `<h2>${pretyTime}</h2>`
}

function startTime(){
    gInterval = setInterval(setTime, 1000);
}


// renderTable(gNums);

// shuffle(gNums);
// shuffle(gNums);



