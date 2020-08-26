const canvas = document.getElementById("mainCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

document.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

KEYS = {};

CONTROL = {
  throttle: 0,
  break: 0,
  clutch: 0,
  steering: 0,
  handbrake: 0,
  gearUp: 0,
  gearDown: 0,
};

const mapControls = {
  ArrowUp: "throttle",
  ArrowDown: "break",
  a: "clutch",
  ArrowLeft: "steeringNeg",
  ArrowRight: "steeringPos",
  " ": "handbrake",
  d: "gearUp",
  s: "gearDown",
};

document.addEventListener("keydown", (e) => {
  KEYS[e.key] = true;
  const control = mapControls[e.key];
  if (!control.includes("steering")) {
    CONTROL[control] = 1;
  } else {
    if (control.includes("Pos")) {
      CONTROL.steering = 1;
    } else {
      CONTROL.steering = -1;
    }
  }
});

document.addEventListener("keyup", (e) => {
  KEYS[e.key] = false;
  CONTROL[mapControls[e.key].replace("Pos", "").replace("Neg", "")] = 0;
});
