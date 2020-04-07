var buttons = document.getElementsByClassName('button')
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", showBox);
}

function showBox(){
    var div = document.getElementById('card');
    div.style.display = 'block';
}
