function menu_replace(number) {
    var menu = document.getElementById('menu')
    menu.className = 'd-none'
    switch (number) {
        case '1':
            trackBox();
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
    }

}


function goToMenu(fragmentToRemove) {
    var oldFragment = document.getElementById(fragmentToRemove);
    oldFragment.className = "d-none";
    var menu = document.getElementById('menu');
    menu.classList.remove('d-none');
}


function trackBox() {
    var displayCode = document.getElementById("trackCode");
    displayCode.innerText = Math.random().toString(36).toUpperCase().substring(3);
    var trackBoxFragment = document.getElementById("trackBox");
    trackBoxFragment.classList.remove('d-none');
} 
