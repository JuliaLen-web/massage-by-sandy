

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
})
