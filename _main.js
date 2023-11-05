document.addEventListener('contextmenu', 
     event => event.preventDefault()
);


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
 

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header') 
}

window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight, 
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }
              else{
                sectionsClass.classList.remove('active-link')
              }
    })
  
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px',
    duration: 1500,
    delay: 100,
    // reset: true 
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container, .section__title, .paragraph`)
sr.reveal(`.home__card`,{delay: 500, distance: '100px', interval: 100})
sr.reveal(`.about__data`,{origin: 'right'})
sr.reveal(`.about__image`,{origin: 'left'})
sr.reveal(`.popular__card, .counters`,{interval: 200})
sr.reveal(`#btn, .carousel`,{origin: 'bottom', interval: 200})
sr.reveal(`.counters`,{interval: 100})
 






let section_counter = document.querySelector('#brojac');
let counter1 = document.querySelectorAll('.counter .number1');
let counter2 = document.querySelectorAll('.counter .number2');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed1 = 70;
    counter1.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed1;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 30);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();
    });

    counter2.forEach((counter, index) => {
        function UpdateCounter() {
          const targetNumber = +counter.dataset.target;
          const initialNumber = +counter.innerText;
          const incPerCount = targetNumber / 400 ;
          if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter, 100);
          }
          else {
            counter.innerText = targetNumber;
          }
        }
        UpdateCounter();
      });


    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);

/*
// Get allValues using querySelectorAll
let allValues = document.querySelectorAll(".value");


window.addEventListener('load', 
allValues.forEach((singleValue) => {
    let startValue = 0;
    let endValue = parseInt(singleValue.getAttribute("data-value"));
    let duration = Math.floor(2000 / endValue);

    let counter = setInterval(function () {
    startValue += 1;
    singleValue.textContent = startValue;

    if (startValue == endValue) {
        clearInterval(counter);
    }
    }, duration);
})
)

var element = getElementById('brojac')
if(element.is(':visible')){
}
*/