const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "c", "ENTER"];
const operators = ["add", "sub", "mul", "div"];

const defaultState = {
  currentInput: "",
  total: 0,
  operator: null,
}

const generateMath = () => {
  // declare state
  let state = { ...defaultState };

  // draw calculator
  const math = document.createElement("div")
  math.id = "math"
  math.classList = "math"
  math.style.border = `5px solid ${apps.math.color}`

  // draw lcd display
  const lcd = document.createElement("span")
  lcd.id = "lcd"
  lcd.className = "math__display"
  lcd.innerText = state.total;

  math.append(lcd)

  // draw keypad
  const keypad = document.createElement("div");
  keypad.className = "math__keypad"
  math.append(keypad)

  // draw numbers buttons
  numbers.forEach(num => {
    const button = document.createElement("button")
    button.className = "keypad__button"
    button.innerText = num;
    if (num === "c") button.style.color = apps.math.color;
    button.onclick = () => handleNumInput(num);
    keypad.append(button)
  })

  
  // handle operation input
  const handleOperationInput = operationInput => {
    if (state.operator) {
      calculate();
      state.operator = operationInput
    } else {
      state.currentInput = "";
      state.operator = operationInput
    }
    console.log(state);
  }

  // draw operators buttons
  operators.forEach(operator => {
    const button = document.createElement("button")
    button.innerText = operator;
    button.onclick = () => handleOperationInput(operator);
    options.append(button)
  })

  // handle inputs
  const handleNumInput = numInput => {
    if (numInput === ".") return;

    if (numInput === "c") {
      state = { ...defaultState };
      lcd.innerText = 0;
    }

    state.currentInput += numInput;
    lcd.innerText = state.currentInput;
  }

  // handle calculations
  const calculate = () => {
    const currentValue = parseFloat(state.currentInput);
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
    }

    state.currentInput = "";
    lcd.innerText = state.total;
  }


  // enter = 13
  // 0 = 48
  // 1 = 49
  // ... 9 = 57
  // event listener on document, calls input functions
  // input function for each number, operator, enter

  // handles operations
  // if total and operator, start adding to operatorNumber
  // if total, operator, operatorNumber, enter => perform operations, remove operator, remove operatorNumber
  // if total, operator, enter => return total, remove operator
  // if total, enter => return total
  // if total, num/dec input =>
  // if total starts with 0 and no decimal, remove it
  // if not decimal and input is decimal, add it
  // else, add to total
  // if total, operator, num/dec input =>
  // if total starts with 0 and no decimal, remove it
  // if not decimal and input is decimal, add it
  // else, add to total

  display.append(math)
};
