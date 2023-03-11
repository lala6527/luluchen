import { useState } from "react";
import styles from "./calculator.module.scss";


export const Calculator = (props) => {

  const [calc, setCalc] = useState({
    sign: "", //運算符豪
    num: 0, //數字
    result: 0, //結果
  });

  const btnValues = [
    ["AC", "+/-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  // 移除空格的函式
  const removeSpaces = (num) => {
    return num.toString().replace(/\s/g, "");
  }

  const resetClickHanlder = () => {
    console.log("reset");
  }

  const invertClickHanlder = () => {
    console.log("invert");
  }

  const percentClickHanlder = () => {
    console.log("percent");
  }

  const signClickHandler = (sign) => {
    console.log("運算符號");
  }

  const comaClickHandler = () => {
    console.log("coma");
  }

  // 數字按鈕的點擊事件處理器
  const numClickHandler = (e) => {
    e.preventDefault();
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

  const equalClickHandler = () => {
    console.log("equal");
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
                  btn == "AC"
                    ? resetClickHanlder
                    : btn == "+/-"
                      ? invertClickHanlder
                      : btn == "%"
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
export const Button = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}