let about = document.getElementById("aboutText")
let img1 = document.querySelector(".img-cnt-1")
let img2 = document.querySelector(".img-cnt-2")
let img3 = document.querySelector(".img-cnt-3")
let img4 = document.querySelector(".img-cnt-4")
let skill = document.getElementById("skillsText")
let contact = document.getElementById("contactText")

window.addEventListener("scroll", function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
    console.log(scrolled);
  about.style.transform = `translateX(${(scrolled) * 14}px)`;
  img1.style.transform = `translateY(-${(scrolled) * 12}px)`;
  img2.style.transform = `translateY(-${(scrolled) * 8}px)`;
  img3.style.transform = `translateY(-${(scrolled) * 7}px)`;
  img4.style.transform = `translateY(-${(scrolled) * 6}px)`;
  skill.style.transform = `translateX(-${(scrolled) * 10}px)`;
  contact.style.transform = `translateX(${(scrolled) * 10}px)`;

});





$(document).ready(function () {
  $(".heroSlider").slideUp(1000);
});

$(document).ready(function () {
    $("#topNav").fadeIn(2000)
});

  

$(window).scroll(function(){
  let position=$(this).scrollTop();
  if(position>=1000){
      $('.hider').slideUp(500);
  } else {
    $('.hider').slideDown(500);
  }
});

  

$(window).scroll(function(){
  let position=$(this).scrollTop();
  if(position>=900){
    $(".work-cnt").slideDown()
  } else{
    $(".work-cnt").slideUp()

  }
});







