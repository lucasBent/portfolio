window.addEventListener('load', fadeInIntro);
window.addEventListener('scroll', changeNavColor);

function fadeInIntro() {
    if (!window.location.pathname.includes('index.html')) return;
    const titleEl = document.getElementById('site-title');
    const taglineEl = document.getElementById('site-tagline');
    const linksEl = document.getElementById('site-links');
    const elsToShowInOrder = [titleEl, taglineEl, linksEl];

    for (let i = 0; i < elsToShowInOrder.length; i++) {
        const el = elsToShowInOrder[i];
        if (!el) continue;
        const timeout = i * 500;
        setTimeout(() => {
            el.classList.toggle('shown');
        }, timeout);
    }
}

// This was my "skills stretch" JS.
// I referenced [2] in citation.txt to come up with this functionality.
function changeNavColor() {
    const splashEl = document.getElementById('splash');
    const menuEl = document.getElementById('menu');
    if (!splashEl || !menuEl) return;
    if (splashEl.getBoundingClientRect().top < 0) {
        menuEl.classList.add('moved');
    } else {
        menuEl.classList.remove('moved');
    }
}
