export function getLatLong(state) {
  const data = [
    {
      "state": "Wisconsin",
      "latitude": 44.5,
      "longitude": -89.5
    },
    {
      "state": "West Virginia",
      "latitude": 39.0,
      "longitude": -80.5
    },
    {
      "state": "Vermont",
      "latitude": 44.0,
      "longitude": -72.699997
    },
    {
      "state": "Texas",
      "latitude": 31.0,
      "longitude": -100.0
    },
    {
      "state": "South Dakota",
      "latitude": 44.5,
      "longitude": -100.0
    },
    {
      "state": "Rhode Island",
      "latitude": 41.742325,
      "longitude": -71.742332
    },
    {
      "state": "Oregon",
      "latitude": 44.0,
      "longitude": -120.5
    },
    {
      "state": "New York",
      "latitude": 43.0,
      "longitude": -75.0
    },
    {
      "state": "New Hampshire",
      "latitude": 44.0,
      "longitude": -71.5
    },
    {
      "state": "Nebraska",
      "latitude": 41.5,
      "longitude": -100.0
    },
    {
      "state": "Kansas",
      "latitude": 38.5,
      "longitude": -98.0
    },
    {
      "state": "Mississippi",
      "latitude": 33.0,
      "longitude": -90.0
    },
    {
      "state": "Illinois",
      "latitude": 40.0,
      "longitude": -89.0
    },
    {
      "state": "Delaware",
      "latitude": 39.0,
      "longitude": -75.5
    },
    {
      "state": "Connecticut",
      "latitude": 41.599998,
      "longitude": -72.699997
    },
    {
      "state": "Arkansas",
      "latitude": 34.799999,
      "longitude": -92.199997
    },
    {
      "state": "Indiana",
      "latitude": 40.273502,
      "longitude": -86.126976
    },
    {
      "state": "Missouri",
      "latitude": 38.573936,
      "longitude": -92.603760
    },
    {
      "state": "Florida",
      "latitude": 27.994402,
      "longitude": -81.760254
    },
    {
      "state": "Nevada",
      "latitude": 39.876019,
      "longitude": -117.224121
    },
    {
      "state": "Maine",
      "latitude": 45.367584,
      "longitude": -68.972168
    },
    {
      "state": "Michigan",
      "latitude": 44.182205,
      "longitude": -84.506836
    },
    {
      "state": "Georgia",
      "latitude": 33.247875,
      "longitude": -83.441162
    },
    {
      "state": "Hawaii",
      "latitude": 19.741755,
      "longitude": -155.844437
    },
    {
      "state": "Alaska",
      "latitude": 66.160507,
      "longitude": -153.369141
    },
    {
      "state": "Tennessee",
      "latitude": 35.860119,
      "longitude": -86.660156
    },
    {
      "state": "Virginia",
      "latitude": 37.926868,
      "longitude": -78.024902
    },
    {
      "state": "New Jersey",
      "latitude": 39.833851,
      "longitude": -74.871826
    },
    {
      "state": "Kentucky",
      "latitude": 37.839333,
      "longitude": -84.270020
    },
    {
      "state": "North Dakota",
      "latitude": 47.650589,
      "longitude": -100.437012
    },
    {
      "state": "Minnesota",
      "latitude": 46.392410,
      "longitude": -94.636230
    },
    {
      "state": "Oklahoma",
      "latitude": 36.084621,
      "longitude": -96.921387
    },
    {
      "state": "Montana",
      "latitude": 46.965260,
      "longitude": -109.533691
    },
    {
      "state": "Washington",
      "latitude": 47.751076,
      "longitude": -120.740135
    },
    {
      "state": "Utah",
      "latitude": 39.419220,
      "longitude": -111.950684
    },
    {
      "state": "Colorado",
      "latitude": 39.113014,
      "longitude": -105.358887
    },
    {
      "state": "Ohio",
      "latitude": 40.367474,
      "longitude": -82.996216
    },
    {
      "state": "Alabama",
      "latitude": 32.318230,
      "longitude": -86.902298
    },
    {
      "state": "Iowa",
      "latitude": 42.032974,
      "longitude": -93.581543
    },
    {
      "state": "New Mexico",
      "latitude": 34.307144,
      "longitude": -106.018066
    },
    {
      "state": "South Carolina",
      "latitude": 33.836082,
      "longitude": -81.163727
    },
    {
      "state": "Pennsylvania",
      "latitude": 41.203323,
      "longitude": -77.194527
    },
    {
      "state": "Arizona",
      "latitude": 34.048927,
      "longitude": -111.093735
    },
    {
      "state": "Maryland",
      "latitude": 39.045753,
      "longitude": -76.641273
    },
    {
      "state": "Massachusetts",
      "latitude": 42.407211,
      "longitude": -71.382439
    },
    {
      "state": "California",
      "latitude": 36.778259,
      "longitude": -119.417931
    },
    {
      "state": "Idaho",
      "latitude": 44.068203,
      "longitude": -114.742043
    },
    {
      "state": "Wyoming",
      "latitude": 43.075970,
      "longitude": -107.290283
    },
    {
      "state": "North Carolina",
      "latitude": 35.782169,
      "longitude": -80.793457
    },
    {
      "state": "Louisiana",
      "latitude": 30.391830,
      "longitude": -92.329102
    }
  ]

  const regex = new RegExp(state, 'i');
  const matchedData = data.filter(item => regex.test(item.state));

  return matchedData;
}