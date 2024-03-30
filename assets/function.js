$(document).ready(() => {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('colored');
        } else {
            $('.navbar').removeClass('colored');
        }
    });
});
