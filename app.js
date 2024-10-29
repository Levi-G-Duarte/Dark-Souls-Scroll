console.log("What up fam")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

// document.addEventListner("DOMContentLoaded", () => {
//     window.scrollTo(0,0)
// })
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}