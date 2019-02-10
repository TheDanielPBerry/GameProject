

var verts = [];
var normals = [];
var textureVerts = [];
var faces = [];

var loadOBJ = function(path) {
	verts = [];
	normals = [];
	textureVerts = [];
	faces = [];

	$.get(path, function(data) {
		data = data.split("\n");
		$(data).each(function(line) {
			line = line.split(' ');
			switch(line[0]) {
				case 'v':
					verts.push({
						x : parseFlot(line[1]), 
						y : parseFlot(line[2]), 
						z : parseFlot(line[3])
					};
					break;
				case 'vn':
					normals.push{
						x : parseFloat(line[1]), 
						y : parseFloat(line[2]), 
						z : parseFloat(line[3])
					};
					break;
				case 'vt':
					textureVerts.push({
						x : parseFloat(line[1]), 
						y : parseFloat(line[2]), 
						z : parseFloat(line[3])
					};
					break;
				case 'f':
					faces.push{
						x : parseFloat(line[1]), 
						y : parseFloat(line[2]), 
						z : parseFloat(line[3])
					};
					break;
			}
			transformToBufferAttribute();
		});
	});
}

var transformToBufferAttribute = function() {

}


