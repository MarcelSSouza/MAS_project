

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
            contactForm()
            break;
        case '6':
            oldBox();
            break;
    }

}


function goToMenu(fragmentToRemove) {
    var oldFragment = document.getElementById(fragmentToRemove);
    oldFragment.classList.add("d-none")
    var menu = document.getElementById('menu');
    menu.classList.remove('d-none');
}


function trackBox() {
    var displayCode = document.getElementById("trackCode");
    displayCode.innerText = Math.random().toString(36).toUpperCase().substring(3);
    var trackBoxFragment = document.getElementById("trackBox");
    trackBoxFragment.classList.remove('d-none');
}

function contactForm() {
    var displayForm = document.getElementById('form');
    displayForm.classList.remove('d-none');
    var button = document.getElementById('send_button')
    button.addEventListener('click', (event) => {
        event.preventDefault()
    })
}

function oldBox(){
    var oldBox = document.getElementById('oldBox')
    oldBox.classList.remove('d-none')
}

//Função para enviar email pedindo novo produto
function sendEmail()
{
}