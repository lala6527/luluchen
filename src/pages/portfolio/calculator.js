import React, { useState } from "react";
import styles from "./calculator.module.scss";



export const Calculator = (props) =>{
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        result: 0,
    });

    const btnValues=[
        ["AC", "+/-", "%", "/"],
        [7, 8, 9,"X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
        ];

        const removeSpaces = (num) =>{
            return num.toString().replace(/\s/g, "");
        };
        const resetClickHanlder = () => {
            console.log("reset");
        }
    
        const invertClickHander =() =>{
            console.log("invert");
        }
        const percentClickHander =() =>{
            console.log("percent");
        }
        const signClickHander =() =>{
            console.log("運算符號");
        }
        const comaClickHander =() =>{
            console.log("coma");
        }
       
        const numClickHander =(e) =>{
            e.preventDefault();
            const value = e.target.innerHTML;
            if(removeSpaces(calc.num).length < 16){
                setCalc({
                    ...calc,
                    num:
                    removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
                    ? Number(removeSpaces(calc.num + value))
                    :(calc.num + value),
                    result: !calc.sign ? 0 :calc.result,
                });
            }
        };

        const equalClickHandler = () =>{
            console.log("equal");
        }
        return(
        <div className="calculator">
            <h1 className={styles.h1}>Calculator</h1>
            <div className={styles.wrapper}>
                <div className={styles.screen}>{calc.num || calc.result}</div>
                <div className={styles.buttonBox}>
                    {btnValues.flat().map((btn,i) => {
                        return(
                            <Button
                            key={`btn-${i}`}
                            className={
                                (btn === "/" || btn ==="X"  || btn ==="-"  || btn ==="+"  || btn ==="=")
                            ? styles.sign
                            :(btn==="AC"|| btn === "+/-" || btn === "%")
                            ?styles.func
                            :(btn === 0)
                            ?styles.zero
                            :styles.btn
                            }
                            onClick={
                                btn == "AC"
                                ?resetClickHanlder
                                :btn == "+/-"
                                ?invertClickHander
                                :btn =="%"
                                ?percentClickHander
                                :btn === "/" || btn === "X" ||btn === "-"||btn === "+"
                                ?signClickHander
                                :btn === "="
                                ?equalClickHandler
                                :numClickHander
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
    export const Button =({className, onClick, children})=>{
        return(
            <button className={className}onClick={onClick}>{children}</button>
        );
    };
