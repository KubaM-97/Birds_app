$(function () {

    ///////////////////calendar///////////////////////
        $("#datepicker").datepicker({
            'autoclose': true,
            'format': 'dd-mm-yyyy'
        });


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
        $birdMonthValue = datepickerArray[1];
        console.log($birdMonthValue);
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

    var results = [
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Duży",
            birdColour: ["Żółty", "Biały", "Czarny"],
            birdBeak: "Drapieżne",
            name: "Orzeł bielik",
            photo: "photos/Results/orzel_bielik.png",
            description: "Orzeł bielik jest największym w Polsce ptakiem drapieżnym. Rozpiętość skrzydeł dochodzi do 2,5 m, a masa ciała do 7 kg. Dożywają 40 lat. Obecnie można spotkać u nas około 600 par bielików, a w delcie Odry znajduje się ich unikatowa w skali Europy kolonia lęgowa. Jesienią duże skupiska młodych bielików można też spotkać w okolicach stawów rybnych."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Duży",
            birdColour: ["Szary", "Biały", "Żółty", "Czarny"],
            birdBeak: "Rybożerne",
            name: "Brodźce",
            photo: "photos/Results/brodzce.png",
            description: "Brodźce są nierozłącznie związane ze środowiskiem wodnym – najczęściej brodzą w płytkich akwenach i za pomocą długiego dzioba wyszukują w mule pokarm. Charakteryzują go długie nogi i dziób oraz maskujące, brunatne lub szare upierzenie."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Duży",
            birdColour: ["Szary", "Biały", "Żółty"],
            birdBeak: "Rybożerne",
            name: "Kulik",
            photo: "photos/Results/kulik.png",
            description: "Kulik jest największym przedstawicielem siewkowych w Polsce. Młode już od pierwszych dni są zdolne do samodzielnego poszukiwania pokarmu. Po miesiącu uzyskują też zdolność lotu. Niestety, w wyniku niszczenia środowiska przez człowieka, kulik stał się w Polsce ptakiem bardzo rzadkim i wycofał się z wielu terenów lęgowych (bagna, mokradła, miejsca słabo zarośnięte roślinnością krzewiastą, torfowiska, nadrzeczne łąki, wrzosowiska). Jest to zapewne wynik osuszania terenów podmokłych i mechanizacja pracy przy zbiorze siana."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Mały",
            birdColour: ["Żółty", "Biały", "Czarny"],
            birdBeak: "Owadożerne",
            name: "Mysikrólik",
            photo: "photos/Results/mysikrolik.png",
            description: "Mysikróliki to jedne z najmniejszych ptaków Europy (9 cm długości i ok. 5 g wagi). Występują w lasach, preferując bory iglaste. Sprawnie balansują nawet na najcieńszych gałązkach poszukując, drobnych bezkręgowców. Są nieustannie w ruchu. Pomimo maleńkich rozmiarów są zdolne do dalekich wędrówek. Spotykane na wybrzeżu, głównie na Mierzei Wiślanej."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Mały",
            birdColour: ["Żółty", "Biały"],
            birdBeak: "Owadożerne",
            name: "Pierwiosnek",
            photo: "photos/Results/pierwiosnek.png",
            description: "Pierwiosnek posiada niewielkie, oliwkowo szare ubarwienie, ze znacznie jaśniejszym brzuszkiem. W Polsce spotykany w lasach liściastych, ale też w parkach czy ogrodach."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Duży",
            birdColour: ["Czarny", "Czerwony", "Szary", "Biały"],
            birdBeak: "Owadożerne",
            name: "Pomurnik",
            photo: "photos/Results/pomurnik.png",
            description: "Pomurnik jest związany ściśle ze środowiskiem wysokogórskim. W Polsce występuje bardzo nielicznie, wyłącznie w Tatrach i Pieninach. Całkowitą populację tego gatunku po naszej stronie gór szacuje się na zaledwie 50 par. Obserwować go można nawet zimą, ponieważ prowadzi wtedy osiadły tryb życia. Zazwyczaj przebywa na nagich, stromych ścianach. Jego lot jest bardzo sprawny i szybki, co pozwala mu dynamicznie zmienić kierunek lotu, chwycić owada czy uciec drapieżnikowi, a przy wspinaczce pomaga sobie skrzydłami."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Mały",
            birdColour: ["Brązowy", "Biały", "Żółty", "Czarny"],
            birdBeak: "Drapieżne",
            name: "Pójdźka",
            photo: "photos/Results/pojdzka.png",
            description: "Pójdźka to rodzaj sowy o częściowo dziennym trybie życia. Jak na sowę dosyć szybko biega. W poszukiwaniu pokarmu potrafi także grzebać w ziemi. Wycinka starych, głowiastych drzew, zamykanie dostępu do strychów i postępująca chemizacja środowiska mocno uderzyły w populację tych ptaków. Zamieszkuje tereny odkryte – pola, łąki, ugory i uprawy leśne. Gnieździ się też w budynkach, na strychach, w zagłębieniach murów. Odżywia się gryzoniami, płazami, gadami i dżdżownicami."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Duży",
            birdColour: ["Biały", "Czarny", "Czerwony"],
            birdBeak: "Rybożerne",
            name: "Rybitwa",
            photo: "photos/Results/rybitwa.png",
            description: "Rybitwy są dość często mylone z mewami, z kolei w locie mogą przypominać jaskółki.  Uwielbiają fruwać dość nisko nad wodą, z głową skierowaną w dół. Czasami tworzą gniazda na wystających z wody wrakach. Licznie gnieżdżą się wzdłuż środkowego brzegu Wisły i Bugu, a także na jeziorami i Morzem Bałtyckim."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Mały",
            birdColour: ["Żółty", "Czarny"],
            birdBeak: "Rybożerne",
            name: "Rycyk",
            photo: "photos/Results/rycyk.png",
            description: "Rycyk osiąga wielkość gołębia domowego. Gniazduje na terenach dużych łąk, w dolinach rzek, na bagniskach, a czasem na silnie wypastowanych pastwiskach. Preferuje zdecydowanie tereny o niskiej roślinności. Rycyki bardzo dobrze pływają i są niezwykle waleczne - potrafią przegonić wronę, mewę czy ptaka drapieżnego."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Mały",
            birdColour: ["Brązowy", "Biały", "Żółty", "Czarny"],
            birdBeak: "Owadożerne",
            name: "Sieweczka",
            photo: "photos/Results/sieweczka.png",
            description: "Sieweczka – niewielki, krępo zbudowany ptak zawiązany z otwartymi terenami położonymi w pobliżu rzek lub na wybrzeżach morskich. Warunkiem koniecznym jej egzystencji jest pobliska obecność płytkich zbiorników wodnych. Najmniejszy obok mysikrólika gatunek ptaka w Polsce. Posiada niewielki i bardzo ostro zakończony dzióbek."
        },
        {
            birdMonth: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            birdSize: "Mały",
            birdColour: ["Brązowy", "Biały", "Żółty"],
            birdBeak: "Ziarnożerne",
            name: "Strzyzyk",
            photo: "photos/Results/strzyzyk.png",
            description: "Strzyżyk zamieszkuje głównie wilgotne lasy liściaste, a także rzadziej obrzeża borów, zarośla śródpolne i zręby w parkach. W czasie lądowania rozkłada szeroko skrzydła i ogon, co sprawia wrażenie, jakby lądował na spadochronie. W zimie strzyżyki budują specjalne gniazda grupowe, w którym mieści się nawet kilkadziesiąt osobników."
        },
        {
            birdMonth: [02, 03, 04, 05, 06, 07, 08, 09, 10],
            birdSize: "Mały",
            birdColour: ["Niebieski", "Biały"],
            birdBeak: "Rybożerne",
            name: "Zimorodek",
            photo: "photos/Results/zimorodek.png",
            description: "Zimorodki wbrew powszechnej opinii nie gnieżdżą się zimą. Są za to bardzo przywiązane do swojego terytorium. Nie zwykły przemieszczać się w grupach. Budują głębokie, nawet metrowej długości nory w skarpach nadrzecznych oraz w obrywach i wyrobiskach żwiru. Zimorodek odżywia się niewielkimi rybami i owadami wodnymi. Na ofiary czatuje na wystających ponad wodę gałęziach, palikach, a bywa, że przysiada na końcówkach wędek. Błyskawicznie rzuca się do wody i nurkuje, starając się zachować pozycję zgodną z kierunkiem padania promieni słońca. Złapaną rybkę ogłusza, uderzając nią o gałąź błyskawicznymi ruchami dzioba. Następnie, rozpoczynając od głowy, połyka ją. W Polsce jest gatunkiem nielicznym, albowiem do połowów wymaga bardzo przezroczystej wody, stąd nie spotkamy go nad zanieczyszczonymi rzekami i stawami."
        }
    ];



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

        console.log("Tutej: " + $birdMonthValue);
        console.log(results[1].birdMonth);
        for (let i = 0; i < results.length; i++) {
            results[i].birdMonth.join(" ");
            if (results[i].birdMonth.join(" ").includes($birdMonthValue)) var aaa = 357;
        }

        tabJoin = tab.join(" ");

        ///////////////////////getting VICTORY//////////////////////
        let output = '';
        for (let i = 0; i < results.length; i++) {
            
            if ((typeof aaa !== undefined) && 
                ($birdSizeValue == results[i].birdSize) && 
                (results[i].birdColour.join(" ").includes(tabJoin)) &&
                (($birdBeakValue === results[i].birdBeak) || ($birdBeakValue === "Pomiń"))) {

                output += `<li>                
                    <h1>${results[i].name}</h1>            
                    <img src=${results[i].photo}>            
                    <p>${results[i].description}</p>            
                </li>`;
            }
        }
        $("#results").html(output);
        if(output.length == 0) $("#results").html(`<h1>Nic nie znaleziono.</h1>`);
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
