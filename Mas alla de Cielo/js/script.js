import ('style.css');
import * as THREE from './three.module.js';
import { OrbitControls } from './orbitcontrols.js';
//import { FlyControls } from './flycontrols.js';

//________________________________UNIVERSE_______________________________

//Escena y camara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000000);

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
sun.name = "sol";
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
earth.name = "earth";
earth.position.set(18, 0, 0);
scene.add(earth);

//orbita Earth
const orbGeoEarth = new THREE.RingGeometry(17.99, 18, 128);
const orbitMaterial = new THREE.LineBasicMaterial({color: 0x00ccff});
const orbitEarth = new THREE.Line(orbGeoEarth, orbitMaterial);

orbitEarth.rotateX(1.5708);
orbitEarth.material.side = THREE.DoubleSide;
scene.add(orbitEarth);

//---------------------------------Moon---------------------------------
const moonTexture = new THREE.TextureLoader().load('img/map-moon.jpg')
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: moonTexture,
    })
);
moon.name = "luna";
moon.position.set(20, 0.5, -1);
scene.add(moon);

//-------------------------------mercurio------------------------
const mercuryTexture = new THREE.TextureLoader().load('img/map-Mercury.jpg')
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: mercuryTexture,
    })
);
mercury.name = "mercurio";
mercury.position.set(-13, 0, 0);
scene.add(mercury);

//orbita Mercury
const orbGeoMerc = new THREE.RingGeometry(12.99, 13, 128);
const orbMatMerc = new THREE.LineBasicMaterial({color: 0xdedede});
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
venus.name = "venus";
venus.position.set(0, 0, -15.5);
scene.add(venus);

//orbita Venus
const orbGeoVen = new THREE.RingGeometry(15.49, 15.5, 128);
const orbMatVen = new THREE.LineBasicMaterial({color: 0xdcd271});
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
marte.name = "marte";
marte.position.set(0, 0, 23);
scene.add(marte);

//orbita Marte
const orbGeoMar = new THREE.RingGeometry(22.99, 23, 128);
const orbMatMar = new THREE.LineBasicMaterial({color: 0xbf5757});
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
jupiter.name = "jupiter";
jupiter.position.set(0, 0, 40);
scene.add(jupiter);

//orbita Jupiter
const orbGeoJup = new THREE.RingGeometry(39.99, 40, 128);
const orbMatJup = new THREE.LineBasicMaterial({color: 0xbdab85});
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
saturno.name = "saturno";
saturno.position.set(0, 0, -51);
scene.add(saturno);

//Anillo
const anilloTexture = new THREE.TextureLoader().load('./img/SaturnRings.png')
const anillo = new THREE.Mesh(
    new THREE.RingGeometry(2.3, 3,),
    new THREE.MeshStandardMaterial( {
        map: anilloTexture,
    })
);
anillo.material.side = THREE.DoubleSide;
anillo.position.set(0, 0, -51);
anillo.rotateX(90);

scene.add(anillo);

//orbita Saturno
const orbGeoSat = new THREE.RingGeometry(50.99, 51, 128);
const orbMatSat = new THREE.LineBasicMaterial({color: 0xc6c097});
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
urano.name = "urano";
urano.position.set(62, 0, 0);
scene.add(urano);

//orbita Urano
const orbGeoUra = new THREE.RingGeometry(61.99, 62, 128);
const orbMatUra = new THREE.LineBasicMaterial({color: 0xabd0ce});
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
neptuno.name = "neptuno"
neptuno.position.set(0, 0, 70);
scene.add(neptuno);

//orbita Neptuno
const orbGeoNep = new THREE.RingGeometry(69.99, 70, 128);
const orbMatNep = new THREE.LineBasicMaterial({color: 0x96abcd});
const orbitNeptuno = new THREE.Line(orbGeoNep, orbMatNep);

orbitNeptuno.rotateX(1.5708);
orbitNeptuno.material.side = THREE.DoubleSide;
scene.add(orbitNeptuno);

//----------------------------------Pluton------------------------------------
const plutonTexture = new THREE.TextureLoader().load('img/map-pluton.jpeg')
const pluton = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 64, 64),
    new THREE.MeshStandardMaterial( {
        map: plutonTexture,
    })
);
pluton.name = "pluton"
pluton.position.set(-75, 0, 0);
scene.add(pluton);

//orbita Neptuno
const orbGeoPlu = new THREE.RingGeometry(74.99, 75, 128);
const orbMatPlu = new THREE.LineBasicMaterial({color: 0x5c5c5c});
const orbitPluton = new THREE.Line(orbGeoPlu, orbMatPlu);

orbitPluton.rotateX(1.4);
orbitPluton.material.side = THREE.DoubleSide;
scene.add(orbitPluton);
//_________________________________________________________________________
//---------------------------------nebulosa----------------------------
/*const nebuTexture = new THREE.TextureLoader().load('img/nebulosa.jpeg');
const nebuMaterial = new THREE.MeshBasicMaterial({ map: nebuTexture, transparent: true, side: THREE.DoubleSide});
const nebuGeometry = new THREE.PlaneGeometry(90000, 90000, 1);

const nebulaPlano = new THREE.Mesh(nebuGeometry, nebuMaterial);

nebulaPlano.position.set(800000, 60000, -500);
scene.add(nebulaPlano);*/

const sunLightLoader = new THREE.TextureLoader();
const sunLightTexture = sunLightLoader.load('img/sun-light.png');
const sunLightMaterial = new THREE.SpriteMaterial({ map: sunLightTexture});

const sunLightSprite = new THREE.Sprite(sunLightMaterial);

sunLightSprite.material.side = THREE.DoubleSide;
sunLightSprite.scale.set(70, 70,);
sunLightSprite.position.set(0, 0, 0);
scene.add(sunLightSprite);


//----------------------------GALAXYs----------------------------------

const texLoadGalaxy = new THREE.TextureLoader().load('img/galaxy.png');
const galaxyMaterial = new THREE.MeshBasicMaterial({ map: texLoadGalaxy, transparent: true, side: THREE.DoubleSide});
const galaxyGeometry = new THREE.PlaneGeometry(300000, 300000, 1);

const plano = new THREE.Mesh(galaxyGeometry, galaxyMaterial);


plano.position.set(-60000, -520, 0);
scene.add(plano);
//--------------------------------
const texGalaxy4 = new THREE.TextureLoader().load('img/Galaxy4.png');
const galaxyMaterial4 = new THREE.MeshBasicMaterial({ map: texGalaxy4, transparent: true, side: THREE.DoubleSide});
const galaxyGeometry4 = new THREE.PlaneGeometry(300000, 300000, 1);

const galax4 = new THREE.Mesh(galaxyGeometry4, galaxyMaterial4);


galax4.position.set(-1000000, 600200, 1350000);
scene.add(galax4);
//--------------------------------
const texGalaxy1 = new THREE.TextureLoader().load('img/Galaxy1.png');
const galaxyMaterial1 = new THREE.MeshBasicMaterial({ map: texGalaxy1, transparent: true, side: THREE.DoubleSide});
const galaxyGeometry1 = new THREE.PlaneGeometry(300000, 300000, 1);

const galax1 = new THREE.Mesh(galaxyGeometry1, galaxyMaterial1);


galax1.position.set(1300000, 950000, -500000);
scene.add(galax1);
//--------------------------------
const texGalaxy2 = new THREE.TextureLoader().load('img/Galaxy5.png');
const galaxyMaterial2 = new THREE.MeshBasicMaterial({ map: texGalaxy2, transparent: true, side: THREE.DoubleSide});
const galaxyGeometry2 = new THREE.PlaneGeometry(300000, 300000, 1);

const galax2 = new THREE.Mesh(galaxyGeometry2, galaxyMaterial2);


galax2.position.set(-850000, -750000, 800000);
scene.add(galax2);
//--------------------------------
const texGalaxy3 = new THREE.TextureLoader().load('img/Galaxy7.png');
const galaxyMaterial3 = new THREE.MeshBasicMaterial({ map: texGalaxy3, transparent: true, side: THREE.DoubleSide});
const galaxyGeometry3 = new THREE.PlaneGeometry(300000, 300000, 1);

const galax3 = new THREE.Mesh(galaxyGeometry3, galaxyMaterial3);


galax3.position.set(800000, -1400000, -500000);
scene.add(galax3);

//---------------------------grilla--------------------
//const grid = new THREE.GridHelper(100,200);
//scene.add(grid);

//-----------------------Controles Orbitales-------------------
const controls = new OrbitControls(camera, renderer.domElement);
//const controls = new FlyControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 8000000;

controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enablePan = false;
controls.panDampingFactor = 0.1;
controls.zoomSpeed = 2;

camera.position.set (0, 3, 30);

//_________________________________FUNCIONES________________________________


//--------------------------------STARS----------------------------

function addStar() {
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = new Float32Array(1 * 3); // 1 vértice con 3 componentes (x, y, z)

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, transparent: true });
    const star = new THREE.Points(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(4000000));

    starVertices[0] = x;
    starVertices[1] = y;
    starVertices[2] = z;

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

    scene.add(star);
}
Array(6000).fill().forEach(addStar);

//--------------------------------------------------------------------

function galaxyVisibility() {
    var distancia = camera.position.distanceTo(sun.position);
    var minDistance = 5000;

    //console.log(distancia);

    if (distancia > minDistance) {
        plano.visible = true;
        galax1.visible = true;
        galax2.visible = true;
        galax3.visible = true;
        galax4.visible = true;
    }
    else {
        plano.visible = false;
        galax1.visible = false;
        galax2.visible = false;
        galax3.visible = false;
        galax4.visible = false;
    }
}

//_________________________Funcion Renderizador___________________________

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

    galaxyVisibility();

    renderer.render(scene, camera);
}
animate();
//_______________________________________________________________________


//________________________________Elementos Menu_______________________________

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navToggle.classList.toggle("nav-toggle_visible");
})

//------Ventanas Emergentes----------------------
const opcionesMenu = document.querySelectorAll(".list-item");

//Mostrar Ventanas
opcionesMenu.forEach(function(opcion) {
    opcion.addEventListener("click", function(){
        var ventanaEmergente = document.getElementById("ventana-emergente-" + opcion.id);
        ventanaEmergente.classList.add("active");
    });
});

//Ocultar ventanas
document.addEventListener("click", function (event){
    if(!event.target.classList.contains("list-item")) {
        var ventanaEmergente = document.querySelectorAll(".ventana-emergente");
        ventanaEmergente.forEach(function(ventanaEmergente){
            ventanaEmergente.classList.remove("active");
        });
    }
});

//-------------------Interactividad Planetas----------------------

let planetName = ["sol", "mercurio", "venus", "earth", "luna", "marte", "jupiter", "saturno", "urano", "neptuno", "pluton"];

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

window.addEventListener("click", onClick);

// Función de manejo del evento de clic__________________________________________
function onClick(event) {
    // Obtiene la posición normalizada del clic del ratón
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    // Verifica si el planeta ha sido clicado
    //const planetClicked = intersects.find((intersect) => intersect.object.name === planetName);
    for (let i in planetName){

        const planetClicked = intersects.find((intersect) => intersect.object.name === planetName[i]);
        if (planetClicked) {
            console.log(planetName[i]);

            const planetInfo = getPlanetInfo(planetName); // Obtén la información del planeta

            // Crea una ventana emergente con la información del planeta
            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.innerHTML = `
              <h2>${planetInfo.name}</h2>
              <p>${planetInfo.description}</p>
              <img class = "imgPanelInfo" src="${planetInfo.image}" alt="${planetInfo.name}" width="200">
            `;

            // Agrega la ventana emergente al cuerpo del documento
            document.body.appendChild(popup);

            // Agrega un controlador de evento para cerrar la ventana emergente al hacer clic fuera de ella
            window.addEventListener('click', (event) => {
              if (!popup.contains(event.target)) {
                popup.remove();
              }
            });

//_________________Funcion para datos de los planetas_________________ 

            function getPlanetInfo(planetName) {
                // Ejemplo de datos de información del planeta
                if (planetName[i] === 'earth') {
                  return {
                    name: 'La Tierra',
                    description: 'La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos. La Tierra se formó hace aproximadamente 4550 millones de años y la vida surgió unos mil millones de años después.',
                    image: 'img/tierra.png'
                    };
                }
                if (planetName[i] === 'sol') {
                    return {
                      name: 'El Sol',
                      description: 'El Sol es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario. Se formó hace aproximadamente 4600 millones de años a partir del colapso gravitacional de la materia dentro de una región de una gran nube molecular. ',
                      image: 'img/sol.png'
                      };
                }
                if (planetName[i] === 'mercurio') {
                    return {
                      name: 'Mercurio',
                      description: 'Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus. Mercurio es uno de los cuatro planetas rocosos o sólidos; es decir, tiene un cuerpo rocoso, como la Tierra. Este planeta es el más pequeño de los cuatro, con un diámetro de 4879 km en el ecuador. Mercurio está formado aproximadamente por un 70% de elementos metálicos y un 30% de silicatos. La densidad de este planeta es la segunda más alta de todo el sistema solar, siendo su valor de 5430 kg/m³, solo un poco menor que la densidad de la Tierra.',
                      image: 'img/mercurio.png'
                      };
                }
                if (planetName[i] === 'venus') {
                    return {
                      name: 'Venus',
                      description: 'Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero más pequeño después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor. Al ser el segundo objeto natural más brillante después de la Luna, puede ser visto en un cielo nocturno despejado a simple vista. Se trata de un planeta interior de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas',
                      image: 'img/venus.png'
                      };
                }
                if (planetName[i] === 'luna') {
                    return {
                      name: 'La Luna',
                      description: 'La Luna es el único satélite natural de la Tierra. Con un diámetro ecuatorial de 3474.8 km, es el quinto satélite más grande del sistema solar, mientras que en cuanto al tamaño proporcional respecto a su planeta es el satélite más grande. Se encuentra en relación síncrona con la Tierra, siempre mostrando la misma cara hacia el planeta. El hemisferio visible está marcado con oscuros mares lunares de origen volcánico entre las brillantes montañas antiguas y los destacados astroblemas. A pesar de ser, en apariencia, el objeto más brillante en el cielo después del Sol, su superficie es en realidad muy oscura, con una reflexión similar a la del carbón.',
                      image: 'img/LaLuna.png'
                      };
                }
                if (planetName[i] === 'marte') {
                    return {
                      name: 'Marte',
                      description: 'Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al homónimo dios de la guerra de la mitología romana. Marte es el planeta interior más alejado del Sol. Es un planeta telúrico con una atmósfera delgada de dióxido de carbono, y tiene dos satélites pequeños y de forma irregular, Fobos y Deimos. El periodo de rotación y los ciclos estacionales son similares a los de la Tierra, ya que la inclinación es lo que genera las estaciones. Marte alberga el Monte Olimpo, la montaña y el volcán más grande y alto conocido en el sistema solar.',
                      image: 'img/marte.png'
                      };
                }
                if (planetName[i] === 'jupiter') {
                    return {
                      name: 'Jupiter',
                      description: 'Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.3​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano Júpiter. Se trata del planeta que ofrece un mayor brillo a lo largo del año dependiendo de su fase. Es, además, después del Sol, el mayor cuerpo celeste del sistema solar, con una masa casi dos veces y media de la de los demás planetas juntos, con una masa 318 veces mayor que la de la Tierra. También es el planeta más antiguo del sistema solar, siendo incluso más antiguo que el Sol.',
                      image: 'img/jupiter.png'
                      };
                }
                if (planetName[i] === 'saturno') {
                    return {
                      name: 'Saturno',
                      description: 'Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos. El aspecto más característico de Saturno son sus brillantes y grandes anillos. El primero en observar los anillos fue Galileo en 1610. ',
                      image: 'img/Saturno.png'
                      };
                }
                if (planetName[i] === 'urano') {
                    return {
                      name: 'Urano',
                      description: 'Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano. Aunque es detectable a simple vista en el cielo nocturno, no fue catalogado como planeta por los astrónomos de la antigüedad debido a su escasa luminosidad y a la lentitud de su órbita. Urano es similar en composición a Neptuno, y los dos tienen una composición diferente de los otros dos gigantes gaseosos (Júpiter y Saturno). La atmósfera de Urano, aunque es similar a la de Júpiter y Saturno por estar compuesta principalmente de hidrógeno y helio, contiene una proporción superior tanto de hielo como de agua, amoníaco y metano, junto con trazas de hidrocarburos. Posee la atmósfera planetaria más fría del sistema solar, con una temperatura mínima de 49 K (-224 °C). ',
                      image: 'img/Urano.png'
                      };
                }
                if (planetName[i] === 'neptuno') {
                    return {
                      name: 'Neptuno',
                      description: 'Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar Neptuno y es el cuarto planeta en diámetro y el tercero más grande en masa. Su masa es diecisiete veces la de la Tierra y ligeramente mayor que la de su planeta gemelo Urano, que tiene quince masas terrestres y no es tan denso.',
                      image: 'img/Neptuno.png'
                      };
                }
                if (planetName[i] === 'pluton') {
                    return {
                      name: 'Pluton',
                      description: 'Plutón es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón. En la Asamblea General de la Unión Astronómica Internacional, celebrada en Praga el 24 de agosto de 2006, se creó una nueva categoría llamada planeta enano, en la que se incluye a Plutón. Plutón posee una órbita excéntrica y altamente inclinada con respecto a la eclíptica.',
                      image: 'img/pluton.png'
                      };
                }
            }
        }
    };
}

