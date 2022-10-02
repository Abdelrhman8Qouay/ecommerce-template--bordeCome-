// add DarkMode
let btnMode = document.getElementById("mode-btn");
btnMode.addEventListener('click', ()=> {
    document.body.classList.toggle("darkMode");
})

// add methods of scrolling for buttons with left and right
// let BigScrollDivs = document.querySelectorAll(".top-sellers-div .content");

let BtnsLeft = document.querySelectorAll(".top-sellers-div .scrL");
BtnsLeft.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        btn.parentElement.children[1].scrollBy(-350, 0);
    })
})

let BtnsRight = document.querySelectorAll(".top-sellers-div .scrR");
BtnsRight.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        btn.parentElement.children[1].scrollBy(350, 0);
    })
})