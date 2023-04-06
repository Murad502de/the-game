import {
  Scene,
  PerspectiveCamera,
  TextureLoader,
  SphereGeometry,
  ShaderMaterial,
  Mesh,
  WebGLRenderer,
  BufferAttribute,
} from "three";
import getVertexShader from "./vertexShader.js";
import getFragmentShader from "./fragmentShader.js";
import gsap from "gsap";
import photo from "./sphere/images/first_page.png";
import counter from "../../store/index";

export const run = () => {
  const canvas = document.querySelector("#canvas");

  let scene,
    displayWidth,
    camera,
    renderer,
    textureLoader,
    geometry,
    material,
    mesh,
    uniforms,
    time,
    texture,
    sphere,
    requestID;

  time = 0.2;

  function resize() {
    let { width: width, height: height } = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    (height = window.innerHeight),
      (width = window.innerHeight),
      (camera.aspect = width / height),
      camera.updateProjectionMatrix(),
      camera.updateMatrixWorld(),
      camera.updateWorldMatrix(),
      renderer.setSize(Math.min(window.innerWidth / 0.7, width), Math.min(window.innerWidth / 0.7, height));
  }

  function init() {
    scene = new Scene();
    displayWidth =
      window.innerWidth > 1920 ? 3200 : window.innerWidth > 768 ? 1920 : 1e3;

    let { width: width, height: height } = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    camera = new PerspectiveCamera(75, width / height, 0.1, 100);
    scene.add(camera);
    textureLoader = new TextureLoader();
    texture = textureLoader.load("/images/first_page.png", () => {
      if (document.readyState === "complete") {
        counter.setIsLoading(false);
      } else {
        window.onload = () => {
          counter.setIsLoading(false);
        };
      }
    });
    textureLoader.setCrossOrigin("anonymous");
    geometry = new SphereGeometry(1, 280, 280);
    uniforms = {
      uTime: { value: time },
      uDistortionFrequency: { value: 1 },
      uDisplacementFrequency: { value: 3 },
      uDisplacementStrngth: { value: 0.18 },
      uSubdivision: { value: { x: 280, y: 280 } },
      uFresnelOffset: { value: -1.9 },
      uFresnelMultiplier: { value: 3.587 },
      uFresnelPower: { value: 1.3 },
      uLightColor: { value: { x: 2.37, y: 2.25, z: 1.58, w: 1 } },
      uLightAPosition: { value: { x: 1, y: 1, z: 0 } },
      uLightBPosition: { value: { x: -1, y: -5.5, z: 0 } },
      uTexture: { type: "t", value: texture },
      viewMatrixCamera: { type: "m4", value: camera.matrixWorldInverse },
      projectionMatrixCamera: { type: "m4", value: camera.projectionMatrix },
      savedModelMatrix: {
        type: "mat4",
        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      },
    };

    geometry.computeTangents();

    material = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: getVertexShader(),
      fragmentShader: getFragmentShader(),
    });
    sphere = new Mesh(geometry, material);

    scene.add(sphere);
    camera.position.z = 2.5;

    renderer = new WebGLRenderer({ canvas: canvas, alpha: !0, antialias: !0 });

    renderer.setSize(width, height);

    window.addEventListener("resize", () => {
      resize();
    });
    resize()
  }

  const loop = () => {
    (requestID = window.requestAnimationFrame(loop)),
      (uniforms.uTime.value += 0.01),
      document.body.classList.contains("preview") || disableLoop(requestID),
      renderer.render(scene, camera);
  };

  init();
  loop();
  sphereZoomReset();

  function sphereZoom(e) {
    document.querySelector('#sphere_wrapper').style.zIndex = 4;

    (canvas.style.zIndex = 5),
      (uniforms.uTime.value = 0.5),
      gsap &&
      gsap.to('#canvas', {
        duration: 0.4,
        delay: 0.1,
        scale: '5',
        ease: "power3.inOut",
        onComplete: () => {
          window.scrollTo({
            top: 0,
            left: 0,
            // behavior: "smooth",
          });

          document.querySelector("#first").style.display = "none"; //TODO

          let second = document.querySelector("#second");

          // document.body.classList.remove("preview"); //TODO
          second.style.transform = "scale(1)";

          second.scrollIntoView({ behavior: "smooth", block: "center" });
        },
      });
  }

  function sphereZoomReset(e) {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth",
    });

    (canvas.style.zIndex = 5),
      (uniforms.uTime.value = 0.5),
      gsap &&
      gsap.to('#canvas', {
        duration: 0,
        delay: 0.1,
        scale: '1',
        ease: "power3.inOut",
        onComplete: () => {
          // document.querySelector("#first").style.display = "none"; //TODO

          // let second = document.querySelector("#second");

          // document.body.classList.remove("preview"); //TODO
          // second.style.transform = "scale(1)"; //TODO

          // second.scrollIntoView({ behavior: "smooth", block: "center" });

          document.querySelector('#sphere_wrapper').style.zIndex = 1;
          document.querySelector("#first").style.display = "block";
        },
      });
  }

  function stopableEventListener(e, t, r) {
    return (
      e.addEventListener(t, r),
      function () {
        e.removeEventListener(t, r);
      }
    );
  }

  function disableLoop(e) {
    window.cancelAnimationFrame(e), (requestID = null);
  }

  const wheel = stopableEventListener(document, "wheel", () => {
    sphereZoom(), wheel();
  });

  const touch = stopableEventListener(document, "touchmove", (e) => {
    let t;
    "scroll-to-book" === e.target.id && (t = "#about"),
      sphereZoom(t),
      touch();
  });

  // const click = stopableEventListener(
  //   document.querySelector("#scroll-to-book"),
  //   "click",
  //   () => {
  //     sphereZoom("#about"), click();
  //   }
  // );
};
