let scoreString = "Score : ";

$("document").ready(function(){
        $(".inner-box").each(function () {
            if (parseFloat(this.children[0].children[1].children[0].children[0].children[1].innerText.substring(this.children[0].children[1].children[0].children[0].children[1].innerText.indexOf(scoreString) + scoreString.length)) > 5) {
                $(this.children[0].children[1]).css("background-color", "rgba(10, 200, 10, 0.8)");
            } else {
                $(this.children[0].children[1]).css("background-color", "rgba(47, 50, 56, 0.6)");
            }
        });
});
