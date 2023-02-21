

const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')

const nav = document.querySelector('.nav')
 
 
menuOpen.addEventListener('click' , () =>{
    nav.style.display = 'block'
})
menuClose.addEventListener('click' , () =>{
   

        nav.style.display = 'none'
    
})


window.addEventListener('resize' , () => {
    if(screen.width > 800){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }
    
    
})