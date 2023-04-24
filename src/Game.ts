import Word from "./Word";
import Pendu from "./Pendu";
import { Solution } from "./types";

class Game {
  private word: Word;
  private pendu: Pendu;
  private nbChance: number;
  private solution: Solution = [];
  public isWin: boolean = false;
  public isLoose: boolean = false;

  constructor(nbChance: number, imgHtml: HTMLImageElement) {
    this.word = new Word();
    this.pendu = new Pendu(imgHtml);
    this.nbChance = nbChance;
  }

  start() {
    this.word.setWord(Word.generateWord());
  }

  testCharacter(character: string): Solution | null {
    const s = this.word.characterExist(character[0].toLocaleUpperCase());
    if (s === null) {
      this.nbChance--;
      this.pendu.nextStep();
      if (this.nbChance === 0) {
        this.isLoose = true;
      }
    } else {
      this.solution = this.solution.concat(s);
      if (this.solution.length === this.word.length) {
        this.isWin = true;
      }
    }

    return s;
  }

  getNbChance() {
    return this.nbChance;
  }

  getLengthOfWord() {
    return this.word.length;
  }

  getSolution() {
    return this.solution;
  }
}

export default Game;
