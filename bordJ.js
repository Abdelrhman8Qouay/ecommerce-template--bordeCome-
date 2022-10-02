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

// make fade effect with div adv
let divAdvImgs = Array.from(document.querySelectorAll(".div-adv .image"));
console.log(divAdvImgs[0]);
let index = 1;
let fadeDivAdv = setInterval(()=> {
    divAdvImgs.forEach(img=> img.classList.remove("active"))
    divAdvImgs[index-1].classList.add("active");
    console.log(divAdvImgs[index -1]);
    index++;
    if (index == divAdvImgs.length + 1) {
        index = 0;
        index++;
    }
}, 10000)