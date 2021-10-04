var baglantilar = ["https://izlenme-satin-al.com/", "https://numarasmsonay.com"];
var kelimeler = ["tiktok izlenme satın al" , "sms onay"];

var htmlDiv=document.querySelector("#links");

var i;
var htmlKod="<center>";
for (i = 0; i < 2; i++) {
	htmlKod+="<a href=""+baglantilar[i]+"">"+kelimeler[i]+"</a> , ";
}
htmlKod+="</center>";
htmlDiv.innerHTML=htmlKod;
