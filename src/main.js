import './styles.css';

const asset = 'https://nung4u.com/b777/assets/img';
const signedPromotions = ['/promo-1.jpeg', '/promo-1.jpeg', '/promo-1.jpeg'];

const themes = [
  { id: 'original', name: 'Berlin Red', base: '#000000', baseDeep: '#000000', primary: '#e90211', secondary: '#770006', signup: '#f0a500', signupDeep: '#ac7600', button: '#44d245' },
  { id: 'ocean', name: 'Ocean Blue', base: '#08243c', baseDeep: '#020a12', primary: '#1596ff', secondary: '#04366b', signup: '#15c7d8', signupDeep: '#08728a', button: '#15c7d8' },
  { id: 'violet', name: 'Royal Violet', base: '#1b0c37', baseDeep: '#06020f', primary: '#7b3ff2', secondary: '#31126e', signup: '#b56dff', signupDeep: '#6030ab', button: '#25d0c1' },
  { id: 'pink', name: 'Neon Pink', base: '#330b21', baseDeep: '#0d0208', primary: '#ff2d91', secondary: '#720738', signup: '#ff72b8', signupDeep: '#a91b65', button: '#36d9bd' },
  { id: 'emerald', name: 'Emerald', base: '#062c20', baseDeep: '#010b07', primary: '#00b873', secondary: '#034e3b', signup: '#b6e83d', signupDeep: '#5b8d13', button: '#b6e83d' },
  { id: 'sunset', name: 'Sunset', base: '#351405', baseDeep: '#0e0400', primary: '#ff6b00', secondary: '#762000', signup: '#ffd447', signupDeep: '#b26b00', button: '#ffd447' },
  { id: 'gold', name: 'Electric Gold', base: '#352b05', baseDeep: '#0d0900', primary: '#f2bd00', secondary: '#795b00', signup: '#f05d3b', signupDeep: '#9c2516', button: '#f05d3b' },
  { id: 'ice', name: 'Ice Blue', base: '#07303e', baseDeep: '#010b0f', primary: '#52d6ff', secondary: '#16608a', signup: '#9bffde', signupDeep: '#42a990', button: '#9bffde' },
  { id: 'lime', name: 'Acid Lime', base: '#253000', baseDeep: '#080d00', primary: '#b9ee00', secondary: '#4a6500', signup: '#09d99b', signupDeep: '#057d62', button: '#09d99b' },
  { id: 'crimson', name: 'Soft Coral', base: '#351814', baseDeep: '#100403', primary: '#FBA48F', secondary: '#8f4d4b', signup: '#ffd0c5', signupDeep: '#b96b61', button: '#f4a08c' },
];

const categories = [
  ['quest', 'QUEST', 'เควสรายวัน', 'icon-quest.png'],
  ['hot', 'GAME HITS', 'เกมยอดฮิต', 'icon-hot.png'],
  ['casino', 'CASINO', 'คาสิโนสด', 'icon-casino.png'],
  ['slot', 'SLOT', 'เกมสล็อต', 'icon-slot.png'],
  ['sport', 'SPORT', 'กีฬา', 'icon-sport.png'],
  ['lotto', 'LOTTO', 'หวย', 'icon-lotto.png'],
  ['fishing', 'FISHING', 'เกมยิงปลา', 'icon-fishing.png'],
  ['card', 'CARD', 'เกมการ์ด', 'icon-card.png'],
  ['lockscore', 'Lockscore', 'ดูบอลสด', 'icon-lockscore.png'],
  ['onlyfans', 'Onlyfans', 'ดูคลิปฟรี', 'icon-onlyfans.png'],
];

const games = [
  ['Cocktail Nights', '001.jpg', 92], ['Magic Kitty', '002.jpg', 80], ['Leprechaun', '003.jpg', 99], ['Fruit Party 2', '004.jpg', 79], ['7 Up 7 Down', '005.jpg', 85],
  ['Fortune Ox', '006.jpg', 79], ['Royal Katt', '007.jpg', 91], ['Masquerade', '008.jpg', 76], ['Gates of Olympus', '009.jpg', 82], ['Baccarat', '010.jpg', 91],
  ['Fortune Tiger', '011.jpg', 87], ['Fishing God', '012.jpg', 80], ['Roma', '013.jpg', 99], ['Sweet Bonanza', '014.jpg', 86], ['Pok Deng', '015.jpg', 74],
  ['Gemstones Gold', '016.jpg', 81], ['Lucky Meow', '017.jpg', 92], ['Sweetie Crush', '018.jpg', 80], ['Wild West Gold', '019.jpg', 97], ['น้ำเต้าปูปลา', '020.jpg', 94],
  ['Treasures of Aztec', '021.jpg', 77], ['Sweet Tooth', '022.jpg', 87], ['Gems Bonanza', '023.jpg', 95], ['Thai Hi-Lo', '024.jpg', 85], ['Lucky Neko', '025.jpg', 87],
  ['Museum Mystery', '026.jpg', 77], ['Oishi Delights', '027.jpg', 97], ['Wild Bounty Showdown', '028.jpg', 82], ['Mahjong Ways 2', '029.jpg', 85],
];

const winners = [
  ['093205xxxx', '14:21:30', '681.77'], ['081643xxxx', '14:21:56', '10,000.00'], ['083698xxxx', '14:22:16', '809.06'],
  ['081854xxxx', '14:22:18', '10,000.00'], ['063227xxxx', '14:23:24', '953.31'], ['081349xxxx', '14:23:45', '10,336.62'],
];

const icon = (folder, file) => `${asset}/${folder}/${file}`;

function render() {
  document.querySelector('#app').innerHTML = `
    <div class="app-shell">
      <div class="install-strip">
        <div>
          <strong>LSMBERLIN777 ทำงานได้ดีกว่าบน App</strong>
          <span>เพื่อประสบการณ์ที่ดีกว่า ติดตั้ง LSMBERLIN777 App ทำให้คุณไม่พลาดทุกความบันเทิง</span>
        </div>
        <button class="install-button"><img src="${icon('icon', 'install.svg')}" alt="" />ติดตั้ง</button>
      </div>

      <header class="site-header">
        <a class="brand" href="#top" aria-label="LSMBERLIN777 home"><span class="brand-lockup"><b>LSM</b><em>BERLIN</em><strong>777</strong></span></a>
        <nav class="top-actions" aria-label="เมนูหลัก">
          <a href="#" class="top-action wheel-action"><img class="theme-icon" src="${icon('menu/menu-top', 'wheel.png')}" alt="" /><span>กงล้อรับโชค</span></a>
          <a href="#promotions" class="top-action promotion-action"><img class="theme-icon" src="${icon('menu/menu-top', 'promotion.png')}" alt="" /><span>โปรโมชั่น</span></a>
          <a href="#winners" class="top-action affiliate-action"><img class="theme-icon" src="${icon('menu/menu-top', 'affiliate.png')}" alt="" /><span>แนะนำเพื่อน</span></a>
          <button class="auth-button register">สมัครสมาชิก</button>
          <button class="auth-button login">เข้าสู่ระบบ</button>
        </nav>
      </header>

      <div class="layout">
        <aside class="category-rail" aria-label="หมวดหมู่เกม">
          ${categories.map(([id, label, thai, file], index) => `<a href="#games" class="category-card ${index === 1 ? 'active' : ''}" data-category="${id}"><img class="theme-icon" src="${icon('menu/menu-left', file)}" alt="" /><span><b>${label}</b><small>${thai}</small></span></a>`).join('')}
        </aside>

        <main class="main-content" id="top">
          <section class="promotion-area" id="promotions">
            <div class="promotion-track">
              ${signedPromotions.map((src, index) => `<a href="#" class="promotion-slide ${index === 0 ? 'is-active' : ''}"><img src="${src}" alt="โปรโมชั่น LSMBERLIN777 ${index + 1}" /></a>`).join('')}
            </div>
            <div class="slide-dots" role="tablist" aria-label="เลือกโปรโมชั่น">
              ${[0,1,2,3,4].map((_, i) => `<button class="slide-dot ${i === 2 ? 'active' : ''}" data-slide="${i}" aria-label="โปรโมชั่น ${i + 1}"></button>`).join('')}
            </div>
          </section>

          <div class="mobile-marquee"><img class="theme-icon" src="${icon('icon', 'music.svg')}" alt="" /><span>ดูแลสิทธิ์ตลอด 24 ชั่วโมง</span></div>

          <section class="games-section" id="games">
            <div class="search-wrap"><input id="game-search" type="search" placeholder="กดเพื่อพิมพ์ค้นหาเกมฮิต" aria-label="ค้นหาเกม" /></div>
            <div class="game-grid">
              ${games.map(([name, file, rate]) => `<article class="game-card" data-name="${name.toLowerCase()}"><div class="game-image-wrap"><img src="${asset}/game/hot/${file}" alt="${name}" /><div class="game-overlay"><button class="play-button"><img src="${icon('icon', 'play-button.svg')}" alt="" />เล่น</button></div></div><h3>${name}</h3><div class="rate-bar"><span style="width:${rate}%">อัตราชนะ ${rate}%</span></div></article>`).join('')}
            </div>
          </section>

          <section class="winner-section" id="winners">
            <div class="winner-heading"><img class="theme-icon" src="${icon('icon', 'winner.gif')}" alt="" /><strong>ผู้โชคดีล่าสุด</strong></div>
            <div class="winner-track">
              ${winners.map(([phone, time, amount]) => `<div class="winner-card"><img class="theme-icon" src="${icon('icon', 'level-1.png')}" alt="" /><div><b>${phone}</b><small>${time}</small></div><strong><img class="theme-icon" src="${icon('icon', 'coin.svg')}" alt="" />${amount}</strong></div>`).join('')}
            </div>
          </section>
          <footer>ลิขสิทธิ์ © 2026 LSMBERLIN777 สงวนลิขสิทธิ์</footer>
        </main>
      </div>
      <a class="line-contact" href="#" aria-label="ติดต่อผ่าน LINE"><img src="${icon('icon', 'LINE.png')}" alt="ติดต่อผ่าน LINE" /></a>
      <nav class="mobile-bottom-nav" aria-label="เมนู mobile">
        <a href="#" class="bottom-action"><img class="theme-icon" src="${icon('menu/menu-bottom', 'contact.png')}" alt="" /><span>ติดต่อเรา</span></a>
        <a href="#promotions" class="bottom-action"><img class="theme-icon" src="${icon('menu/menu-bottom', 'promotion.png')}" alt="" /><span>โปรโมชั่น</span></a>
        <a href="#" class="bottom-action bottom-action-center"><img class="theme-icon" src="${icon('menu/menu-bottom', 'register.png')}" alt="" /><span>สมัครสมาชิก</span></a>
        <a href="#winners" class="bottom-action"><img class="theme-icon" src="${icon('menu/menu-bottom', 'affiliate.png')}" alt="" /><span>แนะนำเพื่อน</span></a>
        <a href="#" class="bottom-action"><img class="theme-icon" src="${icon('menu/menu-bottom', 'onlyfans.png')}" alt="" /><span>Onlyfans</span></a>
      </nav>
      <div class="theme-dock" aria-label="เปลี่ยนสีเว็บไซต์">
        <button class="theme-toggle" aria-expanded="false" aria-controls="theme-panel">สี</button>
        <div class="theme-panel" id="theme-panel">
          <span class="theme-title">เลือกสีธีม</span>
          <div class="theme-swatches">
            ${themes.map((theme, index) => `<button class="theme-swatch ${index === 0 ? 'selected' : ''}" data-theme="${theme.id}" style="--swatch:${theme.primary}" aria-label="${theme.name}" title="${theme.name}"></button>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  bindInteractions();
}

function applyTheme(themeId) {
  const theme = themes.find((item) => item.id === themeId) ?? themes[0];
  const isOriginal = theme.id === 'original';
  const accent = theme.primary;
  const surface = isOriginal ? {
    top: '#030303',
    header: '#111',
    panel: '#171717',
    rail: '#202020',
    card: 'linear-gradient(120deg, #3b3b3b, #050505 75%)',
    winner: '#262626',
    marquee: '#313133',
    image: '#222',
  } : {
    top: `linear-gradient(180deg, color-mix(in srgb, ${accent} 10%, #101010), color-mix(in srgb, ${accent} 4%, #030303))`,
    header: `linear-gradient(180deg, color-mix(in srgb, ${accent} 14%, #111), color-mix(in srgb, ${accent} 5%, #050505))`,
    panel: `linear-gradient(180deg, color-mix(in srgb, ${accent} 18%, #171717), color-mix(in srgb, ${accent} 6%, #050505))`,
    rail: `linear-gradient(180deg, color-mix(in srgb, ${accent} 20%, #202020), color-mix(in srgb, ${accent} 7%, #050505))`,
    card: `linear-gradient(120deg, color-mix(in srgb, ${accent} 24%, #3b3b3b), color-mix(in srgb, ${accent} 8%, #050505) 75%)`,
    winner: `linear-gradient(180deg, color-mix(in srgb, ${accent} 20%, #262626), color-mix(in srgb, ${accent} 7%, #050505))`,
    marquee: `linear-gradient(180deg, color-mix(in srgb, ${accent} 22%, #313133), color-mix(in srgb, ${accent} 9%, #101010))`,
    image: `linear-gradient(180deg, color-mix(in srgb, ${accent} 10%, #222), color-mix(in srgb, ${accent} 4%, #080808))`,
  };
  document.documentElement.style.setProperty('--accent', theme.primary);
  document.documentElement.style.setProperty('--accent-deep', theme.secondary);
  document.documentElement.style.setProperty('--base', theme.base);
  document.documentElement.style.setProperty('--base-deep', theme.baseDeep);
  document.documentElement.style.setProperty('--signup', theme.signup);
  document.documentElement.style.setProperty('--signup-deep', theme.signupDeep);
  document.documentElement.style.setProperty('--green-btn', theme.button);
  document.documentElement.style.setProperty('--icon-filter', isOriginal ? 'none' : `drop-shadow(0 0 5px color-mix(in srgb, ${accent} 75%, transparent)) saturate(1.18)`);
  Object.entries(surface).forEach(([name, value]) => document.documentElement.style.setProperty(`--surface-${name}`, value));
  document.querySelectorAll('.theme-swatch').forEach((button) => button.classList.toggle('selected', button.dataset.theme === theme.id));
}

function bindInteractions() {
  const dock = document.querySelector('.theme-dock');
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const open = dock.classList.toggle('open');
    document.querySelector('.theme-toggle').setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.theme-swatch').forEach((button) => button.addEventListener('click', () => applyTheme(button.dataset.theme)));

  document.querySelector('#game-search').addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll('.game-card').forEach((card) => {
      card.hidden = query && !card.dataset.name.includes(query);
    });
  });

  document.querySelectorAll('.category-card').forEach((card) => card.addEventListener('click', () => {
    document.querySelectorAll('.category-card').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
  }));

  const slides = [...document.querySelectorAll('.promotion-slide')];
  document.querySelectorAll('.slide-dot').forEach((dot) => dot.addEventListener('click', () => {
    const index = Number(dot.dataset.slide) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === index));
    document.querySelectorAll('.slide-dot').forEach((item) => item.classList.remove('active'));
    dot.classList.add('active');
  }));
}

render();

const requestedTheme = new URLSearchParams(window.location.search).get('theme');
if (requestedTheme && themes.some((theme) => theme.id === requestedTheme)) {
  applyTheme(requestedTheme);
}
