const osWindow = document.getElementById('window-1');
const titleBar = document.getElementById('title-bar-1');
const closeBtn = document.querySelector('.close-btn');
const clock = document.getElementById('clock');

setInterval(() => {
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
}, 1000);

closeBtn.addEventListener('click', () => {
    osWindow.style.display = 'none';
});

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function startDrag(e) {
    isDragging = true;

    osWindow.style.transform = 'none';

    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    
    offsetX = clientX - osWindow.getBoundingClientRect().left;
    offsetY = clientY - osWindow.getBoundingClientRect().top;
}
function drag(e) {
    if (!isDragging) return;

    if (e.type.includes('touch')) e.preventDefault();

    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    

    osWindow.style.left = `${clientX - offsetX}px`;
    osWindow.style.top = `${clientY - offsetY}px`;
}

function stopDrag() {
    isDragging = false;
}

titleBar.addEventListener('mousedown', startDrag);
titleBar.addEventListener('touchstart', startDrag, { passive: false });

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag, { passive: false });

document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

