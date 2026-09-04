const osWindow = document.getElementById('window-1');
const titleBar = document.getElementById('title-bar-1');
const closeBtn = document.getElementById('close-1');
const clock = document.getElementById('clock');
const startBtn = document.getElementById('start-btn'); 

const decisionWindow = document.getElementById('decision-window');
const decisionTitleBar = document.getElementById('decision-title-bar');
const openDecisionBtn = document.getElementById('open-decision-btn');
const closeDecisionBtn = document.getElementById('decision-close-btn');
const evaluateBtn = document.getElementById('evaluate-btn');
const verdictBox = document.getElementById('decision-verdict');


setInterval(() => {
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
}, 1000);

closeBtn.addEventListener('click', () => {
    osWindow.style.display = 'none';
});


startBtn.addEventListener('click', () => {
    osWindow.style.display = 'flex';
});

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function startDrag(e) {
    isDragging = true;
    
    const rect = osWindow.getBoundingClientRect();
    
    osWindow.style.left = `${rect.left}px`;
    osWindow.style.top = `${rect.top}px`;
    
    osWindow.style.transform = 'none'; 
    
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
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