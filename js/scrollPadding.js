const navItems = [...document.querySelectorAll('nav ul li a')];
const padding = 75;
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        let section = item.href.split('#')[1];
        if (!section) return;

        e.preventDefault();
        section = document.querySelector('#' + section);
        window.scrollTo({
            top: section.offsetTop - padding,
            behavior: 'smooth'
        });
    })
})