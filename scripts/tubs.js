const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const tabsTitle = document.querySelector('.card-details__title')
    const tabsPrice = document.querySelector('.card-details__price')
    const tabsImages = document.querySelectorAll('.card__image_item')
    const indexTitle = document.querySelector('title')
    const discription = document.querySelector('.description__memory')

    
    const options = [
        {
            name: 'Graphite',
            memory: '128',
            price: '99 999',
            img: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: '256',
            price: '139 999',
            img: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: '159 999',
            img: 'img/iPhone-sierra_blue.webp'
        }
    ]

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${options[index].memory}GB ${options[index].name}`
        tabsPrice.textContent = `${options[index].price}₽`
        tabsImages.forEach((img) => {
            img.setAttribute('src', options[index].img)
        })
        indexTitle.textContent = `iPhone 13 Pro ${options[index].memory}GB ${options[index].name}`
        discription.textContent = `Встроенная память (ROM) ${options[index].memory} ГБ`
    }

    const changeActive = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })

        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActive(index)
        })
    })

    changeContent(0)

}
tabsFunc()
