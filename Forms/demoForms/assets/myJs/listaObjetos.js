    $(".quickview-box-toggle").on("click", function () {
        $("#quickview-wrapper").addClass("open"); $(".bg-overlay").addClass("show"); });
     $(".destroy").on("click", function () {
        $("#quickview-wrapper").removeClass("open");
    $(".bg-overlay").removeClass("show"); });
         $(".quickview-trigger").on("click", function () {
        $("#chat-quickview").addClass("open"); });
         $(".destroy-chat").on("click", function () {
        $("#chat-quickview").removeClass("open");
    });