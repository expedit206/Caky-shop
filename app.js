const sections= document.querySelectorAll('section')
const header=document.querySelector('nav')
const btnBurger=document.querySelector('#burger-menu')
const nav=document.querySelector('.navigation')
const linkNav=document.querySelectorAll('.navigation a')


btnBurger.addEventListener('click',()=>{
    nav.classList.toggle('active')
    btnBurger.classList.toggle('fa-x')
    if(window.scrollY==0){
        header.classList.toggle('active')
    }
})

linkNav.forEach(link => {
    link.addEventListener('click',()=>{
        // nav.classList.remove('active')
        btnBurger.classList.remove('fa-x')
    })
    
});
window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>0)
   
    
})
window.addEventListener('scroll',()=>{
     nav.classList.remove('active')
    btnBurger.classList.remove('fa-x')})

const scrollActive=()=>{
    // alert('zml')
    sections.forEach(section => {
        let top=window.scrollY
        let offset=section.offsetTop-290
        let height=section.offsetHeight
        let id=section.getAttribute('id')
        
        if(top>=offset && top<offset+height){
            linkNav.forEach(link => {
                link.classList.remove('active')
document.querySelector('.navigation a[href*='+id+']').classList.add('active')
                
            });
        }
        
    });
}
window.addEventListener('scroll',scrollActive)