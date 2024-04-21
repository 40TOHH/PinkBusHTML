const searchTour = document.getElementById('search-tour')
const listCard = document.getElementById('list-card')
searchTour.addEventListener('click', () => {
    listCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
})