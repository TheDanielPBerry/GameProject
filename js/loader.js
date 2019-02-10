

var transforms = [];
var objects = [];
var group = objects;
var mtlLoader;
var objLoader


var loadScene = function(scene, path) {
	$.get(path, function(data) {
		mtlLoader = new MTLLoader();
		mtlLoader.setPath('assets/models');

		objLoader = new OBJLoader();
		objLoader.setPath('assets/models/');

		$(data).each(processElement);
	});
}



function processElement(key, obj) {
	switch(key) {
		case "Strip":
			if(obj['c'] != null) {
				for(var i=0; i<obj['c']; i++) {
					transforms.push({"dx" : obj['dx'], "dy" : obj['dy'], "dz" : obj['dz'], "rx" : obj['rx'], "ry" : obj['ry'], "rz" : obj['rz']});
					$(obj['content']).each(processElement);
				}
				transforms.splice(-c, c);
			}
			break;
		default:
			loadObject(key);
	}
}

function loadObject(name) {

	var onProgress = function (xhr) {
		if(xhr.lengthComputable) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
		}
	};
	mtlLoader.load(name + '.mtl', function (materials) {
			materials.preload();
			objLoader.setMaterials(materials);
			objLoader.load(name + '.obj', function (object) {
				objects[] = object;
			}, onProgress, function (e) {
				console.error(e);
			});
	});

	if() {

	}

}

function calculateTransforms() {
	var transform = { 'dx':0,'dy':0,'dz':0, 	//Linear transforms by axis
					'rx':0,'ry':0,'rz':0 };		//Rotational transforms by axis
	$(transforms).each(t) {
		transform['dx'] += t['dx'];
		transform['dy'] += t['dy'];
		transform['dz'] += t['dz'];
		transform['rx'] += t['rx'];
		transform['ry'] += t['ry'];
		transform['rz'] += t['rz'];
	};
}



