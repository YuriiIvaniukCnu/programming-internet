const links = document.querySelectorAll('#tree a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const list = link.nextElementSibling;

        if (list.style.display === 'none') {
            list.style.display = '';
        } else {
            list.style.display = 'none';
        }
    });
});