convert2Sketch();
async function loadmodel(){
	console.log("Loading model");
	model = await tf.loadLayersModel('https://raw.githubusercontent.com/sumansid/photo2sketch/master/sketch_generator/model.json');
	document.getElementById("loading").innerText = "Model has loaded";

	console.log("MODEL loaded");
}
loadmodel();

function convert2Sketch(){
	let originalImage = document.getElementById('uploadedImage');
	document.getElementById("preview").src = originalImage;

}

