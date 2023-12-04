import * as THREE from "three";

export function createCube() {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x0dd4b6 });
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

export function createGlobe() {
  const sphereGeometry = new THREE.SphereGeometry(1, 40, 40);
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x2194ce,
    shininess: 20,
    opacity: 0.9,
    displacementScale: 10,
        map: new THREE.TextureLoader().load('assets/terraclouds.jpg'),
    map: new THREE.TextureLoader().load("assets/map.jpg"),
    bumpMap: new THREE.TextureLoader().load("assets/map.jpg"),
    bumpScale: 0.01,
    specular: 0x3e3f40,
  });
  
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  return sphere;
}
