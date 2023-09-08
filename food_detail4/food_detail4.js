// 画像をふわっとに表示するアニメーション
$(window).on('load', function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.fead-in').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("active");
        }
    });
});