export function selectItemByIndex(i) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }

  document.querySelector('.navigation').style.setProperty('--index', `${i}`);
  document.querySelector(`[data-index="${i}"]`).classList.add('selected');
}

export function selectItem(e) {
  const index = e.currentTarget.dataset.index;
  selectItemByIndex(index);
}
