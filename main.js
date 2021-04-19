function loadItems() {
  return fetch('data.json')
    .then(response => response.json())
    .then(data => data.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
  }).join('');
}

function filterItems(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelectorAll('.btn');

  logo.addEventListener('click', () => displayItems(items));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.key;
      const value = button.dataset.value;
      displayItems(items.filter(item => item[key] === value));
    });
  });
}

loadItems()
  .then(items => {
    displayItems(items);
    filterItems(items);
  });