import ('style.css');
import * as THREE from './three.module.js';
import { OrbitControls } from './orbitcontrols.js';

//Escena y camara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Luz
const pointLight = new THREE.PointLight(0xffffff,)
pointLight.position.set(0,0,0)
scene.add(pointLight);

//FONDO
//const fondoStars = new THREE.TextureLoader().load('./img/map-Mercury.jpg');
//scene.background = fondoStars;

//------------------SISTEMA SOLAR-----------------

//esfera (sol)
const sunTexture = new THREE.TextureLoader().load('img/map-Sun.jpg')
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(5, 64, 64),
    new THREE.MeshBasicMaterial( {
        map: sunTexture,
    })
);
scene.add(sun);

//esfera(earth)
const earthTexture = new THREE.TextureLoader().load('img/map-Earth.jpg')
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: earthTexture,
    })
);
earth.position.set(13, 0, 0);
scene.add(earth);

//mercurio
const mercuryTexture = new THREE.TextureLoader().load('img/map-Mercury.jpg')
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: mercuryTexture,
    })
);
mercury.position.set(-8, 0, 0);
scene.add(mercury);

//Venus
const venusTexture = new THREE.TextureLoader().load('img/map-Venus.jpg')
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.94, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: venusTexture,
    })
);
venus.position.set(0, 0, -10.5);
scene.add(venus);

//Marte
const marteTexture = new THREE.TextureLoader().load('img/map-Marte.jpg')
const marte = new THREE.Mesh(
    new THREE.SphereGeometry(0.68, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: venusTexture,
    })
);
marte.position.set(5, 0, 14);
scene.add(marte);

//Jupiter
const jupiterTexture = new THREE.TextureLoader().load('img/map-Jupiter.jpg')
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(2.2, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: jupiterTexture,
    })
);
jupiter.position.set(5, 0, 26);
scene.add(jupiter);

//Saturno
const saturnoTexture = new THREE.TextureLoader().load('img/map-Saturno.jpg')
const saturno = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: saturnoTexture,
    })
);
saturno.position.set(-5, 0, -30);
scene.add(saturno);

//Anillo
const anilloTexture = new THREE.TextureLoader().load('./img/map-Jupiter.jpg')
const anillo = new THREE.Mesh(
    new THREE.RingGeometry(2.3, 3,),
    new THREE.MeshStandardMaterial( {
        map: anilloTexture,
    })
);
anillo.material.side = THREE.DoubleSide;
anillo.position.set(-5, 0, -30);
anillo.rotateX(90);

scene.add(anillo);

//const geometriaAnillo = new THREE.RingGeometry(3, 2.2);
//const textureAnillo = new THREE.MeshBasicMaterial();
//const anillosaturno = new THREE.Mesh(geometriaAnillo, textureAnillo);

//scene.add(anillosaturno);
//anillosaturno.position.set(-5, 0, -30)
//anillosaturno.rotate(90)

//Urano
const uranoTexture = new THREE.TextureLoader().load('img/map-Urano.jpg')
const urano = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: uranoTexture,
    })
);
urano.position.set(40, 0, 5);
scene.add(urano);

//Neptuno
const neptunoTexture = new THREE.TextureLoader().load('img/map-neptuno.jpg')
const neptuno = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: neptunoTexture,
    })
);
neptuno.position.set(-10, 0, 50);
scene.add(neptuno);

//nebulosa
const nebuTexture = new THREE.TextureLoader().load('img/map-Earth.jpg')
const nebulosa = new THREE.Mesh(
    new THREE.PlaneGeometry(4,6),
    new THREE.MeshStandardMaterial( {
        map: nebuTexture,
    })
);
nebulosa.position.set(-750, 0, 800);
scene.add(nebulosa);

//grilla
const grid = new THREE.GridHelper(200,200);
//scene.add(grid);

//Controles Orbitales
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 800;

camera.position.z = 20;

function addStar() {
    const stargeometry = new THREE.SphereGeometry(0.05, 4, 4);
    const starmaterial = new THREE.MeshBasicMaterial(0xffffff);
    const star = new THREE.Mesh (stargeometry, starmaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (-1000/2, 2000/2));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(10000).fill().forEach(addStar);

function animate() {
    requestAnimationFrame( animate );
    mercury.rotation.y += 0.01
    venus.rotation.y += 0.008
    earth.rotation.y += 0.007
    marte.rotation.y += 0.004
    jupiter.rotation.y += 0.0008

    renderer.render(scene, camera);
}
animate();

