// locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoConAnimation(){
    var videoCon = document.querySelector("#video-container")
    var playBtn = document.querySelector("#play")
    videoCon.addEventListener("mouseenter", function(){
        gsap.to(playBtn,{
            opacity:1,
            scale:1
        })
    })

    videoCon.addEventListener("mouseleave", function(){
        gsap.to(playBtn,{
            opacity:0,
            scale:0
        })
    })

    videoCon.addEventListener("mousemove",function(dets){
        gsap.to(playBtn,{
            left:dets.x-70,
            top:dets.y-80
        })
    })

}
videoConAnimation()

// for #page1.....
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })

    gsap.from("#video-container",{
        scale:0.9,
        // y:100,
        opacity:0,
        delay:1.2,
        duration:0.5,

    })
}
loadingAnimation()