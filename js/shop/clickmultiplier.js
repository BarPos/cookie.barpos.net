// ?
// ?    name: ClickMultiplier Button
// ?    file: /shop/clickmultiplier.js
// ?

const multiplierText = '(%PRICE% cookies) You will get %HAVE% every click'

const multiplierButton = document.getElementById('buyclickmultiplierText')

function multiplierBtnClick(){
    const btn = document.getElementById('clickmultiplierImg')
    btn.style.transform = 'scale(.95)'
}
function multiplierBtnUnClick(){
    const btn = document.getElementById('clickmultiplierImg')
    btn.style.transform = 'scale(1)'
}
function buyMultiplier(){
    var price = 100+clickMultiplier*20;


    if(cookies >= price){
        AddCookies(-price)
        clickMultiplier++
        price = 100+clickMultiplier*120;
        multiplierButton.innerText = multiplierText.replace('%PRICE%', price.toLocaleString()).replace('%HAVE%', (clickMultiplier+1).toLocaleString())
    }
}