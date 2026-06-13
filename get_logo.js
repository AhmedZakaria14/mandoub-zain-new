const https = require('https');

https.get('https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781352127/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9_2026_siwu24.png', (res) => {
  // We can't really parse PNG in plain node easily without a lib.
  // But wait! We can just fetch the CSS of https://sa.zain.com/ar and look for CSS variables.
});
