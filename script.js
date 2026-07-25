(function() {
    const savedC1 = localStorage.getItem('customColor1');
    const savedC2 = localStorage.getItem('customColor2');
    const savedAng = localStorage.getItem('customAngle');

    if (savedC1 && savedC2 && savedAng) {
        const style = document.createElement('style');
        style.innerHTML = `
            body {
                background: linear-gradient(${savedAng}, ${savedC1}, ${savedC2}) !important;
                background-attachment: fixed !important;
            }
        `;
        document.head.appendChild(style);
    }
})();
