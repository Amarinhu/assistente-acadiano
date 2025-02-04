// render3D.js

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

export default function render3D(container) {
  // Create a Three.JS Scene and Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let object;
  const objToRender = "eye";

  const loader = new GLTFLoader();
  loader.load(
    `./models/${objToRender}/scene.gltf`,
    function (gltf) {
      object = gltf.scene;
      scene.add(object);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.error(error);
    }
  );

  // Create the renderer and append it to the container
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // Set camera position for the "eye" model
  camera.position.z = 500;

  // Add a directional light to the scene
  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(500, 500, 500);
  topLight.castShadow = true;
  scene.add(topLight);

  // Add ambient light to the scene
  const ambientLight = new THREE.AmbientLight(0x333333, 1);
  scene.add(ambientLight);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    if (object) {
      object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
      object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
    }
    renderer.render(scene, camera);
  }

  // Handle window resize
  window.addEventListener("resize", function () {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  });

  // Track mouse movement
  document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  animate();
}
