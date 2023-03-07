


const oyuncu_skor=document.getElementsByClassName("oyuncu_skor")[0];
const bilgisayar_skor=document.getElementsByClassName("bilgisayar_skor")[0];
const tas=document.getElementById("tas");
const kagit=document.getElementById("kagit");
const makas=document.getElementById("makas");
const oyuncu_secimi=document.getElementById("oyuncu_secimi");
const bilgisayar_secimi=document.getElementById("bilgisayar_secimi");
const mesaj = document.getElementsByClassName ("mesaj")[0];
var oyuncu=0;
var bilgisayar=0;
var fark=0
fark=prompt("Kaç Olan Kazansın?");
function bilgisayarSecim(){
        const secim=["tas","kagit","makas"];
        const rasgeleSayi=Math.floor(Math.random()*3);
        bilgisayar_secimi.setAttribute("src",`res/${secim[rasgeleSayi]}.png`);
        return secim[rasgeleSayi]; ;
}       

if(fark==""){
        alert("Sayfayı Yenileyin Ve Lütfen Değer Girin");
}
function eventListeners(){
        tas.addEventListener("click",function(){
                oyuncu_secimi.setAttribute("src",`res/tas.png`);
                var bil_secim = bilgisayarSecim();
                sonuc("tas",bil_secim);
                
        });

        kagit.addEventListener("click",function(){
                oyuncu_secimi.setAttribute("src",`res/kagit.png`);
                var bil_secim = bilgisayarSecim();
                sonuc("kagit",bil_secim);
                
        });

        makas.addEventListener("click",function(){
                oyuncu_secimi.setAttribute("src",`res/makas.png`);
                var bil_secim = bilgisayarSecim();
                sonuc("makas",bil_secim);
                
        });
}
eventListeners()



function sonuc(oyuncu_secimi, bil_secim){
        switch(oyuncu_secimi+bil_secim){
                case "taskagit":
                case "kagitmakas":
                case "makastas":
                        kaybet();
                break; 

                case "tastas":
                case "kagitkagit":
                case "makasmakas":
                        berabere();
                break;
                
                case "makaskagit":
                case "kagittas":
                case "tasmakas":
                        kazan();
                break;

                default:"HATAAAAAA"; 
        }
        
}

function kazan(){
        oyuncu=oyuncu+1;
        mesaj.innerHTML="Tebrikler KAZANDIN";
        oyuncu_skor.innerHTML=oyuncu.toString();
        if(oyuncu==fark){
                alert("Oyuncu Kazandı");
        }
}

function berabere(){
        mesaj.innerHTML="BERABERE";
}

function kaybet(){
        bilgisayar=bilgisayar+1;
        mesaj.innerHTML="LOSERRRRRRRR";
        bilgisayar_skor.innerHTML=bilgisayar.toString();
        if(bilgisayar==fark){
                alert("Bilgisayar Kazandı");
        }
}

