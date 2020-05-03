class MyMarker {
  constructor(color, valume) {
    this._color = color;
    this._valume = valume;
  }

  printText(str) {
    let numberSymbol = this._valume / 0.5;
    let replaced = str.split(" ").join("_").split("");
    let strResult = "";

    if (numberSymbol >= replaced.length) {
      document.write(`<p style="color: ${this._color}">${str}</p>`);
    } else {
      for (let i = 0; i <= replaced.length; i++) {
        if (replaced[i] !== "_") {
          numberSymbol -= 1;
        }
        strResult += replaced[i];
        if (numberSymbol === 0) {
          break;
        }
      }
      document.write(
        `<p style="color: ${this._color}">${strResult.split("_").join(" ")}</p>`
      );
    }
  }
}

let print = new MyMarker("red", 5);

print.printText(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
);

class SpareMarker extends MyMarker {
  constructor(color, valume) {
    super(color, valume);
  }
  getInk(ink) {
    this._valume = ink;
  }
}

let spare = new SpareMarker("green", 0);

spare.getInk(100); // заправка маркера

spare.printText(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
);

