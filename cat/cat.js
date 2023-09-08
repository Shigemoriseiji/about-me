// 画像をランダムに表示するアニメーション
// 画面が読み込まれたら動かす
$(window).on('load', function () {
    setTimeout(function () {
        moveAnimation();/* アニメーション用の関数を呼ぶ*/
    }, 900);
});

var animeFlag = true;//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにするための定義

// 動きのきっかけの起点となるアニメーションの名前を定義
function moveAnimation() {

    //読み込まれたらすぐにランダムに出現	
    var randomElm = $(".box-list");//親要素取得
    var randomElmChild = $(randomElm).children();//親の子要素を取得
    if (!$(randomElm).hasClass("play")) {	//親要素にクラス名playが付いてなければ処理をおこなう
        randomAnime();
    }

    function randomAnime() {
        $(randomElm).addClass("play");//親要素にplayクラスを付与
        var rnd = Math.floor(Math.random() * randomElmChild.length); //配列数からランダム数値を取得
        var moveData = "fadeUp";//アニメーション名＝CSSのクラス名を指定
        $(randomElmChild[rnd]).addClass(moveData);//アニメーションのクラスを追加
        randomElmChild.splice(rnd, 1);//アニメーション追加となった要素を配列から削除
        if (randomElmChild.length == 0) {//配列の残りがあるか確認
            $(randomElm).removeClass("play");//なくなった場合は親要素のplayクラスを削除
        } else {
            setTimeout(function () { randomAnime(); }, 300);	//0.3秒間隔でアニメーションをスタートさせる。※ランダムのスピード調整はこの数字を変更させる	
        }

    }
}



