/* global THREE */
// Zavisnosti: https://threejs.org/build/three.min.js
// https://threejs.org/examples/js/controls/OrbitControls.js

const wrapper = document.querySelector('#canvas-wrapper')
const sirina = wrapper.clientWidth
const visina = wrapper.clientHeight || 300

/* INIT */

const kamera = new THREE.PerspectiveCamera(45, sirina / visina)
kamera.position.set(0, 25, 42)
const kontrole = new THREE.OrbitControls(kamera, wrapper)

const renderer = new THREE.WebGLRenderer({alpha: true})
renderer.setSize(sirina, visina)
wrapper.appendChild(renderer.domElement)

const scena = new THREE.Scene()

const kupa = new THREE.Mesh(
  new THREE.ConeGeometry(5, 8, 30),
  new THREE.MeshNormalMaterial()
)
scena.add(kupa)

const valjak = new THREE.Mesh(
  new THREE.CylinderGeometry(5, 5, 15, 30),
  new THREE.MeshNormalMaterial()
)
valjak.position.set(-15, 0, 0)
scena.add(valjak)

const kocka = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshNormalMaterial()
)
kocka.position.set(15, 0, 0)
scena.add(kocka)

/* UPDATE */

void function update() {
  window.requestAnimationFrame(update)
  // kontrole.update()
  renderer.render(scena, kamera)
}()
