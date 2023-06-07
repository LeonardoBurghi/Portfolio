import ('style.css');
import * as THREE from './three.module.js';
import { OrbitControls } from './orbitcontrols.js';

//Escena y camara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

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

//-----------------------------SOL---------------------------
const sunTexture = new THREE.TextureLoader().load('img/map-Sun.jpg')
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(5, 64, 64),
    new THREE.MeshBasicMaterial( {
        map: sunTexture,
    })
);
scene.add(sun);

//------------------------------Earth-------------------------------
const earthTexture = new THREE.TextureLoader().load('img/map-Earth.jpg')
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: earthTexture,
    })
);
earth.position.set(13, 0, 0);
scene.add(earth);

//orbita Earth
const orbGeoEarth = new THREE.RingGeometry(12.97, 13, 128);
const orbitMaterial = new THREE.LineBasicMaterial({color: 0x00ccff});
const orbitEarth = new THREE.Line(orbGeoEarth, orbitMaterial);

orbitEarth.rotateX(1.5708);
orbitEarth.material.side = THREE.DoubleSide;
scene.add(orbitEarth);

//-------------------------------mercurio------------------------
const mercuryTexture = new THREE.TextureLoader().load('img/map-Mercury.jpg')
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: mercuryTexture,
    })
);
mercury.position.set(-8, 0, 0);
scene.add(mercury);

//orbita Mercury
const orbGeoMerc = new THREE.RingGeometry(7.97, 8, 128);
const orbMatMerc = new THREE.LineBasicMaterial({color: 0xffffff});
const orbitMercury = new THREE.Line(orbGeoMerc, orbMatMerc);

orbitMercury.rotateX(1.5708);
orbitMercury.material.side = THREE.DoubleSide;
scene.add(orbitMercury);

//-------------------------------Venus--------------------------
const venusTexture = new THREE.TextureLoader().load('img/map-Venus.jpg')
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.94, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: venusTexture,
    })
);
venus.position.set(0, 0, -10.5);
scene.add(venus);

//orbita Venus
const orbGeoVen = new THREE.RingGeometry(10.47, 10.5, 128);
const orbMatVen = new THREE.LineBasicMaterial({color: 0xfffc00});
const orbitVenus = new THREE.Line(orbGeoVen, orbMatVen);

orbitVenus.rotateX(1.5708);
orbitVenus.material.side = THREE.DoubleSide;
scene.add(orbitVenus);

//-------------------------------Marte-----------------------------
const marteTexture = new THREE.TextureLoader().load('img/map-Marte.jpg')
const marte = new THREE.Mesh(
    new THREE.SphereGeometry(0.68, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: venusTexture,
    })
);
marte.position.set(0, 0, 15);
scene.add(marte);

//orbita Marte
const orbGeoMar = new THREE.RingGeometry(14.97, 15, 128);
const orbMatMar = new THREE.LineBasicMaterial({color: 0xff0000});
const orbitMarte = new THREE.Line(orbGeoMar, orbMatMar);

orbitMarte.rotateX(1.5708);
orbitMarte.material.side = THREE.DoubleSide;
scene.add(orbitMarte);

//--------------------------Jupiter----------------------------
const jupiterTexture = new THREE.TextureLoader().load('img/map-Jupiter.jpg')
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(2.2, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: jupiterTexture,
    })
);
jupiter.position.set(0, 0, 27);
scene.add(jupiter);

//orbita Jupiter
const orbGeoJup = new THREE.RingGeometry(26.97, 27, 128);
const orbMatJup = new THREE.LineBasicMaterial({color: 0xeefe22});
const orbitJupiter = new THREE.Line(orbGeoJup, orbMatJup);

orbitJupiter.rotateX(1.5708);
orbitJupiter.material.side = THREE.DoubleSide;
scene.add(orbitJupiter);

//------------------------Saturno-----------------------
const saturnoTexture = new THREE.TextureLoader().load('img/map-Saturno.jpg')
const saturno = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: saturnoTexture,
    })
);
saturno.position.set(0, 0, -35);
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
anillo.position.set(0, 0, -35);
anillo.rotateX(90);

scene.add(anillo);

//orbita Saturno
const orbGeoSat = new THREE.RingGeometry(34.97, 35, 128);
const orbMatSat = new THREE.LineBasicMaterial({color: 0xddddff});
const orbitSaturno = new THREE.Line(orbGeoSat, orbMatSat);

orbitSaturno.rotateX(1.5708);
orbitSaturno.material.side = THREE.DoubleSide;
scene.add(orbitSaturno);

//-------------------------------Urano--------------------------------
const uranoTexture = new THREE.TextureLoader().load('img/map-Urano.jpg')
const urano = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: uranoTexture,
    })
);
urano.position.set(45, 0, 0);
scene.add(urano);

//orbita Urano
const orbGeoUra = new THREE.RingGeometry(44.97, 45, 128);
const orbMatUra = new THREE.LineBasicMaterial({color: 0xaabdff});
const orbitUrano = new THREE.Line(orbGeoUra, orbMatUra);

orbitUrano.rotateX(1.5708);
orbitUrano.material.side = THREE.DoubleSide;
scene.add(orbitUrano);

//--------------------------------Neptuno----------------------------------
const neptunoTexture = new THREE.TextureLoader().load('img/map-neptuno.jpg')
const neptuno = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: neptunoTexture,
    })
);
neptuno.position.set(0, 0, 60);
scene.add(neptuno);

//orbita Neptuno
const orbGeoNep = new THREE.RingGeometry(59.97, 60, 128);
const orbMatNep = new THREE.LineBasicMaterial({color: 0xabdfff});
const orbitNeptuno = new THREE.Line(orbGeoNep, orbMatNep);

orbitNeptuno.rotateX(1.5708);
orbitNeptuno.material.side = THREE.DoubleSide;
scene.add(orbitNeptuno);

//---------------------------------nebulosa----------------------------
const textureLoader = new THREE.TextureLoader();
const nebuTexture = textureLoader.load('img/nebulosa.jpeg');
const nebuMaterial = new THREE.SpriteMaterial({ map: nebuTexture});

const nebulaSprite = new THREE.Sprite(nebuMaterial);

//nebulaSprite.material.side = THREE.DoubleSide;
nebulaSprite.scale.set(500, 300,);
nebulaSprite.position.set(1600, 600, -50);
scene.add(nebulaSprite);

//grilla
const grid = new THREE.GridHelper(100,200);
//scene.add(grid);

//--------------------------Controles Orbitales-------------------
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 5000;

camera.position.set (0, 20, 120);

//---------------------------Functions-----------------------------
function addStar() {
    const stargeometry = new THREE.SphereGeometry(0.1, 4, 4);
    const starmaterial = new THREE.MeshBasicMaterial(0xffffff);
    const star = new THREE.Mesh(stargeometry, starmaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (4000));

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

