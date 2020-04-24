var scrollBtn = document.getElementById('scroll-btn');
var showcase = document.getElementById('showcase');
scrollBtn.addEventListener('click', function() {
    showcase.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
})