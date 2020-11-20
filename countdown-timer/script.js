// The JavaScript file!
// need ending date - current date = time left, days, hours, minutes, and seconds
// Most likely need to use remainders to get it to work properly
const SoftwareMStart = 'May 3, 2021';

function countdowntimer(){
    //make use of the existing JS date objects
    const SoftMDate = new Date(SoftwareMStart);
    //create current date and time
    const currentDate = new Date();
    
    //output retrieve seconds
    let timeLeft = Math.abs(SoftMDate-currentDate)/1000;    

    //months are very rough -- countdown way more accurate in last month :)
    const months = Math.floor(timeLeft/3600/24/30.4167);
    timeLeft = timeLeft - Math.floor(months*3600*24*30.4167);
    const days = Math.floor(timeLeft/3600/24);
    const hours = Math.floor(timeLeft/3600%24);
    const minutes = Math.floor(timeLeft/60%60);
    const seconds = Math.floor(timeLeft%60);
    
    document.getElementById('months').innerHTML = months;
    document.getElementById('days').innerHTML = days; 
    document.getElementById('hours').innerHTML = hours; 
    document.getElementById('minutes').innerHTML = minutes; 
    document.getElementById('seconds').innerHTML = seconds;  

}

function convertTime(time, divider){
    return Math.floor(time/divider);
}

//Call countdown time every 100 ms.
setInterval(countdowntimer, 100);