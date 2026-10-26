// Lógica principal de la Aplicación de Péndulo Hebreo
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSimulator();
  initCourseModules();
  initLabelsLibrary();
  initProtocols();
  initBiometer();
});

// 1. NAVEGACIÓN ENTRE SECCIONES
function initNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const viewSections = document.querySelectorAll(".view-section");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabButtons.forEach(b => b.classList.remove("active"));
      viewSections.forEach(v => v.classList.remove("active"));

      btn.classList.add("active");
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // Botón directo desde la bienvenida hacia el simulador
  const btnJump = document.getElementById("btn-jump-sim");
  if (btnJump) {
    btnJump.addEventListener("click", () => {
      const simTab = document.querySelector('[data-target="view-simulator"]');
      if (simTab) simTab.click();
    });
  }
}

// 2. SIMULADOR DE SESIÓN PASO A PASO
let currentSimStep = 0;
let simTimerInterval = null;
let simTimerRemaining = 60;

const SIMULATOR_STEPS = [
  {
    stepNum: 0,
    title: "Paso 0: Preparación y Protección Personal",
    badge: "Seguridad Inicial",
    face: "neutra",
    direction: "none",
    instruction: `
      <p>Antes de coger el péndulo, <strong>prepárate tú primero</strong> para trabajar con serenidad y no absorber cansancio ni densidades:</p>
      <div class="note-box">
        <strong>1. La Burbuja Azul:</strong> Cierra los ojos y haz 3 respiraciones lentas. Imagina una esfera de cristal azul brillante que te envuelve por completo.
        <br><br>
        <strong>2. Decreto mental de poder:</strong> Repite en silencio: <em>"Estoy en mi centro, envuelta en luz divina. Solo el amor y la sanación entran y salen de mi espacio"</em>.
      </div>
    `,
    hasTimer: false
  },
  {
    stepNum: 1,
    title: "Paso 1: Apertura del Campo Electromagnético",
    badge: "Etiqueta: שדה אלקטרומגנטי (Campo Electromagnético)",
    face: "ranurada",
    direction: "horario",
    instruction: `
      <p>Este paso abre el aura para que reciba la sanación. Hazlo siempre al empezar:</p>
      <ol style="margin-left: 20px; line-height: 1.8;">
        <li>Coloca en el péndulo la etiqueta <strong>Campo Electromagnético</strong>.</li>
        <li>Asegúrate de que la <strong>CARA RANURADA</strong> (las 2 rayitas) apunta hacia abajo.</li>
        <li>Haz girar el péndulo hacia la <strong>DERECHA (sentido horario)</strong> recorriendo el cuerpo (o la foto testigo) de la cabeza a los pies, 3 veces seguidas.</li>
      </ol>
    `,
    hasTimer: true,
    timerSeconds: 45
  },
  {
    stepNum: 2,
    title: "Paso 2: Diagnóstico y Testeo de Miasmas",
    badge: "Etiqueta: מיאסמה (Miasma) - Cara LISA",
    face: "lisa",
    direction: "testeo",
    instruction: `
      <p>Vamos a comprobar en qué chakras hay bloqueo o densidad:</p>
      <ol style="margin-left: 20px; line-height: 1.8;">
        <li>Coloca la etiqueta <strong>Miasma</strong> (o Magia, o Larvas Astrales).</li>
        <li><strong>MUY IMPORTANTE:</strong> Coloca la <strong>CARA LISA</strong> hacia abajo (sin ranuras).</li>
        <li>Sostén el péndulo quieto sobre cada uno de los 7 centros energéticos:</li>
      </ol>
      <div style="background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; margin: 15px 0;">
        <p style="font-weight: bold; margin-bottom: 8px;">Haz clic en los chakras para simular tu testeo:</p>
        <div id="sim-chakra-checker" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px;">
          <button type="button" class="chakra-test-btn" data-ch="7">7. Corona (Cabeza)</button>
          <button type="button" class="chakra-test-btn" data-ch="6">6. Tercer Ojo (Frente)</button>
          <button type="button" class="chakra-test-btn" data-ch="5">5. Garganta</button>
          <button type="button" class="chakra-test-btn" data-ch="4">4. Corazón (Pecho)</button>
          <button type="button" class="chakra-test-btn" data-ch="3">3. Plexo Solar (Estómago)</button>
          <button type="button" class="chakra-test-btn" data-ch="2">2. Sacro (Vientre)</button>
          <button type="button" class="chakra-test-btn" data-ch="1">1. Raíz (Base)</button>
        </div>
        <p id="chakra-result-note" style="margin-top: 10px; font-size: 13px; color: #0284c7; font-style: italic;">
          Toca cualquier chakra para ver qué respondería el péndulo.
        </p>
      </div>
    `,
    hasTimer: false
  },
  {
    stepNum: 3,
    title: "Paso 3: Limpieza y Disolución de Bloqueos",
    badge: "Etiqueta: נקה גוף ומקום (Limpiar Cuerpo y Lugar)",
    face: "ranurada",
    direction: "antihorario",
    instruction: `
      <p>Ahora vamos a borrar las densidades que encontramos en el diagnóstico:</p>
      <ol style="margin-left: 20px; line-height: 1.8;">
        <li>Coloca la etiqueta <strong>Limpiar Cuerpo y Lugar</strong> o <strong>Disolver (Lefazer)</strong>.</li>
        <li>Coloca la <strong>CARA RANURADA</strong> hacia abajo.</li>
        <li>Haz girar el péndulo hacia la <strong>IZQUIERDA (sentido antihorario)</strong> sobre el chakra afectado.</li>
        <li>Visualiza cómo la nube oscura se disuelve y baja por las raíces a la tierra.</li>
      </ol>
      <p style="margin-top: 10px; font-size: 13px; color: #64748b;">(Opcional: Si tienes tintura de muérdago, puedes pasar primero un algodón mojado en círculos antihorarios por la zona).</p>
    `,
    hasTimer: true,
    timerSeconds: 60
  },
  {
    stepNum: 4,
    title: "Paso 4: Irradiación de Luz y Virtudes",
    badge: "Etiquetas de Sanación: Paz, Amor, Salud...",
    face: "ranurada",
    direction: "horario",
    instruction: `
      <p>Al limpiar un chakra queda un espacio vacío. <strong>Siempre debemos llenarlo con luz de alta vibración:</strong></p>
      <div style="margin-bottom: 15px;">
        <label for="virtue-selector" style="font-weight: bold; font-size: 14px;">Elige qué virtud irradiar ahora:</label>
        <select id="virtue-selector" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #cbd5e1; margin-top: 5px;">
          <option value="paz">שלום (Paz / Shalom) - Para calmar los nervios y el estrés</option>
          <option value="amor">אהבה ללא תנאי (Amor Incondicional) - Para sanar heridas afectivas</option>
          <option value="sanacion">רפואה שלמה (Sanación Completa) - Para regenerar salud física</option>
          <option value="luz">אור אלוהי (Luz Divina) - Para despejar la mente y conectar con el alma</option>
          <option value="alegria">שמחה (Alegría) - Para levantar el ánimo caído</option>
          <option value="fuerza">עוצמה (Fortaleza) - Para tener valor y energía</option>
        </select>
      </div>
      <ol style="margin-left: 20px; line-height: 1.8;">
        <li>Coloca la etiqueta elegida con la <strong>CARA RANURADA hacia abajo</strong>.</li>
        <li>Haz girar el péndulo hacia la <strong>DERECHA (sentido horario)</strong> sobre el centro del pecho o el chakra afectado hasta que el péndulo se detenga suavemente por sí solo.</li>
      </ol>
    `,
    hasTimer: true,
    timerSeconds: 60
  },
  {
    stepNum: 5,
    title: "Paso 5: Sellado Áurico y Cierre Sagrado",
    badge: "Etiquetas: זהב הילה (Dorado Áurico) + סגור תהליך (Cerrar Proceso)",
    face: "ranurada",
    direction: "horario",
    instruction: `
      <p>Es el broche final de la sesión para blindar el trabajo realizado:</p>
      <ol style="margin-left: 20px; line-height: 1.8;">
        <li>Primero coloca <strong>Dorado Áurico (Zahav Hilah)</strong> con la cara ranurada y hazlo girar en sentido horario envolviendo todo el cuerpo en un capullo de luz de oro.</li>
        <li>Luego cambia a la etiqueta <strong>Cerrar Proceso (Segor Tahalij)</strong> y realiza 3 pasadas de la cabeza a los pies en sentido horario.</li>
        <li>Di con gratitud: <em>"Proceso concluido, sellado y en perfecta armonía. Gracias, gracias, gracias"</em>.</li>
        <li>Lávate las manos con agua fría corriente para soltar cualquier resto energético.</li>
      </ol>
    `,
    hasTimer: false
  }
];

function initSimulator() {
  renderSimStep(0);

  const prevBtn = document.getElementById("sim-btn-prev");
  const nextBtn = document.getElementById("sim-btn-next");

  prevBtn.addEventListener("click", () => {
    if (currentSimStep > 0) {
      currentSimStep--;
      renderSimStep(currentSimStep);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentSimStep < SIMULATOR_STEPS.length - 1) {
      currentSimStep++;
      renderSimStep(currentSimStep);
    } else {
      // Fin del simulador
      alert("¡Enhorabuena! Has completado todos los pasos de la sesión. Tu campo (o el del consultante) ha quedado limpio, nutrido y perfectamente sellado.");
    }
  });

  // Nodos del stepper
  const stepNodes = document.querySelectorAll(".step-node");
  stepNodes.forEach(node => {
    node.addEventListener("click", () => {
      const stepIdx = parseInt(node.getAttribute("data-step"), 10);
      currentSimStep = stepIdx;
      renderSimStep(currentSimStep);
    });
  });
}

function renderSimStep(idx) {
  clearInterval(simTimerInterval);
  const stepData = SIMULATOR_STEPS[idx];

  // Actualizar stepper
  const stepNodes = document.querySelectorAll(".step-node");
  stepNodes.forEach((node, i) => {
    node.classList.remove("active");
    if (i < idx) {
      node.classList.add("completed");
    } else {
      node.classList.remove("completed");
    }
    if (i === idx) {
      node.classList.add("active");
    }
  });

  // Indicador de paso
  const indicator = document.getElementById("sim-step-indicator");
  indicator.textContent = `Paso ${idx} de ${SIMULATOR_STEPS.length - 1}`;

  // Botón anterior
  const prevBtn = document.getElementById("sim-btn-prev");
  prevBtn.style.visibility = idx === 0 ? "hidden" : "visible";

  const nextBtn = document.getElementById("sim-btn-next");
  nextBtn.textContent = idx === SIMULATOR_STEPS.length - 1 ? "🎉 Finalizar Sesión" : "Siguiente Paso ➡";

  // Determinar animación del péndulo
  let animClass = "";
  let directionText = "En reposo / Conexión";
  let faceText = "Posición Neutra";

  if (stepData.direction === "horario") {
    animClass = "spin-clockwise";
    directionText = "Giro a la DERECHA (Horario) • Emite y Sana";
  } else if (stepData.direction === "antihorario") {
    animClass = "spin-counter";
    directionText = "Giro a la IZQUIERDA (Antihorario) • Disuelve y Limpia";
  } else if (stepData.direction === "testeo") {
    directionText = "Modo Radar • Si gira a la izquierda = Bloqueo";
  }

  if (stepData.face === "lisa") {
    faceText = "Cara LISA hacia abajo (Testar)";
  } else if (stepData.face === "ranurada") {
    faceText = "Cara RANURADA hacia abajo (Irradiar)";
  }

  // Timer HTML
  let timerHtml = "";
  if (stepData.hasTimer) {
    simTimerRemaining = stepData.timerSeconds;
    timerHtml = `
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 15px; text-align: center; margin: 15px 0;">
        <div style="font-size: 13px; color: #166534; font-weight: bold; margin-bottom: 5px;">Temporizador recomendado para este paso:</div>
        <div id="sim-timer-display" style="font-size: 32px; font-weight: bold; color: #15803d; font-family: monospace;">${simTimerRemaining}s</div>
        <div style="margin-top: 8px; display: flex; gap: 8px; justify-content: center;">
          <button type="button" id="btn-start-timer" class="cta-button" style="padding: 6px 16px; font-size: 13px;">▶ Iniciar Giro</button>
          <button type="button" id="btn-reset-timer" class="btn-secondary" style="padding: 6px 14px; font-size: 13px;">↺ Reiniciar</button>
        </div>
      </div>
    `;
  }

  const container = document.getElementById("sim-body-content");
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;">
      <h3 class="sim-step-title">${stepData.title}</h3>
      <span class="module-tag" style="background: #e0f2fe; color: #0369a1; font-size: 12px; padding: 4px 12px;">${stepData.badge}</span>
    </div>

    <!-- Indicador visual del péndulo -->
    <div class="sim-pendulum-display">
      <div class="pendulum-animation-box">
        <svg class="pendulum-svg ${animClass}" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="0" x2="50" y2="40" stroke="#64748b" stroke-width="2.5"/>
          <circle cx="50" cy="5" r="4" fill="#334155"/>
          <rect x="25" y="40" width="50" height="85" rx="3" fill="#d4a373" stroke="#8d5b4c" stroke-width="2"/>
          ${stepData.face === 'ranurada' ? `
            <line x1="28" y1="110" x2="72" y2="110" stroke="#5c3d2e" stroke-width="3"/>
            <line x1="28" y1="117" x2="72" y2="117" stroke="#5c3d2e" stroke-width="3"/>
          ` : ''}
        </svg>
      </div>

      <div style="text-align: left; max-width: 380px;">
        <div style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Configuración física:</div>
        <div style="font-size: 15px; font-weight: bold; color: var(--primary); margin: 3px 0 10px 0;">${faceText}</div>
        <div style="font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Movimiento de tu mano:</div>
        <div style="font-size: 14px; font-weight: 600; color: #047857;">${directionText}</div>
      </div>
    </div>

    <div class="sim-instruction">${stepData.instruction}</div>
    ${timerHtml}
  `;

  // Control del temporizador si existe
  if (stepData.hasTimer) {
    const btnStart = document.getElementById("btn-start-timer");
    const btnReset = document.getElementById("btn-reset-timer");
    const display = document.getElementById("sim-timer-display");

    btnStart.addEventListener("click", () => {
      clearInterval(simTimerInterval);
      btnStart.disabled = true;
      btnStart.textContent = "Girando...";

      simTimerInterval = setInterval(() => {
        simTimerRemaining--;
        display.textContent = `${simTimerRemaining}s`;

        if (simTimerRemaining <= 0) {
          clearInterval(simTimerInterval);
          btnStart.disabled = false;
          btnStart.textContent = "✔ Completado";
          playTibetanBowlSound();
        }
      }, 1000);
    });

    btnReset.addEventListener("click", () => {
      clearInterval(simTimerInterval);
      simTimerRemaining = stepData.timerSeconds;
      display.textContent = `${simTimerRemaining}s`;
      btnStart.disabled = false;
      btnStart.textContent = "▶ Iniciar Giro";
    });
  }

  // Comportamiento del tester de chakras interactivo en el paso 2
  if (idx === 2) {
    const chakraButtons = document.querySelectorAll(".chakra-test-btn");
    const resultNote = document.getElementById("chakra-result-note");

    chakraButtons.forEach((btn, bIdx) => {
      btn.style.padding = "8px";
      btn.style.fontSize = "11px";
      btn.style.borderRadius = "6px";
      btn.style.border = "1px solid #cbd5e1";
      btn.style.background = "#f8fafc";
      btn.style.cursor = "pointer";

      btn.addEventListener("click", () => {
        chakraButtons.forEach(b => b.style.background = "#f8fafc");
        btn.style.background = "#fee2e2";
        btn.style.borderColor = "#ef4444";

        const chName = btn.textContent;
        // Simulación: el chakra 3 y 4 suelen dar miasma por estrés
        if (bIdx === 3 || bIdx === 4) {
          resultNote.innerHTML = `
            <strong style="color: #b91c1c;">¡Giro Antihorario Detectado en ${chName}!</strong><br>
            El péndulo gira hacia la izquierda espontáneamente: significa que hay una congestión emocional acumulada. Anótalo para limpiarlo en el Paso 3.
          `;
        } else {
          resultNote.innerHTML = `
            <strong style="color: #15803d;">${chName} está limpio y armónico.</strong><br>
            El péndulo oscila levemente hacia adelante o permanece quieto. No requiere limpieza profunda.
          `;
        }
      });
    });
  }
}

// Sonido armónico suave (Web Audio API) al terminar un paso
function playTibetanBowlSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(528, audioCtx.currentTime); // Frecuencia 528 Hz (Amor / Reparación)

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.0);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 3.0);
  } catch (e) {
    // Si el navegador bloquea audio sin clic previo, simplemente se omite
  }
}

// 3. CURSO COMPLETO (28 MÓDULOS)
function initCourseModules() {
  const container = document.getElementById("modules-container");
  const searchInput = document.getElementById("course-search-input");
  const progressText = document.getElementById("course-progress-text");

  // Cargar estado de lecciones guardadas en localStorage
  let learnedState = {};
  try {
    learnedState = JSON.parse(localStorage.getItem("pendulo_learned_lessons") || "{}");
  } catch (e) {
    learnedState = {};
  }

  function updateProgressDisplay() {
    const total = COURSE_DATA.modules.length;
    const learnedCount = Object.values(learnedState).filter(Boolean).length;
    progressText.textContent = `${learnedCount} / ${total} lecciones aprendidas`;
  }

  function renderModules(filterText = "") {
    container.innerHTML = "";
    const term = filterText.toLowerCase().trim();

    const filtered = COURSE_DATA.modules.filter(m => {
      return m.title.toLowerCase().includes(term) ||
             m.summary.toLowerCase().includes(term) ||
             m.tag.toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 40px; color: #94a3b8;">No se han encontrado lecciones con esa palabra.</div>`;
      return;
    }

    filtered.forEach(m => {
      const isLearned = !!learnedState[m.number];

      const card = document.createElement("article");
      card.className = "module-card";

      card.innerHTML = `
        <div class="module-summary-row" data-mod="${m.number}">
          <div class="module-info-left">
            <span class="module-num">${m.number}</span>
            <div>
              <div class="module-title-text">${m.title}</div>
              <div style="font-size: 13px; color: #64748b; margin-top: 2px;">${m.summary}</div>
            </div>
          </div>
          <div class="module-actions-right">
            <span class="module-tag">${m.tag}</span>
            <button type="button" class="check-learned-btn ${isLearned ? 'learned' : ''}" data-mod-id="${m.number}" title="Marcar como leída">
              ${isLearned ? '✔' : '○'}
            </button>
            <span style="color: #94a3b8; font-size: 18px;" class="chevron-icon">▾</span>
          </div>
        </div>
        <div class="module-card-content" id="mod-content-${m.number}">
          ${m.content}
        </div>
      `;

      // Expandir / colapsar lección
      const summaryRow = card.querySelector(".module-summary-row");
      const contentBox = card.querySelector(".module-card-content");
      const chevron = card.querySelector(".chevron-icon");

      summaryRow.addEventListener("click", (e) => {
        // Si hace clic en el botón de check, no colapsar
        if (e.target.closest(".check-learned-btn")) return;

        const isOpen = contentBox.classList.contains("open");
        contentBox.classList.toggle("open");
        chevron.textContent = isOpen ? "▾" : "▴";
      });

      // Marcar como aprendida
      const checkBtn = card.querySelector(".check-learned-btn");
      checkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const modId = checkBtn.getAttribute("data-mod-id");
        learnedState[modId] = !learnedState[modId];
        checkBtn.classList.toggle("learned");
        checkBtn.textContent = learnedState[modId] ? "✔" : "○";

        try {
          localStorage.setItem("pendulo_learned_lessons", JSON.stringify(learnedState));
        } catch (err) {}

        updateProgressDisplay();
      });

      container.appendChild(card);
    });

    updateProgressDisplay();
  }

  renderModules();

  searchInput.addEventListener("input", (e) => {
    renderModules(e.target.value);
  });
}

// 4. BIBLIOTECA DE ETIQUETAS
function initLabelsLibrary() {
  const container = document.getElementById("labels-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderLabels(category = "all") {
    container.innerHTML = "";

    const filtered = COURSE_DATA.labels.filter(lbl => {
      if (category === "all") return true;
      return lbl.category === category;
    });

    filtered.forEach(lbl => {
      const card = document.createElement("article");
      card.className = "app-label-card";

      const faceClass = lbl.face === "lisa" ? "pill-face-lisa" : "pill-face-ranurada";
      const faceLabel = lbl.face === "lisa" ? "Cara Lisa (Diagnóstico)" : "Cara Ranurada (Sanación)";

      card.innerHTML = `
        <div class="app-label-hebrew">${lbl.hebrew}</div>
        <div class="app-label-name">${lbl.spanish}</div>
        <div class="app-label-phonetic">Pronunciación: ${lbl.phonetic}</div>
        <div class="app-label-desc">${lbl.description}</div>
        <div style="background: #f8fafc; border-left: 3px solid #cbd5e1; padding: 8px; font-size: 11px; margin-bottom: 8px; color: #475569;">
          <strong>Cómo usar:</strong> ${lbl.howToUse}
        </div>
        ${lbl.clinicalNotes ? `
          <div style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 8px; font-size: 11px; margin-bottom: 12px; color: #14532d;">
            <strong>Nota clínica:</strong> ${lbl.clinicalNotes}
          </div>
        ` : ''}
        <div class="app-label-pills">
          <span class="pill-face ${faceClass}">${faceLabel}</span>
        </div>
      `;

      container.appendChild(card);
    });
  }

  renderLabels("all");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderLabels(btn.getAttribute("data-filter"));
    });
  });
}

// 5. PROTOCOLOS RÁPIDOS
function initProtocols() {
  const container = document.getElementById("protocols-container");

  COURSE_DATA.protocols.forEach(proto => {
    const card = document.createElement("article");
    card.className = "protocol-card";

    let stepsHtml = "";
    proto.steps.forEach((st, i) => {
      stepsHtml += `
        <div class="protocol-step-item">
          <span class="protocol-step-num">${i + 1}</span>
          <div>${st}</div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="protocol-title">
        <span>✨</span>
        <span>${proto.title}</span>
      </div>
      <div style="font-size: 11px; font-weight: bold; color: var(--gold); margin-bottom: 6px;">Duración estimada: ${proto.time}</div>
      <div class="protocol-desc">${proto.description}</div>
      <div style="margin-top: 15px;">${stepsHtml}</div>
    `;

    container.appendChild(card);
  });
}

// 6. BIÓMETRO INTERACTIVO DE BOVIS
function initBiometer() {
  const slider = document.getElementById("bovis-range-input");
  const valText = document.getElementById("bovis-val-text");
  const stateTag = document.getElementById("bovis-state-tag");
  const explBox = document.getElementById("bovis-explanation-box");

  slider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10);
    valText.textContent = `${val.toLocaleString()} UB`;

    if (val < 5000) {
      stateTag.textContent = "Zona Muy Baja / Debilitamiento Severo";
      stateTag.style.background = "#fee2e2";
      stateTag.style.color = "#991b1b";
      explBox.innerHTML = `
        <strong>Zona de Baja Energía (${val} UB):</strong> Indica agotamiento físico, convalecencia o presencia de miasmas/larvas. Se aconseja realizar una limpieza a fondo con <em>Limpiar Cuerpo y Lugar</em> e irradiar <em>Fortaleza</em> y <em>Luz Divina</em>.
      `;
    } else if (val < 6500) {
      stateTag.textContent = "Cansancio o Estrés Acumulado";
      stateTag.style.background = "#fef3c7";
      stateTag.style.color = "#92400e";
      explBox.innerHTML = `
        <strong>Zona Subfísica (${val} UB):</strong> La persona no está enferma, pero tiene las defensas bajas o estrés crónico. Conviene descansar y aplicar el protocolo de <em>Paz (Shalom)</em>.
      `;
    } else if (val === 6500) {
      stateTag.textContent = "Equilibrio Físico Neutro (6.500 UB)";
      stateTag.style.background = "#dcfce7";
      stateTag.style.color = "#166534";
      explBox.innerHTML = `
        <strong>Umbral Neutro (6.500 UB):</strong> Es el estado base de salud física estándar del ser humano. El cuerpo funciona bien, aunque puede elevarse más para mayor bienestar y vitalidad.
      `;
    } else if (val <= 10000) {
      stateTag.textContent = "Salud Óptima y Gran Vitalidad";
      stateTag.style.background = "#dcfce7";
      stateTag.style.color = "#15803d";
      explBox.innerHTML = `
        <strong>Zona de Plena Salud (${val} UB):</strong> La persona goza de buen humor, energía física desbordante y sus chakras están alineados.
      `;
    } else {
      stateTag.textContent = "Alta Frecuencia Espiritual y Conexión";
      stateTag.style.background = "#e0e7ff";
      stateTag.style.color = "#3730a3";
      explBox.innerHTML = `
        <strong>Vibración Superior (${val} UB):</strong> Nivel alcanzado tras meditaciones profundas, oraciones o sesiones completas de Péndulo Hebreo. Otorga gran intuición, paz interior y bienestar holístico.
      `;
    }
  });
}
