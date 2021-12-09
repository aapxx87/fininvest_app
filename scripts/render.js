const containerMain = document.querySelector('.container-main')

const render_DisplayComponents = function () {

    containerMain.insertAdjacentHTML('beforebegin', `
      ${switch_container_html()}
      ${finlists_container_html()}
    `)

}


render_DisplayComponents()

