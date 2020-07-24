$(document).ready(function(){
  $(".hovera").mouseover(function(){
    $(this).children(".navicon").css("transform", "rotate(20deg)")
  });

  $(".hovera").mouseleave(function(){
    $(this).children(".navicon").css("transform", "rotate(0deg)")
  });
  



  //  이미지 크기 변하면 함수에 마진바꿔야됨
  var cur = 0;
    
  function sliding(){
      cur++;
      if(cur >= 3){
          $("#move").animate({marginLeft: -900*cur + "px"},function(){
              $("#move").css("margin-left","0px");
          });
          cur = 0;
      }else{
          $("#move").animate({marginLeft: -900*cur + "px"});
      }
      

      
  }
  
  setInterval(sliding, 3000);
  
  $("#gurim>div").click(function(){
      var juso = $(this).children("img").attr("src");
      $("#box>img").attr("src",juso);
      $("#modal").fadeIn();
  });
  
  $("#cl").click(function(){
      $("#modal").fadeOut();
  });
  


  $(".idontno").click(function(){
    $("#modal").fadeIn();
});

// #close를 클릭했을때,
// #modal을 숨겨주기.
$("#close").click(function(){
    $("#modal").fadeOut();
});


















  });
      