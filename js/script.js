$(document).ready(function () {
  // toggle function for what we do area
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

  // hover function for portfolio area
  $("figure.portfolio-fig").hover(function () {
    $(this).find(".hoverable").show();
  });

  $("figure.portfolio-fig").mouseout(function () {
    $(this).find(".hoverable").hide();
  });

  // alert user
  $("#submit-btn").click(function(){
    var name = $("#form-control-name").val();
    alert("** " + name + " we have received your message. Thank you fro reaching out to us. **");
  });
});