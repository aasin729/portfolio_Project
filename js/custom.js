(function($){
    $("body, html").stop().animate({
        scrollTop:0
    }, 1500);    


    $('.scrollNavi li').on('click', function(){
       var num = $(this).index();
       $("body, html").stop().animate({
        scrollTop:5000*num
        },1500,"linear")
    })


    // 클릭하면 창 보이게 하기 
    $('section article p').on('click', function(){
        $(this).next().addClass('on')
        $('html, body').css({ overflow:'hidden'})
    })
    $('section article .close').on('click', function(){
        $(this).parents('.cover').removeClass('on')
        $('html, body').css({ overflow:'auto'})
        
        return false
    })



    // 스크롤하면 그림 화면으로 하나씩 보이기
    $(window).on('scroll',function(){
        let scroll =  $(this).scrollTop()

        for(let i=0; i<5; i++){
            let dist = parseInt((-5000*i)+scroll)
            $("section>article").eq(i).css({transform:`translateZ(${dist}px)`});

            if(scroll>=i*5000 && scroll<(i+1)*5000){
                $(".scrollNavi li").removeClass();
                $(".scrollNavi li").eq(i).addClass("on");
            }
        }
    })

})(jQuery)

// articel4 부분 
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }

  });


// 인트로 애니메이션 관련 

// 스크롤 없애기 
$('html, body').css({ overflow:'hidden'})

setTimeout(function(){

    let count = 0;
    let timer = setInterval(add, 50)
    function add() {
        count++
        if (count>=100) { 
            clearInterval(timer) 
            $('.introAni').animate({
               opacity:0
            }, 800, function(){
                $(this).remove()
                // 스크롤 다시 생성
                $('html, body').css({ overflow:'auto'})
            })
        }
    }
    
}, 10)


