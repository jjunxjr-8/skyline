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
  }
];

const sidebarNavEl = document.getElementById('sidebar-nav');
const groupsEl = document.getElementById('groups');
const emptyEl = document.getElementById('empty');
const filterEl = document.getElementById('filter');

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
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
      const a = document.createElement('a');
      a.className = 'link-row';
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.setProperty('--row-hover-bg', palette.btnBg);
      
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
