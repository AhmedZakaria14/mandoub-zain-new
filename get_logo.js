const https = require('https');

https.get('https://www.zain5grouter.com/images/zain-representative-0534768368.webp', (res) => {
  // We can't really parse PNG in plain node easily without a lib.
  // But wait! We can just fetch the CSS of https://sa.zain.com/ar and look for CSS variables.
});
