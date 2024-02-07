function showHeart() {
    var heartContainer = document.getElementById("heart");
    heartContainer.innerHTML = "I love youuuuuuuuu❤️ <img src='giphy.gif' alt='Heart'>";
    heartContainer.style.display = "block";
    document.getElementById('no').style.display = 'none';
    var noButton = document.querySelector('.choices button:last-child');
    noButton.style.display = "none";
}
function hideNo() {
    var noContainer = document.getElementById("no");
    var noButton = document.querySelector('.choices button:last-child');
    noButton.style.display = "none";
    noContainer.innerHTML = "🖕🏼";
}



