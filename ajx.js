$(document).ready(function(){
    $("a").click(function(){
        var page=(this).attr("href");

        $("#hablame").load(page);
        return false;
    });
});