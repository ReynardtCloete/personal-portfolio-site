document.addEventListener('DOMContentLoaded', () => {
//////////////////////////////////////////////////////////////////////   
    
const torchOverlay = document.getElementById('torch-overlay');

document.addEventListener('mousemove', (e) => { //This function (e) => runs everytime the mouse moves//
  const x = e.clientX;                          //Extracts cursor's position//
  const y = e.clientY;                          //Extracts cursor's position//
  torchOverlay.style.background = `
    radial-gradient(circle at ${x}px ${y}px,
      rgba(29, 46, 202, 0.3) 0px,
      rgba(29, 46, 202, 0.25) 100px,
      rgba(29, 46, 202, 0.15) 200px,
      rgba(29, 46, 202, 0.1) 300px,
      transparent 500px)
  `;
});

//////////////////////////////////////////////////////////////////////  
});