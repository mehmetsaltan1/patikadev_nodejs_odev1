let yaricap=process.argv.slice(2)*1
let pi=Math.PI
let Alan=pi*(yaricap*yaricap)
function AlanHesapla(yaricap){
return console.log("Yarıçapı : "+yaricap+" olan dairenin alanı : "+Alan);
}
AlanHesapla(yaricap)