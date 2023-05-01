/** 
let keyboard = document.querySelector(".keyboard")

let keys = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift"],
  ["Ctrl", "Win", "Alt", "space", "Alt", "Left", "Down", "Right", "Ctrl"]
];

let keyboardInner = `<input class="keyboard__input" type="text"><div class="keyboard__wrapper"><div class="keyboard__keys">`;
for (let i = 0; i < keys.length; i++) {
  keyboardInner += `<div class="keyboard__row">`;
  for (let j = 0; j < keys[i].length; j++) {
    keyboardInner += `<button class="keyboard__key keyboard__key-${keys[i][j].toLowerCase()}"> ${keys[i][j]} </button>`;
  }
  keyboardInner += `</div>`;
}
keyboardInner += `</div></div>`;

keyboard.innerHTML = keyboardInner;
*/

const keyboard = {
  elements: {
    main: null,
    keyContainer: null,
    keys: [],
  },

  eventHan: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init () {
    this.elements.main = document.createElement("div");;
    this.elements.keyContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard__wrapper");
    this.elements.keyContainer.classList.add("keyboard__keys");
    this.elements.keyContainer.appendChild(this._createKeys());

    this.elements.main.appendChild(this.elements.keyContainer);
    container.appendChild(this.elements.main);
  },

  _createKeys () {
    const keys = [
      ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
      ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
      ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
      ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift"],
      ["Ctrl", "Win", "Alt", "space", "Alt", "Left", "Down", "Right", "Ctrl"]
    ];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < keys.length; i++) {
      let keyboardRow = document.createElement("div");
      keyboardRow.classList.add("keyboard__row")
      for (let j = 0; j < keys[i].length; j++) {
        let key = document.createElement("button");
        key.classList.add("keyboard__key");
        key.classList.add(`keyboard__key-${keys[i][j].toLowerCase()}`);
        key.innerHTML = keys[i][j];
        keyboardRow.appendChild(key);
      }
      fragment.appendChild(keyboardRow);
    }
    return fragment
  },

  _triggerEv (handlerName) {

  },

  _toggleCaps () {

  }
}


let keyboardInner = document.createElement("input");
keyboardInner.classList.add("keyboard__input");
keyboardInner.setAttribute("type", "text");

let container = document.createElement("div");
container.classList.add("container");

container.appendChild(keyboardInner);
document.body.appendChild(container);


window.addEventListener("DOMContentLoaded", function() {
  keyboard.init();
})