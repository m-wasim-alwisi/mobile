"use strict";

function ip() {
  document.getElementById("hd").style.background = "url(ezgif-4jpg.jpg)";
  document.getElementById("hd").style.backgroundRepeat = "no-repeat";
  document.getElementById("hd").style.backgroundSize = "cover";
  document.getElementById("hd").style.backgroundPosition = "center";
  document.getElementById("Model").innerHTML = "Iphone"; //   x1();
}

function s() {
  document.getElementById("hd").style.background = "url(Samsung-Galaxy-S22-Ultra-bottom-edge.jpg)";
  document.getElementById("hd").style.backgroundRepeat = "no-repeat";
  document.getElementById("hd").style.backgroundSize = "cover";
  document.getElementById("hd").style.backgroundPosition = "center";
  document.getElementById("Model").innerHTML = "Samsung";
  var x = document.getElementById("samsung"); // x2();
}

function o() {
  document.getElementById("hd").style.background = "url(Oppo.jpg)";
  document.getElementById("hd").style.backgroundRepeat = "no-repeat";
  document.getElementById("hd").style.backgroundSize = "cover";
  document.getElementById("hd").style.backgroundPosition = "center";
  document.getElementById("Model").innerHTML = "OPPO";
  var x = document.getElementById("OPPO"); // x3();
}

function n() {
  document.getElementById("hd").style.background = "url(nokia_5_4-og_image-optim.jpg)";
  document.getElementById("hd").style.backgroundRepeat = "no-repeat";
  document.getElementById("hd").style.backgroundSize = "cover";
  document.getElementById("hd").style.backgroundPosition = "center";
  document.getElementById("Model").innerHTML = "Nokia"; //    x4();
}

function h() {
  document.getElementById("hd").style.background = "url(huawei.jpg)";
  document.getElementById("hd").style.backgroundRepeat = "no-repeat";
  document.getElementById("hd").style.backgroundSize = "cover";
  document.getElementById("hd").style.backgroundPosition = "center";
  document.getElementById("Model").innerHTML = "Huawei"; //  x5();
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