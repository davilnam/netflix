const labels = document.querySelectorAll('.accordion label');

labels.forEach(label => {
    label.addEventListener('click', () => {
        const content = label.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';           
        } else {
            content.style.display = 'block';            
        }
    });
});
