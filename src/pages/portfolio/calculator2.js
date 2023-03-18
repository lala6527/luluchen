import React, { useState } from "react";
import styles from './calculator.module.scss';

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

const btnValues = [
  ["AC", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

export const Calculator2 = (props) => {

  const [calc, setCalc] = useState({
    sign: "", // 記錄運算符號
    num: 0, // 紀錄輸入的數字
    result: 0, // 紀錄計算結果
  });

  // 移除空格的函式
  const removeSpaces = (num) => {
    return num.toString().replace(/\s/g, "");
  }

  // 數學運算的函式
  const mathOperator = (a, b, sign) => {
    if (sign === "+") {
      return a + b;
    } else if (sign === "-") {
      return a - b;
    } else if (sign === "X") {
      return a * b;
    } else {
      return a / b;
    }
  };

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
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      result: 0,
    });
  };

  // 小數點按鈕的點擊事件處理器
  const comaClickHandler = (e) => {
  const value = e.target.innerHTML;

  if (!calc.num.toString().includes(".")) {
    setCalc({
      ...calc,
      num: calc.num + value,
    });
  }
};

  // 運算符號按鈕的點擊事件處理器
  const signClickHandler = (e) => {
    const sign = e.target.innerHTML;
    const { num, result } = calc;

    let newResult;
    if (!num) {
      // 若目前沒有輸入數字，則維持上一個結果
      newResult = result;
    } else if (!result) {
      // 若目前沒有計算結果，則以目前輸入的數字作為計算結果
      newResult = num;
    } else {
      // 若目前有輸入數字及計算結果，則進行數學運算
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
    });
  };

  // 等於按鈕的點擊事件處理器
  const equalsClickHandler = () => {
    if (!calc.sign || !calc.num) return;

    const newResult =
      calc.num === "0" && calc.sign === "/"
        ? "Can't divide with 0"
        : mathOperator(
          Number(removeSpaces(calc.result)),
          Number(removeSpaces(calc.num)),
          calc.sign
        );

    setCalc({
      ...calc,
      result: newResult,
      sign: "",
      num: 0,
    });
  };

  // 正負號按鈕的點擊事件處理器
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? removeSpaces(calc.num) * -1 : 0,
      result: calc.result ? removeSpaces(calc.result) * -1 : 0,
      sign: "",
    });
  };

  // 百分比按鈕的點擊事件處理器
  const percentClickHandler = () => {
    // 從計算機的狀態中解構出num和result，如果不存在就默認值為0
    const { num = 0, result = 0 } = calc;
    
    setCalc({
      ...calc,
      num: num / 100,
      result: result / 100,
      sign: "",
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.screen}>{calc.num || calc.result}</div>
      <div className={styles.buttonBox}>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={
                (btn === "=" || btn === "+" || btn === "-" || btn === "X" || btn === "/")
                  ? styles.sign
                  : (btn === "AC" || btn === "+-" || btn === "%")
                    ? styles.func
                    : btn === 0
                      ? styles.zero
                      : ""
              }
              value={btn}
              onClick={
                btn === "AC"
                  ? resetClickHandler
                  : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                      ? percentClickHandler
                      : btn === "="
                        ? equalsClickHandler
                        : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                          ? signClickHandler
                          : btn === "."
                            ? comaClickHandler
                            : numClickHandler
              }
            />
          );
        })}
      </div>
    </div>
  );
}

