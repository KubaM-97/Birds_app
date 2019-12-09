$(function () {

    ///////////////////calendar///////////////////////
    //    $("#datepicker").datepicker({
    //        'autoclose': true,
    //        'format': 'dd-mm-yyyy'
    //    });


    ///////////change background photo////////////////
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





    ////////////////another step/////////////////
    $('.container[id!="1"]').hide();


    $("input:button").on("click", function () {
        let $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id++;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
        $(".arrow-right").hide();
    });

    $(".arrow-right").hide();
    $(".arrow-right").on("click", function () {
        let $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id++;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });

    $(".arrow-left").on("click", function () {
        let $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id--;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });





    ///////////////////getting Month/////////////////////
    let $birdMonthValue;
    $("#datepicker").on("change", function () {
        $(".arrow-right").show();
        const str = $("#datepicker").val();
        const datepickerArray = str.split("-");
        for (let j = 0; j < 12; j++) {
            if (datepickerArray[1] == obj.birdMonth[j]) {
                $birdMonthValue = datepickerArray[1];
                console.log($birdMonthValue);
            }
        }
        $("#1 input:button").prop("disabled", false);

        if ($(this).val() == "") {
            $("#1 input:button").prop("disabled", true);
            $(".arrow-right").hide();
        };
    });



    ///////////////////getting birdSizeValue/////////////////////
    let $birdSizeValue;
    $("input[type='radio'][name='birdSize']").on("click", function () {
        $(".arrow-right").show();
        $(".container__content__ans").removeClass("checked");
        $(this).closest(".container__content__ans").addClass("checked");
        $birdSizeValue = $("input[type='radio'][name='birdSize']:checked").val();
        console.log($birdSizeValue);
        $("#2 input:button").prop("disabled", false);
        //        $("#2 .arrow-left").prop("disabled", false);
        //        $("#2 .arrow-right").prop("disabled", false)
    });



    ///////////////////getting birdColourValue///////////////////
    $("input:checkbox").on("click", function () {
        
        $(".arrow-right").show();
        
        if ($("input:checkbox:checked").length == 0) {
            $(".arrow-right").hide();
            $("#3 input:button").prop("disabled", true);
        } else {
            $("#3 input:button").prop("disabled", false);
        }
        
        if (!($(this).is(":checked"))) {
            $(this).closest(".container__content__ans").removeClass("checked");
        } else {
            $(this).closest(".container__content__ans").addClass("checked");
        }
        
    });



    ///////////////////getting birdBeakValue#1/////////////////////
    let $birdBeakValue;
    $("input[type='radio'][name='birdBeak']").on("click", function () {
        $(".arrow-right").show();
        $(".container__content__ans").removeClass("checked");
        $(this).closest(".container__content__ans").addClass("checked");
        $birdBeakValue = $("input[type='radio'][name='birdBeak']:checked").val();
        console.log($birdBeakValue);
        $("#4 input:submit").prop("disabled", false);

        //        $("#4 .arrow-left").prop("disabled", false)
    });


    $("#pomin2").on("click", function () {
        $birdBeakValue = "Pomiń";
        $("form").submit();
    });




    ////////////////////////Submit////////////////////////////
    var obj = {
        birdColour: ["Niebieski", "Zielony"],
        birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
        birdSize: "Mały",
        birdBeak: "Rybożerne",
        opis: "Lorem ipsum",
        name: "Zimorodek",
        photo: "photos/Results/zimorodek.png"
    }


    
   
    

    
    
    $("form").on("submit", function (event) {
        
        event.preventDefault();


        $(this).fadeOut(1000);
        $(".container#5").delay(2000).fadeTo(1000, 1);


        ///////////////////getting birdBeakValue#2/////////////////////
        let tab = [];
        let $birdColourValue;
        $("input:checkbox:checked").each(function () {
            tab.push($(this).val());
        });


        tabJoin = tab.join(" ");
        objBirdColourJoin= obj.birdColour.join(" ");
        if (objBirdColourJoin.includes(tabJoin)) $birdColourValue = 1;

        
        ///////////////////////getting VICTORY//////////////////////
        if ((typeof $birdMonthValue !== undefined) && ($birdSizeValue == obj.birdSize) && ($birdColourValue !== undefined) && (($birdBeakValue === obj.birdBeak) || ($birdBeakValue === "Pomiń"))) {
            alert("ZWYCIĘSTWO!");
            $(".container__results h1").text(obj.name);
            $(".container__results h1").append('<img src=' + obj.photo + '>');
            $(".container__results p").text(obj.opis);
        }



    });




    //    //JSON
    //    const xhr = new XMLHttpRequest();
    //    xhr.onload = function(){
    //        if(xhr.status === 200){
    //            $(".container__results").html(xhr.responseText);
    //        }
    //    };
    //    xhr.open("GET", "results.json", true);
    //    xhr.send(null);
    //    
    ////    let myRequest = new Request("./result.json")
    ////        .then(function(resp){
    ////            return resp.json()
    ////        })
    ////        .then(function(){
    ////            alert("Hello");
    ////        })

});
