$( document ).ready(function() {

    //Stage
    $(".cta-box .select>div").css("cursor","pointer");
    $(".cta-box .select>div:first-child img").addClass("active");
    $(".img-stg img").css("display","none");
    $(".img-stg img:first-child").css("display","block");
    
    $(".cta-box .select>div .sel-img-001").click(function() {
        $(".img-stg img").css("display","none");
        $(".img-stg .stage-item-001").css("display","block");
    });
    $(".cta-box .select>div .sel-img-002").click(function() {
        $(".img-stg img").css("display","none");
        $(".img-stg .stage-item-002").css("display","block");
    });
    $(".cta-box .select>div .sel-img-003").click(function() {
        $(".img-stg img").css("display","none");
        $(".img-stg .stage-item-003").css("display","block");
    });
    $(".cta-box .select>div [class*='sel-img']").click(function() {
        $(".cta-box .select>div [class*='sel-img']").removeClass("active");
        $(this).addClass("active");
    });
    
    // FAQ Toggle
    $(".faq_question").click(function() {
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).find(".o").css("display","block");
            $(this).find(".x").css("display","none");
            $(this).siblings(".faq_answer").css("display","none");
        }else{
            $(this).find(".o").css("display","none");
            $(this).find(".x").css("display","block");
            $(this).addClass("active");
            $(this).siblings(".faq_answer").css("display","flex");
        }
    })
    
    });