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
    console.log("reset");
  }

  // 小數點按鈕的點擊事件處理器
  const comaClickHandler = () => {
    console.log("coma");
  }

  // 運算符號按鈕的點擊事件處理器
  const signClickHandler = (sign) => {
    console.log("運算符號");
  }

  // 等於按鈕的點擊事件處理器
  const equalClickHandler = () => {
    console.log("equal");
  }

  // 正負號按鈕的點擊事件處理器
  const invertClickHanlder = () => {
    console.log("invert");
  }

  // 百分比按鈕的點擊事件處理器
  const percentClickHanlder = () => {
    console.log("percent");
  }


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
