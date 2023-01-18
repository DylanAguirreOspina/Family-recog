//https://teachablemachine.withgoogle.com/models/PBcdP_4tD/

Webcam.set({
    height: 350,
    width: 300,
    image_format: 'png',
    png_quality: 90
    });
    
    camera= document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot(){
        // webcam.snap isa predefinded function of webcam.js used tot take images from the webcam
        // data_uri used to show preview of the image which generates after taking a snapshot
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id ="captured_image" src="'+data_uri+'"> ';
    
    
    });
    
    }
    
    console.log("ml5 version:", ml5.version);
    
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PBcdP_4tD/model.json", modelLoaded);
    //image classifier is a predefined of ml5.js that is used to trigger ml5.js classification function
    //model is the model that we created in the teachable machine
    //json is javascript object notation, it is used to hold data in object format
    
    
    function modelLoaded(){
    console.log('"model Loaded');
    
    }
    function check(){
        img=document.getElementById("captured_image");
classifier.classify(img,gotResult);
    }


    
    function gotResult(error, results){
        if(error){
        console.log(error);
        }
        else{
        console.log(results);
        document.getElementById("result_person_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
        
        }
        
        }