import { printf } from "https://deno.land/std/fmt/printf.ts";

class Tetris {
  board: number[][]
  boardSize: [number, number]

  constructor() {
    this.board = [[0]]
    this.boardSize = [10, 20]
    this.initBoard()
  }

  initBoard() {
    const [x, y] = this.boardSize
    this.board = Array(y).fill(0).map(() => Array(x).fill(0))
  }

  display() {
    const [x, y] = this.boardSize
    for (let i = 0; i < y; i++) {
      printf('%s', '|')
      for (let j = 0; j < x; j++) {
        printf('%b', this.board[i][j])
      }
      printf('%s', '|\n')
    }
    printf('%s', `${Array(x).join('-')}---`)
  }
}

const tetris = new Tetris()

tetris.display()
