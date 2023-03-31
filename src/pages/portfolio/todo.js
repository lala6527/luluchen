import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/Button";
import styles from "./todo.module.scss";

export const Todo = () =>{
  const [todos, setTodos] = useState([]);
  const [errorName, setErrorName] = useState(null);
  const [errorDate, setErrorDate] = useState(null);
  const inputNameRef = useRef();
  const inputDateRef = useRef();

  const handleFinish = (id) =>{
    setTodos(todos.map(todo =>{
      if(todo.id !== id) return todo;
      return{
        ...todo,
        state: !todo.state
      }
    }))
  }

  const handleAdd = () =>{
    if(!inputNameRef.current.value){
      setErrorName("請輸入名稱");
    }else{
      setErrorName(null);
    }
    if(!inputDateRef.current.value){
      setErrorDate("請選擇日期");
    }else{
      setErrorDate(null);
    }

    if(!inputDateRef.current.value || !inputNameRef.current.value){
      return;
    }

    setTodos([...todos,
      {
        id: todos.length + 1,
        name: inputNameRef.current.value,
        state: false,
        dueDate: inputDateRef.current.value,
      }])
    inputNameRef.current.value= "";
    inputDateRef.current.value= "";
  }

   useEffect(()=>{
    document.title = "Todo List";
   },[])

   return(

    <div>
      <h6 className={styles.h6}>Todo List</h6>
      <div className={styles.grid}>
      <div className={styles.actions}>
      <label htmlFor="name">
      <span>名稱：</span>
      <input type ="text" id="name" ref={inputNameRef} />
      {errorDate && (<span className={styles.error}>{errorName}</span>)}
      </label>
      <label htmlFor="date">
      <span>預計完成日期：</span>
      <input type="date" id="date" ref={inputDateRef} />
      {errorDate &&(<span className={styles.error}>{errorDate}</span>)}
      </label>
      <Button onClick={handleAdd}>新增</Button>
      </div>

      <div className={styles.todos}>
        {todos.map((item,index ) =>{
          let tag =item.state ? "已完成" : "未完成";
          return(
            <div className={styles.todo} key={`todo-${index}`}>
            <h3>
              <span>{item.id}.{item.name}</span>
              <span className={item.states ? styles.finish :styles.tag}>{tag}</span>
            </h3>
            <p>{item.state ? "完成日期: " : "預計完成日期:"}{item.dueDate}</p>
            {!item.state && (<Button onClick={() =>handleFinish (item.id)}>完成</Button>)}
            </div>
          )
        })}

      </div>
      </div>

    </div>
   )
}