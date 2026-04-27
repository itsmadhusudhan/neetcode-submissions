class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const currentValue = board[r][c];

                // blank cell
                if (currentValue === ".") continue;

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!squares.has(squareKey)) squares.set(squareKey, new Set());

                if (
                    rows.get(r).has(currentValue) ||
                    cols.get(c).has(currentValue) ||
                    squares.get(squareKey).has(currentValue)
                ) {
                    return false;
                }

                rows.get(r).add(currentValue);
                cols.get(c).add(currentValue);
                squares.get(squareKey).add(currentValue);
            }
        }
        return true;
    }
}
