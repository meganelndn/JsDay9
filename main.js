/* // dates & times
const before = new Date("October 13 2021 7:37:57");
const now = new Date();

console.log(now)
console.log(typeof now) // Check type

// year, months, day, times
console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth());
console.log("getDate:", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

// timestamps
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())

const diff = now.getTime() - before.getTime();
console.log(diff) // amount of ms between those two dates

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days)

console.log(`the blog was written ${days} days ago`)

// converting timestamps into date objects
const timestamp = 167593474990;
console.log(new Date(timestamp)) */



// EXERCISES

// Exercise 52
// Create a date object in JavaScript
// Get the year, the month, the date from the objects different methods and create a string that shows the date of today. Like this:
// 3/11/2020
console.info("%cExercise 52", "color: black; background-color: pink");

const div = document.querySelector("div");
const time = new Date();

const date = time.getDate();
const month = time.getMonth();
const year = time.getFullYear();

let html = `<div>${date}/${month}/${year}</div>`;

div.innerHTML += html;

// Exercise 53
// Take a look at the website: http://erdetfredag.dk/
// The only thing that the website does is telling you if it is Friday or not.
// Create the JavaScript programming for the website.
console.info("%cExercise 53", "color: black; background-color: pink");

//const day = time.getDay();
function checkIfFriday() {
    if (time.getDay() === 5) {
        document.querySelector(".answer").textContent = "Ja";
    } else {
        document.querySelector(".answer").textContent = "Nej";
    }
} 
checkIfFriday();

// Exercise 54
// Find the timestamp (milliseconds since 1. january 1970) for the destruction of the Berlin Wall. The official date is the 9th of November 1989.
console.info("%cExercise 54", "color: black; background-color: pink");

const berlinWall = new Date("January 1 1970 7:30:00");
const diff = time.getTime() - berlinWall.getTime();
console.log(diff)

// Exercise 55
// Create the same date format with dateFns that you have created in exercise 52.
console.info("%cExercise 55", "color: black; background-color: pink");

const dateFnsToday = dateFns.format((time, "MM/dd/yyyy"));
console.log(dateFnsToday)

// Exercise 56
// use the dateFns distanceInWords method to create the time distance in word since from todays date and since the fall of the Berlin Wall (the 9th of November 1989).
// Find the easiest way to translate the date distanceInWords into your own language e.g. (Portugize, Slovakian, Russian, Polish, Romanian).
console.info("%cExercise 56", "color: black; background-color: pink");

const berlinWallDate = new Date("November 9 1989 0:00:00");
const now = new Date();

const dist = dateFns.distanceInWords(now, berlinWallDate, {addSuffix: true});
console.log(dist)

// Exercise 57
// Use setInterval method and the date object to create your own clock in the browser.
console.info("%cExercise 57", "color: black; background-color: pink");

// DIGITAL CLOCK
const clock = document.querySelector(".clock");
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    let html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;

    clock.innerHTML = html;
}
// call every 1sec
setInterval(tick, 1000); 


// SECTION 11 UDEMY TUTORIAL

// date-fns library
console.log(dateFns.isToday(now)) // true
// formatting options
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));
// comparing dates
const before = new Date("Wednesday 13 March 2021 04:00:00");
console.log(dateFns.distanceInWords(now, before, {addSuffix: true})); 