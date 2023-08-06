
    var menuIcon = document.querySelector(".menu-icon");
    var sidebar1 = document.querySelector(".sidebar");
    var container = document.querySelector(".container");
    menuIcon.onclick = function() {
        sidebar1.classList.toggle("small-sidebar");
        container.classList.toggle("large-container");
    };
