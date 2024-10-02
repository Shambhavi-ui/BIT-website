var nav = document.querySelector(".imp");

nav.addEventListener("mouseenter", function() {
    var tl = gsap.timeline()

    tl.to(".nav-element",{
        height: "22vh",
    
        duration: 0.5
     })
     tl.to(".nav-part2 h5", {
        display: "block",
        duration: 0.1
     })
     tl.from(".nav-part2 h5 span", {
        y: 25,
         duration:0.3,
        stagger: {
            amount: 0.2
        }
    })
}) 

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to(".nav-element", {
        height: 0,
        duration: 0.2
    })
})
