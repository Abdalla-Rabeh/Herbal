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
  $(".loader").fadeOut(2000);
});