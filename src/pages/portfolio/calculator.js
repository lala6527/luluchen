import { useState } from "react";
import styles from "./calculator.module.scss";

const Button = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

const btnValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export const Calculator = (props) => {

  const [calc, setCalc] = useState({
    sign: "", //運算符豪
    num: 0, //數字
    result: 0, //結果
  });

  // 移除空格的函式
  const removeSpaces = (num) => {
    return num.toString().replace(/\s/g, "");
  }

  // 數學運算的函式
  const mathOperator = (a, b, sign) => {
    if (sign === "X") {
      return a * b;
    } else if (sign === "/") {
      return a / b;
    } else if (sign === "+") {
      return a + b;
    } else if (sign === "-") {
      return a - b;
    }
  }

  // 數字按鈕的點擊事件處理器
  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
            ? Number(removeSpaces(calc.num + value))
            : (calc.num + value),
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };

  // 重置按鈕的點擊事件處理器
  const resetClickHanlder = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      result: 0,
    })
  }

  // 小數點按鈕的點擊事件處理器
  const comaClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (!calc.num.toString().includes(".")) {
      setCalc({
        ...calc,
        num: calc.num + value
      })
    }
  }

  // 運算符號按鈕的點擊事件處理器
  const signClickHandler = (e) => {
    const sign = e.target.innerHTML;
    const { num, result } = calc;
    let newResult;

    if (!num) {
      newResult = result;
    } else if (!result) {
      newResult = num;
    } else {
      const a = Number(removeSpaces(result));
      const b = Number(removeSpaces(num));
      newResult = mathOperator(a, b, sign);
    }
    // 更新狀態
    setCalc({
      ...calc,
      sign: sign,
      result: newResult,
      num: 0,
    })
  }

  // 等於按鈕的點擊事件處理器
  const equalClickHandler = () => {
    if (!calc.sign || !calc.num) return;

    const newResult =
      calc.num === "0" && calc.sign === "/"
        ? "Can't divide by 0"
        : mathOperator(
          Number(removeSpaces(calc.result)),
          Number(removeSpaces(calc.num)),
          calc.sign
        );
    // 更新狀態
    setCalc({
      ...calc,
      result: newResult,
      sign: "",
      num: 0
    })
  }

  // 正負號按鈕的點擊事件處理器
  const invertClickHanlder = () => {
    setCalc({
      ...calc,
      num: calc.num ? removeSpaces(calc.num) * -1 : 0,
      result: calc.result ? removeSpaces(calc.result) * -1 : 0,
      sign: "",
    })
    
  }

  // 百分比按鈕的點擊事件處理器
  const percentClickHanlder = () => {
    setCalc({
      ...calc,
      num: calc.num ? removeSpaces(calc.num) / 100 : 0,
      result: calc.result ? removeSpaces(calc.result) / 100 : 0,
      sign: "",
    })
    
  }

  const number = "123test";
  console.log(number % 1 );
  console.log(isNaN(number));

  return (
    <div className="calculator">
      <h1 className={styles.h1}>Calculator</h1>
      <div className={styles.wrapper}>
        <div className={styles.screen}>{calc.num || calc.result}</div>
        <div className={styles.buttonBox}>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={`btn-${i}`}
                className={
                  (btn === "/" || btn === "X" || btn === "-" || btn === "+" || btn === "=")
                    ? styles.sign
                    : (btn === "AC" || btn === "+/-" || btn === "%")
                      ? styles.func
                      : (btn === 0)
                        ? styles.zero
                        : styles.btn
                }
                onClick={
                  btn === "AC"
                    ? resetClickHanlder
                    : btn === "+/-"
                      ? invertClickHanlder
                      : btn === "%"
                        ? percentClickHanlder
                        : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                          ? signClickHandler
                          : btn === "."
                            ? comaClickHandler
                            : btn === "="
                              ? equalClickHandler
                              : numClickHandler
                }
              >{btn}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
