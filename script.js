var timeDisplay = document.getElementById('currentDay')
var currentHour = moment().format('HH')
var rows = document.querySelectorAll('.row')

timeDisplay.textContent = moment().format('dddd, MMMM Do')

for(let i = 0; i < rows.length; i++) {
    if(i + 9 == currentHour) {
        rows[i].setAttribute('class', 'present row time-block')
    }
    if(i + 9 > currentHour) {
        rows[i].setAttribute('class', 'future row time-block')
    }
    if (i + 9 < currentHour) {
        rows[i].setAttribute('class', 'past row time-block')
        console.log(rows[i])
    }
}






