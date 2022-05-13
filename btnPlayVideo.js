let iframe = document.getElementById("iframe");
let page = document.querySelector(".page");

document.querySelector(".PlayBtn").addEventListener("click", (e) => {
    
	e.preventDefault();
    let url = document.getElementById("idPlayVideo").getAttribute("data-media");
    iframe.setAttribute("src", url);
    page.classList.add("show-popup");
})

document.querySelector(".popup").addEventListener("click", (e) =>{

    e.preventDefault();
    e.stopPropagation();
    iframe.setAttribute("src", "");  
    page.classList.remove("show-popup");
})