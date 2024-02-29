import React, {useState} from "react";

function Calculator() {

    const [display, setDisplay] = useState("0");
    const [sumCount, setSumCount] = useState(0);
    const [iterator, setIterator] = useState(-1);
    const [currentNumber, setCurrentNumber] = useState([]);
    const [operator, setOperator] = useState([]);

    const handleDisplay = (value) => {
        if (display == "0") {
            setDisplay(value);
            return;
        }
        setDisplay(display + value);
    }

    const sum = () => {
        setSumCount(sumCount + parseFloat(display));
        setDisplay("0");
    }

    const equal = () => {
        sum()
        setDisplay(sumCount.toString());
    }

    const resetCalculator = () => {
        setDisplay("0");
    }

    const handleCalc = (value, op) => {
        setCurrentNumber( [...currentNumber, value]);
        setIterator(iterator + 1);
        setOperator([...operator, op]);
        if (op == "4") {
            sumCount.toString();
        }
        else {
            setDisplay("0");
        }
        if (iterator >= 0) {
            if (op == "1") {
                setSumCount(parseFloat(currentNumber[iterator]) + parseFloat(currentNumber[iterator - 1]));
                console.log(sumCount);
            }
        }

    }

    return (
      <>
          <div style={{textAlign: "center", marginTop: 20}}>
              <p>{currentNumber[iterator]}</p>
                <h1>{display}</h1>
              <button onClick={() => resetCalculator()} className="reset-button">C</button>
              <div>
                  <button onClick={() => handleDisplay("7")} className="calculator-button">7</button>
                  <button onClick={() => handleDisplay("8")} className="calculator-button">8</button>
                  <button onClick={() => handleDisplay("9")} className="calculator-button">9</button>
                  <button className="calculator-button">÷</button>
              </div>
              <div>
                  <button onClick={() => handleDisplay("6")} className="calculator-button">6</button>
                  <button onClick={() => handleDisplay("5")} className="calculator-button">5</button>
                  <button onClick={() => handleDisplay("4")} className="calculator-button">4</button>
                  <button className="calculator-button">×</button>
              </div>
              <div>
                  <button onClick={() => handleDisplay("3")} className="calculator-button">3</button>
                  <button onClick={() => handleDisplay("2")} className="calculator-button">2</button>
                  <button onClick={() => handleDisplay("1")} className="calculator-button">1</button>
                  <button onClick={() => handleCalc(display, "1")} className="calculator-button">+</button>
              </div>
              <div>
                  <button className="calculator-button">,</button>
                  <button onClick={() => handleDisplay("0")} className="calculator-button">0</button>
                  <button onClick={() => handleCalc(display, "4")} className="calculator-button">=</button>
                  <button className="calculator-button">-</button>
              </div>
          </div>
      </>
    );
}

export default Calculator;