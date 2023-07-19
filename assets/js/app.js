

window.addEventListener('load', () => {
    //slider
    const swiper = new Swiper('.staff.swiper', {
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 15
            },

            1272: {
                slidesPerView: 4,
                spaceBetween: 20
            },

        }
    });

    const reviewsSwiper = new Swiper('.reviews.swiper', {
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });

    //modals

    const modalBtn = document.querySelectorAll('[data-modal]')
    const modals = document.querySelectorAll('.modal')
    const body = document.querySelector('body')

    let activeModal

    const toggleModal = (id) => {
        const modal = document.querySelector(`.modal#${id}`)
        activeModal = modal

        if (!modal) {
            return false
        }

        modal.classList.toggle('modal_active')

        if (document.querySelector('.modal__active')) {
            body.style.overflow = 'hidden'
        }
    }

    const closeModals = (event) => {
        event.stopPropagation()
        const list = event.target.classList

        if (list.contains('modal') || list.contains('modal__close')) {
            activeModal.classList.remove('modal_active')
            body.style.overflow = 'visible'

        }
    }

    modals.forEach(el => el.addEventListener('click', closeModals))

    modalBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation()
            body.style.overflow = 'hidden'
            toggleModal(btn.getAttribute('data-modal'), e)
        })
    })

    let products = `[
        { "massage" : [
            {
                "id": "massage-1",
                "name": "Массаж шейно-воротниковой зоны 20 мин",
                "price": "1500"
            },
            {
                "id": "massage-2",
                "name": "Массаж головы и шеи",
                "price": "1800"
            },
            {
                "id": "massage-3",
                "name": "Массаж рук до локтя 20 мин",
                "price": "1500"
            },
            {
                "id": "massage-4",
                "name": "Массаж рук от плеча до кончиков пальцев 30 мин",
                "price": "1500"
            },
            {
                "id": "massage-5",
                "name": "Классический массаж спины 45мин",
                "price": "2800"
            },
            {
                "id": "massage-6",
                "name": "Спортивный массаж всего тела 1ч",
                "price": "3800"
            }
        ]},
        { "manicure" : [
            {
                "id": "manicure-1",
                "name": "Снятие гель-лак",
                "price": "500"
            },
            {
                "id": "manicure-2",
                "name": "Маникюр",
                "price": "1000"
            },
            {
                "id": "manicure-3",
                "name": "Массаж рук до локтя 20 мин",
                "price": "1500"
            },
            {
                "id": "manicure-4",
                "name": "Массаж рук от плеча до кончиков пальцев 30 мин",
                "price": "1500"
            },
            {
                "id": "manicure-5",
                "name": "Классический массаж спины 45мин",
                "price": "2800"
            },
            {
                "id": "manicure-6",
                "name": "Спортивный массаж всего тела 1ч",
                "price": "3800"
            }
        ]},
        {"cosmetologic" : [
            {
                "id": "cosmetologic-1",
                "name": "Окрашивание ресниц",
                "price": "1500"
            },
            {
                "id": "cosmetologic-2",
                "name": "Коррекция бровей",
                "price": "1800"
            },
            {
                "id": "cosmetologic-3",
                "name": "Окрашивание бровей хна",
                "price": "1500"
            },
            {
                "id": "cosmetologic-4",
                "name": "Массаж рук от плеча до кончиков пальцев 30 мин",
                "price": "1500"
            },
            {
                "id": "cosmetologic-5",
                "name": "Классический массаж спины 45мин",
                "price": "2800"
            },
            {
                "id": "cosmetologic-6",
                "name": "Спортивный массаж всего тела 1ч",
                "price": "3800"
            }
        ]}
    ] `


    let myJsonObject = JSON.parse(products);


    myJsonObject.forEach(container => {
            let category = Object.keys(container)
            let serviceWrap = document.querySelector(`#${category} .service-wrapper`)

            console.log(serviceWrap)
            container[category].forEach(item => {
                console.log(item)
                let elem = document.createElement("div");
                elem.classList.add('service')
                elem.id = item.id
                elem.innerHTML = `
                            <div class="service__title">
                            ${item.name}
                            </div>
                            <div class="service__wrap">
                                <div class="service__info">
                                    <span>Стоимость</span>
                                    <span>${item.price} ₽</span>
                                </div>
                                <a href="#" class="button">В корзину</a>
                            </div>
                    `;
                serviceWrap.appendChild(elem);
            })
    })

})
