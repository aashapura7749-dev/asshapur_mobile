window.onload=function(){
  alert("🔥 Welcome to Aashpura Mobile Shop 🔥");
}

function buy(model){
  window.open("https://wa.me/919598919992?text=I want "+model);
}

setInterval(function(){
  const now=new Date();

  if(document.getElementById("clock")){
    document.getElementById("clock").innerHTML=
    "🕒 Time: "+now.toLocaleTimeString();
  }

},1000);

const offers=[
"🔥 Exchange Offer Available",
"⚡ Fast Repair Service",
"🎁 Free Phone Checkup",
"📱 Best Mobile Deals"
];

let i=0;

setInterval(function(){

  if(document.getElementById("offerText")){
    document.getElementById("offerText").innerHTML=offers[i];
  }

  i++;

  if(i>=offers.length){
    i=0;
  }

},2000);

window.onscroll=function(){

  if(document.body.scrollTop>200 ||
     document.documentElement.scrollTop>200){

      document.getElementById("topBtn").style.display="block";

  }else{

      document.getElementById("topBtn").style.display="none";
  }
}

function topFunction(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

function darkMode(){
  document.body.classList.toggle("dark");
}
