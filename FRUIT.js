st="";
function preload(){

    img = loadImage('phone laptop.jpg');
}
function setup(){

    canvas=createCanvas(640 , 420);
    canvas.center();
    c= ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("Od").innerHtTML="Status :Dedecting object.";
}
function modelLoaded(){

    console.log('Model Loaded $#!*&%');
    st=true;
    c.detect(img , gotResult);
}
function gotResult (error , results){
    if (error){
       console.log(error);
    }
    else{
        console.log(results);
        object=results;
    }
} 