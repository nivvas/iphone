const form = () => {
    const btn = document.querySelector('.card-details__button_delivery')
    const popup = document.querySelector('.modal')
    const closepopup = document.querySelector('.modal__close')
    const titlepopup = document.querySelector('.modal__title')
    const titleiphone = document.querySelector('.card-details__title')
    const popupbtn = popup.querySelector('.button_buy modal__submit')
    const form = popup.querySelector('form')


    btn.addEventListener('click', () => {
        popup.style.display = 'flex'
        if (popup.style.display === 'flex') {
            closepopup.addEventListener('click', () => {
                popup.style.display = 'none'
            })
            titlepopup.textContent = titleiphone.textContent

            form.addEventListener('submit', (event) => {
                event.preventDefault()
                const conclucion = {}
                const label = popup.querySelectorAll('.modal__label')
                label.forEach(item => {

                    const lableSpan = item.querySelector('.modal__label-text')
                    const lableForm = item.querySelector('.modal__input')
                    conclucion[lableSpan.textContent] = lableForm.value

                });

                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(conclucion),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then(() => {
                        console.dir(conclucion)
                    })
            })


        }
    })
}

form()