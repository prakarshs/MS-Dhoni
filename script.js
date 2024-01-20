var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 5 + "px";
    cursor.style.top = dets.y - 2 + "px";
    cursorBlur.style.left = dets.x - 42 + "px";
    cursorBlur.style.top = dets.y - 40 + "px";
})

gsap.to("#nav-content", {
    backgroundColor: "#16161d",
    height: 80,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -15%",
        scrub: 2
    }
})
gsap.to("#logo #logo-img", {
    rotate: 360,
    height: 60,
    width: 60,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -15%",
        scrub: 2.5
    }
})