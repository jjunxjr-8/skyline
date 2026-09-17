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
  "Work stuff": [
    { name: "Google Classroom", url: "https://classroom.google.com/h/st" }
  ],
  "Skl stuff": [
    { name: "School Calendar", url: "#" },
    { name: "Parent Portal", url: "#" }
  ],
  "CCAs": [
    { name: "Cosmos Cloud Society List", url: "#" }
  ],
  "Support": [
    { name: "Help & Technical Support", url: "#" }
  ]
};

// Google Account sidebar navigation items
const SIDEBAR_ITEMS = [
  { name: "Home", iconColor: "#004a77", iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`, active: true },
  { name: "Services", iconColor: "#6b3074", iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>` },
  { name: "Work & School", iconColor: "#135200", iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>` },
  { name: "CCAs", iconColor: "#005366", iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>` },
  { name: "Support", iconColor: "#703800", iconSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>` }
];

const sidebarNavEl = document.getElementById('sidebar-nav');
const groupsEl = document.getElementById('groups');
const emptyEl = document.getElementById('empty');
const filterEl = document.getElementById('filter');

function renderSidebar() {
  sidebarNavEl.innerHTML = '';
  SIDEBAR_ITEMS.forEach((item) => {
    const button = document.createElement('button');
    button.className = `nav-item ${item.active ? 'active' : ''}`;
    button.innerHTML = `
      <div class="nav-icon" style="background-color: ${item.iconColor}; color: #ffffff;">
        ${item.iconSvg}
      </div>
      <span>${item.name}</span>
    `;
    button.addEventListener('click', () => {
      SIDEBAR_ITEMS.forEach(i => i.active = false);
      item.active = true;
      renderSidebar();
    });
    sidebarNavEl.appendChild(button);
  });
}

function render(query) {
  const q = (query || '').trim().toLowerCase();
  groupsEl.innerHTML = '';
  let anyVisible = false;

  Object.entries(DATA).forEach(([group, items]) => {
    const filtered = items.filter(i => i.name.toLowerCase().includes(q));
    if (filtered.length === 0) return;
    anyVisible = true;

    const groupCard = document.createElement('div');
    groupCard.className = 'group-card';

    const title = document.createElement('h3');
    title.className = 'group-title';
    title.textContent = group;
    groupCard.appendChild(title);

    const linksList = document.createElement('div');
    linksList.className = 'links-list';

    filtered.forEach(item => {
      const a = document.createElement('a');
      a.className = 'link-row';
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `
        <div class="link-content">
          <span class="link-bullet"></span>
          <span class="link-name">${item.name}</span>
        </div>
        <button class="link-btn">
          Open
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21 12l-8.15-8.15-1.42 1.42L16.86 11H5v2z"/></svg>
        </button>
      `;
      linksList.appendChild(a);
    });

    groupCard.appendChild(linksList);
    groupsEl.appendChild(groupCard);
  });

  emptyEl.style.display = anyVisible ? 'none' : 'block';
}

renderSidebar();
filterEl.addEventListener('input', e => render(e.target.value));
render('');
