jQuery(document).ready(function(){
    // 메인의 li에 마우스가 올라가면
    // bgmenu하던거 멈추고 슬라이드다운해
    // 서브 하던거 멈추고 슬라이드다운해


//     $(".main").mouseover(function(){
//          $(this).find(".sub").stop().slideDown()
//     }).mouseout(function(){
//         $(this).find(".sub").stop().slideUp()
//     })

    $(".main>li").mouseover(function(){
         $(".sub").stop().slideDown()
         $(".bgmenu").stop().slideDown()
    }).mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })
})