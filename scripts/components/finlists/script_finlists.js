const finlistsContainer = document.querySelector('.container-finlists')



const display_finlists = function (arr) {

    // массив в который складываем все mov, для того, чтобы потом подсчитать суммарное Total Balance
    const totalMovementsSum = []

arr.forEach(function (el) {

    const finlistTotal = []

    let htmlMovements = ``

    el.finlistMovements.forEach(function (elMov) {

        if(elMov.exRate === 0) {
            htmlMovements = htmlMovements + `
             <tr class="tr">
                <td class="col-date">${elMov.movDate}</td>
                <td class="col-amount">${elMov.movAmount}</td>
            </tr>
        `
        } else {

            htmlMovements = htmlMovements + `
             <tr class="tr">
                <td class="col-date">${elMov.movDate}</td>
                <td class="col-amount">${elMov.movAmount}</td>
                <td class="col-amount">${elMov.exRate}</td>
            </tr>
        `
        }

        finlistTotal.push(elMov.movAmount)

        // если баксы, то пересчитываем в рубли
        elMov.exRate === 0 ? totalMovementsSum.push(elMov.movAmount) : totalMovementsSum.push(elMov.movAmount * 72)

    })

    const finlistTotalSum = finlistTotal.reduce(function (acc, cur) {
        return acc + cur
    }, 0)



    const htmlFinal = `
         <div class="comp-finList-box">
         
            <div class="finlist-header">
              <div class="toggle-click-open">
                <h3 class="finList-title">${el.finlistName} <span>(${el.finlistCurrency})</span></h3>
                <h3 class="finList-total">Total: <span>${new Intl.NumberFormat('ru-RU').format(finlistTotalSum)}</span></h3>
              </div>
           </div>
         
           <div class="finlist-table">
             <h3 class="table-title">Activity</h3>
               <table class="table">
                    ${htmlMovements}
               </table>
           </div>
           
         </div>  
    `
    finlistsContainer.insertAdjacentHTML('beforeend', htmlFinal)

})


    const totalBalance = totalMovementsSum.reduce(function (acc, cur) {
        return acc + cur
    }, 0)

    const html = `
         <div class="container-accumulate-balance">
      <p class="accumulate-number">${new Intl.NumberFormat('ru-RU').format(totalBalance)} <span>Р</span> </p>
      <p class="accumulate-title">Total saved</p>
     </div>
    `


    finlistsContainer.insertAdjacentHTML('afterbegin', html)

}



display_finlists(finlistsData)