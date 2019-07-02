var scores, roundScore, activePlayer, gamePlaying;

reset();

document.querySelector('.btn-roll').addEventListener('click', function() {

if (gamePlaying) {

	var dice = Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector('.dice');

	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		nextPlayer();
	}
}

});

document.querySelector('.btn-hold').addEventListener('click', function() {

if (gamePlaying) {

	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	if (scores[activePlayer] < 100) {

		nextPlayer();

	} else {

		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.dice').style.display = 'none';
		gamePlaying = false;
	}
}

});

document.querySelector('.btn-new').addEventListener('click', function () {

	reset();

});
// ()

function nextPlayer() {

		roundScore = 0;

		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		document.querySelector('.dice').style.display = 'none';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

};

function reset () {

	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';

	document.querySelector('.dice').style.display = 'none';

	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
