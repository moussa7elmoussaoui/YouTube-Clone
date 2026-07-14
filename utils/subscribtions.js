import previews from "../data/previews.js";

function getChannelIndexByLink(link) {
  return previews.findIndex(preview => preview.channel.link === link) + 1;
}

function getChannelNameByLink(link) {
  return previews.find(preview => preview.channel.link === link).channel.name;
}

function createSubscriptionsItem(subscriptionsTitle, link, position) {
  subscriptionsTitle.insertAdjacentHTML(position,
    `
      <button data-subscriptions-item>
        <img src="assets/images/channels/channel-${getChannelIndexByLink(link)}.jpeg" draggable="false">
        <span>${getChannelNameByLink(link)}</span>
      </button>
    `
  );
}

export function updateSubscriptionsSection() {
  const subscriptionsSection = document.querySelector('.subscriptions-section');
  const subscriptionsTitle = document.querySelector('[data-sidebar-title]');
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) ?? previews.map(preview => preview.channel.link).slice(0, 8);

  let showBtn = document.querySelector('[data-show]');

  // Clear event listeners
  showBtn.replaceWith(showBtn.cloneNode(true));
  showBtn = document.querySelector('[data-show]');

  // Reset Visibility
  subscriptionsSection.style.display = '';
  showBtn.style.display = '';

  // Remove Items
  const subscriptionsItems = document.querySelectorAll('[data-subscriptions-item]');
  subscriptionsItems.forEach(item => item.remove());

  if (subscriptions.length > 0 && subscriptions.length <= 4) {
    subscriptions.forEach(link => createSubscriptionsItem(subscriptionsSection, link, 'beforeend'));
    showBtn.style.display = 'none';
  }
  else if (subscriptions.length > 4 && showBtn.dataset.show === 'more') {
    [...subscriptions].slice(0, 4).reverse().forEach(link => createSubscriptionsItem(subscriptionsTitle, link, 'afterend'));
    showBtn.innerHTML = `
      <img src="assets/icons/sidebar/chevron-down.svg" draggable="false" data-icon>
      <span>Show more</span>
    `;
    showBtn.addEventListener('click', () => {
      showBtn.dataset.show = 'less';
      updateSubscriptionsSection();
    });
  }
  else if (subscriptions.length > 4 && showBtn.dataset.show === 'less') {
    [...subscriptions].reverse().forEach(link => createSubscriptionsItem(subscriptionsTitle, link, 'afterend'));
    showBtn.innerHTML = `
      <img src="assets/icons/sidebar/chevron-up.svg" draggable="false" data-icon>
      <span>Show less</span>
    `;
    showBtn.addEventListener('click', () => {
      showBtn.dataset.show = 'more';
      updateSubscriptionsSection();
    });
  }
  else {
    subscriptionsSection.style.display = 'none';
  }
}
