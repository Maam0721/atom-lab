const elements = [
  ["H","Устөрөгч","nonmetal"],["He","Гели","noble"],["Li","Лити","alkali"],["Be","Берилли","alkaline"],["B","Бор","metalloid"],["C","Нүүрстөрөгч","nonmetal"],["N","Азот","nonmetal"],["O","Хүчилтөрөгч","nonmetal"],["F","Фтор","halogen"],["Ne","Неон","noble"],
  ["Na","Натри","alkali"],["Mg","Магни","alkaline"],["Al","Хөнгөн цагаан","metal"],["Si","Цахиур","metalloid"],["P","Фосфор","nonmetal"],["S","Хүхэр","nonmetal"],["Cl","Хлор","halogen"],["Ar","Аргон","noble"],
  ["K","Кали","alkali"],["Ca","Кальци","alkaline"],["Sc","Скандий","metal"],["Ti","Титан","metal"],["V","Ванади","metal"],["Cr","Хром","metal"],["Mn","Манган","metal"],["Fe","Төмөр","metal"],["Co","Кобальт","metal"],["Ni","Никель","metal"],["Cu","Зэс","metal"],["Zn","Цайр","metal"],["Ga","Галли","metal"],["Ge","Германий","metalloid"],["As","Хүнцэл","metalloid"],["Se","Селен","nonmetal"],["Br","Бром","halogen"],["Kr","Криптон","noble"],
  ["Rb","Рубиди","alkali"],["Sr","Стронци","alkaline"],["Y","Иттри","metal"],["Zr","Циркони","metal"],["Nb","Ниоби","metal"],["Mo","Молибден","metal"],["Tc","Технеци","metal"],["Ru","Рутени","metal"],["Rh","Роди","metal"],["Pd","Паллади","metal"],["Ag","Мөнгө","metal"],["Cd","Кадми","metal"],["In","Инди","metal"],["Sn","Цагаан тугалга","metal"],["Sb","Сурьма","metalloid"],["Te","Теллур","metalloid"],["I","Иод","halogen"],["Xe","Ксенон","noble"],
  ["Cs","Цези","alkali"],["Ba","Бари","alkaline"],["La","Лантан","lanthanoid"],["Ce","Цери","lanthanoid"],["Pr","Празеодим","lanthanoid"],["Nd","Неодим","lanthanoid"],["Pm","Промети","lanthanoid"],["Sm","Самари","lanthanoid"],["Eu","Европи","lanthanoid"],["Gd","Гадолини","lanthanoid"],["Tb","Терби","lanthanoid"],["Dy","Диспрози","lanthanoid"],["Ho","Гольми","lanthanoid"],["Er","Эрби","lanthanoid"],["Tm","Тули","lanthanoid"],["Yb","Итерби","lanthanoid"],["Lu","Лютеци","lanthanoid"],
  ["Hf","Гафни","metal"],["Ta","Тантал","metal"],["W","Вольфрам","metal"],["Re","Рени","metal"],["Os","Осми","metal"],["Ir","Ириди","metal"],["Pt","Платин","metal"],["Au","Алт","metal"],["Hg","Мөнгөн ус","metal"],["Tl","Талли","metal"],["Pb","Хар тугалга","metal"],["Bi","Висмут","metal"],["Po","Полони","metalloid"],["At","Астат","halogen"],["Rn","Радон","noble"],
  ["Fr","Франци","alkali"],["Ra","Ради","alkaline"],["Ac","Актини","actinoid"],["Th","Тори","actinoid"],["Pa","Протактини","actinoid"],["U","Уран","actinoid"],["Np","Нептуни","actinoid"],["Pu","Плутони","actinoid"],["Am","Америци","actinoid"],["Cm","Кюри","actinoid"],["Bk","Беркли","actinoid"],["Cf","Калифорни","actinoid"],["Es","Эйнштейни","actinoid"],["Fm","Фермий","actinoid"],["Md","Менделеви","actinoid"],["No","Нобели","actinoid"],["Lr","Лоуренси","actinoid"],
  ["Rf","Резерфорди","metal"],["Db","Дубни","metal"],["Sg","Сиборги","metal"],["Bh","Бори","metal"],["Hs","Хасси","metal"],["Mt","Мейтнери","unknown"],["Ds","Дармштадти","unknown"],["Rg","Рентгени","unknown"],["Cn","Коперници","metal"],["Nh","Нихони","unknown"],["Fl","Флерови","unknown"],["Mc","Москови","unknown"],["Lv","Ливермори","unknown"],["Ts","Теннессин","unknown"],["Og","Оганесон","noble"]
].map(([symbol, name, category], index) => ({ symbol, name, category, number: index + 1 }));

const massNumbers = [
  1,4,7,9,11,12,14,16,19,20,23,24,27,28,31,32,35,40,39,40,45,48,51,52,55,56,
  59,59,64,65,70,73,75,79,80,84,85,88,89,91,93,96,98,101,103,106,108,112,115,119,
  122,128,127,131,133,138,139,140,141,144,145,150,152,157,159,163,165,167,169,173,
  175,178,181,184,186,190,192,195,197,201,204,207,209,209,210,222,223,226,227,232,
  231,238,237,244,243,247,247,251,252,257,258,259,266,267,268,269,270,269,278,281,
  282,285,286,289,290,293,294,294
];

const categoryNames = {
  nonmetal: "Металл биш", noble: "Идэвхгүй хий", alkali: "Шүлтийн металл",
  alkaline: "Шүлтлэг газрын металл", metalloid: "Хагас металл", halogen: "Галоген",
  metal: "Шилжилтийн металл", lanthanoid: "Лантаноид", actinoid: "Актиноид",
  unknown: "Шинж чанар тодорхойгүй"
};

const orbitalOrder = [
  [1,2],[2,2],[2,6],[3,2],[3,6],[4,2],[3,10],[4,6],[5,2],[4,10],[5,6],
  [6,2],[4,14],[5,10],[6,6],[7,2],[5,14],[6,10],[7,6]
];
const shellExceptions = {
  24: [2,8,13,1], 29: [2,8,18,1], 41: [2,8,18,12,1], 42: [2,8,18,13,1],
  44: [2,8,18,15,1], 45: [2,8,18,16,1], 46: [2,8,18,18], 47: [2,8,18,18,1],
  57: [2,8,18,18,9,2], 58: [2,8,18,19,9,2], 64: [2,8,18,25,9,2],
  78: [2,8,18,32,17,1], 79: [2,8,18,32,18,1], 89: [2,8,18,32,18,9,2],
  90: [2,8,18,32,18,10,2], 91: [2,8,18,32,20,9,2], 92: [2,8,18,32,21,9,2]
};

function getShells(atomicNumber) {
  if (shellExceptions[atomicNumber]) return shellExceptions[atomicNumber];
  const shells = [];
  let remaining = atomicNumber;
  for (const [level, capacity] of orbitalOrder) {
    if (!remaining) break;
    const occupied = Math.min(remaining, capacity);
    shells[level - 1] = (shells[level - 1] || 0) + occupied;
    remaining -= occupied;
  }
  return shells.filter(value => value !== undefined);
}

const grid = document.getElementById("element-grid");
const search = document.getElementById("element-search");
const atomSvg = document.getElementById("atom-svg");
const atomWrap = document.getElementById("atom-wrap");
const toast = document.getElementById("toast");
let selected = elements[25];
let exploded = false;
let zoom = 1;
let rotationX = -0.34;
let rotationY = 0.48;
let toastTimer;
const activePointers = new Map();
let lastDragPoint;
let pinchStart;

function renderGrid(query = "") {
  const normalized = query.trim().toLocaleLowerCase("mn");
  const filtered = elements.filter(element =>
    !normalized || element.name.toLocaleLowerCase("mn").includes(normalized) ||
    element.symbol.toLocaleLowerCase().includes(normalized) || String(element.number) === normalized
  );
  document.getElementById("result-count").textContent = normalized ? `${filtered.length} ҮР ДҮН` : "БҮХ ЭЛЕМЕНТ";
  grid.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Тохирох элемент олдсонгүй. Нэр, тэмдэг эсвэл атомын дугаараар хайна уу.";
    grid.append(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  if (!normalized) {
    const lanthanoidLabel = document.createElement("div");
    lanthanoidLabel.className = "series-label lanthanoid-label";
    lanthanoidLabel.textContent = "58—71  ЛАНТАНОИД";
    fragment.append(lanthanoidLabel);
    const actinoidLabel = document.createElement("div");
    actinoidLabel.className = "series-label actinoid-label";
    actinoidLabel.textContent = "90—103  АКТИНОИД";
    fragment.append(actinoidLabel);
  }
  filtered.forEach(element => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `element-card${selected.number === element.number ? " active" : ""}`;
    button.dataset.category = element.category;
    button.setAttribute("aria-label", `${element.number}. ${element.name} (${element.symbol})`);
    button.setAttribute("aria-pressed", selected.number === element.number ? "true" : "false");
    button.title = `${element.number} · ${element.name}`;
    button.innerHTML = `<span class="number">${element.number}</span><span class="symbol">${element.symbol}</span>`;
    const [row, column] = getTablePosition(element.number);
    button.style.gridRow = String(row);
    button.style.gridColumn = String(column);
    button.addEventListener("click", () => selectElement(element));
    fragment.append(button);
  });
  grid.append(fragment);
}

function getTablePosition(number) {
  if (number === 1) return [1, 1];
  if (number === 2) return [1, 18];
  if (number <= 4) return [2, number - 2];
  if (number <= 10) return [2, number + 8];
  if (number <= 12) return [3, number - 10];
  if (number <= 18) return [3, number];
  if (number <= 36) return [4, number - 18];
  if (number <= 54) return [5, number - 36];
  if (number <= 57) return [6, number - 54];
  if (number <= 71) return [8, number - 54];
  if (number <= 86) return [6, number - 68];
  if (number <= 89) return [7, number - 86];
  if (number <= 103) return [9, number - 86];
  return [7, number - 100];
}

function selectElement(element) {
  selected = element;
  exploded = false;
  document.getElementById("explode-button").setAttribute("aria-pressed", "false");
  document.getElementById("explode-label").textContent = "БҮТЦИЙГ ЗАДЛАХ";
  updateDetails();
  renderGrid(search.value);
}

function updateDetails() {
  const shells = getShells(selected.number);
  const mass = massNumbers[selected.number - 1];
  const neutrons = Math.max(0, mass - selected.number);
  document.getElementById("identity-number").textContent = selected.number;
  document.getElementById("identity-symbol").textContent = selected.symbol;
  document.getElementById("identity-name").textContent = selected.name;
  document.getElementById("identity-category").textContent = categoryNames[selected.category];
  document.getElementById("proton-count").textContent = selected.number;
  document.getElementById("electron-count").textContent = selected.number;
  document.getElementById("neutron-count").textContent = neutrons;
  document.getElementById("mass-count").textContent = mass;
  document.getElementById("shell-summary").textContent = shells.join(" — ");
  document.getElementById("stage-coordinate").textContent = `Z: ${String(selected.number).padStart(3, "0")} / ${selected.symbol}`;
  const bars = document.getElementById("shell-bars");
  bars.replaceChildren();
  shells.forEach((count, index) => {
    const capacity = index === 0 ? 2 : 2 * (index + 1) ** 2;
    const bar = document.createElement("div");
    bar.className = "shell-bar";
    bar.innerHTML = `<span style="width:${Math.min(100, count / capacity * 100)}%"></span><label><span>${["K","L","M","N","O","P","Q"][index]}</span><span>${count}e⁻</span></label>`;
    bars.append(bar);
  });
  drawAtom(shells);
}

function drawAtom(shells) {
  const cx = 300;
  const cy = 250;
  const baseRadii = [68, 104, 140, 176, 212, 246, 274].slice(0, shells.length);
  if (shells.length > 4) {
    const scaleToFit = 190 / baseRadii[baseRadii.length - 1];
    for (let index = 0; index < baseRadii.length; index++) baseRadii[index] *= scaleToFit;
  }
  const shellSpread = exploded ? 1.16 : 1;
  const paths = [];
  const shellLabels = [];
  const backElectrons = [];
  const frontElectrons = [];
  const project = (x, y, z) => {
    const rotatedX = x * Math.cos(rotationY) + z * Math.sin(rotationY);
    const rotatedZ = -x * Math.sin(rotationY) + z * Math.cos(rotationY);
    const rotatedY = y * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
    const depth = y * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);
    const perspective = 760 / (760 - depth);
    return { x: cx + rotatedX * perspective, y: cy + rotatedY * perspective, z: depth, perspective };
  };
  shells.forEach((count, shellIndex) => {
    const radius = baseRadii[shellIndex] * shellSpread;
    const inclination = 0.28 + shellIndex * 0.19;
    const azimuth = shellIndex * 0.63;
    const projectPoint = angle => {
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const orbitX = x * Math.cos(azimuth) - y * Math.sin(azimuth);
      const orbitY = x * Math.sin(azimuth) + y * Math.cos(azimuth);
      return project(orbitX, orbitY * Math.cos(inclination), orbitY * Math.sin(inclination));
    };
    const points = Array.from({ length: 81 }, (_, index) => {
      const point = projectPoint(index / 80 * Math.PI * 2);
      return `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    }).join(" ");
    paths.push(`<path id="shell-path-${shellIndex}" d="${points} Z" fill="none" stroke="#65d8d3" stroke-width="${exploded ? 1.45 : 1.1}" stroke-dasharray="${exploded ? "2 4" : "3 5"}" opacity="${exploded ? 0.82 : 0.5}"/>`);
    for (let electron = 0; electron < count; electron++) {
      const startAngle = Math.PI * 2 * electron / count + shellIndex * 0.38;
      const point = projectPoint(startAngle);
      const sphereSize = Math.max(2.6, 4.4 * point.perspective);
      const duration = 26 + shellIndex * 7;
      const phase = (1 - startAngle / (Math.PI * 2)) * duration;
      const particle = `<g class="electron-particle"><circle r="${(sphereSize * 1.85).toFixed(1)}" fill="url(#electron-halo)"/><circle r="${sphereSize.toFixed(1)}" fill="url(#electron-sphere)"/><animateMotion dur="${duration}s" begin="-${phase.toFixed(2)}s" repeatCount="indefinite"><mpath href="#shell-path-${shellIndex}"/></animateMotion></g>`;
      (point.z < 0 ? backElectrons : frontElectrons).push(particle);
    }
    if (exploded) {
      const label = projectPoint(-0.72);
      const labelX = label.x + 6;
      const labelY = label.y - 8;
      shellLabels.push(`<text x="${labelX.toFixed(0)}" y="${labelY.toFixed(0)}" class="shell-label">БҮРХҮҮЛ ${shellIndex + 1} · ${count}e⁻</text>`);
    }
  });
  const protons = selected.number;
  const neutrons = massNumbers[selected.number - 1] - selected.number;
  const nucleusParticles = Math.min(protons + neutrons, 68);
  const nucleusPoints = Array.from({ length: nucleusParticles }, (_, index) => {
    const y = 1 - 2 * (index + 0.5) / nucleusParticles;
    const horizontalRadius = Math.sqrt(1 - y * y);
    const angle = index * 2.399963;
    const radius = 23 * (0.68 + 0.32 * Math.sqrt(index / nucleusParticles));
    const point = {
      x: horizontalRadius * Math.cos(angle) * radius,
      y: y * radius,
      z: horizontalRadius * Math.sin(angle) * radius
    };
    const rotatedX = point.x * Math.cos(rotationY) + point.z * Math.sin(rotationY);
    const rotatedZ = -point.x * Math.sin(rotationY) + point.z * Math.cos(rotationY);
    const rotatedY = point.y * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
    const depth = point.y * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);
    const perspective = 760 / (760 - depth);
    const isProton = index < Math.round(nucleusParticles * protons / (protons + neutrons));
    const x = cx + rotatedX * perspective;
    const screenY = cy + rotatedY * perspective;
    const sphereSize = 5.3 * perspective;
    return { depth, markup: `<circle cx="${x.toFixed(1)}" cy="${screenY.toFixed(1)}" r="${sphereSize.toFixed(1)}" fill="url(#${isProton ? "proton-sphere" : "neutron-sphere"})"/>` };
  }).sort((first, second) => first.depth - second.depth);
  let markup = `${paths.join("")}${shellLabels.join("")}${backElectrons.join("")}<circle cx="${cx}" cy="${cy}" r="31" fill="url(#nucleus-glow)"/>${nucleusPoints.map(point => point.markup).join("")}${frontElectrons.join("")}`;
  const labelPoint = project(0, 38, 0);
  markup += `<text x="${labelPoint.x.toFixed(1)}" y="${(labelPoint.y + 7).toFixed(1)}" text-anchor="middle" class="nucleus-label">ЦӨМ · ${selected.symbol}</text>`;
  if (exploded) {
    markup += `<path d="M300 218 L300 156" class="leader-line"/><text x="300" y="146" text-anchor="middle" class="nucleus-callout">ЦӨМ · ${protons}p⁺ / ${neutrons}n⁰</text>`;
  }
  atomSvg.innerHTML = `<defs>
    <radialGradient id="electron-sphere" cx="32%" cy="28%"><stop stop-color="#ffffff"/><stop offset=".22" stop-color="#bffffa"/><stop offset=".6" stop-color="#4ff3e3"/><stop offset="1" stop-color="#087c88"/></radialGradient>
    <radialGradient id="electron-halo"><stop stop-color="#51e4df" stop-opacity=".35"/><stop offset="1" stop-color="#51e4df" stop-opacity="0"/></radialGradient>
    <radialGradient id="proton-sphere" cx="30%" cy="25%"><stop stop-color="#fff0df"/><stop offset=".25" stop-color="#ffca98"/><stop offset=".72" stop-color="#fa8759"/><stop offset="1" stop-color="#a7423c"/></radialGradient>
    <radialGradient id="neutron-sphere" cx="30%" cy="25%"><stop stop-color="#f1ffff"/><stop offset=".24" stop-color="#c9e4e5"/><stop offset=".72" stop-color="#809ca5"/><stop offset="1" stop-color="#344c5a"/></radialGradient>
    <radialGradient id="nucleus-glow"><stop stop-color="#ffb985" stop-opacity=".26"/><stop offset="1" stop-color="#ff9b64" stop-opacity="0"/></radialGradient>
  </defs>${markup}`;
  atomSvg.setAttribute("aria-label", `${selected.name} атомын загвар. ${protons} протон, ${neutrons} нейтрон, ${selected.number} электрон.`);
  document.getElementById("atom-tooltip").style.display = exploded ? "none" : "block";
}

function setZoom(next) {
  zoom = Math.min(2.4, Math.max(0.6, next));
  atomWrap.style.transform = `translate(-50%, -50%) scale(${zoom})`;
  document.getElementById("zoom-value").textContent = `${Math.round(zoom * 100)}%`;
}

function getPointerDistance() {
  const [first, second] = activePointers.values();
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

search.addEventListener("input", () => renderGrid(search.value));
document.getElementById("clear-search").addEventListener("click", () => {
  search.value = "";
  renderGrid();
  search.focus();
});
document.getElementById("explode-button").addEventListener("click", event => {
  exploded = !exploded;
  event.currentTarget.setAttribute("aria-pressed", String(exploded));
  document.getElementById("explode-label").textContent = exploded ? "БУЦААЖ ХУРААХ" : "БҮТЦИЙГ ЗАДЛАХ";
  drawAtom(getShells(selected.number));
});
document.getElementById("zoom-in").addEventListener("click", () => setZoom(zoom + 0.1));
document.getElementById("zoom-out").addEventListener("click", () => setZoom(zoom - 0.1));
const atomStage = document.getElementById("atom-stage");
atomStage.addEventListener("pointerdown", event => {
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  atomStage.setPointerCapture(event.pointerId);
  lastDragPoint = { x: event.clientX, y: event.clientY };
  if (activePointers.size === 2) pinchStart = { distance: getPointerDistance(), zoom };
});
atomStage.addEventListener("pointermove", event => {
  if (!activePointers.has(event.pointerId)) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (activePointers.size > 1 && pinchStart) {
    setZoom(pinchStart.zoom * getPointerDistance() / Math.max(pinchStart.distance, 1));
    return;
  }
  if (!lastDragPoint) return;
  rotationY += (event.clientX - lastDragPoint.x) * 0.009;
  rotationX = Math.max(-1.3, Math.min(1.3, rotationX + (event.clientY - lastDragPoint.y) * 0.009));
  lastDragPoint = { x: event.clientX, y: event.clientY };
  drawAtom(getShells(selected.number));
});
function finishPointer(event) {
  activePointers.delete(event.pointerId);
  lastDragPoint = activePointers.size ? [...activePointers.values()][0] : null;
  pinchStart = activePointers.size === 2 ? { distance: getPointerDistance(), zoom } : null;
}
atomStage.addEventListener("pointerup", finishPointer);
atomStage.addEventListener("pointercancel", finishPointer);
atomStage.addEventListener("wheel", event => {
  event.preventDefault();
  setZoom(zoom * Math.exp(-event.deltaY * 0.001));
}, { passive: false });
atomStage.addEventListener("keydown", event => {
  const turn = 0.12;
  if (event.key === "ArrowLeft") rotationY -= turn;
  else if (event.key === "ArrowRight") rotationY += turn;
  else if (event.key === "ArrowUp") rotationX = Math.max(-1.3, rotationX - turn);
  else if (event.key === "ArrowDown") rotationX = Math.min(1.3, rotationX + turn);
  else if (event.key === "+" || event.key === "=") setZoom(zoom + 0.1);
  else if (event.key === "-") setZoom(zoom - 0.1);
  else return;
  event.preventDefault();
  drawAtom(getShells(selected.number));
});
document.getElementById("help-button").addEventListener("click", () => {
  showToast("Атомыг чирж 360° эргүүлээрэй. Хулганын хүрд эсвэл хоёр хуруугаар томруулж, БҮТЦИЙГ ЗАДЛАХ товчоор давхаргыг дэлгэнэ үү.");
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== search && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    renderGrid();
    search.blur();
  }
});

renderGrid();
updateDetails();
