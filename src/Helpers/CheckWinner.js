function isWinner(bord, symbol) {
    // Check only for 'X' or 'O' as valid winners
    if (symbol !== 'X' && symbol !== 'O') return null;

    // Horizontal win conditions
    if (bord[0] === symbol && bord[1] === symbol && bord[2] === symbol) return symbol;
    if (bord[3] === symbol && bord[4] === symbol && bord[5] === symbol) return symbol;
    if (bord[6] === symbol && bord[7] === symbol && bord[8] === symbol) return symbol;

    // Vertical win conditions
    if (bord[0] === symbol && bord[3] === symbol && bord[6] === symbol) return symbol;
    if (bord[1] === symbol && bord[4] === symbol && bord[7] === symbol) return symbol;
    if (bord[2] === symbol && bord[5] === symbol && bord[8] === symbol) return symbol;

    // Diagonal win conditions
    if (bord[0] === symbol && bord[4] === symbol && bord[8] === symbol) return symbol;
    if (bord[2] === symbol && bord[4] === symbol && bord[6] === symbol) return symbol;

    // No winner
    return null;
}

export default isWinner;
