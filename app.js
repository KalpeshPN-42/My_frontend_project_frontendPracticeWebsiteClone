let hamburger=document.querySelector(".fa-burger");
let hiddenBar=document.querySelector(".hidden-bar")
hamburger.addEventListener("click",(event)=>{
    if(hamburger.classList.contains("fa-burger")){
        hamburger.classList.replace("fa-burger","fa-xmark");
        hamburger.style.cssText += "position: relative; z-index: 100;"; 
        hiddenBar.classList.add("active");
    }else{
        hamburger.classList.replace("fa-xmark","fa-burger");
        hiddenBar.classList.remove("active");
    }
})