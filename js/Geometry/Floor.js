class Floor {
	
	constructor(w, l) {
		this.width = w;
		this.length = l;
		w = this.width/2;
		l = this.length/2;

		//Rendering
		var geometry = new THREE.BufferGeometry();
		var vertices = new Float32Array([
			-w, 0, l,
			 w, 0, l,
			 w, 0, -l,
			 w, 0,  -l,
			-w, 0,  -l,
			-w, 0,  l
		]);
		var normal = new Float32Array([
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
		]);

		geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
		geometry.addAttribute('normal', new THREE.BufferAttribute(normal, 3));
		var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		this.mesh = new THREE.Mesh(geometry, material);



		//Physics
		this.boxes = [new Box(-w, -0.02, -l, this.width, 0.04, this.length)];
		this.mass = -1;
	}


}
