const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const btt = document.querySelector('.btt')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')

    menu.classList.toggle('menu-active')
})

window.addEventListener('scroll', () => {
    windowPosition = window.scrollY > 300
    btt.classList.toggle('is-active', windowPosition)

    hamburger.classList.remove('is-active')
    menu.classList.remove('menu-active')
})