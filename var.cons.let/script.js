function play() {
  for (let i = 0; i <= 3; i++) {
    //block scope alanında let değişkenimizi kullanabiliyoruz.
    console.log(i);
  }
  console.log("i degeri", i); //function scope alanında hata veriyor.
}
play();

////////////////////////////

function play() {
  for (var i = 0; i <= 3; i++) {
    console.log(i);
  }
  console.log("i degeri", i); // var değişkenimizi iki tarafta da kullanabiliyoruz.
}
play();

////

var username = "user";
var username = "freeuser"; // var ile tanımlanan bir değeri tekrardan tanımlayabiliyoruz.
console.log(username);

////

//let brand= "apple";
//let brand  = "samsung"; // tanımlanan bir değeri tekrar let ile değiştiremiyoruz hata veriyor.
//console.log(marka);

///

let brand = "lg";
brand = "casper"; // değişkenimize verdiğimiz değeri sadece veridğimiz değer ile kullanırsak bir sorun oluşmuyor.
console.log(brand);

///

const day = "saturday";
day = "monday"; // sabit bir değişken tanımlamamız gerektiği zaman const değişkenini kullanmalıyız.
console.log(day);
