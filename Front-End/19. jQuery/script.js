$("h1").css("color", "red");
$("h1").text("Bye");
$("a").html("<br>No google<br><br><br>");
$("a").attr("href", "https://www.google.com")


$(document).keypress(function (e) { 
    $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "green")
})

$("button").click(function (e) { 
    $("h1").css("color", "purple");
});

$("h1").before("<h2>Before</h2>");
$("h1").after("<h2>after</h2>");
$("h1").prepend("<h2>prepend </h2>");
$("h1").append("<h2> append </h2>");

var num = 0
$("button").click(function (e) { 
    if (num++ == 0) {
        $("h1").fadeOut();
    } else {
        $("h1").fadeIn(); //มีคำสั้ง Animation มากมาย หาต่อเอง
        num = 0;
    }
    
});