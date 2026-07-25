document.addEventListener('DOMContentLoaded', () => {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const angleInput = document.getElementById('angle');
    const saveBtn = document.getElementById('saveBtn');

    const savedC1 = localStorage.getItem('customColor1');
    const savedC2 = localStorage.getItem('customColor2');
    const savedAng = localStorage.getItem('customAngle');

    if (savedC1 && savedC2 && savedAng) {
        color1Input.value = savedC1;
        color2Input.value = savedC2;
        angleInput.value = savedAng;
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const c1 = color1Input.value;
            const c2 = color2Input.value;
            const ang = angleInput.value;

            localStorage.setItem('customColor1', c1);
            localStorage.setItem('customColor2', c2);
            localStorage.setItem('customAngle', ang);

            const style = document.createElement('style');
            style.innerHTML = `
                body {
                    background: linear-gradient(${ang}, ${c1}, ${c2}) !important;
                    background-attachment: fixed !important;
                }
            `;
            document.head.appendChild(style);

            alert('Saved!');
        });
    }
});
