function calculateMinCost() {
  const input = document.getElementById('rope-lengths').value;
  const lengths = input.split('').map(str => parseInt(str.trim()));

  lengths.sort((a, b) => a - b);

  let totalCost = 0;

  while (lengths.length > 1) {
    const smallest1 = lengths.shift();
    const smallest2 = lengths.shift();

    const cost = smallest1 + smallest2;
    totalCost += cost;

    lengths.unshift(cost); // Corrected line

    lengths.sort((a, b) => a - b);
  }

  const resultElement = document.getElementById('result');
  resultElement.textContent = totalCost.toString();
}
