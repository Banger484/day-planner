var timeDisplay = document.getElementById('currentDay')
var currentHour = moment().format('HH')
var rows = document.querySelectorAll('.row')
var saveButtons = document.getElementsByClassName('saveBtn')

timeDisplay.textContent = moment().format('dddd, MMMM Do')

for(let i = 0; i < rows.length; i++) {
    var hour = i + 9
    if(hour == currentHour) {
        rows[i].setAttribute('class', 'present row time-block')
        rows[i].children[1].textContent = localStorage.getItem(`${hour} am`)
    }
    if(hour > currentHour) {
        rows[i].setAttribute('class', 'future row time-block')
        rows[i].children[1].textContent = localStorage.getItem(`${hour} am`)
    }
    if (hour < currentHour) {
        rows[i].setAttribute('class', 'past row time-block')
        rows[i].children[1].textContent = localStorage.getItem(`${hour} am`)
    }
}
for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', function () {
        var hour = i + 9
        localStorage.setItem(`${hour} am`, rows[i].children[1].value)
    })
}