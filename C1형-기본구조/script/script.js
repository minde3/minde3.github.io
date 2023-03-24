jQuery(document).ready(function(){

    $(".mian>li").mousover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })
})