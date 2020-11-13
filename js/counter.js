// ?
// ?    name: Cookie Count Manager
// ?    file: /counter.js
// ?

function UpdateCounter(){
    cookieCount.innerText = cookies.toLocaleString()
}

function AddCookies(count){
    cookies = cookies + count;
    UpdateCounter()
}