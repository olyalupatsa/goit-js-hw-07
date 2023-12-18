
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    createBoxes(amount);
    input.value = '';
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });

  function createBoxes(amount) {
    destroyBoxes(); // Clear existing boxes before creating new ones

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }

    updateBoxSizes();
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function updateBoxSizes() {
    const boxes = document.querySelectorAll('.box');
    let size = 30;

    boxes.forEach(box => {
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      size += 10;
    });
  }