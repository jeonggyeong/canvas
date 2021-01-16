var bottleNum = 0;
var maxBottleNum = 3;
var spawnInterval = 500;

var field;
var fieldWidth;
var fieldHeight;
var wave;

initialize();

function initialize() {

    var initBottle=document.querySelector('#initializeBottle');
    console.log(initBottle);
    initBottle.onclick=function(){cleanField()};

    field = document.querySelector('.bottleField');
    console.log(field);
    fieldWidth = field.offsetWidth;
    fieldHeight = field.offsetHeight;

    wave = document.querySelector('.wave');
    wave.addEventListener('animationend', () => {
        wave.classList.remove('wave');
        void wave.offsetWidth;
        wave.classList.add('wave');
        wave.style.animationPlayState = "paused";
    });

    const animated = document.querySelector('.wave');
    animated.addEventListener('animationend', () => {
        var target = wave[0];
        target.classList.remove('wave');
        void target.offsetWidth;
        target.classList.add('wave');
        target.style.animationPlayState = "paused";
    });
    spawnBottles();
}

function cleanField() {
    var style = wave.style;
    style.animationPlayState = "running";
    setTimeout(cleanBottle, 500);
    setTimeout(spawnBottles, 500);
}

function spawnBottle() {


    if (bottleNum >= maxBottleNum)
        return;

    var bottle = document.createElement('button')
    
    bottle.className = "bottleLetter";
    bottle.style.position = 'absolute';
    bottle.style.left = String((Math.random()*100)%100) + '%';
    bottle.style.top = String((Math.random()*100)%100) + '%';
    bottle.style.height='150px';
    bottle.style.width='100px';
    bottle.style.zIndex = String(bottleNum);
    bottle.style.backgroundColor='transparent';
    bottle.style.borderColor= 'transparent';
    bottle.style.border= 'none';
    bottle.style.outline= 'none';
    bottle.style.backgroundImage='url("../src/Assets/image/prototype/bottle.png")';
    

    var image = document.createElement('img');
    image.className = "bottleImage";
    //image.src = url("../Assets/image/prototype/bottle.png");
    bottle.appendChild(image);
    field.appendChild(bottle);

    bottle.onclick=function(){letterPopup()};

    bottleNum += 1;
}

function spawnBottles() {
    for (var i = bottleNum; i < maxBottleNum; i++) {
        spawnBottle();
        console.log("현석 선생님?");
    }
}

function deleteBottle(bottle) {
    bottle.parentNode.removeChild(bottle);
}

function cleanBottle() {
    var child = field.lastElementChild;  
        while (child) { 
            deleteBottle(child);
            // beach.removeChild(child); 
            child = field.lastElementChild; 
            bottleNum -= 1;
        } 
}
