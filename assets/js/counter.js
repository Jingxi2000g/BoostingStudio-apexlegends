$('.user-count-number').each(function () {
    console.log($(this).prop('counter', 0));
    $(this).prop('counter', 0).animate({
        counter: 1000
    }, {
        duration: 4000, // miliseconds
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

window.addEventListener("scroll", function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
})



