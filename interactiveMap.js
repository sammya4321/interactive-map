(function () {
  'use strict';

  /* ===============================
     CONFIGURATION
     =============================== */

  const MAPS = [
    {
      selector: '.interactive-map', // CSS selector of the image block
      // point width / height can be either:
      // - a fixed number > 1 for pixels
      // - a ratio between 0 and 1 to size relative to the rendered image width/height
      // - a percentage string like '6%' to size relative to the rendered image width/height
      points: [
        {
          x: 56,
          y: 44,
          width: 0.1,
          height: 0.1,
          title: "Bobbin Lace Making",
          text: "Creating delicate, openwork fabric by twisting and crossing threads. <br /> <br />  STATUS: ENDANGERED",
          link: "https://heritagecrafts.org.uk/craft/lace-making-bobbin-lace/",
          linkLabel: "Learn more",
          image: "",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 42, 
          y: 51,
          width: 0.1,
          height: 0.1,
          title: "Natural Leather and Hide Tanning",
          text: "The process of using simple, organic ingredients to convert raw skin into leather.<br /> <br /> STATUS: CRITICALLY ENDANGERED",
          link: "https://heritagecrafts.org.uk/craft/tanning-oak-bark/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 53, 
          y: 69,
          width: 0.1,
          height: 0.1,
          title: "Devon Stave Basket Making",
          text: `The making of a traditional Devon assembled basket made of wooden splints fixed to a wooden base.<br /> <br /> 
          STATUS: CRITICALLY ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/tanning-oak-bark/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 39.6, 
          y: 83.9,
          width: 0.1,
          height: 0.1,
          title: "Withy Pot Making",
          text: "The making of traditional crab / lobster pots from willow, called withy pots.<br /><br /> STATUS: CRITICALLY ENDANGERED",
          link: "https://heritagecrafts.org.uk/craft/withy-pot-making/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 24.4, 
          y: 75,
          width: 0.1,
          height: 0.1,
          title: "Fairground Art",
          text: "Decoration associated with traditional travelling fairgrounds. <br /> <br /> STATUS: ENDANGERED",
          link: "https://heritagecrafts.org.uk/craft/fairground-art/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 20, 
          y: 70.4,
          width: 0.1,
          height: 0.1,
          title: "Cornish Hedging",
          text: `The craft of constructing the traditional stone faced earth banks predominantly found within, and characteristic of, Cornwall. 
          <br /><br />
          STATUS: ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/cornish-hedging/",
          linkLabel: "Lean more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
         {
          x: 34.4, 
          y: 63.1,
          width: 0.1,
          height: 0.1,
          title: "Flax Processing",
          text: `The growing and processing of flax to produce textiles, rope and everyday household materials. 
          <br /><br />
          STATUS: ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/flax-hemp-and-nettle-bast-fibre-processing/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
         {
          x: 63.4, 
          y: 68.6,
          width: 0.1,
          height: 0.1,
          title: "Wooden Boatbuilding",
          text: `The craft of constructing boats from wood using traditional techniques. 
          <br /><br />
          STATUS: ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/traditional-wooden-boat-building/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
         {
          x: 78.4, 
          y: 38.4,
          width: 0.1,
          height: 0.1,
          title: "Reverse Glass Sign Painting and Brilliant Glass Cutting",
          text: `The making of signs by painting and applying metal leaf to the reverse of glass panels. Brilliant cutting is cutting a pattern into flat glass with a rotating stone wheel, the cuts are then smoothed with polishing powders using a felt wheel.
          <br /><br />
          STATUS: ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/brilliant-cutting/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 64.6, 
          y: 44.7,
          width: 0.1,
          height: 0.1,
          title: "Wheelwrighting",
          text: `The construction of wooden wheels, often used for coachbuilding.
          <br /><br />
          STATUS: ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/wheelwrighting/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
         {
          x: 87.1, y: 66.5,
          width: 0.1,
          height: 0.1,
          title: "Sailmaking",
          text: `A traditional maritime craft that involves designing and constructing the sails that power sailing vessels.
          <br /><br />
          STATUS: ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/sail-making/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
            </svg>
          `
        },
        {
          x: 52.8, y: 79.3,
          width: 0.1,
          height: 0.1,
          title: "Silk Ribbon Making",
          text: `The weaving of silk ribbons.
          <br /><br />
          STATUS: CRITICALLY ENDANGERED`,
          link: "https://heritagecrafts.org.uk/craft/silk-ribbon-making/",
          linkLabel: "Learn more",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="rgba(255,0,0,0.5)"/>
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
    img.style.display = "block";

    const overlay = document.createElement('div');
    overlay.className = 'map-overlay';
    overlay.style.position = 'absolute';
    overlay.style.pointerEvents = 'none';
    overlay.style.width = '0';
    overlay.style.height = '0';

    function resolveSize(value, ref, fallback) {
      if (value == null || value === '') return fallback;
      if (typeof value === 'string' && value.trim().endsWith('%')) {
        return parseFloat(value) / 100 * ref;
      }
      const num = Number(value);
      if (Number.isNaN(num)) return fallback;
      if (num > 0 && num <= 1) {
        return num * ref;
      }
      return num;
    }

    function updateButtonSizes() {
      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;
      const defaultSize = 36;
      overlay.querySelectorAll('.map-point').forEach(button => {
        const rawWidth = button.dataset.pointWidth || button.dataset.pointSize;
        const rawHeight = button.dataset.pointHeight || button.dataset.pointSize || rawWidth;

        const width = resolveSize(rawWidth, imgWidth, defaultSize);
        const height = resolveSize(rawHeight, imgHeight, width);

        button.style.width = width + 'px';
        button.style.height = height + 'px';
        button.style.minWidth = width + 'px';
        button.style.minHeight = height + 'px';
      });
    }

    function updateOverlayBounds() {
      overlay.style.width = img.offsetWidth + 'px';
      overlay.style.height = img.offsetHeight + 'px';
      overlay.style.top = img.offsetTop + 'px';
      overlay.style.left = img.offsetLeft + 'px';
      updateButtonSizes();
    }

    const resizeObserver = new ResizeObserver(updateOverlayBounds);
    resizeObserver.observe(img);
    window.addEventListener('resize', updateOverlayBounds);
    img.addEventListener('load', updateOverlayBounds);

    container.appendChild(overlay);

    config.points.forEach(point => {
      createPoint(overlay, point);
    });

    updateOverlayBounds();
  }

  function createPoint(overlay, point) {
    const button = document.createElement('button');
    button.type = "button";
    button.className = "map-point";
    button.style.position = "absolute";
    button.style.left = point.x + "%";
    button.style.top = point.y + "%";
    button.style.transform = "translate(-50%, -50%)";
    button.style.display = "inline-flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";

    const defaultSize = 36;
    button.style.width = defaultSize + "px";
    button.style.height = defaultSize + "px";
    button.style.minWidth = defaultSize + "px";
    button.style.minHeight = defaultSize + "px";
    button.style.lineHeight = 0;
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.padding = 0;
    button.style.pointerEvents = "auto";
    button.setAttribute("aria-label", point.title);

    button.dataset.pointWidth = point.width != null ? point.width : '';
    button.dataset.pointHeight = point.height != null ? point.height : '';
    button.dataset.pointSize = point.size != null ? point.size : '';

    button.innerHTML = point.svg;
    const svg = button.querySelector('svg');
    if (svg) {
      svg.style.width = '100%';
      svg.style.height = '100%';
      svg.style.display = 'block';
      svg.removeAttribute('width');
      svg.removeAttribute('height');
    }

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
      ${point.link ? `<p><a href="${point.link}" target="_blank" rel="noopener">${point.linkLabel || "Learn more"}</a></p>` : ""}
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
