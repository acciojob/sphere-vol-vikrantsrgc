function volume_sphere() {
  const radiusInput = document.getElementById('radius').value;
  const volumeOutput = document.getElementById('volume');

  const radius = parseFloat(radiusInput);

  // Validate input: must be a number and non-negative
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = 'NaN';
    return;
  }

  // Calculate volume: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display
  volumeOutput.value = volume.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
