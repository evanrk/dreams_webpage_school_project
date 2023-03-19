const navbar = document.getElementById('navbar');
const intro_question_1 = document.getElementById('intro-question-1')
const intro_question_2 = document.getElementById('intro-question-2')

window.onscroll = () => {
    // collapse navbar
    if (window.scrollY <= 170) {
        navbar.style.top ="0";
    } else {
        navbar.style.top = "-75px";
    }

    // start animation for questions
    if (window.scrollY >= 100){
        intro_question_1.style.left = "0";
    } else {
        intro_question_1.style.left = "-100" // CHANGE
    }
    

    if (window.scrollY >= 428){
        intro_question_1.style.right = "0";
    } else {
        intro_question_1.style.right = "-100" // CHANGE
    }
}

