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
        autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            1272: {
                slidesPerView: 4,
                spaceBetween: 20
            },

        }
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

    //data
    let jsonData = `
        {
            "services": [
                {
                    "massage": [
                        {
                            "id": "massage-1",
                            "name": "Массаж шейно-воротниковой зоны 20 мин",
                            "price": 1500
                        },
                        {
                            "id": "massage-2",
                            "name": "Массаж головы и шеи",
                            "price": 1800
                        },
                        {
                            "id": "massage-3",
                            "name": "Массаж рук до локтя 20 мин",
                            "price": 1500
                        },
                        {
                            "id": "massage-4",
                            "name": "Массаж рук от плеча до кончиков пальцев 30 мин",
                            "price": 1500
                        },
                        {
                            "id": "massage-5",
                            "name": "Классический массаж спины 45мин",
                            "price": 2800
                        },
                        {
                            "id": "massage-6",
                            "name": "Спортивный массаж всего тела 1ч",
                            "price": 3800
                        }
                    ]
                },
                {
                    "manicure": [
                        {
                            "id": "manicure-1",
                            "name": "Снятие гель-лак",
                            "price": 500
                        },
                        {
                            "id": "manicure-2",
                            "name": "Маникюр",
                            "price": 1000
                        },
                        {
                            "id": "manicure-3",
                            "name": "Массаж рук до локтя 20 мин",
                            "price": 1500
                        },
                        {
                            "id": "manicure-4",
                            "name": "Массаж рук от плеча до кончиков пальцев 30 мин",
                            "price": 1500
                        },
                        {
                            "id": "manicure-5",
                            "name": "Классический массаж спины 45мин",
                            "price": 2000
                        },
                        {
                            "id": "manicure-6",
                            "name": "Спортивный массаж всего тела 1ч",
                            "price": 2800
                        }
                    ]
                },
                {
                    "cosmetologic": [
                        {
                            "id": "cosmetologic-1",
                            "name": "Окрашивание ресниц",
                            "price": 1500
                        },
                        {
                            "id": "cosmetologic-2",
                            "name": "Коррекция бровей",
                            "price": 1800
                        },
                        {
                            "id": "cosmetologic-3",
                            "name": "Окрашивание бровей хна",
                            "price": 1500
                        },
                        {
                            "id": "cosmetologic-4",
                            "name": "Массаж рук от плеча до кончиков пальцев 30 мин",
                            "price": 1500
                        },
                        {
                            "id": "cosmetologic-5",
                            "name": "Классический массаж спины 45мин",
                            "price": 2000
                        },
                        {
                            "id": "cosmetologic-6",
                            "name": "Спортивный массаж всего тела 1ч",
                            "price": 2800
                        }
                    ]
                }
            ],
            "reviews": [
                {
                    "id": 1,
                    "name": "Виктория",
                    "rating": 5,
                    "title": "Невероятные руки!",
                    "content": "Просто невероятные волшебные руки Александры ( Sandy), если приходишь со своей проблемой, она комплексно подходит не только к телу, но и ко всему организму. У меня небольшие малярные мешки под глазами, Саша объяснила причину, поработала с шеей и лицом, что я только не делала раньше, и аппарат и уколы, ничего не помогало, а тут со второго сеанса я уже вижу эффект, вернее не вижу мешков! Для меня вот это и есть настоящее мастерство человека, который на своём месте! Когда хочется сказать- волшебница! 🌹"
                },
                {
                    "id": 2,
                    "name": "Татьяна",
                    "rating": 5,
                    "title": "Доступные цены",
                    "content": "Спасибо за качественную работу, очень понравилось.! Доступные цены, уютно, приятный и доброжелательный персонал!"
                },
                {
                    "id": 3,
                    "name": "Натали",
                    "rating": 5,
                    "title": "Отличный сервис",
                    "content": "Большое спасибо Александре и Андрею. Отличный сервис, очень понравилось массаж. Результат сразу видно, телу приятно ;) До новых встреч!"
                },
                {
                    "id": 4,
                    "name": "Варвара",
                    "rating": 5,
                    "title": "Обязательно приду ещё",
                    "content": "Отлично! Спасибо вам огромное, Обстановка и обслуживание на высшем уровне, про сам массаж можно сказать только СУПЕР!!!"
                },
                {
                    "id": 5,
                    "name": "Bibisbro_",
                    "rating": 5,
                    "title": "Залетайте сюда!",
                    "content": "Залетайте сюда! Даже не думая. Если ты любитель расслабляющего массажа - приходи. Если ты спортсмен, любитель спортивного массажа, желаешь ощутить каждую мышцу своего тела - приходи! Любой массаж, от лёгких прикосновений, до глубокой проработки всех слоёв мышц! Не важно какой сферой деятельности ты занимаешься. Просто сидишь в офисе или же по хардкору толкаешь железо в зале - приходи и тебе покажут твои зажатости, помогут твоему телу жить новой жизнью. Приветливый персонал, готов обговорить все вопросы ещё до приема, чтобы подобрать тебе ТВОЙ массаж, твой курс или же разовые посещения."
                },
                {
                    "id": 6,
                    "name": "iris delivery",
                    "rating": 5,
                    "title": "Очень понравилось!",
                    "content": "Очень понравилось добродушное отношение и профессионализм массажиста Александры. Прежде чем преступить непосредственно к массажу мне сделали многоступенчатую очистку кожи, сам массаж делали с кремом подходящим именно моему типу кожи Я получила множество ценных рекомендаций по уходу за кожей, возможных диагностиках для улучшения качества кожи и здоровья в целом . Александра тщательно провела массаж лица, а так же шейного и плечевого отдела. Кожа после сеанса посвежевшая и имеет ухоженный вид. От души всем рекомендую массажный салон Sandy"
                },
                {
                    "id": 7,
                    "name": "Лена Аллаярова",
                    "rating": 5,
                    "title": "Хожу к Санди не первый год...",
                    "content": "Хожу к Санди не первый год. Раньше ездил через полгорода и оно того стоило. Сейчас все намного удобнее: свой салон в 5 минутах от метро. Был у трёх мастеров. Только положительные эмоции, а главное результат. После спортивного массажа уходят зажимы и спазмы мышц. Приду еще и посоветую всем знакомым. Однозначно 5+."
                },
                {
                    "id": 8,
                    "name": "Настя",
                    "rating": 5,
                    "title": "Очень хороший салон",
                    "content": "Очень хороший салон, у Санди золотые руки. Хожу к ней уже четвёртый год, кайфую от массажа лица - отличный результат, мало кто из массажистов так работает с лицом!!! А с массажа тела выходишь как после хорошего секса 😅"
                }
            ]
        }
    `

    //render services
    let data = JSON.parse(jsonData)
    let dataServices = data.services

    if (document.querySelector('.service-wrapper') && dataServices) {
        dataServices.forEach(container => {
            let category = Object.keys(container)
            let serviceWrap = document.querySelector(`#${category} .service-wrapper`)

            container[category].forEach(item => {
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
                        <button class="button"
                        data-id="${item.id}"
                        data-name="${item.name}"
                        data-price="${item.price}"
                        >В корзину</a>
                    </div>
                `
                serviceWrap.appendChild(elem)
            })
        })
    }

    //render reviews
    let dataReviews = data.reviews
    let reviewsContainer = document.querySelector('.reviews .swiper-wrapper')

    if (reviewsContainer && dataReviews) {
        dataReviews.forEach(item => {
            let elem = document.createElement("div");
            elem.classList.add('reviews__item', 'swiper-slide')
            elem.id = item.id
            elem.innerHTML = `
                    <div class="reviews__item-header">
                        <div class="reviews__item-avatar">
                            <img src="./assets/images/reviews/avatar-${item.id}.png">
                        </div>
                        <div class="reviews__item-wrap">
                            <div class="reviews__item-name">
                            ${item.name}
                            </div>
                            <div class="reviews__item-rating">
                                <div class="reviews__item-rating-icon">
                                    <img src="./assets/images/star.svg">
                                </div>
                                ${item.rating}
                            </div>
                        </div>
                    </div>
                    <div class="reviews__item-title">
                        ${item.title}
                    </div>
                    <div class="reviews__item-content">
                        <p><span>${item.content.substring(0, 85) + '...'}</span><button type="button" data-id="${item.id}" class="reviews__item-open">Читать</button></p>
                        <button type="button"  data-id="${item.id}" class="reviews__item-close"></button>
                    </div>
                `
            reviewsContainer.appendChild(elem)
        })
    }

    let reviewsOpen = document.querySelectorAll('.reviews__item-open')

    reviewsOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            let reviewsId = btn.getAttribute('data-id')
            let reviewFocus = btn.previousElementSibling
            let content = dataReviews.filter(el => el.id == reviewsId)[0].content

            console.log(reviewFocus)
            reviewFocus.innerText = content
            btn.style.display = 'none'
            reviewFocus.parentElement.nextElementSibling.classList.add('visible')
            reviewsSwiper.update()
        })
    })

    let reviewsClose = document.querySelectorAll('.reviews__item-close')

    reviewsClose.forEach(btn => {
        btn.addEventListener('click', () => {
            let reviewsId = btn.getAttribute('data-id')
            let reviewFocus = btn.previousElementSibling.childNodes[0]
            let content = dataReviews.filter(el => el.id == reviewsId)[0].content

            reviewFocus.innerHTML = `${content.substring(0, 85) + '...'}`
            reviewFocus.nextElementSibling.style.display = 'inline'
            btn.classList.remove('visible')
            reviewsSwiper.update()
        })
    })

    //render, create, add orders
    let orderBtn = document.querySelectorAll('.service-wrapper .button')
    let basketNum = document.querySelector('#total-cart-summa')
    let basket = document.querySelector('#basket')
    let modalOrderBlock = document.querySelector('.modal-basket__order')

    let savedOrders = JSON.parse(localStorage.getItem("orders"))

    if (savedOrders === null) {
        savedOrders = []
    }

    orderBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let orderItem = btn.getAttribute('data-id')

            if (savedOrders === null) {
                savedOrders.push(orderItem)
            } else {
                if (!savedOrders.includes(orderItem)) savedOrders.push(orderItem)
            }

            basketNum.innerHTML = savedOrders.length
            localStorage.setItem("orders", JSON.stringify(savedOrders))
        })
    })

    if (savedOrders) basketNum.innerHTML = savedOrders.length

    let modalOrdersContainer = document.querySelector('.modal-basket__order-wrap')
    let sumBlock = document.querySelector('.modal-basket__order-summa')
    let summa = +sumBlock.textContent

    function createOrderRow(item) {
        let order = document.createElement("div")
        order.classList.add('modal-basket__order-row')
        order.id = item.id
        order.innerHTML = `
            <div class="modal-basket__order-icon">
                <img src="./assets/images/icon-basket.svg">
            </div>
            <div class="modal-basket__order-info">
                <div class="modal-basket__order-name">${item.name}</div>
                <input type="hidden" name="service-item-${item.id}" value="${item.name} ${item.price}">
                <div class="modal-basket__order-count">
                    <div class="modal-basket__order-count-btn modal-basket__order-count-btn_lower">
                        <img src="./assets/images/arrow-left.svg">
                    </div>
                    <div class="modal-basket__order-count-number">
                        1
                    </div>
                    <div class="modal-basket__order-count-btn modal-basket__order-count-btn_upper">
                        <img src="./assets/images/arrow-left.svg">
                    </div>
                </div>
            </div>
            <div class="modal-basket__order-price">
                <b>${item.price}</b> руб
            </div>`

        summa += item.price
        modalOrdersContainer.appendChild(order)
    }

    function renderOrders() {
        let modalRenderedOrders = document.querySelectorAll('.modal-basket__order-wrap .modal-basket__order-row')

        if (modalRenderedOrders.length === 0) {
            dataServices.forEach(container => {
                let category = Object.keys(container)

                container[category].forEach(item => {
                    if (savedOrders.includes(item.id)) {
                        createOrderRow(item, summa)
                    }
                })
            })
        } else {
            const modalRenderedOrdersId = []
            modalRenderedOrders.forEach(el => modalRenderedOrdersId.push(el.getAttribute('id')))
            console.log('нарисованные строки уже есть, нужно сравнение для отрисовки новой')

            let notRendered = diff(savedOrders, modalRenderedOrdersId)
            console.log(notRendered)
            dataServices.forEach(container => {
                let category = Object.keys(container)

                container[category].forEach(item => {
                    if (notRendered.includes(item.id)) {
                        createOrderRow(item, summa)
                    }
                })
            })
        }

        sumBlock.innerHTML = summa
        console.log(summa)
    }

    function diff(arr1, arr2) {
        const result = []
        arr1.forEach(el => !arr2.includes(el) ? result.push(el) : result)
        arr2.forEach(el => !arr1.includes(el) ? result.push(el) : result)
        return result
    }

    basket.addEventListener('click', () => {
        if (basketNum.textContent > 0) {
            modalOrderBlock.style.display = 'block'
        } else {
            modalOrderBlock.style.display = 'none'
        }
        renderOrders()
    })
})