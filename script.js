const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const angleInput = document.getElementById('angle');
const saveBtn = document.getElementById('saveBtn');

function applyAndSaveGradient() {
    const c1 = color1Input.value;
    const c2 = color2Input.value;
    const ang = angleInput.value;

    const gradientCSS = `linear-gradient(${ang}, ${c1}, ${c2})`;
    
    document.body.style.background = gradientCSS;

    localStorage.setItem('customColor1', c1);
    localStorage.setItem('customColor2', c2);
    localStorage.setItem('customAngle', ang);
}

saveBtn.addEventListener('click', applyAndSaveGradient);

window.addEventListener('DOMContentLoaded', () => {
    const savedC1 = localStorage.getItem('customColor1');
    const savedC2 = localStorage.getItem('customColor2');
    const savedAng = localStorage.getItem('customAngle');

    if (savedC1 && savedC2 && savedAng) {
        color1Input.value = savedC1;
        color2Input.value = savedC2;
        angleInput.value = savedAng;

        document.body.style.background = `linear-gradient(${savedAng}, ${savedC1}, ${savedC2})`;
    }
});
