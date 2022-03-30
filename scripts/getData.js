const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    const btn = document.querySelector('.cross-sell__add')
    let howmuch = 4
    let count = 1

    const render = (data) => {
        list.innerHTML = ""

        data.forEach(item => {

            list.insertAdjacentHTML("beforeend", `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                        <h3 class="cross-sell__title">${item.name}</h3>
                        <p class="cross-sell__price">${item.price}₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `)
        });
    }

    const slicearray = (data, index) => {
        return data.slice(0, index)
    }

    const opencards = (data) => {
        const newhowmuch = howmuch * count
        render(slicearray(data, newhowmuch))

        if (data.length > newhowmuch) {
            count = count + 1
        } else {
            //del btn
            btn.style.display = 'none'
        }

    }

    const getGoods = () => {
        fetch('../cross-sell-dbase/dbase.json')

            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('error 404')
                }

            })
            .then((data) => {
                opencards(data)
            })
            .catch((error) => {
                console.error(error.message)
            })
            .finally(() => {
                console.log('successful')
            })

    }

    btn.addEventListener('click', getGoods)

    getGoods()
}

getData()
