// Make h1 bounce on hover
const title = document.querySelector('h1');
title.addEventListener('mouseover', () => {
    title.style.transform = 'scale(1.1)';
    title.style.transition = 'transform 0.3s';
});
title.addEventListener('mouseout', () => {
    title.style.transform = 'scale(1)';
});

// Add pop effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Change colors on nav links hover
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6b6b';
        link.style.transition = 'color 0.3s';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'black';
    });
});

// Add floating animation to product images
const productImages = document.querySelectorAll('.producto img');

productImages.forEach(img => {
    let goingUp = true;
    let currentPosition = 0;
    
    // Add initial transform style
    img.style.transition = 'transform 1.5s ease-in-out';
    
    setInterval(() => {
        if (goingUp) {
            currentPosition += 10;
            if (currentPosition >= 10) goingUp = false;
        } else {
            currentPosition -= 10;
            if (currentPosition <= 0) goingUp = true;
        }
        
        img.style.transform = `translateY(${currentPosition}px)`;
    }, 1500);
});