function gsapscroll(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
  gsapscroll();


  function loader(){
  var tl = gsap.timeline();
  tl.to ("#logo",{
   opacity:1
  })
  .to("#loader",{
   opacity:1,
   height:"98%",
   duration:2,
   onUpdate: function () {
    document.querySelector("#logo").style.color = "#ebe4da";
   },
})
  .to("#wloader",{
    opacity:1,
    height: '86%',
    duration:2,
    onUpdate: function () {
      document.querySelector("#logo").style.display = "none";
  },
  onComplete: function () {
  document.querySelector("#nav").style.opacity = 1;
  document.querySelector("#loader").style.display = "none";
  document.querySelector("#wloader").style.display = "none";
},
})
}
var tl = gsap.timeline()
loader() 
tl.from(".heading h1, .heading p",{
  delay: 5,
  opacity:0,
  y: 80,
  duration:0.5,
  stagger:0.5
})
tl.from(".image",{
  opacity:0,
  y: 80,
  duration:0.8,
})
tl.from("#about-us img",{
  opacity:0,
  y: 80,
  duration:0.8,
})




gsap.to("#about-us-in h3",{
  opacity:1,
  scrollTrigger:{
    trigger:"#about-us-in h3 ",
    scroller:"#main",
    start:"top 100%",
    // markers:true
  },
  
  ease: Expo.easeInOut,
  duration:3,

})
gsap.to(" #about-us-in p",{
  opacity:1,
  scrollTrigger:{
    trigger:" #about-us-in p",
    scroller:"#main",
    start:"top 100%"
  },
   ease: Expo.easeInOut,
  duration:2,
    // markers:true
})

// gsap.to(".pg2 p",{
//   scrollTrigger:{
//     scroller:'#main',
//     trigger:'.pg2 p',
//     markers:true,
//     start:'top 900%'
//   },
//   opacity:1,
//   ease:Expo.easeInOut,
//   duration:2
// })



$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});
