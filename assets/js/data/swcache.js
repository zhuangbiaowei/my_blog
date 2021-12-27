const resource = [

  /* --- CSS --- */
  '/my_blog/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/my_blog/assets/js/dist/home.min.js',
  '/my_blog/assets/js/dist/page.min.js',
  '/my_blog/assets/js/dist/post.min.js',
  '/my_blog/assets/js/dist/categories.min.js',
  '/my_blog/assets/js/data/search.json',
  '/my_blog/app.js',
  '/my_blog/sw.js',

  /* --- HTML --- */
  '/my_blog/index.html',
  '/my_blog/404.html',
  
    '/my_blog/categories/',
  
    '/my_blog/tags/',
  
    '/my_blog/archives/',
  
    '/my_blog/about/',
  

  /* --- Favicons --- */
  

  '/my_blog/assets/img/favicons/android-chrome-192x192.png',
  '/my_blog/assets/img/favicons/android-chrome-512x512.png',
  '/my_blog/assets/img/favicons/apple-touch-icon.png',
  '/my_blog/assets/img/favicons/favicon-16x16.png',
  '/my_blog/assets/img/favicons/favicon-32x32.png',
  '/my_blog/assets/img/favicons/favicon.ico',
  '/my_blog/assets/img/favicons/mstile-150x150.png',
  '/my_blog/assets/img/favicons/site.webmanifest',
  '/my_blog/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  '',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

