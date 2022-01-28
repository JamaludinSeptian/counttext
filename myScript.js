const info = document.getElementById("info");

function countSelectionText(){
    if(window.getSelection){
        var string = window.getSelection().toString();

        info.innerHTML = 'Text : <strong>' + string + '</strong> <br/>';
        info.innerHTML += 'Total Karakter : <strong>' + string.length + '</strong>';
        info.classList.toggle("active");
    }else{
        info.classList.toggle("active");
    }
}