var cookies = 0;

const cookieImage = document.getElementById('cookieImage')

const cookieCount = document.getElementById('cookiesText')

const autockickerText = '(%PRICE% cookies) You have %HAVE%'

const autoCkickerButton = document.getElementById('buyautoclickerText')

var autockickers = 0

function cookieCkick(){
    cookies = cookies + 1;
    //console.log(cookies)

    cookieCount.innerText = cookies.toLocaleString()

    cookieImage.style.transform = 'scale(.95)'
}

function cookieUnClick(){
    cookieImage.style.transform = 'scale(1)'
}

function buyAutoClicker(){
    var price = 100 + autockickers;
    if(cookies >= price){
        cookies = cookies - price
        autockickers++
        autoCkickerButton.innerText = autockickerText.replace('%PRICE%', (price+1).toLocaleString()).replace('%HAVE%', autockickers.toLocaleString())
        cookieCount.innerText = cookies.toLocaleString()
    }
}

function AutockickerBtnClick(){
    const btn = document.getElementById('autoclickerImg')
    btn.style.transform = 'scale(.95)'
}
function AutockickerBtnUnClick(){
    const btn = document.getElementById('autoclickerImg')
    btn.style.transform = 'scale(1)'
}

setInterval(() => {
    cookies = cookies + autockickers
    cookieCount.innerText = cookies.toLocaleString()
}, 1000)