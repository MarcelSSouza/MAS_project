
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

function oldBox() {
    var oldBox = document.getElementById('oldBox')
    oldBox.classList.remove('d-none')
}

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
 