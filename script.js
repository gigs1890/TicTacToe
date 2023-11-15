
const board = (function () {

    const tiles = [];
    for (i=0; i<9; i++) {
        tiles.push(document.querySelector(`.t${i}`));
    }

    const place = (tile, piece) => {
        if (tiles[tile].classList.contains('placed')) return;
        tiles[tile].classList.add('placed');
        tiles[tile].textContent = piece;
        tiles[tile].classList.add(piece);

        checkEnd(piece);

    }

    const checkEnd = (piece) => {

        if (checkLine(0,1,2)) {console.log(`${piece} wins!`); return;}
        if (checkLine(0,4,8)) {console.log(`${piece} wins!`); return;}
        if (checkLine(0,3,6)) {console.log(`${piece} wins!`); return;}
        if (checkLine(1,4,7)) {console.log(`${piece} wins!`); return;}
        if (checkLine(2,5,8)) {console.log(`${piece} wins!`); return;}
        if (checkLine(2,4,6)) {console.log(`${piece} wins!`); return;}
        if (checkLine(3,4,5)) {console.log(`${piece} wins!`); return;}
        if (checkLine(6,7,8)) {console.log(`${piece} wins!`); return;}

        if (checkFull()) {console.log("It's a draw!"); return;}

        console.log("Still in play!");

    }

    const checkLine = (i, j, k) => {
        if (tiles[i].textContent == '') return false;
        if (tiles[i].textContent == tiles[j].textContent &&
            tiles[i].textContent == tiles[k].textContent) return true;
            else return false;
    }

    const checkFull = () => {
        for (i=0; i<9; i++) {
            if (tiles[i].textContent == '') return false;
        }
        return true;
    }

    const clearBoard = () => {
        for (i=0; i<9; i++) {
            tiles[i].textContent = "";
            tiles[i].classList.remove('X', 'O', 'placed');
        }
    };

    return {place, checkEnd, clearBoard};


})();

board.place(4, 'X');
board.place(0, 'O');
board.place(1, 'X');
board.place(7, 'O');
board.place(3, 'X');
board.place(5, 'O');
board.place(2, 'X');
board.place(6, 'O');
board.place(8, 'O');