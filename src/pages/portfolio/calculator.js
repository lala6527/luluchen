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
        [7, 8, 9,"x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
        ];

    const mathOperator = (a, b, sign) =>{
        if(sign === "x"){
            return a * b;
        }else if (sign === "/"){
            return a / b ;
        }else if (sign === "+"){
            return a + b;            
        }else if (sign === "-"){
            return a - b;            
        }
    };


        const removeSpaces = (num) =>{
            return num.toString().replace(/\s/g, "");
        };

        const resetClickHanlder = () => {
            console.log("reset");
        }
    
        const invertClickHander =() =>{
         setCalc({
            ...calc,
            num: calc.num ?removeSpaces(calc.num)*-1 :0,
            result: calc.result ?removeSpaces(calc.result) *-1 :0,
            sign: "",
         })
        }

        const percentClickHander =() =>{
           setCalc({
                ...calc,
                num: calc.num ?removeSpaces(calc.num) /100 : 0 ,
                result: calc.result ?removeSpaces(calc.result) /100 : 0,
                sign: "",
            })
           }


        const signClickHander =(e) =>{
            const signClickHander = (e) =>{
                const sign = e.target.innerHTML;
                const{ num , result} = calc;
                let newResult;

                if(!num){
                    newResult = result;
                }else if(!result){
                    newResult = num;
                }else{
                    const a = Number(removeSpaces(result));
                    const b = Number(removeSpaces(num));
                    newResult =  mathOperator(a, b, sign);
                }
                setCalc({
                    ...calc,
                    sign:sign,
                    result:newResult,
                    num:0,
                })
            }
            
        }
        const comaClickHander =(e) =>{
            const value = e.target.innerHTML;
            if(!calc.num.toString().includes(".")){
                setCalc({
                    ...calc,
                    num: calc.num + value
                })
            }
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
            if(!calc.sign || !calc.num)return;

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
                                (btn === "/" || btn ==="x"  || btn ==="-"  || btn ==="+"  || btn ==="=")
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
