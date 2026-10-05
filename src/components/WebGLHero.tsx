"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import Link from "next/link";

export default function WebGLHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const MODEL_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260929_212926_92423081-b0e4-4f5a-b650-14af6c05c058.glb';

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setClearColor(0x000000);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const mainScene = new THREE.Scene();
    const pivot = new THREE.Group();
    const spinner = new THREE.Group();
    mainScene.add(pivot);
    pivot.add(spinner);

    // Background Scene
    const bgScene = new THREE.Scene();
    const bgCanvas = document.createElement('canvas');
    const bgCtx = bgCanvas.getContext('2d');
    if (!bgCtx) return;

    const bgTexture = new THREE.CanvasTexture(bgCanvas);
    bgTexture.colorSpace = THREE.SRGBColorSpace;
    bgTexture.minFilter = THREE.LinearFilter;
    bgTexture.magFilter = THREE.LinearFilter;
    bgTexture.generateMipmaps = false;

    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: { uTex: { value: bgTexture } },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 1.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex;
        varying vec2 vUv;
        void main() {
          gl_FragColor = texture2D(uTex, vUv);
          #include <colorspace_fragment>
        }
      `,
      depthTest: false,
      depthWrite: false
    });
    const bgQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial);
    bgQuad.frustumCulled = false;
    bgScene.add(bgQuad);

    let W = 0, H = 0, DPR = 1;
    function updateBg() {
      if (!bgCtx) return;
      bgCanvas.width = W * DPR;
      bgCanvas.height = H * DPR;
      bgCtx.fillStyle = '#000000';
      bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

      const mobile = (W < 768) || (W / H < 1);
      let fs = Math.min(H * 0.21, W * (mobile ? 0.21 : 0.118));
      bgCtx.font = `800 ${fs * DPR}px serif`;
      bgCtx.fillStyle = '#e9e9e9';
      bgCtx.textAlign = 'center';
      bgCtx.textBaseline = 'alphabetic';

      const lines = ["Discover", "Signature", "Scents"];
      let maxW = 0;
      lines.forEach(l => { maxW = Math.max(maxW, bgCtx.measureText(l).width); });
      
      const limit = W * (mobile ? 0.9 : 0.5) * DPR;
      if (maxW > limit) {
        fs *= limit / maxW;
        bgCtx.font = `800 ${fs * DPR}px serif`;
      }

      const cx = W * (mobile ? 0.5 : 0.505) * DPR;
      const cy = H * (mobile ? 0.45 : 0.468) * DPR;
      const gap = fs * 1.07 * DPR;
      const cap = fs * 0.7 * DPR;

      lines.forEach((line, i) => {
        const y = cy + cap / 2 + (i - 1) * gap;
        bgCtx.fillText(line, cx, y);
      });

      bgTexture.needsUpdate = true;
    }

    // Render Targets
    let rtBack: THREE.WebGLRenderTarget, rtFront: THREE.WebGLRenderTarget;
    function initRenderTargets() {
      if (rtBack) rtBack.dispose();
      if (rtFront) rtFront.dispose();
      const w = W * DPR;
      const h = H * DPR;
      const options = { type: THREE.HalfFloatType, colorSpace: THREE.LinearSRGBColorSpace };
      rtBack = new THREE.WebGLRenderTarget(w, h, options);
      rtFront = new THREE.WebGLRenderTarget(w, h, options);
    }

    // Glass Material
    const glassVS = `
      varying vec3 vNormal;
      varying vec3 vEye;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vec4 mvPos = viewMatrix * worldPos;
        gl_Position = projectionMatrix * mvPos;
        vNormal = normalize(normalMatrix * normal);
        vEye = normalize(mvPos.xyz);
      }
    `;
    const glassFS = `
      uniform sampler2D uTexture;
      uniform vec2 uResolution;
      uniform float uIorR;
      uniform float uIorY;
      uniform float uIorG;
      uniform float uIorC;
      uniform float uIorB;
      uniform float uIorP;
      uniform float uRefractPower;
      uniform float uChromatic;
      uniform float uSaturation;
      uniform float uShininess;
      uniform float uDiffuseness;
      uniform float uFresnelPower;
      uniform vec3 uLight;
      uniform float uBackside;

      varying vec3 vNormal;
      varying vec3 vEye;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        vec3 n = normalize(vNormal);
        if (uBackside > 0.5) n = -n;
        vec3 eye = normalize(vEye);

        vec3 color = vec3(0.0);
        const float LOOP = 16.0;
        
        for(float i = 0.0; i < LOOP; i++) {
          float slide = i / LOOP * 0.045;
          vec3 refrR = refract(eye, n, 1.0/uIorR);
          vec3 refrY = refract(eye, n, 1.0/uIorY);
          vec3 refrG = refract(eye, n, 1.0/uIorG);
          vec3 refrC = refract(eye, n, 1.0/uIorC);
          vec3 refrB = refract(eye, n, 1.0/uIorB);
          vec3 refrP = refract(eye, n, 1.0/uIorP);

          vec3 texR = texture2D(uTexture, uv + refrR.xy * (uRefractPower + slide * 1.0) * uChromatic).rgb;
          vec3 texY = texture2D(uTexture, uv + refrY.xy * (uRefractPower + slide * 1.0) * uChromatic).rgb;
          vec3 texG = texture2D(uTexture, uv + refrG.xy * (uRefractPower + slide * 2.0) * uChromatic).rgb;
          vec3 texC = texture2D(uTexture, uv + refrC.xy * (uRefractPower + slide * 2.5) * uChromatic).rgb;
          vec3 texB = texture2D(uTexture, uv + refrB.xy * (uRefractPower + slide * 3.0) * uChromatic).rgb;
          vec3 texP = texture2D(uTexture, uv + refrP.xy * (uRefractPower + slide * 1.0) * uChromatic).rgb;

          float r = texR.x * 0.5;
          float y = (texY.x * 2.0 + texY.y * 2.0 - texY.z) / 6.0;
          float g = texG.y * 0.5;
          float c = (texC.y * 2.0 + texC.z * 2.0 - texC.x) / 6.0;
          float b = texB.z * 0.5;
          float p = (texP.z * 2.0 + texP.x * 2.0 - texP.y) / 6.0;

          float R = r + (2.0*p + 2.0*y - c)/3.0;
          float G = g + (2.0*y + 2.0*c - p)/3.0;
          float B = b + (2.0*c + 2.0*p - y)/3.0;
          color += vec3(R, G, B);
        }
        
        color /= LOOP;
        float luma = dot(color, vec3(0.2125, 0.7154, 0.0721));
        color = mix(vec3(luma), color, uSaturation);

        vec3 lightVec = normalize(-uLight);
        vec3 halfVec = normalize(lightVec - eye);
        float specBase = pow(max(dot(n, halfVec), 0.0), uShininess) + max(0.0, dot(n, lightVec)) * uDiffuseness;
        
        vec3 light2 = normalize(vec3(1.0, 1.0, -1.0));
        vec3 half2 = normalize(light2 - eye);
        float spec2 = pow(max(dot(n, half2), 0.0), uShininess * 0.6) + max(0.0, dot(n, light2)) * uDiffuseness * 0.5;
        
        float spec = specBase + 0.6 * spec2;
        color += vec3(spec) * (uBackside > 0.5 ? 0.35 : 1.0);

        float f = pow(1.0 + dot(eye, n), uFresnelPower);
        color = mix(color, vec3(1.0), f * (uBackside > 0.5 ? 0.25 : 0.55));
        color += vec3(0.004, 0.005, 0.007);

        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `;

    const uniforms = {
      uTexture: { value: null },
      uResolution: { value: new THREE.Vector2() },
      uIorR: { value: 1.15 }, uIorY: { value: 1.16 }, uIorG: { value: 1.18 },
      uIorC: { value: 1.22 }, uIorB: { value: 1.22 }, uIorP: { value: 1.22 },
      uRefractPower: { value: 0.30 }, uChromatic: { value: 0.5 },
      uSaturation: { value: 1.08 }, uShininess: { value: 90.0 },
      uDiffuseness: { value: 0.02 }, uFresnelPower: { value: 5.0 },
      uLight: { value: new THREE.Vector3(-1, 1, 1) },
      uBackside: { value: 0 }
    };

    const backMat = new THREE.ShaderMaterial({
      vertexShader: glassVS, fragmentShader: glassFS,
      uniforms: THREE.UniformsUtils.clone(uniforms),
      side: THREE.BackSide
    });
    backMat.uniforms.uBackside.value = 1;
    backMat.uniforms.uRefractPower.value = 0.22;

    const frontMat = new THREE.ShaderMaterial({
      vertexShader: glassVS, fragmentShader: glassFS,
      uniforms: THREE.UniformsUtils.clone(uniforms),
      side: THREE.FrontSide
    });

    let mesh: THREE.Mesh | null = null;

    function buildPerfumeBottle() {
      // Classic elegant perfume bottle shape
      const bodyGeo = new RoundedBoxGeometry(0.7, 1.0, 0.4, 16, 0.05);
      
      const neckGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.15, 32).toNonIndexed();
      neckGeo.translate(0, 0.575, 0);
      
      const capGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.35, 32).toNonIndexed();
      capGeo.translate(0, 0.825, 0);
      
      return mergeGeometries([bodyGeo, neckGeo, capGeo]);
    }

    function applyGeometry(geom: THREE.BufferGeometry) {
      geom.computeBoundingBox();
      const box = geom.boundingBox!;
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      
      geom.translate(-center.x, -center.y, -center.z);
      geom.scale(1/maxDim, 1/maxDim, 1/maxDim);
      
      mesh = new THREE.Mesh(geom, frontMat);
      spinner.add(mesh);
      spinner.rotation.set(-0.42, 0.62, 0.18);
    }

    // Force the procedural perfume bottle instead of loading the external cube model
    applyGeometry(buildPerfumeBottle());

    function layout() {
      if (!containerRef.current) return;
      W = containerRef.current.clientWidth;
      H = containerRef.current.clientHeight;
      DPR = Math.min(window.devicePixelRatio, 2);
      
      renderer.setSize(W, H);
      renderer.setPixelRatio(DPR);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();

      initRenderTargets();
      frontMat.uniforms.uResolution.value.set(W*DPR, H*DPR);
      backMat.uniforms.uResolution.value.set(W*DPR, H*DPR);

      updateBg();

      const fovRad = (camera.fov * Math.PI) / 180;
      const visH = 2 * Math.tan(fovRad / 2) * 10;
      const visW = visH * camera.aspect;

      const mobile = (W < 768) || (W/H < 1);
      const sx = mobile ? 0.5 : 0.517;
      const sy = mobile ? 0.45 : 0.488;
      pivot.position.set((sx - 0.5) * visW, (0.5 - sy) * visH, 0);

      const px = Math.min(H * 0.44, W * (mobile ? 0.45 : 0.29));
      const scale = (px / H) * visH;
      pivot.scale.set(scale, scale, scale);
    }

    window.addEventListener('resize', layout);

    // Interaction
    let vX = 0, vY = 0;
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let tReleased = 0;
    let spinRemain = 0;

    const onDown = (e: PointerEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      vX = 0; vY = 0;
      spinRemain = 0;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'grabbing';
    };

    const onMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = (e.clientX - lastX) * 0.008;
      const dy = (e.clientY - lastY) * 0.008;
      lastX = e.clientX;
      lastY = e.clientY;
      
      const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), dx);
      const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), dy);
      spinner.quaternion.premultiply(qX).premultiply(qY);
      
      vX = dx; vY = dy;
    };

    const onUp = (e: PointerEvent) => {
      if(!isDragging) return;
      isDragging = false;
      canvas.releasePointerCapture(e.pointerId);
      canvas.style.cursor = 'grab';
      tReleased = performance.now();
    };

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);

    let animationId = 0;
    let lastTime = performance.now();
    
    function animate(now: number) {
      animationId = requestAnimationFrame(animate);
      let dt = (now - lastTime) / 1000;
      lastTime = now;
      if (dt > 0.05) dt = 0.05;

      if (Math.abs(spinRemain) > 0.0005) {
        const step = spinRemain * Math.min(1, 0.09 * dt * 60);
        spinner.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), step));
        spinRemain -= step;
      } else if (!isDragging) {
        vX *= Math.pow(0.94, dt * 60);
        vY *= Math.pow(0.94, dt * 60);
        
        const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), vX);
        const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), vY);
        spinner.quaternion.premultiply(qX).premultiply(qY);
        
        const idleTime = now - tReleased;
        if (idleTime > 600) {
          let blend = Math.min(1, (idleTime - 600) / 1000);
          const iX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), 0.0035 * blend * dt * 60);
          const iY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), 0.0012 * blend * dt * 60);
          spinner.quaternion.premultiply(iX).premultiply(iY);
        }
      }

      if (!mesh) {
        renderer.setRenderTarget(null);
        renderer.render(bgScene, camera);
        return;
      }

      backMat.uniforms.uTexture.value = rtBack.texture;
      frontMat.uniforms.uTexture.value = rtFront.texture;

      renderer.setRenderTarget(rtBack);
      renderer.clear();
      renderer.render(bgScene, camera);

      renderer.setRenderTarget(rtFront);
      renderer.clear();
      renderer.render(bgScene, camera);
      mesh.material = backMat;
      renderer.autoClear = false;
      renderer.render(mainScene, camera);

      renderer.setRenderTarget(null);
      renderer.clear();
      renderer.render(bgScene, camera);
      mesh.material = frontMat;
      renderer.clearDepth();
      renderer.render(mainScene, camera);
      renderer.autoClear = true;
    }

    // Wait for a small timeout to ensure fonts are ready
    setTimeout(() => {
      layout();
      lastTime = performance.now();
      animate(performance.now());
    }, 100);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', layout);
      renderer.dispose();
      bgQuad.geometry.dispose();
      bgMaterial.dispose();
      backMat.dispose();
      frontMat.dispose();
      if(rtBack) rtBack.dispose();
      if(rtFront) rtFront.dispose();
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100vh] min-h-[520px] overflow-hidden bg-black text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block cursor-grab touch-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Navigation is integrated with the main site Navbar, but we leave space if needed */}
        
        {/* Tagline */}
        <p className="absolute left-[clamp(20px,6.95vw,120px)] bottom-[clamp(40px,7.5vh,70px)] text-[clamp(24px,2.65vw,44px)] leading-[1.2] font-light tracking-tight m-0">
          Let's Craft Your<br /><strong className="font-bold block">Signature Scent.</strong>
        </p>

        {/* CTA */}
        <div className="absolute left-[45.6%] right-[-1vw] top-[88.7%] -translate-y-1/2 flex items-center max-md:left-[clamp(20px,6.95vw,120px)] max-md:right-[-3vw] max-md:top-auto max-md:bottom-6 max-md:translate-y-0">
          <Link href="/shop" className="pointer-events-auto flex-none px-[15px] h-[48px] inline-flex items-center border-[1.5px] border-white/85 rounded-md bg-black/15 text-white text-[14px] hover:bg-white hover:text-black transition-colors">
            Shop Now
          </Link>
          <span className="flex-1 h-[1.5px] bg-white/80 min-w-[40px] ml-4"></span>
        </div>
      </div>
    </div>
  );
}
