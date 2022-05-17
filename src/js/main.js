

let popup = document.getElementById("popup");

    function openPopup(){
        popup.classList.add("open-popup");
        popupscreen.classList.add("open-popup-fullscreen");

}

    function closePopup(){
        popup.classList.remove("open-popup");
        popupscreen.classList.remove("open-popup-fullscreen");

}


var clicks = 0;

    function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    var element = document.getElementById('icon');
    if (  clicks >= 5){ 
                element.style.display = 'block';
                
                    }else{
                    
                    element.style.display = 'none';
                    }
    
}


function reset() {

    clicks = 0;

}