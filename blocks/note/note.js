
export default function decorate(block) {
  if (block.firstElementChild) {
    block.firstElementChild.classList.add('content');
    const icon = document.createElement('div');
    icon.classList.add('icon');
    block.append(icon);
  }
}
