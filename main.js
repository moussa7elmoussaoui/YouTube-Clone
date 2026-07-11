import previews from "./data/previews.js";
import {
  formatDuration,
  formatDate,
  formatViews
} from "./utils/formatFunctions.js"

const mainElem = document.querySelector('main');

previews.forEach((preview, i) => {
  mainElem.insertAdjacentHTML(
    'beforeend',
    `
      <div class="video-preview">
        <div class="thumbnail">
          <a href="${preview.link}">
            <img src="assets/images/thumbnails/thumbnail-${i + 1}.webp">
          </a>
          <span>${formatDuration(preview.duration)}</span>
        </div>
        <div class="video-info">
          <div class="channel-pic">
            <a href="${preview.channel.link}">
              <img src="assets/images/channels/channel-${i + 1}.jpeg">
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