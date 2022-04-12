// all dependency
var settingCrad = document.querySelector('.setting');
var sizeInput = document.querySelectorAll('.size input');
var topIn = document.querySelector('.topIn');
var rightIn = document.querySelector('.rightIn');
var leftIn = document.querySelector('.leftIn');
var bottomIn = document.querySelector('.bottomIn');
var clipboardInput = document.querySelector('.clipboard .fild input');
var clipboardBtn = document.querySelector('.clipboard .fild #copyBtn');
var canves = document.querySelector('.canves');
var alertCard = document.querySelector('.alert');
var devloper = document.getElementById('devloper');
var bolbsCrad = document.getElementById('bolbs');
var bgBolbs = document.getElementById('bgBolbs');
var allSlider = document.querySelectorAll('.canves input');
// funtion dependency
var topSlidVal = null || 50;
var rightSlidVal = null || 30;
var leftSlidVal = null || 30;
var bottomSlidVal = null || 50;

// create all funtion
function createBolbs() {
   // strat looping for get slider value
   for (let x = 0; x < allSlider.length; x++) {
      allSlider[x].oninput = () => {
         if (x == 0) {
            topSlidVal = allSlider[x].value;
         } else if (x == 1) {
            rightSlidVal = allSlider[x].value;
         } else if (x == 2) {
            leftSlidVal = allSlider[x].value;
         } else if (x == 3) {
            bottomSlidVal = allSlider[x].value;
         }
         // set border radius after chnage slide value
         bolbsCrad.style.borderRadius = createBolbs();
         // set bg bolbs border radius
         bgBolbs.style.borderRadius = createBolbs();
         // set cilpboard value
         clipboardInput.value = createBolbs();
      }
   }
   // retun brder radius value
   return `${topSlidVal}% ${Math.abs(topSlidVal - 100)}% ${Math.abs(bottomSlidVal - 100)}% ${bottomSlidVal}% / ${leftSlidVal}% ${rightSlidVal}% ${Math.abs(rightSlidVal - 100)}% ${Math.abs(leftSlidVal - 100)}%`;
}

function steDefualtValue() {
   // set defult border radius
   bolbsCrad.style.borderRadius = createBolbs();
   // set bg bolbs border radius
   bgBolbs.style.borderRadius = createBolbs();
   // set slider defult value
   topIn.value = topSlidVal;
   rightIn.value = rightSlidVal;
   leftIn.value = leftSlidVal;
   bottomIn.value = bottomSlidVal;
   // defult cilpboard value
   clipboardInput.value = createBolbs();
}

// set size after user input size
function setEleSize() {
   for (let x = 0; x < sizeInput.length; x++) {
      sizeInput[x].oninput = () => {
         if (x == 0) {
            canves.style.width = sizeInput[x].value + 'px';
            bgBolbs.style.width = sizeInput[x].value + 'px';
         } else {
            canves.style.height = sizeInput[x].value + 'px';
            bgBolbs.style.height = sizeInput[x].value + 'px';
         }
      }
   }
}

function devlopertext() {
   if (devloper.innerHTML != 'sahab') {
      devloper.innerHTML = 'sahab';
      if (devloper.getAttribute('hre') != 'https://facebook.com/profile.php?id=100071042731343') {
         devloper.onclick = () => {
            window.open("https://facebook.com/profile.php?id=100071042731343", "devloper");
         }
      }
   }
}


// click handler
clipboardBtn.onclick = () => {
   clipboardInput.select();
   document.execCommand("copy");
   alertCard.classList.add('active');
   setTimeout(() => {
      alertCard.classList.remove('active');
   }, 2000);
}


// Invoking Functions
steDefualtValue();
setEleSize();
devlopertext();