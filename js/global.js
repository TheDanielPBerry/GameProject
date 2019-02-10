$(function() {

	var keydown = function(e) {
		var dx = 0;
		var dy = 0;
		var dz = 0;
		switch(e.which) {
			case 87: 	//W
				dx -= Math.sin(toRadians(camera.rotation.y));
				dz -= Math.cos(toRadians(camera.rotation.y));
				break;
			case 68: 	//D
				dx += Math.cos(toRadians(camera.rotation.y));
				dz -= Math.sin(toRadians(camera.rotation.y));
				break;
			case 83: 	//S
				dx += Math.sin(toRadians(camera.rotation.y));
				dz += Math.cos(toRadians(camera.rotation.y));
			break;
			case 65: 	//A
				dx -= Math.cos(toRadians(camera.rotation.y));
				dz += Math.sin(toRadians(camera.rotation.y));
				break;
			case 32:
				dy++;
				break;
			case 16:
				dy--;
				break;
		}
		camera.position.x += dx;
		camera.position.y += dy;
		camera.position.z += dz;


	};
	$('body').on('keydown', keydown);


	var mouse2f = { x:0, y:0 };
	var mousemove = function(e) {
		if(e.buttons == 0) {
			camera.rotation.y += (mouse2f.x-e.pageX)*0.01;
			//camera.rotation.x += (mouse2f.y-e.pageY)*0.01;

			mouse2f.x = e.pageX;
			mouse2f.y = e.pageY;
		}
	};
	$('body').on('mousemove', mousemove);

	var mouseupdate = function(e) {
		mouse2f.x = e.pageX;
		mouse2f.y = e.pageY;
	};
	$('body').on('mouseenter', mouseupdate);
	$('body').on('mouseup', mouseupdate);

	var keyup = function(e) {

	};
	$('body').on('keyup', keyup);

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


	var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.8 );
	scene.add(ambientLight);

	var onProgress = function (xhr) {
		if (xhr.lengthComputable) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
		}
	};
	//THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
	new THREE.MTLLoader()
		.setPath('assets/models/')
		.load('crate.mtl', function (materials) {
			materials.preload();
			new THREE.OBJLoader()
				.setMaterials(materials)
				.setPath('assets/models/')
				.load('crate.obj', function (object) {
					//object.position.y = - 95;
					scene.add(object);
				}, onProgress, function (e) {
					console.error(e);
				});
	} );


	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);


	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({ color: 0xC0C0C0 });
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	var floor = new Floor(100,100);
	floor.mesh.position.y = -5;
	scene.add(floor.mesh);
	
	var animate = function() {
		requestAnimationFrame(animate);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render(scene, camera);
	};
	animate();
});



function toRadians(angle) {
	return angle;
	return angle * (Math.PI / 180);
}



class Box {
	constructor(x, y, z, w, h, l) {
		this.x = x;
		this.y = y;
		this.z = z;

		this.w = w;
		this.h = h;
		this.l = l;
	}
}