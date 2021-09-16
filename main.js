/* === Menu Show Y HIDDEN === */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

//show 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
//hidden   
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/* === remove menu === */  

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/* === scroll sections active link === */  

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50 
        sectionID = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active') 
        }
    })



}