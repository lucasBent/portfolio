window.addEventListener('load', fadeInIntro);
window.addEventListener('scroll', changeNavColor);
window.addEventListener('load', () => {
    document.getElementById('resume-button-wrap')?.addEventListener('mousemove', buttonRun);
});
let buttonTranslateX = 0;
let buttonTranslateY = 0;

function fadeInIntro() {
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

function changeNavColor() {
    const splashEl = document.querySelector('.splash');
    const menuEl = document.querySelector('nav#menu ul');
    if (!splashEl || !menuEl) return;
    if (splashEl.getBoundingClientRect().top < 0) {
        menuEl.classList.add('moved');
    } else {
        menuEl.classList.remove('moved');
    }
}

function buttonRun(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = rect.x + rect.width * 0.5;
    const y = rect.y + rect.height * 0.5;
    const dirX = x - e.clientX;
    const dirY = y - e.clientY;
    const length = Math.sqrt(dirX * dirX + dirY * dirY);
    const dx = (dirX / length) * 2;
    const dy = (dirY / length) * 2;
    buttonTranslateX += dx;
    buttonTranslateY += dy;
    el.style.transform = `translate(${buttonTranslateX}px, ${buttonTranslateY}px)`;
}
