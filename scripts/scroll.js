const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a')
    const linksec = document.querySelector('.card-details__link-characteristics')

    const array = [...links, linksec]

    seamless.polyfill();

    array.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault()

            const id = element.getAttribute('href').substring(1)
            const section = document.getElementById(id)

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    })
}
scrollFunc()

