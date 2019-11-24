$(function () {

    //calendar
    $("#datepicker").datepicker({
        'autoclose': true,
        'format': 'dd-mm-yyyy'
    });


    //change background photo
    let $nr = 0;
    let $background_Image = ["sowa.jpg", "orly.jpg", "bialorzytki.jpg", "czapla.jpg"];

    setInterval(function () {

        $nr++;
        if ($nr >= $background_Image.length) $nr = 0;
        $(".layer").animate({
            opacity: 1
        });

        let $file = `photos/Main-images/${$background_Image[$nr]}`;
        
        $(".layer").animate({}, 2000, function () {
            $(this).fadeTo(7000, 0.75, function () {
                $(this).css('background-image', 'url(' + $file + ')');
            }).fadeTo(7000, 1);

        });

    }, 8000);




    
    //another step
    $('.container[id!="1"]').hide();


    $("input:button").click(function () {
        let $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id++;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });

    $(".arrow-right").click(function () {
        let $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id++;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });
    
    $(".arrow-left").click(function () {
        let $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id--;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });







    //inputs

    $("input:checkbox").click(function () {
        if (!($(this).is(":checked"))) {
            $(this).closest(".container__content__ans").removeClass("checked");
        } else {

            $(this).closest(".container__content__ans").addClass("checked");
        }
    });

    $("input:radio").click(function () {
        $(".container__content__ans").removeClass("checked");
        $(this).closest(".container__content__ans").addClass("checked");
    });
    
    
    
    
    //JSON
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            $(".container__results").html(xhr.responseText);
        }
    };
    xhr.open("GET", "results.json", true);
    xhr.send(null);
    
//    let myRequest = new Request("./result.json")
//        .then(function(resp){
//            return resp.json()
//        })
//        .then(function(){
//            alert("Hello");
//        })
    
});
