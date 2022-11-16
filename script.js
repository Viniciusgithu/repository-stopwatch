let counter = document.querySelector("#counter")

let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#pause")
let btnReset = document.querySelector("#reset")


let hr = 0;
let min = 0;
let seg = 0;

let tempo = 1000; //Quantos milésimos valem 1 segundo? 
let cron;

function start(){
    cron = setInterval(()=> {
        timer();
    }, tempo);
}

function pause(){
    clearInterval(cron);
    return pause;
}

function reset(){
    clearInterval(cron);
    hr = 0;
    min = 0;
    seg = 0;
    counter.innerText = '00:00:00';
}

function timer(){
    seg++;

    if(seg === 60){
        seg = 0;
        min++;
        if (min == 60){
            min = 0;
            hr++;
        }
    }

    let cont = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);

    counter.innerText = cont;
}
