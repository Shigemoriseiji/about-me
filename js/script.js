/*========= 流れるテキスト =========*/
// 画面が読み込まれたらすぐに動かす
$(window).on('load', function () {
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});

//====左に動くアニメーション
function slideAnime() {
    //====左に動くアニメーション
    $('.left-anime').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            //左から右へ表示するクラスを付与
            //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
            $(this).children(".left-animeInner").addClass("slide-anime-right-left");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        } else {
            //左から右へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeLeftRight");
            $(this).children(".left-animeInner").removeClass("slide-anime-right-left");

        }
    });

}

