const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'openstreetmap',
  language: 'en'
};

const geocoder = NodeGeocoder(options);

const reverseGeocode = async(latitude, longitude) => {
  try {
    const result = await geocoder.reverse({ lat: latitude, lon: longitude });

    if (result.length > 0) {
      const address = (result[0].formattedAddress).split(', ');
      const country = address[address.length - 1];
      return country;
    } else {
      return 'Address not found';
    }
  } catch (error) {
    console.log(error.message);
  }
};

// // Example usage
// const latitude = 49.976561; // Latitude value
// const longitude = 25.677824; // Longitude value

// reverseGeocode(latitude, longitude)
// .then(address => {
//     console.log(address);
//   })
//   .catch(error => {
//     console.error('Error occurred during geocoding:', error);
//   });


module.exports = reverseGeocode;







