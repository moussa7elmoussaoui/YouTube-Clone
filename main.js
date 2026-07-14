import previews from "./data/previews.js";
import {
  formatDuration,
  formatDate,
  formatViews
} from "./utils/formatFunctions.js";
import { lockScroll, unlockScroll } from "./utils/lockScroll.js";
import { selectItemByIndex, selectItem } from "./utils/sidebar.js"
import { updateSubscriptionsSection } from "./utils/subscribtions.js";

const videoGridElem = document.querySelector('.video-grid');

previews.forEach((preview, i) => {
  videoGridElem.insertAdjacentHTML('beforeend',
    `
      <div class="video-preview">
        <div class="thumbnail">
          <a href="${preview.link}">
            <img src="assets/images/thumbnails/thumbnail-${i + 1}.webp" draggable="false">
          </a>
          <span>${formatDuration(preview.duration)}</span>
        </div>
        <div class="video-info">
          <div class="channel-pic">
            <a href="${preview.channel.link}">
              <img src="assets/images/channels/channel-${i + 1}.jpeg" draggable="false">
            </a>
          </div>
          <div class="video-details">
            <a href="${preview.link}">
              ${preview.title}
            </a>
            <a href="${preview.channel.link}">
              ${preview.channel.name}
            </a>
            <p>${formatViews(preview.views)} · ${formatDate(preview.uploadTime)}</p>
          </div>
        </div>
      </div>
    `
  );
});

const menuButtons = document.querySelectorAll('.hamburger-menu');
const sidebarContainer = document.querySelector('.sidebar-container');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebarContent = document.querySelector('.sidebar-content');
const sidebarItems = document.querySelectorAll('[data-index]');


selectItemByIndex(0);
updateSubscriptionsSection();

sidebarItems.forEach(item => {
  item.addEventListener('click', selectItem);
});

sidebarOverlay.addEventListener('click', collapseSidebar);

function collapseSidebar() {
  sidebarContainer.classList.remove('expanded-sidebar');
  videoGridElem.classList.remove('hidden-scrollbar-thumb');
  unlockScroll();
}

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = sidebarContainer.classList.contains('expanded-sidebar');
    if (!isExpanded) {
      sidebarContainer.classList.add('expanded-sidebar');
      videoGridElem.classList.add('hidden-scrollbar-thumb');
      lockScroll();
    }
    else {
      collapseSidebar();
    }
  });
});

sidebarContent.addEventListener('mouseenter', e => {
  sidebarContent.classList.remove('hidden-scrollbar-thumb');
});

sidebarContent.addEventListener('mouseleave', e => {
  sidebarContent.classList.add('hidden-scrollbar-thumb');
});

const YTlogos = document.querySelectorAll('[src*="youtube-logo"]');
const mediaQuery = matchMedia('(prefers-color-scheme: dark)');

function updateYTlogos(isDark) {
  if (isDark) {
    YTlogos.forEach(img => img.src = 'assets/icons/header/youtube-logo-dark.svg');
  }
  else {
    YTlogos.forEach(img => img.src = 'assets/icons/header/youtube-logo.svg');
  }
}

mediaQuery.addEventListener('change', e => {
  updateYTlogos(e.matches);
});

updateYTlogos(mediaQuery.matches);
