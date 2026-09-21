const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const container = document.querySelector(".container");
const scoreplayer = document.querySelector(".score .player p");
const scorecomputer = document.querySelector(".score .computer p");
const resetBtn = document.querySelector(".reset");

let para = document.createElement("p");
para.style.margin = "0px";

let computer = "";
let computerscore = 0;
let playerscore = 0;
let gameOver = false;

function cmove() {
	const randomno = Math.random();
	if (randomno >= 0 && randomno < 1 / 3) {
		computer = "rock";
	} else if (randomno >= 1 / 3 && randomno < 2 / 3) {
		computer = "paper";
	} else {
		computer = "scissors";
	}
}

function updateUI() {
	container.appendChild(para);
	scoreplayer.innerHTML = `Your <br> Score <br> ${playerscore}`;
	scorecomputer.innerHTML = `Villager <br> Score <br> ${computerscore}`;
}

function resetGame() {
	computerscore = 0;
	playerscore = 0;
	gameOver = false;
	computer = "";
	para.innerText = "";
	updateUI();
}

function checkGameOver() {
	if (computerscore >= 5 || playerscore >= 5) {
		gameOver = true;
		if (computerscore > playerscore) {
			alert("Game Over! Villager Wins!");
			para.innerText = "Game Over! Villager Wins!";
		} else {
			alert("Game Over! You Win!");
			para.innerText = "Game Over! You Win!";
		}
		container.appendChild(para);
	}
}

function playRound(human) {
	if (gameOver) return;
	cmove();
	let result = "";
	if (human === computer) {
		result = "Tie";
		para.innerText = `It's a tie! You both chose ${human}`;
	} else if (
		(human === "rock" && computer === "scissors") ||
		(human === "paper" && computer === "rock") ||
		(human === "scissors" && computer === "paper")
	) {
		result = "You win";
		playerscore++;
		para.innerText = `Villager chose ${computer}. ${result}!`;
	} else {
		result = "You lose";
		computerscore++;
		para.innerText = `Villager chose ${computer}. ${result}!`;
	}
	console.log(result);
	updateUI();
	checkGameOver();
}

rock.addEventListener("click", () => {
	playRound("rock");
});
paper.addEventListener("click", () => {
	playRound("paper");
});
scissors.addEventListener("click", () => {
	playRound("scissors");
});

resetBtn.addEventListener("click", resetGame);
