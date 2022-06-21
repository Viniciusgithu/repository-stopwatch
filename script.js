
let btnStart = document.getElementById("start")
let th = document.getElementById("th")
let seconds = document.getElementById("seconds")
let hour = document.getElementById("seconds")
let minutes = document.getElementById("minutes")

let startTimer
let ms = 0
let seg = 0
let min = 0
let hr = 0

function start() {
    startTimer = setInterval(function () {
        ms++
        if(ms == 100) {
            seg++
            ms = 0
        }
        atualizaValor()
    }, 10);
}

function atualizaValor() {
    th.innerHTML = ms
    seconds.innerHTML = seg
}

btnStart.addEventListener("click", start)
