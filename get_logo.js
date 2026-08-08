const https = require('https');

https.get('https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png', (res) => {
  // We can't really parse PNG in plain node easily without a lib.
  // But wait! We can just fetch the CSS of https://sa.zain.com/ar and look for CSS variables.
});
