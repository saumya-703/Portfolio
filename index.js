window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky" , window.scrollY)
   })
var preloader= document.getElementById('loading');
{
    function load(){
        preloader.style.display= 'none';
    }
}
document.addEventListener('DOMContentLoaded', function(event) {

    for(let i = 0;i<document.getElementsByClassName('more').length;i++){

        document.getElementsByClassName('more')[i].style.visibility = 'visible';
        document.getElementsByClassName('less')[i].style.visibility = 'visible';

       document.getElementsByClassName('more')[i].onclick = function() {
        document.getElementsByClassName('card')[i].classList.toggle('do-flip');
        };

        document.getElementsByClassName('less')[i].onclick = function() {
        document.getElementsByClassName('card')[i].classList.toggle('do-flip');
        };
    };

  }); 
