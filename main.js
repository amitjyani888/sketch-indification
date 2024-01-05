function setup(){
canvas = createCanvas(280 , 280);
canvas.center();
background("white");
canvas.mouseRelesed(ClassifyCanvas);
synth = window.speechSynthesis;

}

function clearCanvas(){
    
    background("white");

}
 
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');

}

function draw(){
    strokeWieght(13);
    stroke(0);
if (mouseIspressed){
    line(pmouseX ,pmouseY ,mouseX ,mouseY);

}
}

function ClassifyCanvas(){
    classifier.Classify(canvas ,gotResults);
}

function gotResults(error ,result){
    if (error){
        console.error(error);

    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: '+ results[0].label;
    document.getElementById('confidence').innerHTML = 'confidence: ' + Math.round(results[0].confidence * 100) + '%';
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}