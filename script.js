$(function () {
  
    $("#datepicker").datepicker({
        'autoclose': true,
        'format': 'dd-mm-yyyy'
    });
 

    
    let $nr = 0;
            let $background_Image = ["sowa.jpg", "orly.jpg", "bialorzytki.jpg", "czapla.jpg"];

            setInterval(function() {
                //photo's change
                $nr++;
                if ($nr >= $background_Image.length) $nr = 0;
                $(".layer").animate({
                    opacity: 1
                });

                let $file = `photos/Main-images/${$background_Image[$nr]}`;


                
//
//                $(".layer").animate({}, 2000, function() {
//                    $(this).fadeTo(3000, 0.7, function()
//                        {
//                            $(this).css('background-image', 'url(' + $file + ')');
//                        }).fadeTo(1000, 1);
//                    
//                });
//
//            }, 3000);
    
             
           
        $("input:checkbox").click(function(){
               if(!($(this).is(":checked"))){
                   $(this).closest(".container__content__ans--colour").removeClass("checked");
               }
               else{
                   
               $(this).closest(".container__content__ans--colour").addClass("checked");
               }
           }); 
    
        $("input:radio").click(function() {
                $(".container__content__ans--bucks").removeClass("checked");
                $(this).closest(".container__content__ans--bucks").addClass("checked");
            });
});
});