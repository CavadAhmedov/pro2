$(function(){
    $("#login").click(function(){
        $("#login").addClass("large");
        $("#login").removeClass("normal");
    });

    $("#check_me > label , #check_me > input ").click(function(){
        if ($('#loggedIn').is(':checked')) {
            $("#check_me> label").css("color","#1FD6D0")
        }else{
            $("#check_me> label").css("color","#fff")
        }
    });

    $(function() {  
        $('.btn-6')
          .on('mouseenter', function(e) {
                  var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                  $(this).find('span').css({top:relY, left:relX})
          })
          .on('mouseout', function(e) {
                  var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
          });
        $('[href=#]').click(function(){return false});
      });

      $(".btn-6").click(function(){
          
      })
        




    
});