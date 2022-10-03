// add DarkMode
let btnMode = document.getElementById("mode-btn");
btnMode.addEventListener('click', ()=> {
    document.body.classList.toggle("darkMode");
})

// make active class for rest buttons of page
let btnList = document.querySelector(".content-search .btnList");
let MakeList = document.querySelector("header .down-header");
btnList.addEventListener('click', ()=> {
    MakeList.classList.toggle("active");
})
let btnListSide = document.getElementById("btnListSide")
btnListSide.addEventListener('click', ()=> {
    MakeList.classList.toggle("active");
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
let index = 0;
let fadeDivAdv = setInterval(()=> {
    divAdvImgs.forEach(img=> img.classList.remove("active"));

    divAdvImgs[index].classList.add("active");
    index++;

    if (index >= divAdvImgs.length) {
        index = 0;
    }
}, 8000);
