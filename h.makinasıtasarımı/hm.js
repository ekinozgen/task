var tuslar = document.getElementsByClassName("val");

var sonuc = document.getElementById("sonuc");

var islemler = "";

var esittir = document.getElementById("esittir");

var myFunction = function () {
  var tusDegeri = this.getAttribute("islem");

  if (tusDegeri == "=") {
    islemler = eval(islemler);
  } else {
    islemler += tusDegeri;
  }
  sonuc.value = islemler;
};

for (var i = 0; i < tuslar.length; i++) {
  tuslar[i].addEventListener("click", myFunction, false);
}

function temizle() {
  sonuc.value = "0";
  islemler = "";
}

function showResult() {
  esittir.addEventListener("click", myFunction, false);
}

function Kup() {
  var sayi = document.getElementById.value;
  var kup = sayi * sayi * sayi;
  document.getElementById("sonuc").value = kup;
}

function Kare() {
  var deger = document.getElementById("sonuc").value;
  var kare = deger * deger;
  document.getElementById("sonuc").value = kare;
}
