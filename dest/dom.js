// Draw game boards
// Draw ships on player's board
// Refresh board when turn is taken
// Display whose turn it is
// Display notification for "hits", "misses", and "WIN!"
const displayContainer = document.querySelector(".display-container");
const playerDisplay = document.querySelector(".display");
const hitDisplay = document.querySelector(".hit-display");
const boardContainer = document.querySelector(".board-container");
const playerBoard = document.querySelector(".player-board");
const computerBoard = document.querySelector(".computer-board");
export function drawBoard(board, player) {
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.x = j.toString();
            cell.dataset.y = i.toString();
            row.appendChild(cell);
        }
        if (player === "Player") {
            playerBoard.appendChild(row);
        }
        else {
            computerBoard.appendChild(row);
        }
    }
}
export function updateCell(cell, value) {
    cell.textContent = value;
}
export function cellAttacked(cell, hit) {
    cell.classList.add("attacked");
    if (hit) {
        cell.classList.add("hit");
        hitDisplay.textContent = "HIT!";
    }
    else {
        cell.classList.add("miss");
        hitDisplay.textContent = "MISS!";
    }
}
export function refreshTurn(player) {
    playerDisplay.textContent = player.name;
}
export function attackCell(c, player) {
    const cell = c.target;
    if (!cell.classList.contains("attacked")) {
        const result = player.playerboard.receiveAttack(parseInt(cell.dataset.x), parseInt(cell.dataset.y));
        if (result === 2) {
            cellAttacked(cell, false);
        }
        else if (result === 3) {
            cellAttacked(cell, true);
        }
    }
}
export function setUpListener(computer) {
    computerBoard === null || computerBoard === void 0 ? void 0 : computerBoard.addEventListener("click", (c) => {
        attackCell(c, computer);
    });
}
