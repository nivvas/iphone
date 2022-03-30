const menu = () => {

    const menu = document.querySelectorAll('.characteristics__item')

    menu.forEach(item => {
        const menuBtn = item.querySelector('.characteristics__title')
        const menuClicked = item.querySelector('.characteristics__description')

        menuBtn.addEventListener('click', () => {
            if(menuClicked.classList.contains('open')){
                menuClicked.style.height = ''
            }else{
                menuClicked.style.height = menuClicked.scrollHeight + 'px'
            }
            menuBtn.classList.toggle('active')
            menuClicked.classList.toggle('open')
        })
    })
}

menu()