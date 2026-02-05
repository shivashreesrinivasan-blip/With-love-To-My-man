const blocks = document.querySelectorAll('.block');
const messageBox = document.getElementById('message');

blocks.forEach(block => {
  block.addEventListener('click', () => {
    messageBox.textContent = block.dataset.message;
  });
});
