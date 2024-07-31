// for navBar
let scrollTop = this.document.getElementById("scroll");
window.addEventListener("scroll", function() {
    let navBar = this.document.getElementById("bakary-nav-id");
    let navItems = this.document.getElementsByClassName("a-nav");
    let homeImg = this.document.getElementById("home-img");

    if (this.window.scrollY > 50) {
             if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTop.style.display = 'block';
            } else {
                scrollTop.style.display = 'none';
            }
        navBar.classList.add('change');
        homeImg.src= './images/bakery-color.png';
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "black";
        }
    } else {
        navBar.classList.remove('change');
         homeImg.src= './images/bakery-light-1.png';
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = ""; 
        }
    }
});
window.addEventListener("click",function(){
this.window.scrollTo({
    top:0,
    behavior:"smooth",
})
})