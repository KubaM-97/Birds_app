$(function () {
    ///////////////////calendar///////////////////////
    $("#datepicker").datepicker({
        'autoclose': true,
        'format': 'dd-mm-yyyy'
    });


    ///////////change background photo////////////////
    let $nr = 0;
    const $background_Image = ["sowa.jpg", "orly.jpg", "bialorzytki.jpg", "czapla.jpg"];

    setInterval(function () {

        $nr++;
        if ($nr >= $background_Image.length) $nr = 0;
        $(".layer").animate({
            opacity: 1
        });

        const $file = `photos/Main-images/${$background_Image[$nr]}`;

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
        const $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id++;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });

    $(".arrow-left").on("click", function () {
        const $id = $(this).closest(".container").attr("id");
        $(this).closest(".container").hide(1000);
        $id--;
        $(".container#" + $id).delay(1000).fadeTo(1000, 1);
    });





    ///////////////////getting Month/////////////////////
    let $birdMonthValue;
    let date;
    $("#datepicker").on("change", function () {
        $(".arrow-right").show();
        date = $("#datepicker").val();
        const datepickerArray = date.split("-");
        $birdMonthValue = datepickerArray[1];
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
        $("#4 input:submit").prop("disabled", false);

        //        $("#4 .arrow-left").prop("disabled", false)
    });


    $("#pomin2").on("click", function () {
        $birdBeakValue = "Pomiń";
        $("form").submit();
    });









    ////////////////////////Submit////////////////////////////





    $("form").on("submit", function (event) {

        event.preventDefault();


        $(this).fadeOut(1000);
        $(".container#5").delay(2000).fadeTo(1000, 1);


        ///////////////////getting birdBeakValue#2/////////////////////
        const arraySelectedColours = [];
        let $birdColourValue;
        $("input:checkbox:checked").each(function () {
            arraySelectedColours.push($(this).val());
        });
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const results = response.results;
                let output = '';
                for (let i = 0; i < results.length; i++) {
                    results[i].birdMonth.join(" ");
                    if (results[i].birdMonth.join(" ").includes($birdMonthValue)) var confirmMonth = 1;
                }

                arraySelectedColoursJoin = arraySelectedColours.join(" ");





                ////////////////////////////////Results with JSON//////////////////////
                for (let i = 0; i < results.length; i++) {

                    if ((typeof confirmMonth !== undefined) &&
                        ($birdSizeValue == results[i].birdSize) &&
                        (typeof confirmColours !== undefined) &&
                        (($birdBeakValue === results[i].birdBeak) || ($birdBeakValue === "Pomiń"))) {

                        output += `<li>                
                    <h1>${results[i].name}</h1>            
                    <img src=${results[i].photo}>            
                    <p>${results[i].description}</p>            
                </li>`;
                    }
                }
                $(".container__selected").html(`Wybrano: <br /> <br /> Data obserwacji: ${date}<br /> Rozmiar ptaka: ${$birdSizeValue} <br /> Barwy upierzenia: ${arraySelectedColoursJoin} <br /> Typ dzioba: ${$birdBeakValue} <br /> <span class="container__selected__otoWyniki">Oto wyniki:</span> <br />`)
                $("#results").html(output);
                if (output.length == 0) $("#results").html(`<h1>Nic nie znaleziono.</h1>`);
            }
        };
        xhr.open("GET", "results.json", true);
        xhr.send(null);
    });

});
