// 上から順番に見出しを表示するアニメーション
$(window).on('load', function () {
    setTimeout(function () {
        $('.fade-in').each(function () {
            $(function () {
                $('.fade-in').each(function (i) {
                    $(this).delay(i * 300).queue(function () {
                        $(this).addClass('active');
                    });
                });
            });
        });
    }, 900);
});