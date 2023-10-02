const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')

hamburger?.addEventListener('click', () => {
    navigation?.classList.toggle('active')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        navigation?.classList.remove('active')
    }
});