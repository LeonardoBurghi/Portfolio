import ('style.css');
import * as THREE from './three.module.js';
import { OrbitControls } from './orbitcontrols.js';

//________________________________UNIVERSE_______________________________

//Escena y camara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000000);

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Luz
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,0)
scene.add(pointLight);

//---------------------------------FONDO------------------------------
//const fondoStars = new THREE.TextureLoader().load('./img/stars.jpg');
//scene.background = fondoStars;

const geometry = new THREE.SphereGeometry(1000, 60, 40);
geometry.scale(-1, 1, 1);

const textureloader = new THREE.TextureLoader();
const texture = textureloader.load("img/stars.png");
const material = new THREE.MeshBasicMaterial({ map: texture});

const sphere = new THREE.Mesh(geometry, material);

//scene.add(sphere);
//-----------------------------SISTEMA SOLAR---------------------------

//---------------------------------SOL-----------------------------
const sunTexture = new THREE.TextureLoader().load('img/map-Sun.jpg')
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(10, 64, 64),
    new THREE.MeshBasicMaterial( {
        map: sunTexture,
    })
);
sun.position.set(0, 0, 0);
scene.add(sun);

//------------------------------Earth-------------------------------
const earthTexture = new THREE.TextureLoader().load('img/map-Earth.jpg')
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: earthTexture,
    })
);
earth.position.set(18, 0, 0);
scene.add(earth);

//orbita Earth
const orbGeoEarth = new THREE.RingGeometry(17.99, 18, 128);
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
mercury.position.set(-13, 0, 0);
scene.add(mercury);

//orbita Mercury
const orbGeoMerc = new THREE.RingGeometry(12.99, 13, 128);
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
venus.position.set(0, 0, -15.5);
scene.add(venus);

//orbita Venus
const orbGeoVen = new THREE.RingGeometry(15.49, 15.5, 128);
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
marte.position.set(0, 0, 20);
scene.add(marte);

//orbita Marte
const orbGeoMar = new THREE.RingGeometry(19.99, 20, 128);
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
jupiter.position.set(0, 0, 32);
scene.add(jupiter);

//orbita Jupiter
const orbGeoJup = new THREE.RingGeometry(31.99, 32, 128);
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
saturno.position.set(0, 0, -40);
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
anillo.position.set(0, 0, -40);
anillo.rotateX(90);

scene.add(anillo);

//orbita Saturno
const orbGeoSat = new THREE.RingGeometry(39.99, 40, 128);
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
urano.position.set(50, 0, 0);
scene.add(urano);

//orbita Urano
const orbGeoUra = new THREE.RingGeometry(49.99, 50, 128);
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
neptuno.position.set(0, 0, 65);
scene.add(neptuno);

//orbita Neptuno
const orbGeoNep = new THREE.RingGeometry(64.99, 65, 128);
const orbMatNep = new THREE.LineBasicMaterial({color: 0xabdfff});
const orbitNeptuno = new THREE.Line(orbGeoNep, orbMatNep);

orbitNeptuno.rotateX(1.5708);
orbitNeptuno.material.side = THREE.DoubleSide;
scene.add(orbitNeptuno);

//---------------------------------nebulosa----------------------------
const nebuTexture = new THREE.TextureLoader().load('img/nebulosa.jpeg');
const nebuMaterial = new THREE.MeshBasicMaterial({ map: nebuTexture, transparent: true, side: THREE.DoubleSide});
const nebuGeometry = new THREE.PlaneGeometry(90000, 90000, 1);

const nebulaPlano = new THREE.Mesh(nebuGeometry, nebuMaterial);

nebulaPlano.position.set(800000, 60000, -500);
scene.add(nebulaPlano);

const sunLightLoader = new THREE.TextureLoader();
const sunLightTexture = sunLightLoader.load('img/sun-light.png');
const sunLightMaterial = new THREE.SpriteMaterial({ map: sunLightTexture});

const sunLightSprite = new THREE.Sprite(sunLightMaterial);

sunLightSprite.material.side = THREE.DoubleSide;
sunLightSprite.scale.set(70, 70,);
sunLightSprite.position.set(0, 0, 0);
scene.add(sunLightSprite);


//----------------------------GALAXY----------------------------------

const texLoadGalaxy = new THREE.TextureLoader().load('img/galaxy.png');
const galaxyMaterial = new THREE.MeshBasicMaterial({ map: texLoadGalaxy, transparent: true, side: THREE.DoubleSide});
const galaxyGeometry = new THREE.PlaneGeometry(300000, 300000, 1);

const plano = new THREE.Mesh(galaxyGeometry, galaxyMaterial);

//plano.scale.set(200, 200);

plano.position.set(-60000, -520, 0);
scene.add(plano);

//---------------------------grilla--------------------
const grid = new THREE.GridHelper(100,200);
//scene.add(grid);

//--------------------------Controles Orbitales-------------------
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 3000000;

camera.position.set (0, 30, 120);

//---------------------------Functions-----------------------------


//--------------------------------STARS----------------------------
/*
function addStar() {
    const stargeometry = new THREE.SphereGeometry(0.3, 4, 4);
    const starmaterial = new THREE.MeshBasicMaterial(0xffffff);
    const star = new THREE.Mesh(stargeometry, starmaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (2000));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(2000).fill().forEach(addStar);*/

function addStar() {
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = new Float32Array(1 * 3); // 1 vértice con 3 componentes (x, y, z)

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, transparent: true });
    const star = new THREE.Points(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(2000000));

    starVertices[0] = x;
    starVertices[1] = y;
    starVertices[2] = z;

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

    scene.add(star);
}
Array(5000).fill().forEach(addStar);

//--------------------------------------------------------------------

function galaxyVisibility() {
    var distancia = camera.position.distanceTo(sun.position);
    var minDistance = 5000;

    console.log(distancia);

    if (distancia > minDistance) {
        plano.visible = true;
    }
    else {
        plano.visible = false;
    }
}

//-----------------------------------------------

window.addEventListener("resize", redimensionar);

function redimensionar(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}


function animate() {
    requestAnimationFrame( animate );
    mercury.rotation.y += 0.01
    venus.rotation.y += 0.008
    earth.rotation.y += 0.01
    marte.rotation.y += 0.004
    jupiter.rotation.y += 0.0008

    /*let time = Date.now() * 0.001; //tiempo actual
    let position = orbitEarth.getPoint(time);
    earth.position.set(position.x, 0, position.y);*/

    galaxyVisibility();

    renderer.render(scene, camera);
}
animate();
//_______________________________________________________________________


//________________________________Elementos_______________________________

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navToggle.classList.toggle("nav-toggle_visible");
})

//_______________________________Interactividad_____________________

// Asigna un identificador único al planeta
const planetId = 'urano';

// Agrega un detector de clics al lienzo (canvas)
canvas.addEventListener('click', onClick);

// Función de manejo del evento de clic
function onClick(event) {
  // Obtiene la posición normalizada del clic del ratón
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Realiza un raycast para determinar qué objeto ha sido clicado
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);

  // Verifica si el planeta ha sido clicado
  const planetClicked = intersects.find((intersect) => intersect.object.userData.id === planetId);

  // Si el planeta ha sido clicado, muestra la ventana emergente
  if (planetClicked) {
    const planetInfo = getPlanetInfo(planetId); // Obtén la información del planeta

    // Crea una ventana emergente con la información del planeta
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <h2>${planetInfo.name}</h2>
      <p>${planetInfo.description}</p>
      <img src="${planetInfo.image}" alt="${planetInfo.name}">
    `;

    // Agrega la ventana emergente al cuerpo del documento
    document.body.appendChild(popup);

    // Agrega un controlador de evento para cerrar la ventana emergente al hacer clic fuera de ella
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.remove();
      }
    });
  }
}

// Función para obtener la información del planeta (puedes reemplazar esto con tus propios datos)
function getPlanetInfo(planetId) {
  // Ejemplo de datos de información del planeta
  if (planetId === 'urano') {
    return {
      name: 'Urano',
      description: 'Urano es el séptimo planeta del sistema solar y el tercero más grande. Es un gigante gaseoso compuesto principalmente de hidrógeno y helio.',
      image: 'path/to/uranus-image.jpg'
    };
  }
}