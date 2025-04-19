# Geolocation SOS Script

This JavaScript script allows users to retrieve their current location (latitude and longitude) and send an emergency SOS message with their location in case of an emergency.

## Features

- **Get Current Location**: The script retrieves the user's geographic location using the browser's built-in geolocation API.
- **Send SOS**: In an emergency, the script sends an alert containing a Google Maps link to the user's location and optionally opens the mobile device's dialer to call the emergency number (112).
- **Error Handling**: If geolocation is not supported, or the user denies location access, appropriate error messages are displayed.

## How It Works

1. **Geolocation Retrieval**:
   - When the webpage is loaded, the browser attempts to get the user's current location.
   - The coordinates (latitude and longitude) are displayed in a `div` or other HTML element with the ID `location`.

2. **Sending SOS**:
   - If the location is successfully retrieved, clicking the "Send SOS" button triggers an emergency message.
   - The message includes a Google Maps link to the user's location and tries to dial the emergency number (`112`).
   - If the location is not available yet, the user will be alerted to wait a few seconds.
