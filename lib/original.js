// Audio
var wanwan =  new Howl({
    src: ['res/wanwan.ogg', 'res/wanwan.mp3'],
    format: ['webm', 'mp3'],
    autoplay: false,
    loop: true,
    volume: parseFloat(document.getElementById("volSlider").value),
    onplay : function() {
        console.log("Wanwan onplay");
        currentAnimation = animations["original"];
        aIndex = 0;
        animHandler();
        document.getElementById('loadingScreen').style.display = "none";
    },
    onloaderror: function() {
        alert("I can't play on your browser, sorry! Please click About and contact my maker about this.");
    },
});

function startOriginal() {
    currentSong = wanwan;
    currentSong.seek(0);
    if (wanwan.playing()) {
        currentAnimation = animations["original"];
        aIndex = 0;
        animHandler();
        wanwan.seek(0);
    } else {
        // We defer the animation to when the song is ready to play, see onplay handler
        wanwan.play();
    }
}

var bLeftText = function(duration) {
    wanText.innerHTML = (!!curGirl  && curGirl.hasOwnProperty("text")) ? curGirl.text[0] : "WAN!~";
}

var bRightText = function(duration) {
    wanText.innerHTML = (!!curGirl  && curGirl.hasOwnProperty("text")) ? curGirl.text[1] : "~WAN!";
}

var tRightText = function(duration) {
    wanText.innerHTML = (!!curGirl  && curGirl.hasOwnProperty("text")) ? curGirl.text[2] : "WAN!";
}


animations["original"] = {
    "steps" : [
        {"name" : "bottomLeft", "func": "bLeftText", "elems" : ["wanText"], "duration": 0},
        {"name" : "bottomRight", "func": "bRightText", "elems" : ["wanText"], "duration": 0},
        {"name" : "topRight", "func": "tRightText", "elems" : ["wanText"], "duration": 0},
        {"name" : "backFlip", "duration": 0},
        {"name" : "fullScreen", "elems" : ["botBox", "topBox"], "duration": 0},
        {"name" : "frontFlip", "duration": 0},
        {"name" : "shake", "duration": 0},
        {"name" : "frontFlip", "duration": 0},
        {"name" : "bottomLeft", "func": "bLeftText", "elems" : ["wanText"], "duration": 1},
        {"name" : "fullScreen", "elems" : ["botBox", "topBox"], "duration": 1},
        {"name" : "bottomRight", "func": "bRightText", "elems" : ["wanText"], "duration": 1},
        {"name" : "topRight", "func": "tRightText", "elems" : ["wanText"], "duration": 1},
        {"name" : "frontFlipAborted", "duration": 1},
        {"name" : "frontFlip", "duration": 1},
        {"name" : "bottomLeft", "func": "bLeftText", "elems" : ["wanText"], "duration": 1},
        {"name" : "bottomRight", "func": "bRightText", "elems" : ["wanText"], "duration": 1},
        {"name" : "frontFlip", "duration": 1},
        {"name" : "backFlip", "duration": 1},
        {"name" : "frontFlip", "duration": 1},
        {"name" : "bottomLeft", "func": "bLeftText", "elems" : ["wanText"], "duration": 1},
        {"name" : "bottomRight", "func": "bRightText", "elems" : ["wanText"], "duration": 2},
        {"name" : "frontFlipAborted", "duration": 2},
        {"name" : "backFlip", "duration": 2},
        {"name" : "frontFlip", "duration": 2},
        {"name" : "shake", "duration": 2},
    ],
    "funcIn" : startOriginal,
};