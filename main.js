status = "";


function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(480, 480);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    input_value = document.getElementById("Input").value;
    document.getElementById("Status").innerHTML = "Detecting Objects";
}

function modelloaded()
{
    console.log("Modelloaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 480);
}