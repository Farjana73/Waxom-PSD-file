let nav = document.querySelector("#navbar")

window.addEventListener("scroll", function(){
    let scroll_value = this.window.scrollY;
    if (scroll_value > 150) {
        nav.classList.add("sticky")
        
    }
    else{
        nav.classList.remove("sticky")
    }

})