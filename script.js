var crsr=document.querySelector("#cursor")
var crsrBlur=document.querySelector("#cursorBlur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x +"px"
    crsr.style.top= dets.y +"px"
    crsrBlur.style.left= dets.x -100 +"px"
    crsrBlur.style.top= dets.y -100 +"px"

})

var h4All= document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.backgroundColor= "transparent"
        crsr.style.border= "1px solid #95C11E"
        crsr.style.scale= 3
        
        
    })
    
    elem.addEventListener("mouseleave",function(){
        crsr.style.backgroundColor= "#95C11E"
        crsr.style.border= "0px solid #95C11E"
        crsr.style.scale= 1
            
        
        
        
    })
    
    
})


gsap.to("#nav",{
    backgroundColor: '#000',
    height:"110px",
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        
        
        
        
        scrub:1
    }
        
        
})

gsap.to("#main",{
    backgroundColor: "#000",
    
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        markers: true,
        scrub:2
        
    }
})

gsap.to("#cursor",{
    scrollTrigger:{
        trigger:"#cursor",
        scroller:"body",

    }
})

gsap.from("#about-us img,#aboutustext",{
    y:50,
    opacity:0,
    duration: 2,
    stagger: 0.8,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub:3
    }


})

gsap.from("#quotepic1 img",{

    y:-50,
    x:-50,
    
    scrollTrigger:{
        trigger:"#quotepic1 img",
        scroller:"body",
        start: "top 30%",
        end: "top 50%",
      
        scrub:2,

    }
})

gsap.from("#quotepic2 img",{
    y:-60,
    x:-40,

    scrollTrigger: {
        trigger:"#quotepic2 img",
        scroller:"body",
        start: "top 200%",
        end: "top 30%",
        
        scrub: 1,
    }
})

