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
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false,
  },

  init() {
    this.elements.main = document.createElement("div");;
    this.elements.keyContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard__wrapper");
    this.elements.keyContainer.classList.add("keyboard__keys");
    this.elements.keyContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keyContainer.querySelectorAll(".keyboard__key")

    this.elements.main.appendChild(this.elements.keyContainer);
    container.appendChild(this.elements.main);

    let inp = document.querySelector(".keyboard__input");
    window.addEventListener("click", () => {
      inp.value = this.properties.value;
    })
  },

  _createKeys() {
    const keys = [
      ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
      ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
      ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
      ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift"],
      ["Ctrl", "Win", "Alt", "space", "Alt", "Left", "Down", "Right", "Ctrl"]
    ];

    const shiftKeys = [
      ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "none"],
      ["none", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "{", "}", "|", "none"],
      ["none", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", ":", `"`, "none"],
      ["none", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "<", ">", "?", "none", "none"],
      ["none", "none", "none", "none", "none", "none", "none", "none", "none"]
    ];

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < keys.length; i++) {
      let keyboardRow = document.createElement("div");
      keyboardRow.classList.add("keyboard__row")
      for (let j = 0; j < keys[i].length; j++) {
        let key = document.createElement("button");
        key.classList.add("keyboard__key");
        key.classList.add(`keyboard__key-${keys[i][j].toLowerCase()}`);

        key.setAttribute("data_key-basick", keys[i][j])
        key.setAttribute("data_key-shifted", shiftKeys[i][j])

        /**
        key.setAttribute("data_key-basickru", keys[i][j])
        key.setAttribute("data_key-shiftedru", keys[i][j])
        */

        key.innerHTML = keys[i][j];

        switch (keys[i][j]) {
          case "Backspace":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
              this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
              this._triggerEv("oninput");
            })
            break;

          case "CapsLock":
            key.setAttribute("special", true);
            key.classList.add("keyboard__key--swith");
            key.addEventListener("click", () => {
              this._toggleCaps();
              key.classList.toggle("keyboard__key--active", this.properties.capsLock);
            })
            break;

          case "Enter":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
              this.properties.value += "\n";
              this._triggerEv("oninput");
            })
            break;

          case "space":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
              this.properties.value += " ";
              this._triggerEv("oninput");
            })
            break;

          case "Tab":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
              this.properties.value += "  ";
              this._triggerEv("oninput");
            })
            break;

          case "Shift":
            key.setAttribute("special", true);
            key.classList.add("keyboard__key--swith");
            key.addEventListener("click", () => {
              this._toggleShift();
              key.classList.toggle("keyboard__key--active", this.properties.shift);
            })
            break;

          case "Ctrl":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Win":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Alt":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Up":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Left":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Down":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Right":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          case "Del":
            key.setAttribute("special", true);
            key.addEventListener("click", () => {
            })
            break;

          default:
            key.addEventListener("click", () => {
              this.properties.value += key.textContent;
              this._triggerEv("oninput");
            })
            break;
        }

        keyboardRow.appendChild(key);
      }
      fragment.appendChild(keyboardRow);
    }
    return fragment
  },

  _triggerEv(handlerName) {
    if (typeof this.eventHan[handlerName] == "function") {
      this.eventHan[handlerName](this.properties.value);
    }
  },

  _toggleShift() {
    this.properties.shift = !this.properties.shift;

    for (const key of this.elements.keys) {
      if (key.getAttribute("data_key-shifted") == "symbol") {
        if (this.properties.capsLock && this.properties.shift) {
          key.textContent = key.textContent.toLowerCase()
        } else if (!this.properties.capsLock && this.properties.shift) {
          key.textContent = key.textContent.toUpperCase();
        } else if (this.properties.capsLock && !this.properties.shift) {
          key.textContent = key.textContent.toUpperCase();
        } else if (!this.properties.capsLock && !this.properties.shift) {
          key.textContent = key.textContent.toLowerCase()
        }
      } else if (key.getAttribute("data_key-shifted") !== "none") {
        if (this.properties.shift) {
          key.textContent = key.getAttribute("data_key-shifted")
        } else {
          key.textContent = key.getAttribute("data_key-basick")
        }
      }
    }
  },

  _toggleCaps() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (key.getAttribute("data_key-shifted") == "symbol") {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },
}


let keyboardInner = document.createElement("input");
keyboardInner.classList.add("keyboard__input");
keyboardInner.setAttribute("type", "text");

let container = document.createElement("div");
container.classList.add("container");

container.appendChild(keyboardInner);
document.body.appendChild(container);


window.addEventListener("DOMContentLoaded", function () {
  keyboard.init();
})