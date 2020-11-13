// ?
// ?    name: Game Manager
// ?    file: /cookie.js
// ?


var cookies = 0;

const cookieImage = document.getElementById('cookieImage')

const cookieCount = document.getElementById('cookiesText')

var scripts = [
    'js/counter.js',
    'js/intervals/1s.js',
    'js/buttons/cookieClick.js',
    'js/shop/items.js',
    'js/shop/autockicker.js',
    'js/shop/clickmultiplier.js'
];

scripts.forEach(script => {
    var s = document.createElement('script');
    s.src = script
    s.defer = ''
    document.head.appendChild(s)
});