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
}

);