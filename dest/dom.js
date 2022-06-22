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
// Using background colors instead of cell values for hits/misses
// export function updateCell(cell: HTMLDivElement, value: string) {
//   cell.textContent = value;
// }
function cellAttacked(cell, hit) {
    cell.classList.add("attacked");
    if (hit) {
        cell.classList.add("hit");
        hitDisplay.textContent = "HIT!";
        setTimeout(() => (hitDisplay.textContent = ""), 5000);
    }
    else {
        cell.classList.add("miss");
        hitDisplay.textContent = "MISS!";
        setTimeout(() => (hitDisplay.textContent = ""), 5000);
    }
}
export function findCell(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
}
export function refreshTurn(player) {
    playerDisplay.textContent = player.name;
}
function eventTarget(event) {
    return event.target;
}
export function attackCell(cell, player) {
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
        attackCell(eventTarget(c), computer);
    });
}
export function teardownListener(computer) {
    computerBoard === null || computerBoard === void 0 ? void 0 : computerBoard.removeEventListener("click", (c) => {
        attackCell(eventTarget(c), computer);
    });
}
