var images = [
  "../Images/01.jpg",
  "../Images/02.jpg",
  "../Images/03.jpg",
  "../Images/04.jpg",
  "../Images/05.jpg",
];
var index = 0;

$(".img").click(function () {
  index = $(this).index();
  console.log("Clicked index:", index);
  console.log("Image path:", images[index]);
  $(".img-v img").attr("src", images[index]);
  $(".view").css("display", "flex");
});

$(".view").click(function (e) {
  var outEle = $(this);
  var ele = $(e.target);
  if (ele.is(outEle)) {
    $(".view").css("display", "none");
    console.log("Cherrrrrr");
  }
});

$(".fa-arrow-right").click(function () {
  index = (index + 1) % images.length;
  $(".img-v img").attr("src", images[index]);
});

$(".fa-arrow-left").click(function () {
  index = (index - 1 + images.length) % images.length;
  $(".img-v img").attr("src", images[index]);
});
