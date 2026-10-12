/**
 * Hero Scene
 * The full stack as three floating layers rendered with three.js:
 * a frontend UI on top, API services in the middle and databases at the
 * bottom. Requests travel down through the stack, responses travel back up.
 *
 * To swap in a different 3D piece, replace this module. It only needs to
 * export initHeroScene(container) and render into the container's <canvas>.
 */

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js";

const SLAB_WIDTH = 3;
const SLAB_DEPTH = 2;
const SLAB_THICKNESS = 0.1;
const LAYER_GAP = 1.6;
const CAMERA_DISTANCE = 13.5;
const CAMERA_DIRECTION = new THREE.Vector3(1, 0.78, 1.3).normalize();
const LOOK_AT = new THREE.Vector3(-0.45, -0.15, 0.3);
const PACKET_TRAVEL_TIME = 1.1; // seconds per layer gap
const MAX_PACKETS = 24;
const MAX_RIPPLES = 10;

/** Vertical lanes between layers: requests go down, responses come back up */
const LANES = [
  { x: -1.1, z: 0.72, down: true },
  { x: -0.4, z: 0.8, down: true },
  { x: 0.45, z: 0.8, down: false },
  { x: 1.15, z: 0.72, down: false },
];

/**
 * Reads scene colors from CSS custom properties so the scene follows the theme
 * @param {HTMLElement} el
 */
function readPalette(el) {
  const style = getComputedStyle(el);
  const color = (name) => new THREE.Color(style.getPropertyValue(name).trim());
  return {
    slab: color("--scene-slab"),
    panel: color("--scene-panel"),
    edge: color("--scene-edge"),
    ink: color("--scene-ink"),
    line: color("--scene-line"),
    accent: color("--accent"),
    shadow: color("--scene-shadow"),
    shadowOpacity: parseFloat(style.getPropertyValue("--scene-shadow-opacity")) || 0.15,
  };
}

/**
 * A flat rounded rectangle extruded upward, centered on y = 0
 */
function roundedSlabGeometry(width, depth, thickness, radius) {
  const x = -width / 2;
  const y = -depth / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + depth - radius);
  shape.quadraticCurveTo(x + width, y + depth, x + width - radius, y + depth);
  shape.lineTo(x + radius, y + depth);
  shape.quadraticCurveTo(x, y + depth, x, y + depth - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: thickness,
    bevelEnabled: false,
    curveSegments: 10,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, -thickness / 2, 0);
  return geometry;
}

/**
 * Soft round shadow texture for under the stack
 */
function createShadowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/**
 * Mounts the scene into the container
 * @param {HTMLElement} container - element with a <canvas> child
 */
export function initHeroScene(container) {
  const canvas = container.querySelector("canvas");
  if (!canvas) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
  } catch (error) {
    console.warn("WebGL unavailable:", error);
    container.classList.add("is-fallback");
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 60);

  scene.add(new THREE.AmbientLight(0xffffff, 1.9));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.position.set(-2.5, 8, 4);
  scene.add(sun);

  const root = new THREE.Group();
  scene.add(root);

  // ---- Shared materials (colors applied by applyPalette) -----------------

  const mat = {
    slab: new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0 }),
    panel: new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0 }),
    ink: new THREE.MeshStandardMaterial({ roughness: 0.7, metalness: 0 }),
    accent: new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0 }),
    edge: new THREE.LineBasicMaterial(),
    inkEdge: new THREE.LineBasicMaterial({ transparent: true, opacity: 0.35 }),
    lane: new THREE.LineDashedMaterial({
      transparent: true,
      opacity: 0.9,
      dashSize: 0.06,
      gapSize: 0.06,
    }),
    wire: new THREE.LineBasicMaterial({ transparent: true, opacity: 0.8 }),
    packetDown: new THREE.MeshBasicMaterial(),
    packetUp: new THREE.MeshBasicMaterial(),
    shadow: new THREE.MeshBasicMaterial({
      transparent: true,
      depthWrite: false,
      alphaMap: createShadowTexture(),
    }),
  };

  /** Adds a box resting on a surface at height `base`, with crisp outlines */
  function addBlock(parent, w, h, d, x, z, material, base, edgeMaterial = mat.inkEdge) {
    const geometry = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, base + h / 2, z);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
    mesh.add(edges);
    parent.add(mesh);
    return mesh;
  }

  // ---- Layers -------------------------------------------------------------

  const slabGeometry = roundedSlabGeometry(SLAB_WIDTH, SLAB_DEPTH, SLAB_THICKNESS, 0.16);
  const slabEdges = new THREE.EdgesGeometry(slabGeometry, 30);
  const surface = SLAB_THICKNESS / 2;

  const layers = [0, 1, 2].map((i) => {
    const group = new THREE.Group();
    group.userData.baseY = LAYER_GAP * (1 - i);
    group.position.y = group.userData.baseY;
    group.add(new THREE.Mesh(slabGeometry, mat.slab));
    group.add(new THREE.LineSegments(slabEdges, mat.edge));
    root.add(group);
    return group;
  });

  // Frontend: a small browser window with a header, sidebar, cards and a button
  {
    const top = layers[0];
    addBlock(top, 2.5, 0.04, 1.5, 0, 0, mat.panel, surface, mat.edge);
    const ui = surface + 0.04;
    addBlock(top, 2.5, 0.05, 0.22, 0, -0.64, mat.ink, ui);
    addBlock(top, 0.55, 0.06, 1.1, -0.9, 0.13, mat.panel, ui, mat.edge);
    [-0.25, 0.37, 0.99].forEach((x, i) =>
      addBlock(top, 0.5, 0.08 + i * 0.05, 0.5, x, -0.12, mat.panel, ui, mat.edge),
    );
    addBlock(top, 0.7, 0.09, 0.2, 0.06, 0.45, mat.accent, ui);
  }

  // API: a hub service wired to three services
  {
    const mid = layers[1];
    const hub = new THREE.Vector3(0, 0, -0.05);
    const services = [
      new THREE.Vector3(-0.95, 0, -0.45),
      new THREE.Vector3(0.95, 0, -0.45),
      new THREE.Vector3(0.05, 0, 0.5),
    ];
    addBlock(mid, 0.46, 0.46, 0.46, hub.x, hub.z, mat.accent, surface);
    services.forEach((s) => addBlock(mid, 0.32, 0.32, 0.32, s.x, s.z, mat.ink, surface));

    const wirePoints = services.flatMap((s) => [
      new THREE.Vector3(hub.x, surface + 0.005, hub.z),
      new THREE.Vector3(s.x, surface + 0.005, s.z),
    ]);
    mid.add(
      new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(wirePoints), mat.wire),
    );
  }

  // Database: three classic database cylinders
  {
    const bottom = layers[2];
    const disc = new THREE.CylinderGeometry(0.3, 0.3, 0.11, 40);
    const discEdges = new THREE.EdgesGeometry(disc, 30);
    [-0.85, 0, 0.85].forEach((x) => {
      for (let level = 0; level < 3; level++) {
        const mesh = new THREE.Mesh(disc, mat.ink);
        mesh.position.set(x, surface + 0.055 + level * 0.14, 0);
        mesh.add(new THREE.LineSegments(discEdges, mat.inkEdge));
        bottom.add(mesh);
      }
    });
  }

  // Soft shadow below the stack
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.6), mat.shadow);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -LAYER_GAP - 0.55;
  root.add(shadow);

  // ---- Lanes, packets and ripples ----------------------------------------

  const lanePositions = new Float32Array(LANES.length * 2 * 6);
  const laneGeometry = new THREE.BufferGeometry();
  laneGeometry.setAttribute("position", new THREE.BufferAttribute(lanePositions, 3));
  const laneLines = new THREE.LineSegments(laneGeometry, mat.lane);
  root.add(laneLines);

  const packetGeometry = new THREE.SphereGeometry(0.055, 14, 10);
  const downPackets = new THREE.InstancedMesh(packetGeometry, mat.packetDown, MAX_PACKETS);
  const upPackets = new THREE.InstancedMesh(packetGeometry, mat.packetUp, MAX_PACKETS);
  downPackets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  upPackets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  root.add(downPackets, upPackets);

  const ripples = Array.from({ length: MAX_RIPPLES }, () => {
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.07, 0.095, 40), material);
    ring.rotation.x = -Math.PI / 2;
    ring.visible = false;
    root.add(ring);
    return { ring, age: 0, layer: 0, x: 0, z: 0 };
  });

  /** @type {{lane: number, gap: number, t: number}[]} */
  const packets = [];
  // Each lane/gap pair spawns packets on its own rhythm
  const spawners = LANES.flatMap((_, lane) =>
    [0, 1].map((gap) => ({ lane, gap, timer: Math.random() * 1.5 })),
  );

  const dummy = new THREE.Object3D();

  /** Y of the surface a packet leaves from / arrives at, for gap 0 (top) or 1 */
  function gapEnds(gap) {
    const upper = layers[gap].position.y - surface;
    const lower = layers[gap + 1].position.y + surface;
    return { upper, lower };
  }

  function spawnRipple(layerIndex, x, z) {
    const ripple = ripples.find((r) => !r.ring.visible);
    if (!ripple) return;
    Object.assign(ripple, { age: 0, layer: layerIndex, x, z });
    ripple.ring.visible = true;
  }

  function updateTraffic(dt) {
    spawners.forEach((spawner) => {
      spawner.timer -= dt;
      if (spawner.timer > 0) return;
      spawner.timer = 0.9 + Math.random() * 1.6;
      if (packets.length < MAX_PACKETS) packets.push({ lane: spawner.lane, gap: spawner.gap, t: 0 });
    });

    for (let i = packets.length - 1; i >= 0; i--) {
      const packet = packets[i];
      packet.t += dt / PACKET_TRAVEL_TIME;
      if (packet.t >= 1) {
        const lane = LANES[packet.lane];
        if (lane.down) spawnRipple(packet.gap + 1, lane.x, lane.z);
        packets.splice(i, 1);
      }
    }

    ripples.forEach((ripple) => {
      if (!ripple.ring.visible) return;
      ripple.age += dt;
      const life = ripple.age / 0.9;
      if (life >= 1) {
        ripple.ring.visible = false;
        return;
      }
      ripple.ring.scale.setScalar(1 + life * 2.6);
      ripple.ring.material.opacity = (1 - life) * 0.9;
    });
  }

  function syncTraffic() {
    let down = 0;
    let up = 0;
    packets.forEach((packet) => {
      const lane = LANES[packet.lane];
      const { upper, lower } = gapEnds(packet.gap);
      const eased = packet.t * packet.t * (3 - 2 * packet.t);
      const y = lane.down ? upper + (lower - upper) * eased : lower + (upper - lower) * eased;
      dummy.position.set(lane.x, y, lane.z);
      dummy.scale.setScalar(Math.sin(Math.PI * Math.min(packet.t * 1.2, 1)) * 0.6 + 0.4);
      dummy.updateMatrix();
      if (lane.down && down < MAX_PACKETS) downPackets.setMatrixAt(down++, dummy.matrix);
      else if (!lane.down && up < MAX_PACKETS) upPackets.setMatrixAt(up++, dummy.matrix);
    });
    downPackets.count = down;
    upPackets.count = up;
    downPackets.instanceMatrix.needsUpdate = true;
    upPackets.instanceMatrix.needsUpdate = true;

    ripples.forEach((ripple) => {
      if (!ripple.ring.visible) return;
      ripple.ring.position.set(ripple.x, layers[ripple.layer].position.y + surface + 0.004, ripple.z);
    });

    // Lanes follow the floating layers
    LANES.forEach((lane, i) => {
      [0, 1].forEach((gap) => {
        const { upper, lower } = gapEnds(gap);
        const offset = (i * 2 + gap) * 6;
        lanePositions.set([lane.x, upper, lane.z, lane.x, lower, lane.z], offset);
      });
    });
    laneGeometry.attributes.position.needsUpdate = true;
    laneLines.computeLineDistances();
  }

  // ---- Labels (HTML, so they stay crisp and translatable) -----------------

  const tags = [...container.querySelectorAll("[data-scene-layer]")];
  const anchor = new THREE.Vector3();

  function positionTags() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    tags.forEach((tag) => {
      const layer = layers[Number(tag.dataset.sceneLayer)];
      if (!layer) return;
      anchor.set(-SLAB_WIDTH / 2, 0, SLAB_DEPTH / 2);
      layer.localToWorld(anchor);
      anchor.project(camera);
      const x = (anchor.x * 0.5 + 0.5) * width;
      const y = (-anchor.y * 0.5 + 0.5) * height;
      tag.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
  }

  function applyPalette() {
    const palette = readPalette(container);
    mat.slab.color.copy(palette.slab);
    mat.panel.color.copy(palette.panel);
    mat.ink.color.copy(palette.ink);
    mat.accent.color.copy(palette.accent);
    mat.edge.color.copy(palette.edge);
    mat.inkEdge.color.copy(palette.edge);
    mat.lane.color.copy(palette.line);
    mat.wire.color.copy(palette.line);
    mat.packetDown.color.copy(palette.accent);
    mat.packetUp.color.copy(palette.ink);
    mat.shadow.color.copy(palette.shadow);
    mat.shadow.opacity = palette.shadowOpacity;
    ripples.forEach(({ ring }) => ring.material.color.copy(palette.accent));
  }

  // ---- Interaction -------------------------------------------------------

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let motionAllowed = !reducedMotion.matches;
  reducedMotion.addEventListener("change", (e) => {
    motionAllowed = !e.matches;
    requestFrame();
  });

  let spin = 0;
  let spinVelocity = 0;
  let dragging = false;
  let lastX = 0;
  const parallax = { x: 0, y: 0 };
  const parallaxTarget = { x: 0, y: 0 };

  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    canvas.setPointerCapture(event.pointerId);
    requestFrame();
  });

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    parallaxTarget.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    parallaxTarget.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    if (dragging) {
      const dx = event.clientX - lastX;
      lastX = event.clientX;
      spinVelocity = dx * 0.006;
      spin += spinVelocity;
    }
    requestFrame();
  });

  const endDrag = () => {
    dragging = false;
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);
  canvas.addEventListener("pointerleave", () => {
    parallaxTarget.x = 0;
    parallaxTarget.y = 0;
    requestFrame();
  });

  // ---- Loop --------------------------------------------------------------

  let rafId = 0;
  let lastTime = 0;
  let elapsed = 0;
  let inView = true;

  function isSettling() {
    return (
      dragging ||
      Math.abs(spinVelocity) > 1e-4 ||
      Math.abs(parallax.x - parallaxTarget.x) > 1e-3 ||
      Math.abs(parallax.y - parallaxTarget.y) > 1e-3
    );
  }

  function update(dt) {
    if (motionAllowed) {
      elapsed += dt;
      updateTraffic(dt);
      layers.forEach((layer, i) => {
        layer.position.y = layer.userData.baseY + Math.sin(elapsed * 0.9 + i * 1.3) * 0.045;
      });
    }

    if (!dragging) {
      spin += spinVelocity;
      spinVelocity *= 0.92;
    }

    const ease = 1 - Math.exp(-dt * 4);
    parallax.x += (parallaxTarget.x - parallax.x) * ease;
    parallax.y += (parallaxTarget.y - parallax.y) * ease;

    const sway = motionAllowed ? Math.sin(elapsed * 0.25) * 0.22 : 0;
    root.rotation.y = sway + spin + parallax.x * 0.08;
    root.rotation.x = parallax.y * 0.04;

    syncTraffic();
  }

  function frame(now) {
    rafId = 0;
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    update(dt);
    renderer.render(scene, camera);
    positionTags();

    if (inView && !document.hidden && (motionAllowed || isSettling())) {
      rafId = requestAnimationFrame(frame);
    }
  }

  function requestFrame() {
    if (rafId) return;
    lastTime = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Pull back on tall viewports so the stack always fits
    const distance = CAMERA_DISTANCE / Math.min(1, camera.aspect);
    camera.position.copy(CAMERA_DIRECTION).multiplyScalar(distance).add(LOOK_AT);
    camera.lookAt(LOOK_AT);
    camera.updateProjectionMatrix();
    requestFrame();
  }

  new ResizeObserver(resize).observe(container);

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) requestFrame();
  }).observe(container);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) requestFrame();
  });

  document.addEventListener("themechange", () => {
    applyPalette();
    requestFrame();
  });

  applyPalette();
  // Pre-warm traffic so the first frame already shows packets in flight
  for (let i = 0; i < 90; i++) updateTraffic(1 / 30);
  resize();
  update(0);
  renderer.render(scene, camera);
  positionTags();
  container.classList.add("is-ready");
  requestFrame();
}
