import './style.css';
import renderRecentScores from './modules/renderRecentScores.js';
import addScore from './modules/addScores.js';
import resetInputs from './modules/resetInputs.js';

const gameID = 'MBoMTXImHa9zMSmA0gL2';
const submitBtn = document.querySelector('.submit');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refreshBtn = document.querySelector('.refresh');
const scoreConatiner = document.querySelector('.item_container');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameInput.value !== '' && scoreInput.value !== '') addScore(gameID, nameInput.value, scoreInput.value);
    resetInputs(nameInput, scoreInput);
});
refreshBtn.addEventListener('click', async () => renderRecentScores(gameID, scoreConatiner));

renderRecentScores(gameID, scoreConatiner);
