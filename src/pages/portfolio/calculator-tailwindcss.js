import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const btnValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export const CalculatorTailwindCSS = (props) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });
  const removeSpaces = (num) => {
    return num.toString().replace(/\s/g, "");
  };

  const mathOperator = (a, b, sign) => {
    if (sign === "x") {
      return a * b;
    } else if (sign === "/") {
      return a / b;
    } else if (sign === "+") {
      return a + b;
    } else if (sign === "-") {
      return a - b;
    }
  }

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
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      result: 0,
    })
  }
  const comaClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (!calc.num.toString().includes(".")) {
      setCalc({
        ...calc,
        num: calc.num + value
      })
    }
  }

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
    setCalc({
      ...calc,
      sign: sign,
      result: newResult,
      num: 0,
    })
  }

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
    setCalc({
      ...calc,
      result: newResult,
      sign: "",
      num: 0
    })
  }

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? removeSpaces(calc.num) * -1 : 0,
      result: calc.result ? removeSpaces(calc.result) * -1 : 0,
      sign: "",
    })
  }

  const percentClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? removeSpaces(calc.num) / 100 : 0,
      result: calc.result ? removeSpaces(calc.result) / 100 : 0,
      sign: "",
    })
  }

  return (
    <div>
      <div className="w-[480px] rounded-lg bg-white overflow-auto mx-auto shadow">
        <div className="flex justify-between p-3 text-xs">
          <span>9:41</span>
          <img src="/images/status icons.png" className="h-3" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex gap-6 p-3 rounded-full bg-zinc-100">
            <img src="/images/sun icon.png" className="w-6 h-6 " />
            <img src="/images/moon icon.png" className="w-6 h-6 " />
          </div>
        </div>
        <div className="h-[200px] w-full flex items-end justify-end text-black text-5xl p-10">
          {calc.num || calc.result}
        </div>
        <div className="grid grid-cols-4 grid-rows-5 h-[calc(100%)] gap-3 p-5 bg-zinc-50">
          {btnValues.flat().map((btn, i) => {
            const commonBtnClass = "bg-zinc-100 rounded-lg text-white text-xl py-8 hover:bg-gray-300 text-black";
            let additionalClass = "";
            if (btn === "AC" || btn === "+/-" || btn === "%") {
              additionalClass = "text-teal-400";
            } else if (btn === "/" || btn === "x" || btn === "-" || btn === "+" || btn === "=") {
              additionalClass = "text-red-500";
            } else if (btn === 0) {
              additionalClass = "col-span-2";
            }
            const btnClassName = twMerge(commonBtnClass, additionalClass);
            return (
              <Button
                key={`btn-${i}`}
                className={btnClassName}
                onClick={
                  btn === "AC"
                    ? resetClickHandler
                    : btn === "+/-"
                      ? invertClickHandler
                      : btn === "%"
                        ? percentClickHandler
                        : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                          ? signClickHandler
                          : btn === "="
                            ? equalClickHandler
                            : btn === "."
                              ? comaClickHandler
                              : numClickHandler
                }
              >
                {btn}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export const Button = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  );
};
