// alert("Salom O'zbekiston!");
/*document.write("Salom O'zbekiston!");
let yosh = prompt("Sizning yoshingiz nechada?");
let tugilgan_yil=2020-yosh;
document.write("Siz "+tugilgan_yil+"-yilda tugilgansiz.");
let surash = confirm("Siz shu oynachani berkitishni yoki tark etishni hohlaysizmi?");
if(surash){
   alert("Hop rahmat, kuningiz yaxshi o'tsin. yana bizning sahifamizga tashrif buyuring!");
}
else{
    alert("Ha, yaxshi, agar bizning yordam kerak bolsa, bizdan so'rayvering!");
}*/
// let poytaxt = prompt("O'zbekistonning poytaxti qaysi shahar?");
// document.getElementById("my5").innerHTML = "<b>Demak,sizningcha O'zbekiston poytaxti:</b>"+poytaxt;
let text = ' ';
let i;
let qatorlar_soni = 0;
let nechta = prompt("Nechta sharikcha yasashimizni hohlaysiz?");
for (i= 0 ;i < nechta; i ++){
    qatorlar_soni ++;
    if (i%2==0){
        text +="<div class='box juft_sonlar'> " + qatorlar_soni + " </div>";
    }
    else{
        text +="<div class='box toq_sonlar'> " + qatorlar_soni + " </div>";
    }

}

document.getElementById("my5").innerHTML = text;