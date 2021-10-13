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


/* // DIGITAL CLOCK
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
setInterval(tick, 1000); */


// date-fns library
const now = new Date();
console.log(dateFns.isToday(now)) // true

// formatting options
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

// comparing dates
const before = new Date("Wednesday 13 March 2021 04:00:00");

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));