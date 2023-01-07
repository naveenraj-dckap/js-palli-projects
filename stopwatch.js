let [hour, minute, second, milliSecond] = [0, 0, 0, 0]
let intervalId = null


function start() {
    if(!intervalId) intervalId = setInterval(stopwatch, 10)
}

function stop() {
    clearInterval(intervalId)
    intervalId = null
}

function reset() {

    if(intervalId !== null) clearInterval(intervalId)
    hour = 0
    minute = 0
    second = 0
    milliSecond = 0
    addStopwatch()
    intervalId = null
}

document.getElementById("start").addEventListener('click', start)
document.getElementById("stop").addEventListener('click', stop)
document.getElementById("reset").addEventListener('click', reset)


function addStopwatch() {
    let newMs = milliSecond/10
    let newMS = (newMs < 10)? "0" + newMs : newMs
    let newS = (second < 10)? "0" + second : second
    let newM = (minute < 10)? "0" + minute : minute
    let newH = (hour < 10) ?  "0" + hour : hour

    document.getElementById("stopwatch").innerHTML = `${newH} : ${newM} : ${newS} : ${newMS}`

}


function stopwatch() {
    milliSecond+=10

    if(milliSecond === 1000) {
        milliSecond = 0
        second++
    }

    if(second === 60) {
        second = 0
        minute++
    }

    if(minute === 60) {
        minute = 0
        hour++
    }

    addStopwatch()

}