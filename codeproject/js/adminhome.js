$(function(){
    
    $("#crud").click(function(){
        $("#crud_inner").css("visibility","visible" )
        $("#main").addClass("blur")
        $("#main").addClass("scale")
        $("body").css("overflow","hidden")

    })
    $("#crud_inner").click(function(){
        $("#crud_inner").css("visibility","hidden" )
        $("#main").removeClass("blur")
        $("#main").removeClass("scale")
        $("body").css("overflow","visible")

    })

    $('#top_right img').click(function(){
        $("#option").toggleClass("showoption")
        window.setTimeout(function(){
            $("#option").removeClass('showoption');
        }, 4000);
      });
})

