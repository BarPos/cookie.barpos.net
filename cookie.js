var cookies = 0;

const cookieImage = document.getElementById('cookieImage')

const cookieCount = document.getElementById('cookiesText')

const autockickerText = 'Buy AutoClicker (%PRICE% cookies). You have %HAVE%'

const autoCkickerButton = document.getElementById('buyAutoClicker')

var autockickers = 0

function cookieCkick(){
    cookies = cookies + 1;
    //console.log(cookies)

    cookieCount.innerText = cookies

    cookieImage.style.transform = 'scale(.95)'
}

function cookieUnClick(){
    cookieImage.style.transform = 'scale(1)'
}

function buyAutoClicker(){
    var price = 100;
    if(cookies >= price){
        cookies = cookies - price
        autockickers++
        autoCkickerButton.innerText = autockickerText.replace('%PRICE%', price).replace('%HAVE%', autockickers)
        cookieCount.innerText = cookies
    }
}

setInterval(() => {
    cookies = cookies + autockickers
    cookieCount.innerText = cookies
}, 1000)