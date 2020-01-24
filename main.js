function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$("#img1").on({
    "mouseover": function () {
        this.src = 'images/img1-hover.jpg';
    },
    "mouseout": function () {
        this.src = 'images/img1.jpg';
    }
});

$("#img2").on({
    "mouseover": function () {
        this.src = 'images/img2-hover.jpg';
    },
    "mouseout": function () {
        this.src = 'images/img2.jpg';
    }
});

$("#img3").on({
    "mouseover": function () {
        this.src = 'images/img3-hover.jpg';
    },
    "mouseout": function () {
        this.src = 'images/img3.jpg';
    }
});

$("#logo1").on({
    "mouseover": function () {
        this.src = 'images/fb-logo-hover.png';
    },
    "mouseout": function () {
        this.src = 'images/fb-logo.png';
    }
});

$("#logo2").on({
    "mouseover": function () {
        this.src = 'images/twitter-logo-hover.png';
    },
    "mouseout": function () {
        this.src = 'images/twitter-logo.png';
    }
});

$("#logo3").on({
    "mouseover": function () {
        this.src = 'images/yt-logo-hover.png';
    },
    "mouseout": function () {
        this.src = 'images/yt-logo.png';
    }
});

$("#logo4").on({
    "mouseover": function () {
        this.src = 'images/pinterest-logo-hover.png';
    },
    "mouseout": function () {
        this.src = 'images/pinterest-logo.png';
    }
});

$("#logo5").on({
    "mouseover": function () {
        this.src = 'images/gplus-logo-hover.png';
    },
    "mouseout": function () {
        this.src = 'images/gplus-logo.png';
    }
});

$(function () {

    $(".datepicker").datepicker({
        firstDay: 1,
        dayNamesMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        dateFormat: "dd-mm-yy",
        showOtherMonths: true,
        selectOtherMonths: true
    });

    $("#go-down").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
    });

}
);

//SLIDER

var images = ["banner1.jpg", "banner2.jpg"];
$(function () {
    var i = 0;
    $("header").css("background-image", "linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(images/" + images[i] + ")");

    $("#arrow-left").on("click", function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("header").fadeOut(0, function () {
            $(this).css("background-image", "linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(images/" + images[i] + ")");
            $(this).fadeIn(0);
        });
    });

    $("#arrow-right").on("click", function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("header").hide(0, function () {
            $(this).css("background-image", "linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(images/" + images[i] + ")");
            $(this).show(0);
        });
    });
});
