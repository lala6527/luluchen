import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
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

  const [calc, setCalc] = useState({
    sign: "", // 記錄運算符號
    num: 0, // 紀錄輸入的數字
    result: 0, // 紀錄計算結果
  });

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

  // 小數點按鈕的點擊事件處理器
  const comaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
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

  // equal button
  const equalsClickHandler = () => {
    if (!calc.sign || !calc.num) return;

    const result =
      calc.num === "0" && calc.sign === "/"
        ? "Can't divide with 0"
        : mathOperator(
          Number(removeSpaces(calc.result)),
          Number(removeSpaces(calc.num)),
          calc.sign
        );

    setCalc((prevCalc) => ({
      ...prevCalc,
      result,
      sign: "",
      num: 0,
    }));
  };

  // invert button
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? removeSpaces(calc.num) * -1 : 0,
      result: calc.result ? removeSpaces(calc.result) * -1 : 0,
      sign: "",
    });
  };

  // percent button
  const percentClickHandler = () => {
    // parseFloat() 將字串轉換為以十進位表示的浮點數。parseFloat() 僅接受一個參數。
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let result = calc.result ? parseFloat(removeSpaces(calc.result)) : 0;

    // Math 物件的 Math.pow() 方法用來做指數運算 baseexponent。
    // x /= y	等於 x = x / y
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      result: (result /= Math.pow(100, 1)),
      sign: "",
    });
  };

  // reset button
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      result: 0,
    });
  };

  return (
    <>
      <AppBar position="relative" style={{background: "#ff950c"}}>
        <Toolbar>
          <Typography variant="h6" noWrap >
            Calculator
          </Typography>
        </Toolbar>
      </AppBar>
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
    </>
  );
}

