var burgerButton = document.querySelector('#burger-button');
var mobileMenu = document.querySelector('#mobile_menu');
var visible = document.querySelector('#overly')

burgerButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
        visible.classList.toggle('visible')
})


