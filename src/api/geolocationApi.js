export const getLocation = (handleLocation) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleLocation, handleGeolocationApiError);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

const handleGeolocationApiError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
        default:
          alert("An error occurred.");
          break;
      }
}