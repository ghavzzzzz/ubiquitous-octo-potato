sta="";
function preload(){

    img = loadImage('phone laptop.jpg');
}
function setup(){

    canvas=createCanvas(640 , 420);
    canvas.center();
    co= ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("Od").innerHtTML="Status :Dedecting object.";
}
function modelLoaded(){

    console.log('Model Loaded $#!*&%');
    sta=true;
    co.detect(img , gotResult);
}
function gotResult (error , results){
    if (error){
       console.log(error);
    }
    else{
        console.log(results);
    }
} 