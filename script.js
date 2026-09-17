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

const sidebarNavEl = document.getElementById('sidebar-nav');
const groupsEl = document.getElementById('groups');
const emptyEl = document.getElementById('empty');
const filterEl = document.getElementById('filter');

// Helper function to turn group names into safe HTML element IDs
function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
}

function renderSidebar() {
  sidebarNavEl.innerHTML = '';
  const groupKeys = Object.keys(DATA);

  groupKeys.forEach((groupName, index) => {
    const slug = slugify(groupName);
    const button = document.createElement('button');
    button.className = `nav-item ${index === 0 ? 'active' : ''}`;
    button.innerHTML = `
      <div class="nav-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
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

  Object.entries(DATA).forEach(([group, items]) => {
    const filtered = items.filter(i => i.name.toLowerCase().includes(q));
    if (filtered.length === 0) return;
    anyVisible = true;

    const groupCard = document.createElement('div');
    groupCard.className = 'group-card';
    groupCard.id = `group-${slugify(group)}`;

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
