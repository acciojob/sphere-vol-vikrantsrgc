function volume_sphere(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const radiusInput = document.getElementById("radius").value;
  const volumeOutput = document.getElementById("volume");

  const radius = parseFloat(radiusInput);

  // Validate input
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = 'NaN';
    return;
  }

  // Volume of sphere: (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display rounded to 4 decimal places
  volumeOutput.value = volume.toFixed(4);
}

// Attach event listener after DOM is loaded
window.onload = function () {
  const form = document.getElementById("MyForm");
  form.addEventListener("submit", volume_sphere);
};
