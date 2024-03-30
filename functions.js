const hamMenu = document.querySelector(".ham-menu");
const menuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.getElementById("close-menu-icon");


menuIcon.addEventListener('click', () => {
    const visability = hamMenu.getAttribute('data-visibility');
    const iconVisability = closeMenuIcon.getAttribute('data-visibility');
    
    if(visability === "false"){ 
        hamMenu.setAttribute('data-visibility', true);
    }

    if(iconVisability === 'false'){
        closeMenuIcon.setAttribute("data-visibility", true);
    }
});

closeMenuIcon.addEventListener('click', () => {
    const visability = hamMenu.getAttribute('data-visibility');
    const iconVisability = closeMenuIcon.getAttribute('data-visibility');

    if(visability === 'true'){
        hamMenu.setAttribute('data-visibility', false);
    }
    if(iconVisability === 'true'){
        closeMenuIcon.setAttribute("data-visibility", false);
    }
});

// closeMenuIcon.addEventListener('click', () => {

// });

