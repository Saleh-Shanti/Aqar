const cards = document.querySelectorAll(".review-card");
const apartmentCards = document.querySelectorAll(".apartment")

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.target.classList.contains("review-card"))
            entry.target.classList.toggle("review-animation", entry.isIntersecting)
        else
            entry.target.classList.toggle("apartment-animation", entry.isIntersecting)

        if (entry.isIntersecting)
            observer.unobserve(entry.target)
    })
}, {
    threshold: .6
})



apartmentCards.forEach(card => {

    observer.observe(card)
})
cards.forEach(card => {

    observer.observe(card)
})
