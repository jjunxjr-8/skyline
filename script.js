const DATA = {
  "COSMOS Services": [
    { name: "COSMOS Cloud — SEC Official Society List", url: "https://cloud.nlcscosmos.com" },
    { name: "COSMOS Enterprises — SEC Official Enterprise List", url: "https://enterprise.nlcscosmos.com" },
    { name: "COSMOS RoboParts — VEX Robotics Order Service", url: "https://roboparts.nlcscosmos.com" },
    { name: "COSMOS Rankings — House Competitions Scoreboard", url: "https://houses.nlcscosmos.com" },
    { name: "COSMOS MediaCube — NLCS Publications", url: "https://mediacube.nlcscosmos.com" },
    { name: "COSMOS OneClick — AI Powered Drive Search", url: "https://nlcscosmos.com/oneclick" },
    { name: "COSMOS QuickScope — AI Powered Email Search", url: "https://nlcscosmos.com/quickscope" },
    { name: "COSMOS Larry — NLCS Library's AI Chatbot", url: "#" }
  ],
  "Maps": [
    { name: "Senior School First Floor Map", url: "images/photos/map1.png" },
    { name: "Senior School Second Floor Map", url: "images/photos/map2.png" },
    { name: "Senior School Third Floor Map", url: "images/photos/map3.png" },
    { name: "Google Classroom", url: "https://classroom.google.com/h/st" }
  ],
  "Isams": [
    { name: "School Calendar", url: "#" },
    { name: "Parent Portal", url: "#" }
  ],
  "SOCS": [
    { name: "Cosmos Cloud Society List", url: "#" }
  ],
  "Guides": [
    { name: "Help & Technical Support", url: "#" }
  ],
  "Tech Support": [
    { name: "Help & Technical Support", url: "#" }
  ],
  "Parser for CAS": [
    { name: "CAS Parser Tool", url: "https://cas.nlcscosmos.com" }
  ]
};

const PALETTES = [
  {
    iconBg: '#1a73e8',        
    activeBg: '#e8f0fe',
    activeText: '#1a73e8',
    cardBg: '#f4f8fe',        
    cardBorder: '#d2e3fc',
    btnBg: '#e8f0fe',         
    btnText: '#1a73e8',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`
  },
  {
    iconBg: '#1e8e3e',      
    activeBg: '#e6f4ea',
    activeText: '#137333',
    cardBg: '#f3f9f5',
    cardBorder: '#ceead6',
    btnBg: '#e6f4ea',
    btnText: '#137333',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`
  },
  {
    iconBg: '#f9ab00',        
    activeBg: '#fef7e0',
    activeText: '#b06000',
    cardBg: '#fffdf5',
    cardBorder: '#feefc3',
    btnBg: '#fef7e0',
    btnText: '#b06000',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`
  },
  {
    iconBg: '#9334e6',       
    activeBg: '#f3e8fd',
    activeText: '#7627b5',
    cardBg: '#faf5fe',
    cardBorder: '#e9d2fd',
    btnBg: '#f3e8fd',
    btnText: '#7627b5',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
  },
  {
    iconBg: '#d93025',        
    activeBg: '#fce8e6',
    activeText: '#c5221f',
    cardBg: '#fdf5f5',
    cardBorder: '#fad2cf',
    btnBg: '#fce8e6',
    btnText: '#c5221f',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>`
  },
  {
    iconBg: '#d93025',        
    activeBg: '#fce8e6',
    activeText: '#c5221f',
    cardBg: '#fdf5f5',
    cardBorder: '#fad2cf',
    btnBg: '#fce8e6',
    btnText: '#c5221f',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>`
  },
  // Black Palette for "Parser for CAS"
  {
    iconBg: '#202124',        
    activeBg: '#e8eaed',
    activeText: '#202124',
    cardBg: '#f8f9fa',
    cardBorder: '#dadce0',
    btnBg: '#e8eaed',
    btnText: '#202124',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`
  }
];

const sidebarNavEl = document.getElementById('sidebar-nav');
const groupsEl = document.getElementById('groups');
const emptyEl = document.getElementById('empty');
const filterEl = document.getElementById('filter');

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
}

// Check if a URL points to an image
function isImageUrl(url) {
  if (!url || url === '#') return false;
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
  const lowerUrl = url.toLowerCase();
  return imageExtensions.some(ext => lowerUrl.includes(ext)) || lowerUrl.startsWith('images/');
}

function renderSidebar() {
  sidebarNavEl.innerHTML = '';
  const groupKeys = Object.keys(DATA);

  groupKeys.forEach((groupName, index) => {
    const slug = slugify(groupName);
    const palette = PALETTES[index % PALETTES.length];

    const button = document.createElement('button');
    button.className = `nav-item ${index === 0 ? 'active' : ''}`;
    
    button.style.setProperty('--item-active-bg', palette.activeBg);
    button.style.setProperty('--item-active-text', palette.activeText);

    button.innerHTML = `
      <div class="nav-icon" style="background-color: ${palette.iconBg};">
        ${palette.iconSvg}
      </div>
      <span>${groupName}</span>
    `;

    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const targetCard = document.getElementById(`group-${slug}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    sidebarNavEl.appendChild(button);
  });
}

function render(query) {
  const q = (query || '').trim().toLowerCase();
  groupsEl.innerHTML = '';
  let anyVisible = false;

  const groupKeys = Object.keys(DATA);

  groupKeys.forEach((group, index) => {
    const items = DATA[group];
    const filtered = items.filter(i => i.name.toLowerCase().includes(q));
    if (filtered.length === 0) return;
    anyVisible = true;

    const palette = PALETTES[index % PALETTES.length];

    const groupCard = document.createElement('div');
    groupCard.className = 'group-card';
    groupCard.id = `group-${slugify(group)}`;
    
    groupCard.style.backgroundColor = palette.cardBg;
    groupCard.style.borderColor = palette.cardBorder;

    const title = document.createElement('h3');
    title.className = 'group-title';
    title.textContent = group;
    title.style.color = palette.activeText;
    groupCard.appendChild(title);

    const linksList = document.createElement('div');
    linksList.className = 'links-list';

    filtered.forEach(item => {
      const isImg = isImageUrl(item.url);
      const wrapper = document.createElement('div');
      wrapper.className = 'link-wrapper';
      wrapper.style.setProperty('--row-hover-bg', palette.btnBg);

      if (isImg) {
        // Image link row with Zoom Lens logic
        wrapper.innerHTML = `
          <div class="link-row">
            <div class="link-content">
              <span class="link-bullet" style="background-color: ${palette.iconBg};"></span>
              <span class="link-name">${item.name}</span>
            </div>
            <button class="link-btn toggle-img-btn" style="background-color: ${palette.btnBg}; color: ${palette.btnText};">
              View Image
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            </button>
          </div>
          <div class="image-preview-container">
            <div class="img-zoom-wrapper">
              <img class="preview-image" src="${item.url}" alt="${item.name}" onerror="this.onerror=null; this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='block';">
              <div class="zoom-square"></div>
            </div>
            <div class="img-error-msg" style="display:none;">Image standard path not found (${item.url})</div>
            <div class="zoom-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              Right-click and drag along the image to view zoomed square
            </div>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="full-img-link" style="color: ${palette.btnText};">
              Open full image in new tab ↗
            </a>
          </div>
        `;

        // Toggle Expand/Collapse
        const linkRow = wrapper.querySelector('.link-row');
        const imgContainer = wrapper.querySelector('.image-preview-container');
        const toggleBtn = wrapper.querySelector('.toggle-img-btn');

        linkRow.addEventListener('click', (e) => {
          e.preventDefault();
          const isExpanded = imgContainer.classList.contains('active');
          imgContainer.classList.toggle('active');
          
          toggleBtn.innerHTML = isExpanded 
            ? `View Image <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`
            : `Hide Image <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
        });

        // Right-Click Drag Zoom Square Logic
        const zoomWrapper = wrapper.querySelector('.img-zoom-wrapper');
        const previewImg = wrapper.querySelector('.preview-image');
        const zoomSquare = wrapper.querySelector('.zoom-square');
        let isRightDragging = false;

        // Prevent default right-click context menu on image
        zoomWrapper.addEventListener('contextmenu', (e) => e.preventDefault());

        const updateZoomSquare = (e) => {
          const rect = previewImg.getBoundingClientRect();

          // Calculate mouse position relative to image
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;

          // Clamp inside image bounds
          x = Math.max(0, Math.min(x, rect.width));
          y = Math.max(0, Math.min(y, rect.height));

          const squareSize = 180; // 180px x 180px square
          const zoomFactor = 2.5;  // 2.5x magnification factor

          // Center the zoom square under the mouse
          const squareX = x - squareSize / 2;
          const squareY = y - squareSize / 2;

          zoomSquare.style.left = `${squareX}px`;
          zoomSquare.style.top = `${squareY}px`;

          // Calculate scaled background size & offset
          const bgWidth = rect.width * zoomFactor;
          const bgHeight = rect.height * zoomFactor;

          const bgX = (x * zoomFactor) - (squareSize / 2);
          const bgY = (y * zoomFactor) - (squareSize / 2);

          zoomSquare.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
          zoomSquare.style.backgroundPosition = `-${bgX}px -${bgY}px`;
        };

        zoomWrapper.addEventListener('mousedown', (e) => {
          if (e.button === 2) { // Right Click
            e.preventDefault();
            isRightDragging = true;
            zoomSquare.style.backgroundImage = `url("${previewImg.src}")`;
            updateZoomSquare(e);
            zoomSquare.style.display = 'block';
          }
        });

        window.addEventListener('mousemove', (e) => {
          if (isRightDragging) {
            e.preventDefault();
            updateZoomSquare(e);
          }
        });

        const stopRightDrag = () => {
          if (isRightDragging) {
            isRightDragging = false;
            zoomSquare.style.display = 'none';
          }
        };

        window.addEventListener('mouseup', stopRightDrag);

      } else {
        // Standard Link row structure
        const a = document.createElement('a');
        a.className = 'link-row';
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `
          <div class="link-content">
            <span class="link-bullet" style="background-color: ${palette.iconBg};"></span>
            <span class="link-name">${item.name}</span>
          </div>
          <button class="link-btn" style="background-color: ${palette.btnBg}; color: ${palette.btnText};">
            Open
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21 12l-8.15-8.15-1.42 1.42L16.86 11H5v2z"/></svg>
          </button>
        `;
        wrapper.appendChild(a);
      }

      linksList.appendChild(wrapper);
    });

    groupCard.appendChild(linksList);
    groupsEl.appendChild(groupCard);
  });

  emptyEl.style.display = anyVisible ? 'none' : 'block';
}

renderSidebar();
filterEl.addEventListener('input', e => render(e.target.value));
render('');
