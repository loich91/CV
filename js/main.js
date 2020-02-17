//menu hamburger
var menu= document.getElementById("menu");

var menuham=document.getElementById("menuham")

var close=document.getElementById("close")

if(menuham!=null && menu!=null && close!=null){
  
  menuham.addEventListener('click',function(e){
      menu.classList.add("is-visible");
      menuham.classList.add("is-visible")
      })
    close.addEventListener('click',function(e){
      menu.classList.remove("is-visible");
      menuham.classList.remove("is-visible")
    })
  }

// menu configuration slider
  var slideIndex = 1;
  showDivs(slideIndex);
  var desc=document.getElementById("text").innerHTML=" ERP d'Univerbal";
  function plusDivs(n) {
    showDivs(slideIndex += n);
    if(slideIndex == 1){
      var desc=document.getElementById("text").innerHTML="ERP d'Univerbal";
    }
    if(slideIndex == 2){
      var desc=document.getElementById("text").innerHTML= "Exemple de site fait durant ma formation";
    }
  }
  function moinsDivs(n) {
    showDivs(slideIndex -= n)
    var desc=document.getElementById("text").innerHTML="ERP d'Univerbal";
    if(slideIndex == 2){
    var desc=document.getElementById("text").innerHTML=  "Exemple de site fait durant ma formation";
    }
    if(slideIndex == 1) {
      var desc=document.getElementById("text").innerHTML="ERP d'Univerbal";
    }
  }
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }
