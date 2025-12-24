$(function(){

$("ul li").css({"width":"200px","height":"200px","border":"1px solid #000",
    "list-style":"none"
})

$(".wrap").css({"margin-bottom":50})
$("ul").css({"display":"flex", "gap":"20px"})
$("ul li:first-child").css({"background":"red"})
$("ul li:nth-child(2)").css({"background":"orange"})
$("ul li:nth-child(3)").css({"background":"yellow"})
$("ul li:last-child").css({"background":"green"})

// 숨김버튼을 클릭하면 li:first-child 숨김
// 별명을 지을 땐 
// class="별명"
// id="별명" > 중복해서 사용 안할 때
$("#btn1").click(function(){
    $("ul li:first-child").hide()
})

// 보이기버튼을 클릭하면 빨강박스 보이게
$("#btn2").click(function(){
    $("ul li:first-child").show()
})

// 토글(보이기/숨김)버튼을 클릭하면 노락색 박스를 보임/숨김
$("#btn3").click(function(){
    $("ul li:nth-child(3)").toggle()
})

// 네번째 버튼을 클릭하면 그린박스 사이즈가 100px로 작아짐
$("#btn4").click(function(){
    $("ul li:last-child").width(100)
    $("ul li:last-child").height(100)
})

$("#btn5").click(function(){
    $("ul li:last-child").width(200)
    $("ul li:last-child").height(200)
})

})