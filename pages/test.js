import { useEffect } from "react";
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
import getVertexShader from "../utils/vertexShader.js";
import getFragmentShader from "../utils/fragmentShader.js";
import { gsap } from "gsap";
const Test = () => {
  useEffect(() => {
    const canvas = document.querySelector(".webgl"),
      scene = new Scene(),
      displayWidth =
        window.innerWidth > 1920 ? 3200 : window.innerWidth > 768 ? 1920 : 1e3;
    let { width: width, height: height } = {
      width: displayWidth,
      height: window.innerHeight,
    };
    const camera = new PerspectiveCamera(75, width / height, 0.1, 100);
    scene.add(camera);
    const textureLoader = new TextureLoader(),
      texture = textureLoader.load("../public/images/first_page.png");
    textureLoader.setCrossOrigin("anonymous");
    const geometry = new SphereGeometry(1, 280, 280);
    let time = 0.2;
    const uniforms = {
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
    if (window.Worker) {
      const e = new Worker("../utils/worker.js", { type: "module" });
      e.postMessage({ type: "tangents" }),
        (e.onmessage = (e) => {
          "tangents" === e.data.type
            ? geometry.setAttribute(
                "tangent",
                new BufferAttribute(e.data.object, 4)
              )
            : e.data.type;
        });
    } else geometry.computeTangents();
    const material = new ShaderMaterial({
        uniforms: uniforms,
        vertexShader: getVertexShader(),
        fragmentShader: getFragmentShader(),
      }),
      sphere = new Mesh(geometry, material);
    scene.add(sphere), (camera.position.z = 2.5);
    const renderer = new WebGLRenderer({
      canvas: canvas,
      alpha: !0,
      antialias: !0,
    });
    function sphereZoom(e) {
      (canvas.style.zIndex = 5),
        (uniforms.uTime.value = 0.5),
        gsap &&
          gsap.to(camera.position, {
            duration: 0.4,
            delay: 0.1,
            z: 1.15,
            ease: "power3.inOut",
            onComplete: () => {
              document.body.classList.remove("preview"),
                document.querySelector(".firstScreen").classList.add("opened"),
                e &&
                  document
                    .querySelector(e)
                    .scrollIntoView({ behavior: "smooth", block: "center" });
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
    renderer.setSize(width, height),
      window.addEventListener("resize", () => {
        (height = window.innerHeight),
          (camera.aspect = width / height),
          camera.updateProjectionMatrix(),
          camera.updateMatrixWorld(),
          camera.updateWorldMatrix(),
          renderer.setSize(width, height);
      });
    const wheel = stopableEventListener(document, "wheel", () => {
        sphereZoom(), wheel();
      }),
      touch = stopableEventListener(document, "touchend", (e) => {
        let t;
        "scroll-to-about" === e.target.id && (t = "#about"),
          sphereZoom(t),
          touch();
      }),
      click = stopableEventListener(
        document.querySelector("#scroll-to-about"),
        "click",
        () => {
          sphereZoom("#about"), click();
        }
      );
    let requestID;
    const loop = () => {
      (requestID = window.requestAnimationFrame(loop)),
        (uniforms.uTime.value += 0.01),
        document.body.classList.contains("preview") || disableLoop(requestID),
        renderer.render(scene, camera);
    };
    function disableLoop(e) {
      window.cancelAnimationFrame(e), (requestID = null);
    }
    loop();
  }, []);
  return (
    <>
      <div class="preview_wrap">
        <div class="overlay_wrap">
          <div class="overlay">
            <div class="overlay-link_wrap">
              <a class="overlay-link" id="scroll-to-about">
                About
              </a>
            </div>
            <div class="overlay-logo">
              <img src="./public/images/Logo_copy.svg" alt="" />
            </div>
            <div class="overlay-link_wrap right-part">
              <a class="overlay-link" id="long-link" href="#">
                Book Your Seat
              </a>
              <a class="overlay-link" id="short-link" href="#">
                Book
              </a>
            </div>
            <p class="overlay-text" id="desktop-text">
              Let's find anothe place
            </p>
            <p class="overlay-text right-part" id="desktop-text">
              Place forrelaxed pastime
            </p>
          </div>
          <div class="scroll-notice">
            <img src="./public/images/bx_mouse.svg" alt="" />
            <p class="notice-text">Scroll to Start</p>
          </div>
          <div class="mobile-text_wrap">
            <div class="mobile-text">
              <p class="overlay-text">Let's find another place -</p>
              <p class="overlay-text right-part">place for relaxed pastime</p>
            </div>
          </div>
        </div>
        <canvas class="webgl"></canvas>
        <picture>
          <source srcset="./public/images/1plan.webp" type="image/webp" />
          <img class="img-sand" src="./public/images/1plan.png" />
        </picture>
      </div>
      <div class="wrap_firstScreen">
        <div class="firstScreen">
          <p class="wrap_logo">
            <img src="./public/images/Logo.svg" />
          </p>
          <picture>
            {/* <source srcset="./public/images/Group60.webp" type="image/webp" />
            <img src="./public/images/Group60.jpg" id="mobile_fone" /> */}
          </picture>
        </div>
      </div>
    </>
  );
};

export default Test;
