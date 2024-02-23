// シャッフルスピード
var speed = 100;

// シャッフル
var randShuffle = function () {
  var rand = Math.floor(Math.random() * 100)
  if (rand <= 5) {
    msg = "1等"; // 3
    $(".result-tama").css("background", "red");
  } else if (rand <= 15) {
    msg = "2等"; // 9
    $(".result-tama").css("background", "yellow");
  } else if (rand <= 30) {
    msg = "3等"; // 18
    $(".result-tama").css("background", "green");
  } else if (rand <= 60) {
    msg = "4等"; // 30
    $(".result-tama").css("background", "blue");
  } else {
    msg = "5等"; //40
    $(".result-tama").css("background", "white");
  }
  $(".result-text").text(msg);
};

// スタートボタン押す
$(".start").on("click", function () {
  randStart = setInterval(randShuffle, speed);  //sppedの速さでrandShuffleを繰り返す
  $(".hexagon").addClass("roulette");  //回転
  $(this).hide(); // スタート非表示
  $(".stop").show(); // ストップ表示
});

// ストップボタン押す
$(".stop").on("click", function () {
  clearInterval(randStart); //randStartを止める
  $(".hexagon").removeClass("roulette");  //回転停止
  $(this).hide(); // ストップ非表示
  $(".result").show(); // 結果表示
  $(".restart").show(); // もう一度表示
});

// もう一度ボタン押す
$(".restart").on("click", function () {
  $(this).hide(); // もう一度非表示
  $(".stop").show(); // ストップ表示
  $(".result").hide(); // 結果非表示
  randStart = setInterval(randShuffle, speed); // シャッフル再開
  $(".hexagon").addClass("roulette");  //回転
});
