import Game from "./Game";
import "./index.scss";
const nbChances = 6;
const letterClasses = `text-center relative w-4 h-7 after:absolute after:w-full after:h-[1px] after:bg-black after:bottom-0 after:left-0 md:w-8 md:h-10`;

document.addEventListener("DOMContentLoaded", () => {
  /** HTML balise variables */
  const titleStatus: HTMLHeadElement = document.getElementById("pendu-status");
  const inputUser: HTMLInputElement = document.getElementById(
    "pendu-input-user"
  ) as HTMLInputElement;
  const divSolutionContainer: HTMLDivElement = document.getElementById(
    "pendu-solution-container-content"
  ) as HTMLDivElement;
  const divNbChance: HTMLDivElement = document.getElementById(
    "pendu-solution-header-title-nb-chance"
  ) as HTMLDivElement;
  const imgPendu: HTMLImageElement = document.getElementById(
    "pendu-solution-container-pendu-view-img"
  ) as HTMLImageElement;

  /** Init game */
  const game = new Game(6, imgPendu);
  game.start();

  const update = () => {
    inputUser.value = "";
    inputUser.disabled = false;
    inputUser.focus();
    game.getSolution().forEach((solution) => {
      const { character, position } = solution;
      divSolutionContainer.childNodes.forEach((div, key) => {
        if (key === position) {
          div.textContent = character;
        }
      });
    });
    if (game.isWin || game.isLoose) {
      inputUser.disabled = true;
    }
    if (game.isWin) {
      titleStatus.textContent = "Vous avez gagné";
    }
    if (game.isLoose) {
      titleStatus.textContent = "Vous avez perdu";
    }
    divNbChance.textContent = `${game.getNbChance().toString()}/${nbChances}`;
  };

  inputUser.addEventListener("input", (e: InputEvent) => {
    const { data } = e;
    const s = game.testCharacter(data);
    inputUser.disabled = true;
    setTimeout(() => {
      update();
    }, 250);
  });

  for (let i = 0; i < game.getLengthOfWord(); i++) {
    const newDiv = document.createElement("div");
    letterClasses.split(' ').forEach(newClass => newDiv.classList.add(newClass));
    divSolutionContainer.appendChild(newDiv);
  }

  update();
});

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});

