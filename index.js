let latitude = null;
let longitude = null;

// Get current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        document.getElementById('location').textContent =
          `Your Location: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
      },
      error => {
        document.getElementById('location').textContent =
          `Error: ${error.message}`;
      },
      { enableHighAccuracy: true }
    );
  } else {
    document.getElementById('location').textContent =
      'Geolocation is not supported by this browser.';
  }
}

// Run when page loads
window.onload = getLocation;

// Send SOS function
function sendSOS() {
  if (latitude && longitude) {
    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const message = `🚨 SOS! I need help.\nMy location: ${mapsLink}`;

    // Show alert with location
    alert(message);

    // Dial emergency number (mobile only)
    window.location.href = 'tel:112';

    // Optional: Open SMS app with message
    // window.location.href = `sms:112?body=${encodeURIComponent(message)}`;
  } else {
    alert("Location not yet available. Please wait a few seconds.");
  }
}
