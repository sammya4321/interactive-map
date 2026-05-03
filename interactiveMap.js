(function () {
  'use strict';

  /* ===============================
     CONFIGURATION
     =============================== */

  const MAPS = [
    {
      mapConfig: {
        selector: '.interactive-map', // CSS selector of the image block
        statusColours: {
          'ENDANGERED': '#ff7b00',
          'CRITICALLY ENDANGERED': '#ff0000',
        },
        lensZoom: 2,
        lensSize: 160,
        lensStrokeWidth: 3,
        parallaxFactor: 1,
      },
      points: [
        {
          x: 56,
          y: 44,
          width: 0.1,
          height: 0.1,
          title: "Bobbin Lace Making",
          text: "Creating delicate, openwork fabric by twisting and crossing threads.",
          status: "ENDANGERED",
          links: [
            { 
              url: "https://heritagecrafts.org.uk/craft/lace-making-bobbin-lace/",
              label: "Learn more"
            }
          ],
          image: "https://assets.bloombergconnects.org/assets/9d9d1a085e20328a1456acc092c66f38cf08bc8ebf8cc3401956ba3b1ddd8ef44dc2691af7036e9d776a896ceca2d6969ffbd93e6c1ed9181ddc5c5ee9af08d3e5bbb939d2f3e52ad34912165054396cab2ebb7df1d282eee3a83d7bd2950da24c38f9508ae053da230c7a1d11acf11c56041b4c67675ac609895d7634eed97bc59457daa4357fefa13d532f9d6408a2.jpeg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 42, 
          y: 51,
          width: 0.1,
          height: 0.1,
          title: "Natural Leather and Hide Tanning",
          text: "The process of using simple, organic ingredients to convert raw skin into leather.",
          status: "CRITICALLY ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/tanning-oak-bark/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/4fa750a4-ae3c-46ff-83ed-0f9f4e8ea14e/JWB7.jpg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 51, 
          y: 69,
          width: 0.12,
          height: 0.1,
          title: "Devon Stave Basket Making",
          text: 
            `The making of a traditional Devon assembled basket made of wooden 
             splints fixed to a wooden base.`,
          status: "CRITICALLY ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/devon-stave-basket-making/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/8ed19851-0d4a-47cc-925e-be7cc818127c/DSC_9985.jpg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 39.6, 
          y: 83.9,
          width: 0.1,
          height: 0.1,
          title: "Withy Pot Making",
          text: "The making of traditional crab / lobster pots from willow, called withy pots.",
          status: "CRITICALLY ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/withy-pot-making/", label: "Learn more" }],
          image: 'https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/7e1bd363-fe48-4ec4-884e-8225818ad6da/Screenshot+2025-08-21+1.59.49+PM.png',
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 24.4, 
          y: 75,
          width: 0.1,
          height: 0.1,
          title: "Fairground Art",
          text: "Decoration associated with traditional travelling fairgrounds.",
          status: "ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/fairground-art/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/7328aa15-edfc-4cf7-9c91-aa64c9a2efa1/Giffords+Circus.png",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 20, 
          y: 70.4,
          width: 0.1,
          height: 0.1,
          title: "Cornish Hedging",
          text: 
            `The craft of constructing the traditional stone faced earth banks 
             predominantly found within, and characteristic of, Cornwall.`,
          status: "ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/cornish-hedging/", label: "Lean more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/c5aecff2-d412-4fa8-91bc-8aac621cdcb7/hedging1.png",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 34.4, 
          y: 63.1,
          width: 0.1,
          height: 0.1,
          title: "Flax Processing",
          text: 
            `The growing and processing of flax to produce textiles, rope and 
             everyday household materials.`,
          status: "ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/flax-hemp-and-nettle-bast-fibre-processing/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/4a3e8d24-dd95-4e5e-ae69-c7e18934de85/Green+fans.jpg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 63.4, 
          y: 68.6,
          width: 0.1,
          height: 0.1,
          title: "Wooden Boatbuilding",
          text: `The craft of constructing boats from wood using traditional techniques.`,
          status: "ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/traditional-wooden-boat-building/", label: "Learn more" }],
          image: "https://assets.bloombergconnects.org/assets/9d9d1a085e20328a1456acc092c66f38cf08bc8ebf8cc3401956ba3b1ddd8ef44dc2691af7036e9d776a896ceca2d6969ffbd93e6c1ed9181ddc5c5ee9af08d3e5bbb939d2f3e52ad34912165054396c2a142ec4a6384a570785d79a9f1190cae1c63957d95c8608046b6204cb501c1442e6792d95d379ff9c243bfd3e28a03e0ab5b456cf7d02c863ec7e8321b01232.jpeg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 82, y: 38.4,
          width: 0.15, height: 0.1,
          title: "Reverse Glass Sign Painting and Brilliant Glass Cutting",
          text: 
            `The making of signs by painting and applying metal leaf to the 
             reverse of glass panels. Brilliant cutting is cutting a pattern 
             into flat glass with a rotating stone wheel, the cuts are then 
             smoothed with polishing powders using a felt wheel.`,
          status: "ENDANGERED",
          links: [
            { 
              url: "https://heritagecrafts.org.uk/craft/brilliant-cutting/", 
              label: "Learn more about Brilliant Cutting."
            },
            { 
              url: "https://heritagecrafts.org.uk/craft/reverse-glass-sign-painting/",
              label: "Learn more about Reverse Glass Sign Painting."
            },
          ],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/6f0fc4de-8aa9-44f3-9832-2dd4e3253138/aaron+S.jpg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 64.6, 
          y: 44.7,
          width: 0.1,
          height: 0.1,
          title: "Wheelwrighting",
          text: `The construction of wooden wheels, often used for coachbuilding.`,
          status: "ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/wheelwrighting/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/1bd094dc-18b0-4217-a357-932a1f0c5967/DSC_0256.jpg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 87.1, y: 66.5,
          width: 0.1,
          height: 0.15,
          title: "Sailmaking",
          text: 
            `A traditional maritime craft that involves designing and 
             constructing the sails that power sailing vessels.`,
          status: "ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/sail-making/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/52e5135b-0c63-4578-a748-9fd0ed5a50a2/IMG_0176.JPEG",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
        {
          x: 52.8, y: 79.3,
          width: 0.1,
          height: 0.1,
          title: "Silk Ribbon Making",
          text: `The weaving of silk ribbons.`,
          status: "CRITICALLY ENDANGERED",
          links: [{ url: "https://heritagecrafts.org.uk/craft/silk-ribbon-making/", label: "Learn more" }],
          image: "https://images.squarespace-cdn.com/content/v1/5e7497c486e66800e54a9929/7fb7d043-caed-46b5-9751-758f07039462/DSC_9926.jpg",
          svg: `
            <svg viewBox="0 0 50 50" >
              <circle cx="25" cy="25" r="25" fill="transparent"/>
            </svg>
          `
        },
      ]
    }
  ];

  /* ===============================
     CORE
     =============================== */

  let lensEl = null;

  function initAllMaps() {
    MAPS.forEach(map => {
      document.querySelectorAll(map.mapConfig.selector).forEach(container => {
        initMap(container, map);
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
      createPoint(overlay, point, config);
    });

    updateOverlayBounds();
  }

  function createLens(config) {
    if (lensEl) return lensEl;

    lensEl = document.createElement('div');
    lensEl.className = 'map-lens';

    const lensSize = config.mapConfig.lensSize || 160;

    Object.assign(lensEl.style, {
      position: 'fixed',
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      borderRadius: '50%',
      pointerEvents: 'none',
      backgroundRepeat: 'no-repeat',
      transform: 'translate(-50%, -50%) scale(0.9)',
      opacity: '0',
      transition: 'transform 0.15s ease, opacity 0.15s ease',
      zIndex: 99999,
      boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
    });
    document.body.appendChild(lensEl);
    return lensEl;
  }

  function getStatusColour(point, config) {
    return config.mapConfig.statusColours[point.status] || '#000';
  }

  function createPoint(overlay, point, config) {
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

    let activeHover = null;
    button.addEventListener('click', () => openPanel(point));
    button.addEventListener('mouseenter', () => {
      const lens = createLens(config);
      const img = overlay.parentNode.querySelector('img');
      const rect = img.getBoundingClientRect();

      const zoom = config.mapConfig.lensZoom || 2;
      const strokeWidth = config.mapConfig.lensStrokeWidth || 3;

      const colour = getStatusColour(point, config);

      lens.style.backgroundImage = `url(${img.src})`;
      lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
      lens.style.border = `${strokeWidth}px solid ${colour}`;

      lens.style.opacity = '1';
      lens.style.transform = 'translate(-50%, -50%) scale(1)';

      activeHover = { img, rect, zoom, factor: config.mapConfig.parallaxFactor || 1 };
    });
    button.addEventListener('mousemove', (e) => {
      if (!activeHover) return;

      const { rect, zoom, factor } = activeHover;

      const centerX = (point.x / 100) * rect.width;
      const centerY = (point.y / 100) * rect.height;

      const x = centerX + (e.clientX - rect.left - centerX) * factor;
      const y = centerY + (e.clientY - rect.top - centerY) * factor;

      // Clamp inside image bounds
      const clampedX = Math.max(0, Math.min(rect.width, x));
      const clampedY = Math.max(0, Math.min(rect.height, y));

      // Move lens
      lensEl.style.left = rect.left + clampedX + 'px';
      lensEl.style.top = rect.top + clampedY + 'px';
      // Move zoomed background
      const lensSize = config.mapConfig.lensSize || 160;
      lensEl.style.backgroundPosition =
        `-${clampedX * zoom - lensSize / 2}px -${clampedY * zoom - lensSize / 2}px`;
    });
    button.addEventListener('mouseleave', () => {
      activeHover = null;

      if (!lensEl) return;

      lensEl.style.opacity = '0';
      lensEl.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
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
      overflowY: "auto",
      boxSizing: "border-box",
    });

    let linksHtml = '';
    if (point.links && point.links.length > 0) {
      point.links.forEach(link => {
        linksHtml += `<p><a href="${link.url}" target="_blank" rel="noopener" style="font-weight: bold; text-decoration: none;" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';">${link.label}</a></p>`;
      });
    }

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
      ${point.status ? `<p><strong>Status:</strong> ${point.status}</p>` : ""}
      ${linksHtml}
    `;

    panel.querySelector('.map-panel-close')
      .addEventListener('click', closePanel);

    document.body.appendChild(panel);

    // Close panel when clicking outside of it
    const handleClickOutside = (e) => {
      if (!panel.contains(e.target)) {
        closePanel();
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    // Store the handler so we can remove it when closing
    panel._clickOutsideHandler = handleClickOutside;
  }

  function closePanel() {
    const existing = document.querySelector('.map-panel');
    if (existing) {
      // Remove the click outside handler
      if (existing._clickOutsideHandler) {
        document.removeEventListener('click', existing._clickOutsideHandler, true);
      }
      existing.remove();
    }
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
