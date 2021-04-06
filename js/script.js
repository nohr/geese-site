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


//sets the starting logo position
window.onload = (event) => {
    anime({
        targets: menu,
        easing: 'easeInOutExpo',
        translateY: menuPos
    }); 
    anime({
        targets: logo2,
        easing: 'easeInOutExpo',
        translateY: logoPos
    });
};


console.log(typeof margin.marginBottom);




//toggles the nav menu
function butClick() {
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
            
            wrap.style.transition = "1s"
        logo1.style.display = "block";
        setTimeout(() => {
            wrap.style.display = "none";
            
          }, 300);
        console.log(open);
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
        setTimeout(() => {
            
          }, 1000);
        console.log(open);console.log(i);
        open = true;
    }

}