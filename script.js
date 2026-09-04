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


closeBtn.addEventListener('click', () => { osWindow.style.display = 'none'; });
startBtn.addEventListener('click', () => { osWindow.style.display = 'flex'; });

openDecisionBtn.addEventListener('click', () => { decisionWindow.style.display = 'flex'; });
closeDecisionBtn.addEventListener('click', () => { decisionWindow.style.display = 'none'; });


evaluateBtn.addEventListener('click', () => {

    const topic = document.getElementById('decision-input').value.trim();
    const pros = document.getElementById('pros-input').value.split('\n').filter(line => line.trim() !== '');
    const cons = document.getElementById('cons-input').value.split('\n').filter(line => line.trim() !== '');

    if (!topic) {
        verdictBox.innerText = "[ERROR]: Please define a target decision query.";
        return;
    }

    const score = pros.length - cons.length;
    let verdict = "";

    if (score > 0) {
        verdict = `[ANALYSIS POSITIVE] Pros outweigh risks (+${score}). Recommendation: PROCEED.`;
    } else if (score < 0) {
        verdict = `[ANALYSIS CAUTIONARY] Risk profile elevated (${score}). Recommendation: REASSESS.`;
    } else {
        verdict = `[EQUILIBRIUM REACHED] Balanced factors (0). Recommendation: GATHER MORE DATA.`;
    }

    verdictBox.innerText = `[TARGET]: ${topic.toUpperCase()}\n${verdict}`;
});


function makeDraggable(win, bar) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    function startDrag(e) {
        isDragging = true;
        const rect = win.getBoundingClientRect();
        win.style.left = `${rect.left}px`;
        win.style.top = `${rect.top}px`;
        win.style.transform = 'none'; 
        
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
        
        win.style.left = `${clientX - offsetX}px`;
        win.style.top = `${clientY - offsetY}px`;
    }

    function stopDrag() {
        isDragging = false;
    }

    bar.addEventListener('mousedown', startDrag);
    bar.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
}


makeDraggable(osWindow, titleBar);
makeDraggable(decisionWindow, decisionTitleBar);