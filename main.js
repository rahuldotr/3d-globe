import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { createGlobe } from './objects';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


// Scene
const scene = new THREE.Scene();

new RGBELoader()
.setPath( 'assets/' )
.load( 'space.hdr', function ( texture ) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
} );



// Camera
// PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
// camera.position.set( 20, 20, 20 );

camera.position.z = 3;
// Show axis
// scene.add( new THREE.AxesHelper( 20 ) );


// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: false});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Mouse control
const controls = new OrbitControls( camera, renderer.domElement );
controls.autoRotate = true;
controls.update();


// Lighting
// const ambientLight = new THREE.AmbientLight(0x404040);
const ambientLight = new THREE.AmbientLight(0x212226);
scene.add(ambientLight);

// Direction light
const directionalLight = new THREE.DirectionalLight(0xd1d1d1, 4);
directionalLight.position.set(1.1, 0, 1);
scene.add(directionalLight);

// Spotlight
var spotlight = new THREE.SpotLight(0x0dfe6e9, .3);
spotlight.castShadow = true;
spotlight.position.set(100, 100, 200);
scene.add(spotlight);

// Globe
const sphere = createGlobe();
const tiltAngle = (400 * Math.PI) / 180;
sphere.rotateY(tiltAngle);
scene.add(sphere);







function animate() {
    requestAnimationFrame(animate);
    // sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.003;
    renderer.render(scene, camera);
}

animate();
