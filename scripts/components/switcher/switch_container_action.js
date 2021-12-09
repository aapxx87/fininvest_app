const containerInvestments = document.querySelector('.container-portfolio-quotes')
const containerFinlists = document.querySelector('.container-finlists')
const btnFinlists = document.querySelector('.btn-finlists')
const btnInvestments = document.querySelector('.btn-investments')



btnFinlists.addEventListener('click', function () {
    containerInvestments.style.display = 'none'
    containerFinlists.style.display = 'block'
})

btnInvestments.addEventListener('click', function () {
    containerInvestments.style.display = 'block'
    containerFinlists.style.display = 'none'
})


