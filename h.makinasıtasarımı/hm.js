var tuslar = document.getElementsByClassName("number");

var sonuc = document.getElementById("sonuc");

var islemler = "";

var myFunction = function () {
  var tusDegeri = this.getAttribute("islem");

  if (tusDegeri == "=") {
    islemler = eval(islemler);
  } else {
    islemler += tusDegeri;
  }
  sonuc.value = islemler;
  console.log("tusDegeri: ", tusDegeri);
  console.log("islemler: ", islemler);
};

for (var i = 0; i < tuslar.length; i++) {
  tuslar[i].addEventListener("click", myFunction, false);
}

function temizle() {
  sonuc.value = "";
  islemler = "";
}
