// Flowing friendship-themed background
const symbols = ['🌸', '🌹', '🌺', '🌷', '💖', '💝', '⭐', '✨', '💫', '❀'];

const floatingContainer = document.getElementById('floatingElements');

function createFloatingSymbol(initialPhase = 0) {
    const element = document.createElement('div');
    element.className = 'floating-flower';
    element.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    element.style.left = Math.random() * 100 + '%';

    const size = Math.random() * 1.5 + 1;
    element.style.fontSize = size + 'rem';

    const duration = Math.random() * 15 + 25;
    element.style.animationDuration = duration + 's';

    const negativeDelay = -(initialPhase * duration);
    element.style.animationDelay = negativeDelay + 's';

    element.style.setProperty('--sway-amount', (Math.random() * 60 + 30) + 'px');
    element.style.setProperty('--rotation', (Math.random() * 360) + 'deg');

    return element;
}

for (let i = 0; i < 30; i++) {
    const phase = Math.random();
    const symbol = createFloatingSymbol(phase);
    floatingContainer.appendChild(symbol);
}

setInterval(() => {
    const symbol = createFloatingSymbol(0);
    floatingContainer.appendChild(symbol);

    const allSymbols = floatingContainer.querySelectorAll('.floating-flower');
    if (allSymbols.length > 35) {
        allSymbols[0].remove();
    }
}, 1500);

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
