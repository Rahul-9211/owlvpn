// Burger code--------------------------------
const burger_content = document.querySelector('.burger_content');
const social = document.querySelector('.social');
const logo = document.querySelector('.logo');
const burger = document.querySelector('.burger');
const cross = document.querySelector('.burger2');
const section = document.querySelector('.slideshow-container');
const navbar_list = document.querySelector('.navbar_list');
const navbar = document.getElementById('navbar');

burger.addEventListener('click',show);
cross.addEventListener('click',close);

function show(){
  // navbar_list.style.filter = 'blur(3px)';
  // section.style.filter = 'blur(3px)';
  burger_content.style.display = 'block';
  logo.style.display = 'none';
  burger.style.display = 'none';
  section.style.filter = 'blur(50px)';
}
function close(){
  burger_content.style.display = 'none';
  logo.style.display = 'block';
  burger.style.display = 'block';
  section.style.filter = 'blur(0px)';
  // navbar_list.style.filter = 'blur(0px)';
}
// Thumbnail image controls
function currentSlide(n) {
  burger_content.style.display = 'none';
  logo.style.display = 'block';
  burger.style.display = 'block';
  section.style.filter = 'blur(0px)';
}


function PopUp(){
  document.getElementById('ac-wrapper').style.display="none"; 
}


// scroll Behaviour 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("social").style.display = "flex";
    document.querySelector('.line1').style.backgroundColor = "#9a9a9a";
    document.querySelector('.line2').style.backgroundColor = "#9a9a9a";
    document.querySelector('.line3').style.backgroundColor = "#9a9a9a";
    document.querySelector('.logo h1').style.color = "rgb(181 181 181)";
  } else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("social").style.display = "none";
    document.querySelector('.line1').style.backgroundColor = "white";
    document.querySelector('.line2').style.backgroundColor = "white";
    document.querySelector('.line3').style.backgroundColor = "white";
    document.querySelector('.logo h1').style.color = "white";
    // document.getElementById("social").a.i.style.color = "white";
  }
  prevScrollpos = currentScrollPos;
}


// NAvbar script 
// TypeWriter script ===================>>>>>>>>>>>>>>>>>>>>
var typewriter = function(txt) {
    var container = document.getElementById('typewriter'),
      speed = 28,
      i = 0,
      wordsObj = txt.split(" ")
    container.textContent = "";
    console.log(txt)
    runAllWords();
    function runAllWords() {
  
      if (i < wordsObj.length) {
        var a = (i == 0) ? i : i - 1;
        setTimeout(function() {
          showWord(wordsObj[i], 0)
        }, wordsObj[a].length * speed);
      }
    }
    function showWord(word, countWord) {
      if (countWord < word.length) {
        setTimeout(function() {
          showLetter(word, countWord)
        }, speed);
      } else {
        container.textContent = container.textContent + " ";
        i += 1;
        runAllWords();
      }
      if (i === wordsObj.length) {
        console.log('complete')
      }
    }
    function showLetter(word, countWord) {
      container.textContent = container.textContent + word[countWord];
      showWord(word, countWord + 1);
    }
  }
  var i = 0;
  function myLoop () {  
  //  create a loop function
  
   var dataType = document.getElementById('typewriter').dataset.typewriter,
       w = dataType.split(',')
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      typewriter(w[i]);          //  your code here
      i++;                     //  increment the counter
      if (i < w.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 3000)
  }
  myLoop();


  //////////////////////////////////////
/////////////////////////////////////
// Snowflakes
  (function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 90);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 150,
    mX = 100,
    mY = 100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 800,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255,)" + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 5) + 0;
    flake.speed = (Math.random() * 1) + 0.2;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.1;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 8,
            speed = (Math.random() * 1) + 0.1,
            opacity = (Math.random() * 0.5) + 0.1;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();




//  TEstimonial 
// client Carousel ------------------------------------->>>>>>>>>>>>>
var client_slideIndex = 1;
client_showSlides(client_slideIndex);

// Next/previous controls
function plusSlides(n) {
  client_showSlides(client_slideIndex += n);
}

// Thumbnail image controls
function client_currentSlide(n) {
  client_showSlides(client_slideIndex = n);
}

function client_showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("client_slides");
  var dots = document.getElementsByClassName("client_dot");
  if (n > slides.length) {client_slideIndex = 1}
  if (n < 1) {client_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[client_slideIndex-1].style.display = "block";
  dots[client_slideIndex-1].className += " active";
}




// partner Carousel ------------------------------------->>>>>>>>>>>>>
var partner_slideIndex = 1;
partner_showSlides(partner_slideIndex);

// Next/previous controls
function plusSlides(n) {
  partner_showSlides(partner_slideIndex += n);
}
// Thumbnail image controls
function partner_currentSlide(n) {
  partner_showSlides(partner_slideIndex = n);
}
function partner_showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("partner_slides");
  var dots = document.getElementsByClassName("partner_dot");
  if (n > slides.length) {partner_slideIndex = 1}
  if (n < 1) {partner_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[partner_slideIndex-1].style.display = "block";
  dots[partner_slideIndex-1].className += " active";
}



