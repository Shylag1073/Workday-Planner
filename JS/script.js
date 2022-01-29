
$(".saveBtn").click(function (event) {

    event.preventDefault()
    var textarea = $(this).siblings('.time-block').val()
    var paragraph = $(this).siblings('p').text()
    localStorage.setItem(paragraph, textarea)
    console.log(paragraph)
    console.log(textarea)
})

$(document).ready(function () {
    $('#9').val(localStorage.getItem('9a'));
    document.getElementById("9").innerHTML;
    console.log(localStorage.getItem('9a'));
})
$(document).ready(function () {
    $('#10').val(localStorage.getItem('10a'))
    console.log(localStorage.getItem('10a'));
})
$(document).ready(function () {
    $('#11').val(localStorage.getItem('11a'))
    console.log(localStorage.getItem('11a'));
})
$(document).ready(function () {
    $('#12').val(localStorage.getItem('12p'))
    console.log(localStorage.getItem('12p'));
})
$(document).ready(function () {
    //var whateverisinthere = document.getElementById("1p").innerHTML
    //console.log(whateverisinthere)
    $('#13').val(localStorage.getItem('1p'))
    console.log(localStorage.getItem('1p'));
    //localStorage.setItem('1p')
})
$(document).ready(function () {
    $('#14').val(localStorage.getItem('2p'))
    console.log(localStorage.getItem('2p'));
})
$(document).ready(function () {
    $('#15').val(localStorage.getItem('3p'))
    console.log(localStorage.getItem('3p'));
})
$(document).ready(function () {
    $('#16').val(localStorage.getItem('4p'))
    console.log(localStorage.getItem('4p'));
})

window.onload = function () {
    var para = document.getElementById('11').val
    var timeBlock = $(this).siblings('p').text()
    var getItemFromLs = localStorage.getItem('11AM')
    var tenFromLs = localStorage.getItem('10AM')
    var twelFromLs = localStorage.getItem('12PM')
    var oneFromLs = localStorage.getItem('1PM')
    var twoFromLs = localStorage.getItem('2PM')
    var threeFromLs = localStorage.getItem('3PM')
    var fourFromLs = localStorage.getItem('4PM')
    var nineFromLs = localStorage.getItem('9PM')
    var tenArea = document.getElementById('10a')
    var twelArea = document.getElementById('12p')
    var oneArea = document.getElementById('1p')
    var twoArea = document.getElementById('2p')
    var threeArea = document.getElementById('3p')
    var fourArea = document.getElementById('4p')
    var nineArea = document.getElementById('9a')
    var areaId = document.getElementById('11a')

    tenArea.value = tenFromLs
    areaId.value = getItemFromLs
    twelArea.value = twelFromLs
    oneArea.value = oneFromLs
    twoArea.value = twoFromLs
    threeArea.value = threeFromLs
    fourArea.value = fourFromLs

    //document.write(getItemFromLs);
    console.log(areaId)


    console.log(para, timeBlock)
    console.log(getItemFromLs)


}

//// Date and time infoooooo/////////
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