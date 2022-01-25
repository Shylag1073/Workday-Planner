
$(".saveBtn").click(function (event) {

    event.preventDefault()
    var textarea = $(this).siblings('textarea').val()
    var label = $(this).siblings('p').text()
    localStorage.setItem(label, textarea)
})

$(document).ready(function () {
    $('#9').val(localStorage.getItem('  9AM'))
    console.log(localStorage.getItem('  9AM'));
})
$(document).ready(function () {
    $('#10').val(localStorage.getItem('10AM'))
    console.log(localStorage.getItem('10AM'));
})
$(document).ready(function () {
    $('#11').val(localStorage.getItem('11AM'))
    console.log(localStorage.getItem('11AM'));
})
$(document).ready(function () {
    $('#12').val(localStorage.getItem('12PM'))
    console.log(localStorage.getItem('12PM'));
})
$(document).ready(function () {
    $('#13').val(localStorage.getItem('  1PM'))
    console.log(localStorage.getItem('  1PM'));
})
$(document).ready(function () {
    $('#14').val(localStorage.getItem('  2PM'))
    console.log(localStorage.getItem('  2PM'));
})
$(document).ready(function () {
    $('#15').val(localStorage.getItem('  3PM'))
    console.log(localStorage.getItem('  3PM'));
})
$(document).ready(function () {
    $('#16').val(localStorage.getItem('  4PM'))
    console.log(localStorage.getItem('  4PM'));
})

document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

$(document).ready(function () {
    for (i = 9; i <= 16; i++) {
        var timeBlock = parseInt($('#' + i).attr('id'))
        var currentTime = parseInt(moment().format('H'));

        console.log(timeBlock)
        console.log(currentTime)
        if (timeBlock < currentTime) {
            // console.log('class = past')
            $('#' + i).siblings('textarea').addClass('past')
        }
        else if (timeBlock > currentTime) {
            // console.log('class = future')
            $('#' + i).siblings('textarea').addClass('future')
        }
        else if (timeBlock = currentTime) {
            // console.log('class = present')
            $('#' + i).siblings('textarea').addClass('present')
        }
    }
});