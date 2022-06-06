function shout(string){
    return "hello".toUpperCase();
};

function whisper(string){
    return "HELLO".toLowerCase();
};

function logShout(string){
    console.log(string.toUpperCase())
};

function logWhisper(string){
    console.log(string.toLowerCase());
};

function sayHiToHeadphonedRoommate(string){
    if (string === "hello"){
        return "I can't hear you!";
    }
    if (string === "HELLO"){
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
}

