const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", "true")

        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle("white")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains('white')){
        dayNight.querySelector("i").classList.add("fa-moon")
    }else{
        dayNight.querySelector("i").classList.add("fa-sun")
    }
})