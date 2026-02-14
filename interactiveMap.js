(function () {
  'use strict';

  /* ===============================
     CONFIGURATION
     =============================== */

  const MAPS = [
    {
      selector: '.interactive-map', // CSS selector of the image block
      points: [
        {
          x: 40,
          y: 60,
          title: "Location A",
          text: "Description for Location A.",
          link: "https://example.com",
          linkLabel: "Learn More",
          image: "",
          svg: `
            <svg viewBox="0 0 24 24" width="32" height="32">
              <circle cx="12" cy="12" r="8" fill="#e63946"/>
            </svg>
          `
        },
        {
          x: 75,
          y: 25,
          title: "Location B",
          text: "Description for Location B.",
          svg: `
            <svg viewBox="0 0 24 24" width="32" height="32">
              <rect x="4" y="4" width="16" height="16" fill="#457b9d"/>
            </svg>
          `
        },
      ]
    }
  ];

  /* ===============================
     CORE
     =============================== */

  function initAllMaps() {
    MAPS.forEach(mapConfig => {
      document.querySelectorAll(mapConfig.selector).forEach(container => {
        initMap(container, mapConfig);
      });
    });
  }

  function initMap(container, config) {
    const img = container.querySelector('img');
    if (!img || container.dataset.mapInitialized) return;

    container.dataset.mapInitialized = "true";

    container.style.position = "relative";
    container.style.display = "inline-block";

    const overlay = document.createElement('div');
    overlay.className = 'map-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'none';

    container.appendChild(overlay);

    config.points.forEach(point => {
      createPoint(overlay, point);
    });
  }

  function createPoint(overlay, point) {
    const button = document.createElement('button');
    button.type = "button";
    button.className = "map-point";
    button.style.position = "absolute";
    button.style.left = point.x + "%";
    button.style.top = point.y + "%";
    button.style.transform = "translate(-50%, -50%)";
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.padding = 0;
    button.style.pointerEvents = "auto";
    button.setAttribute("aria-label", point.title);

    button.innerHTML = point.svg;

    button.addEventListener('click', () => openPanel(point));
    button.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPanel(point);
      }
    });

    overlay.appendChild(button);
  }

  /* ===============================
     PANEL
     =============================== */

  function openPanel(point) {
    closePanel();

    const panel = document.createElement('div');
    panel.className = "map-panel";

    Object.assign(panel.style, {
      position: "fixed",
      top: 0,
      right: 0,
      width: "350px",
      maxWidth: "90%",
      height: "100%",
      background: "#ffffff",
      boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
      padding: "24px",
      zIndex: 99999,
      overflowY: "auto"
    });

    panel.innerHTML = `
      <button class="map-panel-close" style="
        position:absolute;
        top:10px;
        right:10px;
        background:none;
        border:none;
        font-size:20px;
        cursor:pointer;
      " aria-label="Close panel">&times;</button>

      <h2 style="margin-top:0;">${point.title}</h2>
      ${point.image ? `<img src="${point.image}" style="max-width:100%; margin-bottom:16px;">` : ""}
      <p>${point.text || ""}</p>
      ${point.link ? `<p><a href="${point.link}" target="_blank" rel="noopener">${point.linkLabel || "Learn More"}</a></p>` : ""}
    `;

    panel.querySelector('.map-panel-close')
      .addEventListener('click', closePanel);

    document.body.appendChild(panel);
  }

  function closePanel() {
    const existing = document.querySelector('.map-panel');
    if (existing) existing.remove();
  }

  /* ===============================
     RE-INIT FOR SQUARESPACE AJAX
     =============================== */

  document.addEventListener("DOMContentLoaded", initAllMaps);

  const observer = new MutationObserver(() => {
    initAllMaps();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();
