import styles from "./calculator.module.scss";



export const Calculator = (props) =>{
    
    const btnValues=[
        ["AC", "+/-", "%", "/"],
        ["7", "8", "9","x"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
        ];
        console.log(btnValues.flat());
        return(
        <div className="calculator">
            <h1 className={styles.h1}>Calculator</h1>
            <div className={styles.wrapper}>
                <div className={styles.screen}>123</div>
                <div className={styles.buttonBox}>
                    {btnValues.flat().map((btn,i) => {
                        return(
                            <Button className={styles.btn}>{btn}</Button>

                        )
                    })}
                </div>

            </div>
        </div>

    )
    }
    export const Button =({className, children})=>{
        return(
            <button className={className}>{children}</button>
        )
    }