function prevent(e) {
  const sidebar = document.querySelector('.sidebar-content');
  if (sidebar.contains(e.target)) return;
  e.preventDefault();
}

export function lockScroll() {
  window.addEventListener('wheel', prevent, { passive: false });
  window.addEventListener('touchmove', prevent, { passive: false });
}

export function unlockScroll() {
  window.removeEventListener('wheel', prevent);
  window.removeEventListener('touchmove', prevent);
}