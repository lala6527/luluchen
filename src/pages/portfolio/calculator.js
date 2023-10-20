import React, { useState } from "react";
import {twMerge} from "tailwind-merge";



    const btnValues=[
        ["AC", "+/-", "%", "/"],
        [7, 8, 9,"x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
        ];



    export const Calculator = (props) =>{
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        result: 0,
    });
     const[darkMode,setDarkMode]=useState(false);


    const removeSpaces = (num) =>{
        return num.toString().replace(/\s/g, "");
    };

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
    }

   const numClickHandler =(e) =>{
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
            if(!calc.num.toString().includes(".")){
                setCalc({
                    ...calc,
                    num: calc.num + value
                })
            }
          }

        const signClickHandler =(e) =>{
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
                    sign: sign,
                    result: newResult,
                    num:0,
                })
        }

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

        const invertClickHandler =() =>{
         setCalc({
            ...calc,
            num: calc.num ?removeSpaces(calc.num)*-1 :0,
            result: calc.result ?removeSpaces(calc.result) *-1 :0,
            sign: "",
         })
        }

        const percentClickHandler =() =>{
           setCalc({
                ...calc,
                num: calc.num ?removeSpaces(calc.num) /100 : 0 ,
                result: calc.result ?removeSpaces(calc.result) /100 : 0,
                sign: "",
            })
           }

   
        return(
        <div className="m-6">    
        <div className={`sm:max-w-screen-sm rounded-lg mx-auto overflow-hidden shadow 
        ${darkMode ? "bg-black text-white" : " bg-white text-black"}`}>
        <div className="flex justify-center p-3 text-xs">
            <span>9:41</span>
            {darkMode ? (
                <img src="/images/status_dark.png" className="h-3"/>
            ):(
                <img src="/images/status.png" className="h-3"/>
            )}
            </div>
            <div className="flex justify-center">
                <div className={`inline-flex gap-6 p-3 rounded-full cursor-pointer ${darkMode} ?"bg-zinc-900 :"bg-zinc-100"`}>
                    {darkMode ?(
                    <img src="/images/sun_dark.png" className="w-6 h-6 " onClick={() => setDarkMode(false)}/>  
                    ):(
                    <img src="/images/sun.png" className="w-6 h-6 " onClick={() => setDarkMode(false)}/>
                    )}
                    <img src="/images/moon.png" className="w-6 h-6 " onClick={() => setDarkMode(true)}/>
                </div>
            </div>
            <div className="h-full w-full p-10 flex items-end justify-end text-4xl font-bold">{calc.num || calc.result}</div>
                <div className={`grid grid-cols-4 grid-row-5 gap-3 h-[clac(100%)] p-5 ${darkMode} ?"bg-zinc-900" :"bg-zinc-50" `}>
                    {btnValues.flat().map((btn,i) => {
                        const commonBtnClass = `rounded-lg text-xl py-8 ${darkMode ?"text-white bg-zinc-900 hover:bg-zinc-700" 
                        :"text-black bg-zinc-100 hover:bg-gray-300"} `;
                            let additionalClass ="";
                            if(btn === "AC" || btn === "+/-" || btn === "%"){
                                additionalClass="text-teal-400";
                            }else if (btn === "/" || btn === "x" || btn==="-" || btn === "+" || btn === "="){
                                additionalClass = "text-red-500";
                            }else if(btn === 0){
                                additionalClass = "col-span-2";
                            }

                            const btnClassName = twMerge(commonBtnClass, additionalClass);

                        return(
                            <Button
                            key={`btn-${i}`}
                            className={btnClassName}

                            onClick={
                                btn === "AC"
                                ? resetClickHandler
                                    : btn === "+/-"
                                    ? invertClickHandler
                                        : btn =="%"
                                        ? percentClickHandler
                                            : btn === "/" || btn === "x" ||btn === "-"||btn === "+"
                                            ? signClickHandler
                                                : btn === "="
                                                ? equalClickHandler
                                                :btn === "."
                                                    ?comaClickHandler
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
    export const Button =({className, onClick, children})=>{
        return(
            <button className={className}onClick={onClick}>{children}</button>
        );
    };
