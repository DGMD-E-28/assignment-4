document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const board = document.getElementById("board");
    const turnIndicator = document.getElementById("turnIndicator");
    const startGame = document.getElementById("startGame");
    const winCondition = document.getElementById("winCondition");
    let currentPlayer = Math.random() < 0.5 ? "X" : "O";
    let moves = Array(9).fill("-");

    startGame.textContent = "Start Game";
    turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        themeIcon.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞';
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        let winConditions = winPatterns.map(pattern =>
            pattern.map(index => moves[index]).join("")
        );

        if (winConditions.includes("XXX")) {
            winCondition.textContent = "Player X Wins!";
            disableBoard();
            return true;
        }
        if (winConditions.includes("OOO")) {
            winCondition.textContent = "Player O Wins!";
            disableBoard();
            return true;
        }
        if (!moves.includes("-")) {
            winCondition.textContent = "It's a Stalemate!";
            disableBoard();
            return true;
        }
        return false;
    }

    function disableBoard() {
        document.querySelectorAll(".square").forEach(square => {
            square.replaceWith(square.cloneNode(true));
        });
    }

    function resetGame() {
        moves.fill("-");
        board.innerHTML = "";
        winCondition.textContent = "No winner yet";
        currentPlayer = Math.random() < 0.5 ? "X" : "O";
        turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
        startGame.textContent = "Restart Game";
        createBoard();
    }

    function createBoard() {
        for (let i = 0; i < 9; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.dataset.index = i;
            square.addEventListener("click", function() {
                if (!this.textContent && winCondition.textContent === "No winner yet") {
                    this.textContent = currentPlayer;
                    moves[i] = currentPlayer;
                    if (!checkWinner()) {
                        currentPlayer = currentPlayer === "X" ? "O" : "X";
                        turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
                    }
                }
            });
            board.appendChild(square);
        }
    }

    startGame.addEventListener("click", resetGame);
    createBoard();
});
