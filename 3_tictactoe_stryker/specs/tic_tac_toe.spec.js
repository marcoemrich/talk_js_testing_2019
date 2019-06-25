import { TicTacToe, Line } from "../src/tic_tac_toe";

describe('TicTacToe', () => {
  it('foo', () => {
    expect( 1 ).toEqual( 1 );
  });

  // it ('should create new instance', () => {
  //   const tictactoe = TicTacToe.newEmpty(3);
  //   expect(tictactoe.fields.length).toEqual(9)
  //   expect(tictactoe.currentPlayer).toEqual('X');
  //   tictactoe.fields.forEach(item => expect(item).toEqual(' '))
  // });

  // it('should print empty board', () => {
  //   const tictactoe = TicTacToe.newEmpty(1);
  //   expect(tictactoe.toString()).toEqual(' ')
  // });

  // it('should print empty 3x3 board', () => {
  //   const tictactoe = TicTacToe.newEmpty(3);
  //   expect(tictactoe.toString()).toEqual('         ')
  // });

  // it('should return opposite for X', () => {
  //   expect(TicTacToe.newEmpty(3).oppositePlayer()).toEqual('O');
  // });

  // it('should return opposite for O', () => {
  //   expect(new TicTacToe([" "], 1, 'O').oppositePlayer()).toEqual('X');
  // });

  // it('should not mark cell outside index bounds', () => {
  //   const tictactoe = TicTacToe.newEmpty(3);
  //   expect(tictactoe.mark(23)).toBe(tictactoe);
  // });


  // it('should mark first cell on board', () => {
  //   const tictactoe = TicTacToe.newEmpty(1);
  //   expect(tictactoe.mark(0).fields[0]).toEqual('X');
  // });

  // it('should return rows', () => {
  //   const tictactoe = TicTacToe.newEmpty(3);
  //   expect(tictactoe.rows()).toEqual([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
  // });

  // it('should return cols', () => {
  //   const tictactoe = TicTacToe.newEmpty(3);
  //   expect(tictactoe.cols()).toEqual([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
  // });

  // it('should return no winner for empty board', () => {
  //   const tictactoe = TicTacToe.newEmpty(3);
  //   expect(tictactoe.winner()).toBeFalsy();

  // });

  // it('should return winner for one-cell board', () => {
  //   const tictactoe = TicTacToe.newEmpty(1)
  //                              .mark(0)
  //   console.log("fields ", tictactoe.fields);
  //   expect(tictactoe.winner()).toEqual('X');
  // });
});
