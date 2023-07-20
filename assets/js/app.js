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



    let data = JSON.parse(jsonData)
    let dataServices = data.services

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
                    `;
            serviceWrap.appendChild(elem);
        })
    })

    let dataReviews = data.reviews

})
