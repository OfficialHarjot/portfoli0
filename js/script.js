 //about
 function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");  // Assuming 'active-link' is the correct class
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// <!---sidemenu---->

    var sidemenu = document.getElementById("sidemenu")
    
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    // 
    // message
    const scriptURL = '<https://script.google.com/macros/s/AKfycbyrsDbP-W8xhdu0M80y65SoLWaiLshOrCsWAeuaUOO3Az9NvMlUu2Vpd64m3JyKy94/exec>'
    const form = document.forms['submit-to-google-sheet']
//msg
const msg =document.getElementById("msg")

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent!"
            setTimeout(function () {msg.innerHTML=""
        },3000);
        form.reset()
    })
        .catch(error => console.error('Error!', error.message))
    })
    // 
    // scrolling
    document.addEventListener("DOMContentLoaded", function() {
        const upButton = document.getElementById('up');
    
        // Function to show or hide the button based on scroll position
        function toggleButton() {
            if (window.scrollY > 300) { 
                upButton.classList.add('show');
            } else {
                upButton.classList.remove('show');
            }
        }
    
      
        window.addEventListener('scroll', toggleButton);
    
        // Function to scroll back to the top when the button is clicked
        upButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling
            });
        });
    });

