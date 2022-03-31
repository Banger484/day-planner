var timeDisplay = document.getElementById('currentDay')
var currentHour = moment().format('HH')
var rows = document.querySelectorAll('.row')
var saveButtons = document.getElementsByClassName('saveBtn')

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
    }
}
for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', function () {
        localStorage.setItem(rows[i].children[1].value)
    })
}




