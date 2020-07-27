$(document).ready(function () {
  $("#des-p").toggle(10);
  $("#dev-p").toggle(10);
  $("#prod-p").toggle(10);
  $("#des-fig").click(function () {
    $("#des-img").toggle(10, function () {
      $("#des-p").toggle(10);
    });
  })
  $("#dev-fig").click(function () {
    $("#dev-img").toggle(10, function () {
      $("#dev-p").toggle(10);
    });
  })
  $("#prod-fig").click(function () {
    $("#prod-img").toggle(10, function () {
      $("#prod-p").toggle(10);
    });
  })
});