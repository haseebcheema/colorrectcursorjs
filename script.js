
// Dynamic Color Intensity Adjustment Based on Cursor Position

var rect = document.querySelector("#rectangle");
// 
// var dimensions = rect.getBoundingClientRect

rect.addEventListener("mousemove", function(dets){

    // find rectangle location
    var rectLocation = rect.getBoundingClientRect();

    // find cursor's location inside the rectangle
    var cursorLocation = dets.clientX - rectLocation.x;

    // 0-499 0-249 250-499
    
    // change intensity and color to red if on the left side of the rectangle
    if(cursorLocation < rectLocation.width / 2){
       var redColor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, cursorLocation);
       gsap.to(rect, {
        backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease: Power1
       })
    }

    // change intensity and color to blue if on the left side of the rectangle
    else{
        var blueColor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, cursorLocation);
       gsap.to(rect, {
        backgroundColor: `rgb(0, 0, ${blueColor})`,
        ease: Power1
       })
    }
});

// mouse leave event
rect.addEventListener("mouseleave", function(dets){
    gsap.to(rect, {
        backgroundColor: "#fff",
        ease: Power1
    })
});