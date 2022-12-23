let link = document.querySelectorAll("nav li a");

link.forEach((li) => {
  li.addEventListener("click", (e) => {
    link.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

$('nav .dropdown').hover(function(){
  var $this = $(this);
  $this.addClass('show');
  $this.find('> a').attr('aria-expanded', true);
  $this.find('.dropdown-menu').addClass('show');
}, function(){
  var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
});

$(document).ready(function () {
  $(".loader").fadeOut(200);
});
new WOW().init();
var scroll_top =$('.Scroll-top')
$(window).scroll(function(){
    if($(window).scrollTop() >= 100){
        if(scroll_top.is(':hidden')){
        $(scroll_top).fadeIn(400)
        }
    }else{
        $(scroll_top).fadeOut(400)
    }
})
$(".scroll_top").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
        
    },1000)
})

//  Fun Loading WebSite
// Loading = () =>{
//   window.addEventListener("load", () => {
//       let Loader = document.querySelector(".Loader");
//       setTimeout(() => {
//       Loader.classList.add('Loader-none');
//       }, 3000);
//   });
//   }
//   Loading() 
//   Loadings = () =>{
//     window.addEventListener("load", () => {
//         let Loaders = document.querySelector(".Loaders");
//         setTimeout(() => {
//         Loaders.classList.add('Loader-none');
//         }, 3000);
//     });
//     }
//     Loadings() 

$(document).ready(function () {
  $(".Loader").fadeOut(200);
});
  