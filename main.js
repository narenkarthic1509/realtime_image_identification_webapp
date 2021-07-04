function preload(){

}

function setup(){
    canvas = createCanvas(720,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,720,480);
    classifier.classify(video,gotResult);
}

console.log("ml5 version : " , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oqFkuzKVy/model.json',modelLoaded);

function modelLoaded(){
    console.log('model has been loaded');
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(4);
    }
}