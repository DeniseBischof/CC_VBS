var timeoutLength = 1500; 
var changeState = 0.75; 

let idleTimer;

let currentState;
let totalMoods;

function init() {

    currentState = "happy";
    totalStimuli = interaction.length;

    buildInputs();
    draw();

    setTimeout(idleUpdate, timeoutLength);
}


function draw() {

    changePetImage();
    drawTreeLayer();

}

function changePetImage(){

    let img;
    let stateElem;
    let descText;

    img = document.getElementById("petImg");
    stateElem = getNamedElement(states, currentState); 
    descText = stateElem.desc;

    img.src = "assets/pet-pics/" + stateElem.img;
    img.alt = descText;
   
    document.getElementById("out").innerHTML = descText;


}

function drawTreeLayer(){

    let frontImg;

    frontImg = document.getElementById("frontImg");
    frontImg.src = "assets/background_front.png";

}


function getNamedElement(arr, name) {

    var elemIndex;
    var elem;

    for (elemIndex = 0; elemIndex < arr.length; ++elemIndex) {
        elem = arr[elemIndex];
        if (elem.name == name) {
            return elem;
        }
    }

    return false;

}


function chooseRandom(arr) {

    var arrLen;
    var arrIndex;
    var choiceProb;

    arrLen = arr.length;

    for (arrIndex = 0; arrIndex < arrLen; ++arrIndex) {
        choiceProb = 1 / (arrLen - arrIndex);
        if (Math.random() <= choiceProb) {
            break;
        }
    }

    return arr[arrIndex];

}


function idleUpdate() {

    var stateElem;

    stateElem = getNamedElement(states, currentState);

    if (stateElem.next.length > 0) {
        if (Math.random() >= changeState) {
            currentState = chooseRandom(stateElem.next);
        }
    }

    changePetImage();

    idleTimer = setTimeout(idleUpdate, timeoutLength);

}


function doAction(actionName) {

    clearTimeout(idleTimer);

    var actionElem;

    actionElem = getNamedElement(interaction, actionName);
    currentState = chooseRandom(actionElem.effects);

    changePetImage();

    idleTimer = setTimeout(idleUpdate, timeoutLength);

}


function buildInputs() {
    
    var inputDiv;
    var interactionIndex;

    inputDiv = document.getElementById("inputs");

    for (interactionIndex = 0; interactionIndex < totalStimuli; ++interactionIndex) {
        inputDiv.innerHTML += 
            "<input type=\"button\" \
            value=\"" + interaction[interactionIndex].desc + "\" \
            onclick=\"doAction('" + interaction[interactionIndex].name + "')\">";
    }
}


var states = [
    {
        name: "happy", 
        desc: "Your bird is happy.", 
        img: "Bird_Happy.gif", 
        next: [ 
	        "bored",
            "exercise",
            "hungry"
        ]
    },
    {
        name: "bored",
        desc: "Your bird doesn't know what to do.",
        img: "Bird_Bored.gif",
        next: [
            "exercise",
            "hungry"
        ]
    },
    {
        name: "sad",
        desc: "Your bird is crying!",
        img: "Bird_Cry.gif",
        next: [
	        "bored"
        ]
    },
    {
        name: "tired",
        desc: "Your bird is exhausted.",
        img: "Bird_Tired.gif",
        next: [
	        "bored"
        ]
    },
    {
        name: "hungry",
        desc: "Your bird is hungry!",
        img: "Bird_Hungry.gif",
        next: [
        ]
    },
    {
        name: "exercise",
        desc: "Your bird is running around.",
        img: "Bird_Run.gif",
        next: [
	        "happy",
            "hungry",
            "tired"
        ]
    },
    {
        name: "eating",
        desc: "Mppfmmhh m pfpfhmhpf.",
        img: "Bird_Eats.gif",
        next: [
            "happy",
            "bored"
        ]
    },
    {
        name: "sleeping",
        desc: "The bird is sleeping. Ssshhhhhh!",
        img: "Bird_Sleeps.gif",
        next: [
            "bored"
        ]
    },
    {
        name: "clean",
        desc: "It's cold! You monster.",
        img: "Bird_Bath.gif",
        next: [
            "sad",
            "tired"
        ]
    },
    {
        name: "treat",
        desc: "Yummy!",
        img: "Bird_Eats.gif",
        next: [
            "happy",
            "exercise"
        ]
    },
    {
        name: "walk",
        desc: "You take a tiny walk together.",
        img: "Bird_Run.gif",
        next: [
            "bored",
            "happy",
            "tired"
        ]
    },
    {
        name: "angry",
        desc: "Oh Oh, your bird is angry!",
        img: "Bird_Angry.gif",
        next: [
            "sad",
            "bored"
        ]
    }
];


var interaction = [
    {
        name: "pet", 
        desc: "Pet", 
        effects: [ 
            "happy",
            "angry"
        ]
    },
    {
        name: "walk",
        desc: "Go for a walk",
        effects: [
            "walk"
        ]
    },
    {
        name: "feed",
        desc: "Feed",
        effects: [
            "eating"
        ]
    },
    {
        name: "treat",
        desc: "Snack",
        effects: [
            "treat"
        ]
    },
    {
        name: "bathe",
        desc: "Clean",
        effects: [
            "clean",
            "angry"
        ]
    },
    {
        name: "sleep",
        desc: "Go to sleep",
        effects: [
            "sleeping",
            "sad",
            "angry"
        ]
    }
];

var $el = $("#scalable");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {
  
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / elWidth,    
    ui.size.height / elHeight
  );
  
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);


