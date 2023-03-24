const navbar = document.getElementById('navbar');

window.onscroll = () => {
    if (window.scrollY <= 170) {
        navbar.style.top ="0";
    } else {
        navbar.style.top = "-75px";
    }
}

function moveTop(){
    window.scrollTo(0, 0);
}