let open = false;
let wrap = document.querySelector('.drop-wrapper');
var menu = document.getElementById("dropup");
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");
let logoHeight = logo2.getBoundingClientRect();
let menuHeight = menu.getBoundingClientRect();
let intViewportHeight = window.innerHeight;
let menuPos = (intViewportHeight + (menuHeight.top/2));
let margin = window.getComputedStyle(logo2);
let i = parseFloat(margin.marginBottom);
let logoPos = (intViewportHeight - (logoHeight.bottom + i));
const mediaQuery = window.matchMedia('(min-width: 768px)')

// Get Accelerometer data
function getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
       // Add a listener to get smartphone orientation 
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way

                if (window.matchMedia("(orientation: portrait)").matches) {
                    leftToRight_degrees = event.gamma;
                }

                if (window.matchMedia("(orientation: landscape)").matches) {
                    leftToRight_degrees = event.beta;
                }
                
                dot = document.getElementsByClassName("beam")[0]
                dot.setAttribute('style', "transform: rotate(" + (leftToRight_degrees) +"deg);");
                
            });
        }
    });
}

// Get the modal
var modal = document.getElementsByClassName("modal")[0];
var bg = document.getElementsByClassName("modalBG")[0];

// Get the button that opens the modal
var btn = document.getElementById("m4");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
    bg.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    bg.style.display = "none";
    getAccel();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bg) {
    modal.style.display = "none";
    bg.style.display = "none";
    getAccel();
  }
};


window.onload = (event) => {
    anime({
        targets: menu,
        easing: 'easeInOutExpo',
        translateY: "100vh",
        duration: 1
    }); 
    anime({
        targets: logo2,
        easing: 'easeInOutExpo',
        duration: 1
    });
};

//toggles the nav menu
function butClick() {
    function handleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) { // Not Mobile
            if (open) {
                anime({
                    targets: menu,
                    easing: 'easeInOutExpo',
                    translateY: menuPos,
                    delay: 0,
                    duration: 300
                }); 
                        wrap.style.opacity = "0%";
                    
                    wrap.style.transition = "1s";
                logo1.style.display = "block";
                setTimeout(() => {
                    wrap.style.display = "none";
                    
                  }, 300);
                open = false;
            } else if (!open) {
                anime({
                    targets: menu,
                    easing: 'cubicBezier(0.075, 0.820, 0.165, 1.000)',
                    translateY: "0vh",
                    delay: 0,
                    duration: 300
                });
                wrap.style.display = "grid";
                wrap.style.opacity = "100%";
                wrap.style.transition = "2s";
                logo1.style.display = "none";
                open = true;
            }
        } else { // Mobile
            if (open) {
                anime({
                    targets: menu,
                    easing: 'easeInOutExpo',
                    translateY: menuPos,
                    delay: 0,
                    duration: 300
                }); 
                anime({
                    targets: logo2,
                    easing: 'easeInOutExpo',
                    translateY: logoPos,
                    duration: 300
                });
                        wrap.style.opacity = "0%";
                    
                    wrap.style.transition = "1s";
                logo1.style.display = "block";
                setTimeout(() => {
                    wrap.style.display = "none";
                    
                  }, 300);
                open = false;
            } else if (!open) {
                anime({
                    targets: menu,
                    easing: 'cubicBezier(0.075, 0.820, 0.165, 1.000)',
                    translateY: "0%",
                    delay: 0,
                    duration: 300
                });
                anime({
                    targets: logo2,
                    easing: 'cubicBezier(0.075, 0.820, 0.165, 1.000)',
                    translateY: 0,
                    duration: 300
                });
                wrap.style.display = "grid";
                wrap.style.opacity = "100%";
                wrap.style.transition = "2s";
                logo1.style.display = "none";
                open = true;
            }
        }
      }
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

}




