let attachip = true;
let attachh = true;
let attacho = true;
let attachn = true;
let attachs = true;

function startup() {
    document.getElementById("info").style.display = "none";
}

function ip() {
    document.getElementById("hd").style.background = "url(iphone-13.jpg)";
    document.getElementById("hd").style.backgroundRepeat = "no-repeat";
    document.getElementById("hd").style.backgroundSize = "cover";
    document.getElementById("hd").style.backgroundPosition = "center";
    document.getElementById("Model").innerHTML = "Iphone";
    
    whiteall();
    document.getElementById("btn").style.color = "#fff";
    document.getElementById("btn").style.borderColor = "#fff";


    model("500$", "128 GB", "780$", "256 GB", "1000$", "512 GB");


    if (attachip == true) {
        clearUnderLine();
        document.getElementById("iphone").style.textDecoration = "underline";
        document.getElementById("info").style.display = "flex";

        attachip = false;
    } else {
        document.getElementById("iphone").style.textDecoration = "none";
        document.getElementById("hd").style.background = "url(background.jpg)";
        whiteall();
        document.getElementById("info").style.display = "none";
        attachip = true;


    }

}

function s() {
    document.getElementById("hd").style.background = "url(Samsung-Galaxy-S22-Ultra-bottom-edge.jpg)";
    document.getElementById("hd").style.backgroundRepeat = "no-repeat";
    document.getElementById("hd").style.backgroundSize = "cover";
    document.getElementById("hd").style.backgroundPosition = "center";
    document.getElementById("Model").innerHTML = "Samsung";
    var x = document.getElementById("samsung");
    coloBlack_down();
    coloWhite();
    btncolor("#fff");
    model("200$", "128 GB", "400$", "256 GB", "600$", "512 GB");


    if (attachs == true) {

        clearUnderLine();
        document.getElementById("Samsung").style.textDecoration = "underline";
        document.getElementById("info").style.display = "flex";

        attachs = false;
    } else {
        document.getElementById("Samsung").style.textDecoration = "none";
        document.getElementById("hd").style.background = "url(background.jpg)";
        document.getElementById("info").style.display = "none";
        whiteall();
        attachs = true;
    }
}

function o() {
    document.getElementById("hd").style.background = "url(oppo2.jpg)";
    document.getElementById("hd").style.backgroundRepeat = "no-repeat";
    document.getElementById("hd").style.backgroundSize = "cover";
    document.getElementById("hd").style.backgroundPosition = "center";
    coloBlack();
    coloBlack_down();
    document.getElementById("Model").innerHTML = "OPPO";

    btncolor("#000");
    model("128$", "128 GB", "250$", "256 GB", "300$", "512 GB");


    if (attacho == true) {

        clearUnderLine();
        document.getElementById("OPPO").style.textDecoration = "underline";
        document.getElementById("info").style.display = "flex";

        attacho = false;
    } else {
        document.getElementById("OPPO").style.textDecoration = "none";
        document.getElementById("hd").style.background = "url(background.jpg)";
        document.getElementById("info").style.display = "none";
        whiteall();
        attacho = true;
    }
    //   x1();
    // x3();

}

function n() {
    document.getElementById("hd").style.background = "url(nokia_5_4-og_image-optim.jpg)";
    document.getElementById("hd").style.backgroundRepeat = "no-repeat";
    document.getElementById("hd").style.backgroundSize = "cover";
    document.getElementById("hd").style.backgroundPosition = "center";
    document.getElementById("Model").innerHTML = "Nokia";
 
    whiteall();
  
    model("200$", "128 GB", "450$", "256 GB", "650$", "512 GB");

    if (attachn == true) {
        clearUnderLine();
        document.getElementById("Nokia").style.textDecoration = "underline";
        document.getElementById("info").style.display = "flex";

        attachn = false;
    } else {
        document.getElementById("Nokia").style.textDecoration = "none";
        document.getElementById("hd").style.background = "url(background.jpg)";
        document.getElementById("info").style.display = "none";
        whiteall();
        attachn = true;
    }
}

function h() {
     document.getElementById("hd").style.background = photo_of_huawei();

    document.getElementById("hd").style.backgroundRepeat = "no-repeat";
    document.getElementById("hd").style.backgroundSize = "cover";
    document.getElementById("hd").style.backgroundPosition = "center";
    document.getElementById("Model").innerHTML = "Huawei";
    whiteall();
    model("128$", "128 GB", "200$", "256 GB", "300$", "512 GB");

    if (attachh == true) {
        clearUnderLine();
        document.getElementById("Huawei").style.textDecoration = "underline";
        document.getElementById("info").style.display = "flex";

        attachh = false;

    } else {
        document.getElementById("Huawei").style.textDecoration = "none";
        document.getElementById("hd").style.background = "url(background.jpg)";
        document.getElementById("info").style.display = "none";
        whiteall();
        attachh = true;
    }

}

function x1() {
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    hideme(x1);
    showme(x2);
    showme(x3);
    showme(x4);
    showme(x5);
}

function x2() {
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    hideme(x2);
    showme(x1);
    showme(x3);
    showme(x4);
    showme(x5);
}

function x3() {
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    hideme(x3);
    showme(x1);
    showme(x2);
    showme(x4);
    showme(x5);
}

function x4() {
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    hideme(x4);

    showme(x1);
    showme(x2);
    showme(x3);
    showme(x5);
}

function x5() {
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    hideme(x5);

    showme(x1);
    showme(x2);
    showme(x3);
    showme(x4);
}

function showme(t) {
    console.log("show element");
    if (t.style.display === "none") {
        t.style.display = "block";
    } else {
        t.style.display = "block";
    }
}

function hideme(x) {
    console.log("hide element");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function coloBlack_down() {
    var B = "#000";

    document.getElementById("info").style.color = B;
    document.getElementById("line").style.background = B;
    document.getElementById("Model").style.color = B;

}

function colowhite_down() {
    var B = "#fff";

    document.getElementById("info").style.color = B;
    document.getElementById("line").style.background = B;
    document.getElementById("Model").style.color = B;

}

function coloBlack() {
    var w = "#000";
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    x1.style.color = w;
    x2.style.color = w;
    x3.style.color = w;
    x4.style.color = w;
    x5.style.color = w;

}

function coloWhite() {
    var w = "#fff";
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");

    x1.style.color = w;
    x2.style.color = w;
    x3.style.color = w;
    x4.style.color = w;
    x5.style.color = w;
}

function clearUnderLine() {
    var x1 = document.getElementById("iphone");
    var x2 = document.getElementById("Samsung");
    var x3 = document.getElementById("OPPO");
    var x4 = document.getElementById("Nokia");
    var x5 = document.getElementById("Huawei");
    x1.style.textDecoration = "none";
    x2.style.textDecoration = "none";
    x3.style.textDecoration = "none";
    x4.style.textDecoration = "none";
    x5.style.textDecoration = "none";
    attachip = true;
    attachh = true;
    attacho = true;
    attachn = true;
    attachs = true;
}

function whiteall() {
    
    btncolor("#fff");
    colowhite_down();
    coloWhite();
}

function btncolor(color) {
    document.getElementById("btn").style.color = color;
    document.getElementById("btn").style.borderColor = color;
}



function onclickreserve() {
    if (document.getElementById("iphone").style.textDecoration == "underline") {
        window.open("https://www.apple.com/iphone-13-pro/key-features", "_blank");
    }


    if (document.getElementById("Samsung").style.textDecoration == "underline") {
        window.open("https://www.samsung.com/us/smartphones/", "_blank");
    }


    if (document.getElementById("OPPO").style.textDecoration == "underline") {
        window.open("https://www.oppo.com/en/smartphones/", "_blank");
    }


    if (document.getElementById("Nokia").style.textDecoration == "underline") {
        window.open("https://www.nokia.com/phones/en_us/", "_blank");
    }


    if (document.getElementById("Huawei").style.textDecoration == "underline") {
        window.open("https://consumer.huawei.com/en/phones/", "_blank");
    }

}

function model(price1, hard1, price2, hard2, price3, hard3) {

    //
    document.getElementById("price1").innerText = price1;
    document.getElementById("hard1").innerText = hard1;


    //
    document.getElementById("price2").innerText = price2;
    document.getElementById("hard2").innerText = hard2;

    //
    document.getElementById("price3").innerText = price3;
    document.getElementById("hard3").innerText = hard3;

}

function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}

function photo_of_huawei() {

    let item1 = "url(./huaweiPic/pic1.jpg)";
    let item2 = "url(./huaweiPic/pic2.jpg)";

    var items = [
        item1, item2
    ];
    return random_item(items);
}