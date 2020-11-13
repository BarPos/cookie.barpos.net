// ?
// ?    name: AutoClicker Button
// ?    file: /shop/autoclicker.js
// ?

const autockickerText = '(%PRICE% cookies) You have %HAVE%'

const autoCkickerButton = document.getElementById('buyautoclickerText')

function AutockickerBtnClick(){
    const btn = document.getElementById('autoclickerImg')
    btn.style.transform = 'scale(.95)'
}
function AutockickerBtnUnClick(){
    const btn = document.getElementById('autoclickerImg')
    btn.style.transform = 'scale(1)'
}
function buyAutoClicker(){
    var price = 100 + autockickers;
    if(cookies >= price){
        AddCookies(-price)
        autockickers++
        autoCkickerButton.innerText = autockickerText.replace('%PRICE%', (price+1).toLocaleString()).replace('%HAVE%', autockickers.toLocaleString())
    }
}

