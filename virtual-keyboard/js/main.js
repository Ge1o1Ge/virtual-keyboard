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
    language: 'en'
  },

  init() {
    this.elements.main = document.createElement("div");;
    this.elements.keyContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard__wrapper");
    this.elements.keyContainer.classList.add("keyboard__keys");
    this.elements.keyContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keyContainer.querySelectorAll(".keyboard__key")
    const keys = this.elements.keys

    this.elements.main.appendChild(this.elements.keyContainer);
    container.appendChild(this.elements.main);

    let inp = document.querySelector(".keyboard__input");
    window.addEventListener("click", () => {
      inp.value = this.properties.value;
    })

    window.addEventListener("keydown", (e) => {
      console.log(e.key)
      for (const key of this.elements.keys) {
        if (e.key == "Control" && key.textContent == "Ctrl") {
          key.classList.add("keyboard__key--active")
        } else if (e.key == "Backspace" && key.textContent == "Backspace") {
          key.classList.add("keyboard__key--active")
          this.properties.value = inp.value;
        } else if (e.shiftKey && key.textContent == "Shift") {
          this.properties.shift = false;
          this._toggleShift();
          key.classList.toggle("keyboard__key--active", this.properties.shift);
        } else if (e.key == " " && key.textContent == "space") {
          key.classList.add("keyboard__key--active")
          this.properties.value = inp.value;
        } else if (e.key == "CapsLock" && key.textContent == "CapsLock") {
          this._toggleCaps();
          key.classList.toggle("keyboard__key--active", this.properties.capsLock);
        } else if (e.key == "Delete" && key.textContent == "Del") {
          key.classList.add("keyboard__key--active");
        } else if (e.key == "ArrowUp" && key.textContent == "Up") {
          key.classList.add("keyboard__key--active");
        } else if (e.key == "ArrowDown" && key.textContent == "Down") {
          key.classList.add("keyboard__key--active");
        } else if (e.key == "ArrowLeft" && key.textContent == "Left") {
          key.classList.add("keyboard__key--active");
        } else if (e.key == "ArrowRight" && key.textContent == "Right") {
          key.classList.add("keyboard__key--active");
        } else if (e.key == "Meta" && key.textContent == "Win") {
          key.classList.add("keyboard__key--active");
        } else if (e.key == key.textContent) {
          key.classList.add("keyboard__key--active");
          this.properties.value = inp.value;
        }
      }
    })

    window.addEventListener("keyup", (e) => {
      this.properties.value = inp.value;
      for (const key of this.elements.keys) {
        if (e.key == "Shift" && key.textContent == "Shift") {
          this.properties.shift = true;
          this._toggleShift();
          key.classList.toggle("keyboard__key--active", this.properties.shift);
        } else if (e.key == "Control" && key.textContent == "Ctrl") {
          key.classList.remove("keyboard__key--active")
        } else if (e.key == " " && key.textContent == "space") {
          key.classList.remove("keyboard__key--active")
        } else if (e.key == "Delete" && key.textContent == "Del") {
          key.classList.remove("keyboard__key--active");
        } else if (e.key == "ArrowUp" && key.textContent == "Up") {
          key.classList.remove("keyboard__key--active");
        } else if (e.key == "ArrowDown" && key.textContent == "Down") {
          key.classList.remove("keyboard__key--active");
        } else if (e.key == "ArrowLeft" && key.textContent == "Left") {
          key.classList.remove("keyboard__key--active");
        } else if (e.key == "ArrowRight" && key.textContent == "Right") {
          key.classList.remove("keyboard__key--active");
        } else if (e.key == "Meta" && key.textContent == "Win") {
          key.classList.remove("keyboard__key--active");
        } else if (e.key == key.textContent) {
          key.classList.remove("keyboard__key--active")
        }

      }
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

    const basickRuKeys = [
      ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "none"],
      ["none", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "none", "none"],
      ["none", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "none"],
      ["none", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "none", "none"],
      ["none", "none", "none", "none", "none", "none", "none", "none", "none"]
    ];

    const shiftRuKeys = [
      ["symbol", "!", `"`, "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "none"],
      ["none", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "none", "none"],
      ["none", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "none"],
      ["none", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", "symbol", ",", "none", "none"],
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

        
        key.setAttribute("data_key-basickru", basickRuKeys[i][j])
        key.setAttribute("data_key-shiftedru", shiftRuKeys[i][j])
        

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
              this._toggleShiftLang();
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
    let shifted, basick;
    if (this.properties.language == "en") {
      shifted = "data_key-shifted"
      basick = "data_key-basick"
    } else {
      shifted = "data_key-shiftedru"
      basick = "data_key-basickru"
    }

    for (const key of this.elements.keys) {
      if (key.getAttribute(shifted) == "symbol") {
        if (this.properties.capsLock && this.properties.shift) {
          key.textContent = key.textContent.toLowerCase()
        } else if (!this.properties.capsLock && this.properties.shift) {
          key.textContent = key.textContent.toUpperCase();
        } else if (this.properties.capsLock && !this.properties.shift) {
          key.textContent = key.textContent.toUpperCase();
        } else if (!this.properties.capsLock && !this.properties.shift) {
          key.textContent = key.textContent.toLowerCase()
        }
      } else if (key.getAttribute(shifted) !== "none") {
        if (this.properties.shift) {
          key.textContent = key.getAttribute(shifted)
        } else {
          key.textContent = key.getAttribute(basick)
        }
      }
    }
  },

  _toggleCaps() {
    this.properties.capsLock = !this.properties.capsLock;

    let shifted;
    if (this.properties.language == "en") {
      shifted = "data_key-shifted"
    } else {
      shifted = "data_key-shiftedru"
    }

    for (const key of this.elements.keys) {
      if (key.getAttribute(shifted) == "symbol") {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  _toggleShiftLang() {
    if (this.properties.language == "en") {
      this.properties.language = "ru"
      for (const key of this.elements.keys) {
        if (key.getAttribute("data_key-basickru") !== "none") {
          key.textContent = key.getAttribute("data_key-basickru");
        }
      }
    } else {
      this.properties.language = "en"
      for (const key of this.elements.keys) {
        if (key.getAttribute("data_key-basick") !== "none") {
          key.textContent = key.getAttribute("data_key-basick");
        }
      }
    }
  },
}


let keyboardInner = document.createElement("textarea");
keyboardInner.classList.add("keyboard__input");
keyboardInner.setAttribute("type", "text");

let container = document.createElement("div");
container.classList.add("container");

container.appendChild(keyboardInner);
document.body.appendChild(container);


window.addEventListener("DOMContentLoaded", function () {
  keyboard.init();
})


/** Для определения места курсосра

const textarea = document.querySelector('textarea');
const cursorPosition = textarea.selectionStart;
console.log('Cursor position:', cursorPosition); 

*/