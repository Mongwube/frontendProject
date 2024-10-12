var swiper = new Swiper('.fade', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    }
})



// document.querySelector('#toggle-password').addEventListener('click', function(){
//     const passwordInput = document.querySelector('#password')
//     const icon = this

//     if(passwordInput.type === 'password'){
//             passwordInput.type = 'text'
//                 icon.textContent = 'visibility'
//              }else{
//                passwordInput.type = 'password'
//                icon.textContent = 'visibility_off'
//             }
// })