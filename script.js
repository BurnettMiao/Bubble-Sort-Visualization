document.addEventListener('DOMContentLoaded', () => {
  const arrayContainer = document.getElementById('array-container');

  // Create Random Array
  const array = Array.from({ length: 20 }, () => {
    return Math.floor(Math.random() * 100) + 1;
  });
  console.log(array);

  // Create bars for visualization
  function createBars() {
    // Clear previous bars
    arrayContainer.innerHTML = '';
    array.forEach((value) => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${value * 3}px`;
      arrayContainer.append(bar);
    });
  }
  createBars();
});
