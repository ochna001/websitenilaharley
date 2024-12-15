const buttons = document.querySelectorAll('.dining-buttons button');
const display = document.querySelector('.dining-display');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        const imagePath = button.getAttribute('data-image');
        
        
        const imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imageElement.alt = button.textContent + " Image";
        imageElement.style.width = '100%'; 

        
        display.innerHTML = '';
        
       
        display.appendChild(imageElement);
    });
});
