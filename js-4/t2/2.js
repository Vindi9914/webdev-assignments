const targetElement = document.getElementById('target');
const items = ['First item', 'Second item', 'Third item'];

items.forEach((text, index) => {
  const li = document.createElement('li');
  li.innerText = text;

  if (index === 1) {
    li.classList.add('my-item');
  }

  targetElement.appendChild(li);
});