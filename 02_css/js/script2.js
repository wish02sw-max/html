$(function(){

$("ul li").css({"width":"200px","height":"200px","border":"1px solid #000",
    "list-style":"none"
})

$("*").css({"margin":"0", "padding":"0"})
$("ul").css({"display":"flex", "gap":"20px"})
$("ul li:first-child").css({"background":"red"})
$("ul li:nth-child(2)").css({"background":"orange"})
$("ul li:nth-child(3)").css({"background":"yellow"})
$("ul li:last-child").css({"background":"green"})

})