// Date Lock Check - Redirect if accessed before March 28th, 2026
(function () {
    const unlockDate = new Date('2026-03-28T00:00:00').getTime();
    const now = new Date().getTime();

    if (now < unlockDate) {
        window.location.href = 'index.html';
    }
})();
