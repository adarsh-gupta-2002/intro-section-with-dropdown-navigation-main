

const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')

const nav = document.querySelector('.nav')
const dropDown = document.querySelectorAll('.drop-down')

menuOpen.addEventListener('click' , () =>{
    nav.style.display = 'block'
})
menuClose.addEventListener('click' , () =>{
    nav.style.display = 'none'
})
 