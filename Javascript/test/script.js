function getText(event){
    let text = event.target.innerHTML;
    console.log(txt)
}

function setText(txt){
    divB.innerHTML = txt;
}
divA.addEventListener("click", getText)