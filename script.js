window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name) {
        alert('Атыңызды киргизиңиз.');
        return;
    }
    
    if (!email) {
        alert('Электрондук почтаңызды киргизиңиз.');
        return;
    }
    
    if (!message) {
        alert('Билдирүүңүздү киргизиңиз.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Электрондук почта дареги туура эмес.');
        return;
    }
    
    alert('Сиздин билдирүүңүз ийгиликтүү жөнөтүлдү!');
    document.getElementById('contact-form').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
