/* SHOW SIDEBAR */

const navMenu = document.getElementById('sidebar');
    navToggle = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-sidebar')
        })
    }

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-sidebar')
        })
    }

var typed = new Typed(".typing",{
    strings:[" ", "Developpeur web", "Intégrateur web", "Developpeur Wordpress"],
    typeSpeed:100,
    backSoeed:60,
    loop:true
})

/*Filtered portfilio mixitup*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* link active aside */

const linkAside = document.querySelectorAll('.nav__link')

function activeAside() {
    linkAside.forEach( L => L.classList.remove('active-link'))
    this.classList.add('active-lin')
}


linkAside.forEach( L => L.addEventListener('click', activeAside))

/* link active work */

const sections = document.querySelectorAll('section[id]');

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

// const linkWork = document.querySelectorAll('.work__item')

// function activeWork() {
//     linkWork.forEach( L => L.classList.remove('active-work'))
//     this.classList.add('active-work')
// }


// linkWork.forEach( L => L.addEventListener('click', activeWork))
/* Work popup */
document.addEventListener('click', (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup()
        portfolioItemDetails(e.target.parentElement)
    }

})
    function togglePortfolioPopup() {
        document.querySelector('.portfolio__popup').classList.toggle('open')
    }

    document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup)

    function portfolioItemDetails(portfolioItem) {
        document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src ;
        document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
        document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
    }
/* Input animation */

const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener('blur', blurFunc)
})