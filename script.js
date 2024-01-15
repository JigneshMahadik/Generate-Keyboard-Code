addEventListener('keydown', (e)=>{
    console.log(e.key);
    console.log(e.keyCode);
    //update keyname in DOM
    const keyName=document.querySelector("div > h1 > span");
    keyName.textContent=e.key;
    const keyNo=document.querySelector("#key-no");
    keyNo.textContent=e.keyCode;
})