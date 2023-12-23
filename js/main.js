import { updateCards,updateNextButton,updatePrevButton,updateFirstButton,updateLastButton } from './card.js';

document.getElementById("show").addEventListener("change", updateCards);
document.getElementById("sort").addEventListener("change", updateCards);    
document.getElementById("nextBtn").addEventListener("click", updateNextButton);
document.getElementById("prevBtn").addEventListener("click", updatePrevButton);
document.getElementById("startBtn").addEventListener("click", updateFirstButton);
document.getElementById("endBtn").addEventListener("click", updateLastButton);

updateCards();