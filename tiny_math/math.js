const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "c", "ENTER"];
const operators = ["add", "sub", "mul", "div", "mod", "exp"];

const defaultState = {
  currentInput: "",
  total: 0,
  operator: null,
  decimal: false,
};

const generateMath = () => {
  // declare state
  let state = { ...defaultState };

  // draw calculator
  const math = document.createElement("div");
  math.id = "math";
  math.classList = "math";
  math.style.border = `5px solid ${apps.math.color}`;

  // draw lcd display
  const lcd = document.createElement("span");
  lcd.id = "lcd";
  lcd.className = "math__display";
  lcd.innerText = state.total;

  math.append(lcd);

  // draw keypad
  const keypad = document.createElement("div");
  keypad.className = "math__keypad";
  math.append(keypad);

  // handle operation input
  const handleOperationInput = (operationInput) => {
    if (state.operator) {
      calculate();
      state.operator = operationInput;
    } else if (state.total) {
      state.operator = operationInput;
    } else {
      state.total = parseFloat(state.currentInput);
      state.currentInput = "";
      state.operator = operationInput;
    }
  };

  // draw operators buttons
  operators.forEach((operator) => {
    const button = document.createElement("button");
    button.innerText = operator;
    button.onclick = () => handleOperationInput(operator);
    options.append(button);
  });

  // handle inputs
  const handleNumInput = (numInput) => {
    if (numInput === ".") {
      if (state.decimal) return;
      else state.decimal = true;
    };

    if (numInput === "c") {
      state = { ...defaultState };
      return (lcd.innerText = 0);
    }

    if (numInput === "ENTER") {
      return calculate();
    }

    state.currentInput += numInput;
    lcd.innerText = state.currentInput;
  };

  // draw numbers buttons
  numbers.forEach((num) => {
    const button = document.createElement("button");
    button.className = "keypad__button";
    button.innerText = num;
    if (num === "c") button.style.color = apps.math.color;
    button.onclick = () => handleNumInput(num);
    keypad.append(button);
  });

  // handle calculations
  const calculate = () => {
    let currentValue = parseFloat(state.currentInput);
    switch (state.operator) {
      case "add":
        state.total += currentValue;
        break;
      case "sub":
        state.total -= currentValue;
        break;
      case "mul":
        state.total *= currentValue;
        break;
      case "div":
        state.total /= currentValue;
        break;
      case "mod":
        state.total %= currentValue;
        break;
      case "exp":
        state.total **= currentValue;
        break;
    }
    state.currentInput = "";
    state.operator = "";
    lcd.innerText = state.total;
  };

  display.append(math);
};
