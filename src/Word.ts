import { Solution } from "./types";

class Word {
  private word: string;
  public length: number;
  static WORDS = ["ACCOMPLIR"];

  constructor(word: string = Word.generateWord()) {
    this.word = word;
    this.length = this.word.length;
  }

  static generateWord() {
    return Word.WORDS[Math.floor(Math.random() * Word.WORDS.length)];
  }

  getWord() {
    return this.word;
  }

  setWord(word: string) {
    this.word = word.toUpperCase();
    this.length = word.length;
  }

  characterExist(character: string): Solution | null {
    if (this.word.indexOf(character) === -1) {
      return null;
    }
    let w = String(this.word);
    let solution: Solution = [];
    while (w.indexOf(character.toUpperCase()) !== -1) {
      solution.push({
        character: character,
        position: w.indexOf(character.toUpperCase()),
      });
      w = w.replace(character, "|");
    }
    return solution;
  }
}

export default Word;
