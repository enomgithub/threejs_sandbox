/// <reference types="three" />
import * as THREE from "three";

const initCamera = (camera: THREE.Camera) => {
    camera.position.set(10, 3, 9);
};

const initLight = (light: THREE.DirectionalLight) => {
    light.position.set(1, 1, 1);
};

const main = () => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    initCamera(camera);

    const light = new THREE.DirectionalLight(0xffffff);
    initLight(light);
    scene.add(light);

    const pi = Math.PI;
    const cubes: THREE.Mesh[] = [];
    const radius = 5;
    const cubeNum = 50;
    const twistNum = 3;
    const angle = twistNum * 2 * pi / cubeNum;

    const hex = 16;
    const order = 2;
    const geometry = new THREE.BoxGeometry();
    for (let i = 0; i < cubeNum; i++) {
        const r = ("00" + Math.round(Math.random() * 255).toString(hex)).slice(-order);
        const g = ("00" + Math.round(Math.random() * 255).toString(hex)).slice(-order);
        const b = ("00" + Math.round(Math.random() * 255).toString(hex)).slice(-order);
        const color = parseInt(`0x${r}${g}${b}`, hex);
        const material = new THREE.MeshPhongMaterial({color: color});

        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = radius * Math.cos(angle * i);
        cube.position.y = radius * Math.sin(angle * i);
        cube.position.z = -i * 0.5;

        scene.add(cube);
        cubes.push(cube);
    }

    const animate = () => {
        requestAnimationFrame(animate);

        for (const cube of cubes) {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
    };
    animate();
};
main();
