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