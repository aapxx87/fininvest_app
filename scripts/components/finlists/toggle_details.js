const finListDetalisationVisible = function() {

    let index = 0

    let compFinListArr = document.querySelectorAll('.toggle-click-open')
    let finListTable = document.querySelectorAll('.finlist-table')


    compFinListArr.forEach(function (el, idx) {
        el.addEventListener('click', function () {
            index = idx
            finListTable[index].classList.toggle('visible')
        })
    })

}


finListDetalisationVisible()